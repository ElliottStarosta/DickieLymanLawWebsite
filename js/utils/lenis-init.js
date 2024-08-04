import Lenis from 'lenis';

export const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

export function initLenis() {
    $(document).ready(() => {
        lenis.start();
        handleInitialHash();
    });
    requestAnimationFrame(raf);
}

export function startLenis() {
    lenis.start();
}

function handleInitialHash() {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            scrollToAnchor(hash);
        }, 100);
    }
}

function scrollToAnchor(anchor) {
    
    lenis.scrollTo(anchor);    
}
