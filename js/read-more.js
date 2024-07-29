import Lenis from 'lenis';

document.addEventListener('DOMContentLoaded', () => {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const readMoreBtns = document.querySelectorAll('.read-more');

    readMoreBtns.forEach((readMoreBtn) => {
        const cardContent = readMoreBtn.closest('.card__content');
        
        // Check if cardContent is not null before proceeding
        if (cardContent) {
            const cardExtraContent = cardContent.querySelector('.card__extra-content');
            const cardDescription = cardContent.querySelector('.card__description');
            const cardBanner = cardContent.querySelector('.card__banner');

            // Ensure the queried elements are also not null
            if (cardExtraContent && cardDescription && cardBanner) {
                readMoreBtn.addEventListener('click', () => {
                    cardContent.classList.toggle('expanded');
                    if (cardContent.classList.contains('expanded')) {
                        lenis.stop();
                        $(document).ready(function() { lenis.start(); });

                        readMoreBtn.textContent = 'Read Less';
                        cardExtraContent.style.display = 'block'; 
                        
                        cardDescription.style.display = 'none';
                        cardBanner.style.display = 'none'; 
                    } else {
                        readMoreBtn.textContent = 'Read More';
                        cardExtraContent.style.display = 'none';

                        cardDescription.style.display = 'flex';
                        cardBanner.style.display = 'flex'; 
                        setTimeout(() => {
                            lenis.scrollTo("#our-lawyers");
                        }, 10);
                    }
                });
            } else {
                console.warn('One or more elements are missing within the card content.');
            }
        } else {
            console.warn('Card content not found for read-more button.');
        }
    });
});
