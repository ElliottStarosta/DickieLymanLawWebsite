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

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.practice-areas-btn');
    button.classList.add('visible'); 
});


let scrollPosition = 0;
let ticking = false;

function updateParallax() {
    // Applying the parallax effect to the hero background
    document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';

    // Applying parallax effect to the .container content
    document.querySelector('.container').style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';

    // Applying parallax effect to the .container img
    document.querySelector('.container img').style.transform = 'translateY(' + scrollPosition * 0.-3 + 'px)';

    // Change z-index of .hero-text based on scroll position
    let textElement = document.querySelector('.hero-text');
    if (scrollPosition > 100) {
        textElement.style.zIndex = -1;
    } else {
        textElement.style.zIndex = ''; // Reset to default if not scrolled enough
    }

    ticking = false;
}

window.addEventListener('scroll', function() {
    scrollPosition = window.pageYOffset;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateParallax();
        });
        ticking = true;
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const exploreMoreBtns = document.querySelectorAll('.explore-more-btn');
  let expandedCard = null;

  exploreMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.parentElement;

      if (expandedCard && expandedCard !== card) {
        collapseCard(expandedCard);
      }

      if (card.classList.contains('expanded')) {
        collapseCard(card);
      } else {
        expandCard(card);
        expandedCard = card;
      }
    });
  });

  function expandCard(card) {
    card.classList.add('expanded');
    const shortDescription = card.querySelector('.short-description');
    const fullDescription = card.querySelector('.full-description');
    const exploreBtn = card.querySelector('.explore-more-btn');

    // Change button text to "Explore less"
    exploreBtn.textContent = 'Explore less';

    // Hide short description and show full description
    shortDescription.style.display = 'none';
    fullDescription.style.display = 'block';
    setTimeout(() => {
      fullDescription.style.opacity = '1';
    }, 10); // Slight delay to trigger transition
  }

  function collapseCard(card) {
    card.classList.remove('expanded');
    const shortDescription = card.querySelector('.short-description');
    const fullDescription = card.querySelector('.full-description');
    const exploreBtn = card.querySelector('.explore-more-btn');

    // Change button text to "Explore more"
    exploreBtn.textContent = 'Explore more';

    // Hide full description and show short description
    fullDescription.style.opacity = '0';
    setTimeout(() => {
      fullDescription.style.display = 'none';
      shortDescription.style.display = 'block';
    }, 500);
  }
});
document.addEventListener('DOMContentLoaded', (event) => {
  const textarea = document.querySelector('.contact-left textarea');

  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = Math.min(textarea.scrollHeight, 250) + 'px'; // Set the height based on content, but cap at 500px
  });
});
