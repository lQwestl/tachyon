let lastUserScrollTime = 0;
let isProgrammaticScroll = false;
let userScrollListenersAttached = false;
let activeDocLocks = 0;
const containerLockCounts = new WeakMap<HTMLElement, number>();

export function ensureUserScrollTracking() {
  if (userScrollListenersAttached || typeof window === 'undefined') {
    return;
  }
  userScrollListenersAttached = true;

  const onUserInteraction = (e: Event) => {
    if (e.type === 'scroll' && isProgrammaticScroll) {
      return;
    }
    lastUserScrollTime = Date.now();
  };

  window.addEventListener('wheel', onUserInteraction, {
    passive: true,
    capture: true,
  });
  window.addEventListener('touchmove', onUserInteraction, {
    passive: true,
    capture: true,
  });
  window.addEventListener('scroll', onUserInteraction, {
    passive: true,
    capture: true,
  });
  window.addEventListener(
    'keydown',
    (e: KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'PageUp',
          'PageDown',
          'Home',
          'End',
          ' ',
        ].includes(e.key)
      ) {
        lastUserScrollTime = Date.now();
      }
    },
    { passive: true, capture: true },
  );
}

if (typeof window !== 'undefined') {
  ensureUserScrollTracking();
}

export function _resetUserScrollTrackingForTest() {
  userScrollListenersAttached = false;
  lastUserScrollTime = 0;
  isProgrammaticScroll = false;
  activeDocLocks = 0;
}

export function isUserActivelyScrolling(thresholdMs = 800): boolean {
  return Date.now() - lastUserScrollTime < thresholdMs;
}

const scheduleFrame = (cb: () => void) => {
  if (typeof requestAnimationFrame !== 'undefined') {
    return requestAnimationFrame(cb);
  }
  return setTimeout(cb, 16);
};

export function preserveScrollForPage(
  renderFn: () => void,
  targetContainer?: HTMLElement | null,
) {
  ensureUserScrollTracking();

  const scrollY =
    typeof window !== 'undefined'
      ? (window.scrollY ??
        window.pageYOffset ??
        document.documentElement?.scrollTop ??
        0)
      : 0;

  const root =
    typeof document !== 'undefined' ? document.documentElement : null;
  const prevDocHeight = root ? root.scrollHeight : 0;
  if (root && prevDocHeight > 0) {
    activeDocLocks += 1;
    root.style.minHeight = `${prevDocHeight}px`;
  }

  if (targetContainer) {
    const currentCount = containerLockCounts.get(targetContainer) || 0;
    containerLockCounts.set(targetContainer, currentCount + 1);
    const containerHeight = targetContainer.offsetHeight || 0;
    if (containerHeight > 0) {
      targetContainer.style.minHeight = `${containerHeight}px`;
    }
  }

  renderFn();

  scheduleFrame(() => {
    if (targetContainer) {
      const remainingCount =
        (containerLockCounts.get(targetContainer) || 1) - 1;
      if (remainingCount <= 0) {
        containerLockCounts.delete(targetContainer);
        targetContainer.style.minHeight = '';
      } else {
        containerLockCounts.set(targetContainer, remainingCount);
      }
    }

    if (root) {
      activeDocLocks = Math.max(0, activeDocLocks - 1);
      if (activeDocLocks === 0) {
        root.style.minHeight = '';
      }
    }

    if (typeof window === 'undefined') {
      return;
    }

    // If the user has scrolled or interacted recently, do not fight the user's scroll gesture.
    if (isUserActivelyScrolling()) {
      return;
    }

    const currentScrollY =
      window.scrollY ??
      window.pageYOffset ??
      document.documentElement?.scrollTop ??
      0;

    // Only restore if layout shift caused the scroll position to jump
    if (Math.abs(currentScrollY - scrollY) > 2) {
      isProgrammaticScroll = true;
      window.scrollTo({ top: scrollY });
      scheduleFrame(() => {
        isProgrammaticScroll = false;
      });
    }
  });
}
