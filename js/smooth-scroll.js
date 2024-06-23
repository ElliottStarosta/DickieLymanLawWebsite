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



function scrollToAnchor(anchor) {
    lenis.scrollTo(anchor);
}

// Event listener for main navigation links


// Event listener for dropdown menu links
document.querySelectorAll('.dropdown__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const text = link.textContent.trim();

        if (text.includes('Articles & Publications')) {
            updateHashAndLog('articles-publications');
            scrollToAnchor('#articles-publications'); // Scroll to the anchor after updating hash
        } else if (text.includes('Our Lawyers')) {
            updateHashAndLog('our-lawyers');
            scrollToAnchor('#our-lawyers');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contact-button");

    contactButton.addEventListener("click", function() {
        updateHashAndLog('contact');
    });
});

// Event listener for individual lawyer links
document.querySelectorAll('.dropdown__sublink').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        const text = link.textContent.trim();
        
        if (text.includes('John W. Dickie')) {
            updateHashAndLog('lawyer-dickie');
            scrollToAnchor('#lawyer-dickie'); // Scroll to the anchor after updating hash
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman'); 
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman'); 
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman'); 
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman'); 
        } else if (text.includes('S. David Lyman')) {
            updateHashAndLog('lawyer-lyman');
            scrollToAnchor('#lawyer-lyman'); 
        } 
    });
});
let toggleId, navId;

export const showMenu = (_toggleId, _navId) => {
  toggleId = _toggleId;
  navId = _navId;

  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
    // Add show-menu class to nav menu
    nav.classList.toggle('show-menu');
    // Toggle position property of body element
    if (nav.classList.contains('show-menu')) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }
    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle('show-icon');
  });
};

// Add event listeners to nav links
document.querySelectorAll('.nav__link,.dropdown__link,.dropdown__sublink').forEach(link => {
  link.addEventListener('click', () => {
    document.body.style.position = '';
    // Get the nav__toggle element using the global toggleId
    const nav = document.getElementById('nav-menu');
    // Remove show-icon class from nav__toggle
    nav.classList.remove('show-menu');
  });
});



function updateHashAndLog(hash) {
    // Update hash in the URL
    window.location.hash = hash;
    // Log to console
    console.log(`Clicked '${hash}'`);
}
