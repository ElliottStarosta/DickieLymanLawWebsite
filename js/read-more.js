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

                    if (isExpanded) {
                        lenis.stop();
                        $(document).ready(function() { lenis.start(); });

                        readMoreBtn.textContent = 'Read Less';
                        cardExtraContent.style.display = 'block';

                        // Calculate the height dynamically
                        const contentHeight = cardExtraContent.scrollHeight - 100;

                        // Adjust height for specific card ID if present
                        if (cardId === 'lawyer-lyman') {
                            cardExtraContent.style.height = `${contentHeight - 100}px`;
                        } else {
                            cardExtraContent.style.height = `${contentHeight}px`;
                        }

                        cardExtraContent.style.opacity = '1';

                        cardDescription.style.display = 'none';
                        cardBanner.style.display = 'none'; 
                    } else {
                        readMoreBtn.textContent = 'Read More';
                        cardExtraContent.style.height = '0';
                        cardExtraContent.style.opacity = '0';

                        cardDescription.style.display = 'flex';
                        cardBanner.style.display = 'flex'; 
                        
                        // Reset display after transition
                        setTimeout(() => {
                            cardExtraContent.style.display = 'none';
                            lenis.scrollTo("#our-lawyers");
                        }, 300); // Match the transition duration
                    }
                } else {
                    console.warn('One or more elements are missing within the card content.');
                }
            } else {
                console.warn('Card not found for read-more button.');
            }
        });
    });
});
