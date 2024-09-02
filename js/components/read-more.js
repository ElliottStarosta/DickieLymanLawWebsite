import Lenis from 'lenis';

const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoothness
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.addEventListener('DOMContentLoaded', () => {

    requestAnimationFrame(raf);

    const readMoreBtns = document.querySelectorAll('.read-more');

    readMoreBtns.forEach((readMoreBtn) => {
        readMoreBtn.addEventListener('click', () => {
            // Find the nearest parent with class 'card'
            const card = readMoreBtn.closest('.card');
            
            // Check if card is not null before proceeding
            if (card) {
                const cardContent = card.querySelector('.card__content');
                const cardExtraContent = card.querySelector('.card__extra-content');
                const cardDescription = card.querySelector('.card__description');
                const cardBanner = card.querySelector('.card__banner');

                // Ensure the queried elements are also not null
                if (cardContent && cardExtraContent && cardDescription && cardBanner) {
                    const isExpanded = card.classList.toggle('expanded');
                    const cardId = card.id; // Get ID from the card element

                    // Close all other cards
                    document.querySelectorAll('.card.expanded').forEach((otherCard) => {
                        if (otherCard !== card) {
                            otherCard.classList.remove('expanded');
                            const otherReadMoreBtn = otherCard.querySelector('.read-more');
                            if (otherReadMoreBtn) {
                                otherReadMoreBtn.textContent = 'Read More';
                            }
                            const otherCardExtraContent = otherCard.querySelector('.card__extra-content');
                            const otherCardDescription = otherCard.querySelector('.card__description');
                            const otherCardBanner = otherCard.querySelector('.card__banner');
                            if (otherCardExtraContent) {
                                otherCardExtraContent.style.height = '0';
                                otherCardExtraContent.style.opacity = '0';
                                setTimeout(() => {
                                    otherCardExtraContent.style.display = 'none';
                                }, 450);
                            }
                            if (otherCardDescription) {
                                otherCardDescription.style.display = 'flex';
                            }
                            if (otherCardBanner) {
                                if (window.innerWidth > 650) {
                                    otherCardBanner.style.display = 'flex';
                                } else {
                                    otherCardBanner.style.display = 'none';
                                }
                            }
                        }
                    });

                    if (isExpanded) {
                        lenis.stop();
                        // Ensure lenis starts only after the DOM is fully loaded
                        if (document.readyState === 'loading') {
                            // DOM is still loading, add an event listener
                            document.addEventListener('DOMContentLoaded', () => {
                                lenis.start();
                                scrollToCard(card);
                            });
                        } else {
                            // DOM is already loaded
                            lenis.start();
                            scrollToCard(card);
                        }

                        readMoreBtn.textContent = 'Read Less';
                        cardExtraContent.style.display = 'block';

                    

                        // Adjust height for specific card ID if present
                        if (cardId === 'lawyer-lyman') {
                            cardExtraContent.style.height = "auto";
                        } else {
                            cardExtraContent.style.height = "auto";
                        }

                        cardExtraContent.style.opacity = '1';

                        cardDescription.style.display = 'none';
                        cardBanner.style.display = 'none'; 
                    } else {
                        readMoreBtn.textContent = 'Read More';
                        cardExtraContent.style.height = '0';
                        cardExtraContent.style.opacity = '0';

                        cardDescription.style.display = 'flex';
                        
                        if (window.innerWidth > 650) {
                            cardBanner.style.display = 'flex';
                        } else {
                            cardBanner.style.display = 'none';
                        }                        
                        // Reset display after transition
                        setTimeout(() => {
                            cardExtraContent.style.display = 'none';
                            lenis.scrollTo("#our-lawyers");
                        }, 450);
                    }
                } else {
                    console.warn('One or more elements are missing within the card content.');
                }
            }
        });
    });
});


function scrollToCard(card) {
    lenis.scrollTo(card, {
        duration: 1.5,
        offset: -200 
    });
}