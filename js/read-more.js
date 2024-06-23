import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const readMoreBtns = document.querySelectorAll('.read-more');

    readMoreBtns.forEach((readMoreBtn) => {
        const cardContent = readMoreBtn.closest('.card__content');
        const cardExtraContent = cardContent.querySelector('.card__extra-content');
        const cardDescription = cardContent.querySelector('.card__description');

        readMoreBtn.addEventListener('click', () => {
            cardContent.classList.toggle('expanded');
            if (cardContent.classList.contains('expanded')) {
                lenis.stop();
                $(document).ready(function(){lenis.start();})

                console.log('stop')
                readMoreBtn.textContent = 'Read Less';
                cardExtraContent.style.display = 'block'; // Show extra content
                console.log('start')
                cardDescription.style.display = 'none';
            } else {
                readMoreBtn.textContent = 'Read More';
                cardExtraContent.style.display = 'none'; // Hide extra content
                cardDescription.style.display = 'flex';
            }
            
        });
    });

});
