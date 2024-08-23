import { showMenu } from './components/navbar.js';
import { TxtType } from './components/typewriter.js';
import './components/header.js';
import './components/smooth-scroll.js';
import './components/split-type.js';
import { lenis, initLenis, startLenis } from './utils/lenis-init.js'; // Correct import path
import './components/read-more.js';
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
    duration: 2000,
    once: true,
    debounceDelay: 2000,
});

initLenis();

// Set the default hash on window load
window.onload = function () {
    const toggle = document.getElementById("nav-toggle");

    if (window.location.hash !== "#home") {
        window.location.replace(window.location.pathname + "#home");
        setTimeout(() => {
            lenis.scrollTo('#home');
        }, 100);
    }

    setTimeout(() => {
        toggle.className = 'nav__toggle';
        console.log("removed");
    }, 1000);
};

// Initialize the showMenu function
showMenu('nav-toggle', 'nav-menu');

// Typewriter effect for the hero section
window.addEventListener('DOMContentLoaded', () => {
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
            0% { border-right: 0.08em solid var(--secondary-color); }
            20% { border-right: 0.08em solid var(--secondary-color); }
            40% { border-right: 0.08em solid var(--accent-color); }
            60% { border-right: 0.08em solid var(--accent-color); }
            80% { border-right: 0.08em solid var(--secondary-color); }
            100% { border-right: 0.08em solid var(--secondary-color); }
        }
    `;
    document.body.appendChild(css);
});

// Initialize Lenis for smooth scrolling
document.addEventListener('DOMContentLoaded', initLenis);

let scrollPosition = 0;
let ticking = false;

function updateParallax() {
    // Only apply parallax effect on screens wider than 768px
    if (window.innerWidth > 700) {

        document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';

        document.querySelector('.container').style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';

        document.querySelector('.container img').style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';

        const textElement = document.querySelector('.hero-text');
        if (scrollPosition > 100) {
            textElement.style.zIndex = -1;
        } else {
            textElement.style.zIndex = ''; 
        }
    } else {
        document.querySelector('.hero').style.backgroundPositionY = '';
        document.querySelector('.container').style.transform = '';
        document.querySelector('.container img').style.transform = '';
    }

    ticking = false;
}

window.addEventListener('scroll', () => {
    scrollPosition = window.pageYOffset;
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});



document.addEventListener('DOMContentLoaded', () => {

    const exploreMoreBtns = document.querySelectorAll('.explore-more-btn');
    let expandedCard = null;
    let expandedCardId = null;

    exploreMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
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

        // Ensure lenis is initialized or available in the global scope
        if (typeof lenis !== 'undefined') {
            lenis.stop();
            $(document).ready(() => {
                lenis.start();
            });
        }

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

            if (expandedCardId) {
                // Use template literals for the ID
                lenis.scrollTo(`#${expandedCardId}`);
            }
        }, 500); // Match this delay with the transition duration if needed
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
            logoElement.src = '/assets/logo-C1dhDkm5.png'; // path for the asset on the live web server
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


document.addEventListener("DOMContentLoaded", function () {
    // Create a new IntersectionObserver
    let observer = new IntersectionObserver((entries, observer) => {
        // Loop through the entries (observed elements)
        entries.forEach(entry => {
            // Check if the element is in the viewport
            if (entry.isIntersecting) {
                let img = entry.target; // Get the image element
                img.src = img.dataset.src; // Replace src with data-src
                observer.unobserve(img); // Stop observing the image
            }
        });
    }, {
        rootMargin: '0px 0px 50px 0px', // Load images just before they enter the viewport
        threshold: 0.1 // Trigger when 10% of the image is visible
    });

    // Observe each image with the 'data-src' attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img); // Start observing each image
    });

    
});
