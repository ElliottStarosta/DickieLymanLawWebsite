import { showMenu } from './navbar.js';
import { TxtType } from './typewriter.js';
import './header.js';
import './smooth-scroll.js';
import './split-type.js';
import './lenis.js';
import './read-more.js';
// import './contact-button.js';

// Example usage: Initialize the showMenu function
showMenu('nav-toggle', 'nav-menu');

// Typewriter effect for hero section
window.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    // Inject CSS for typewriter effect
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--secondary-color)}";
    document.body.appendChild(css);
});
