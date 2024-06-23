
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