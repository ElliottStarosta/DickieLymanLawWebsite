import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

// Function to wrap text content with <span> for animation and word wrapping
function wrapTextForAnimation(element) {
    const text = element.textContent.trim();
    const words = text.split(' ');

    // Wrap each word with <span> for animation purposes
    const wrappedText = words.map(word => `<span>${word}</span>`).join(' ');

    // Set the wrapped text as HTML content
    element.innerHTML = wrappedText;
}

// Initialize SplitType and GSAP animations
splitTypes.forEach(char => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    // Wrap text with <span> elements
    wrapTextForAnimation(char);

    // SplitType initialization for animation
    const text = new SplitType(char, { types: 'chars' });

    // GSAP animation
    gsap.fromTo(text.chars,
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 75%',
                end: 'top 30%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        }
    );
});

// Lenis scroll handling (assuming Lenis is used for scrolling, adjust as needed)
const lenis = new Lenis();

// RAF (RequestAnimationFrame) loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
