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

    // Add classes to <html> element during smooth scroll
    document.documentElement.classList.add('lenis', 'lenis-scrolling', 'lenis-smooth');
    console.log("Scrolling");

    // Remove classes after scroll animation completes
    setTimeout(() => {
        document.documentElement.classList.remove('lenis-scrolling', 'lenis-smooth');
    }, lenis.options.duration * 1000); // Duration in milliseconds
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
            setTimeout(() => {
                scrollToAnchor('#articles-publications'); ;
            }, 50);
            
        } else if (text.includes('Our Lawyers')) {
            updateHashAndLog('our-lawyers');
            scrollToAnchor('#our-lawyers');
            setTimeout(() => {
                scrollToAnchor('#our-lawyers'); ;
            }, 50);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact-button");

    contactButton.addEventListener("click", function() {
        updateHashAndLog('contact');
        scrollToAnchor('#contact');
        setTimeout(() => {
            scrollToAnchor('#contact'); ;
        }, 50);
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
            setTimeout(() => {
                scrollToAnchor('#lawyer-dickie'); ;
            }, 50);
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman');
            setTimeout(() => {
                scrollToAnchor('#lawyer-lyman'); ;
            }, 50);
            
        }
    });
});

function updateHashAndLog(hash) {
    // Update hash in the URL
    window.location.hash = hash;
    // Log to console
    console.log(`Clicked '${hash}'`);
}
