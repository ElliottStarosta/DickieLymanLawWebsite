import Lenis from 'lenis';

const lenis = new Lenis({
    duration: 1.5, // Set duration to 1.5 seconds for smoother and slower scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoothness
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function() {
        lenis.start();
        handleInitialHash();
    });
});

function scrollToAnchor(anchor) {
    lenis.scrollTo(anchor);
}

// Handle initial hash on page load
function handleInitialHash() {
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            scrollToAnchor(hash);
        }, 100);
    }
}

// Event listener for dropdown menu links
document.querySelectorAll('.dropdown__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const text = link.textContent.trim();
        
        if (text.includes('Articles & Publications')) {
            updateHashAndLog('articles-publications');
            scrollToAnchor('#articles-publications');
        } else if (text.includes('Our Lawyers')) {
            updateHashAndLog('our-lawyers');
            scrollToAnchor('#our-lawyers');

            
        } else if (text.includes('Residential Tenancy Law')) {
            updateHashAndLog('residential-tenancy-law');
            scrollToAnchor('#residential-tenancy-law');
            
            document.getElementById("residential-tenancy-law").classList.add("highlight");
            setTimeout(function() {
                document.getElementById("residential-tenancy-law").classList.remove("highlight");
            }, 3000);
            
        } else if (text.includes('Property Tax & Assessment Law')) {
            updateHashAndLog('property-tax-assessment-law');
            scrollToAnchor('#property-tax-assessment-law');
            document.getElementById("property-tax-assessment-law").classList.add("highlight");
            setTimeout(function() {
                document.getElementById("property-tax-assessment-law").classList.remove("highlight");
            }, 3000);
        } else if (text.includes('Commercial Tenancy Law')) {
            updateHashAndLog('commerical-tenacy-law');
            scrollToAnchor('#commerical-tenacy-law');
            document.getElementById("commerical-tenacy-law").classList.add("highlight");
            setTimeout(function() {
                document.getElementById("commerical-tenacy-law").classList.remove("highlight");
            }, 3000);
        } else if (text.includes('Government Relations')) {
            updateHashAndLog('government-relations');
            scrollToAnchor('#government-relations');
            document.getElementById("government-relations").classList.add("highlight");
            setTimeout(function() {
                document.getElementById("government-relations").classList.remove("highlight");
            }, 3000);
            
        }
    });
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const text = link.textContent.trim();   
        
        if (text.includes('Student Articling')) {
            updateHashAndLog('student-articling');
            scrollToAnchor('#student-articling');
        } else if(text.includes('Contact Us')) {
            updateHashAndLog('contact');
            scrollToAnchor('#contact')
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact-button");

    contactButton.addEventListener("click", function() {
        updateHashAndLog('contact');
        scrollToAnchor('#contact');

    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("practice-areas-btn");
    contactButton.addEventListener("click", function() {
        updateHashAndLog('practice-areas');
        scrollToAnchor('#practice-areas');

    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("logo");
    contactButton.addEventListener("click", function() {
        updateHashAndLog('home');
        scrollToAnchor('#home');

    });
});



// Event listener for individual lawyer links
document.querySelectorAll('.dropdown__sublink').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        const text = link.textContent.trim();
        
        if (text.includes('John W. Dickie')) {
            updateHashAndLog('lawyer-dickie');
            scrollToAnchor('#lawyer-dickie');
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman');
        }
    });
});

function updateHashAndLog(hash) {
    // Update hash in the URL without scrolling
    history.pushState(null, null, `#${hash}`);
    // Log to console
    console.log(`Clicked '${hash}'`);
}