import Lenis from 'lenis';

const lenis = new Lenis();



function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function() {
        lenis.start();
    });
});
