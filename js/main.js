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
    css.innerHTML = `
        .typewrite > .wrap {
          border-right: 0.08em solid var(--secondary-color);
        }
        .typewrite > .wrap.blink {
          animation: blink 2s infinite;
          animation-delay: 1s;
        }
        @keyframes blink {
          0% {
          border-right: 0.08em solid var(--secondary-color);
        }
        20% {
          border-right: 0.08em solid var(--secondary-color);
        }
        40% {
          border-right: 0.08em solid var(--accent-color);
        }
        60% {
          border-right: 0.08em solid var(--accent-color);
        }
        80% {
          border-right: 0.08em solid var(--secondary-color);
        }
        100% {
          border-right: 0.08em solid var(--secondary-color);
        }
        }
      `;
    document.body.appendChild(css);
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




import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const exploreMoreBtns = document.querySelectorAll('.explore-more-btn');
    let expandedCard = null;
    let expandedCardId = null;


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
          expandedCardId = card.getAttribute('id');
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
      lenis.stop();
      $(document).ready(function(){lenis.start();})
      

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
        
        setTimeout(() => {
            lenis.scrollTo(`#${expandedCardId}`);
        }, 10);
    
        
      }, 500);
    }


});

function changeTextOnResize() {
  const heroTextContent = document.querySelector('.hero-text-content');
  const pElement = document.getElementById('hero-text-p');

  // Check if the logo image already exists
  let logoElement = document.getElementById('hero-text-logo');

  // Update the paragraph text and logo image based on the window width
  if (window.innerWidth <= 700) {
    if (!logoElement) {

      // Create and insert the logo image if it doesn't exist
      logoElement = document.createElement('img');
      logoElement.setAttribute('data-aos', 'fade-down');
      logoElement.id = 'hero-text-logo';
      logoElement.src = '/assets/logo.png'; // Replace with the path to your logo image
      logoElement.alt = 'Dickie & Lyman Logo';
      heroTextContent.insertBefore(logoElement, pElement);

      logoElement.style.width = '450px';
      logoElement.style.margin = '20px 0';
    }
    if (window.innerWidth <= 330) {
      logoElement.style.width = '205px';
    } else if (window.innerWidth <= 350) {
      logoElement.style.width = '225px';
    } else if (window.innerWidth <= 410) {
      logoElement.style.width = '235px';
    } else if (window.innerWidth <= 480) {
      logoElement.style.width = '300px';
    } else if (window.innerWidth <= 570) {
      logoElement.style.width = '375px';
    }
    

    pElement.textContent = '';
  } else {
    if (logoElement) {
      // Remove the logo image if it exists
      logoElement.remove();
    }
    pElement.textContent = 'We are committed to providing the highest standards of legal service as a trusted Limited Liability Partnership (LLP). The information on this site is designed to inform you about our comprehensive services, our firm’s ethos, and the diverse areas of law in which we specialize.';
  }
}

// Call the function initially to set the correct text on page load
changeTextOnResize();

// Add an event listener to call the function on window resize
window.addEventListener('resize', changeTextOnResize);
