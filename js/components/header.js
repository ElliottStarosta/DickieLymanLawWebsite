const header = document.querySelector('.header');
let lastScroll = window.scrollY || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScroll && currentScroll > 200) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});
