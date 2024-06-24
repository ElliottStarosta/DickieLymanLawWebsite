import { showMenu } from './navbar.js';
import { TxtType } from './typewriter.js';
import './header.js';
import './smooth-scroll.js';
import './split-type.js';
import './lenis.js';
import './read-more.js';
// import './contact-button.js';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 2000,
    once: false,
    mirror: false,
    debounceDelay: 2000,
});


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


window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    // Applying the parallax effect to the hero background
    document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';

    // Applying parallax effect to the .container content
    document.querySelector('.container').style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';

    document.querySelector('.container img').style.transform = 'translateY(' + scrollPosition * 0.-3 + 'px)';

    // Change z-index of .hero-text based on scroll position
    let textElement = document.querySelector('.hero-text');
    if (scrollPosition > 100) {
        textElement.style.zIndex = -1;
    } else {
        textElement.style.zIndex = ''; // Reset to default if not scrolled enough
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.practice-areas-btn');
    button.classList.add('visible'); // Add the 'visible' class when the DOM content is loaded
});
