document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const popup = document.getElementById('popup');
    const popupDescription = document.getElementById('popup-description');
    const closeBtn = document.querySelector('.close-btn');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.getAttribute('data-description');
            popupDescription.textContent = description;
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});



// CARROSSEL

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        items.forEach(item => {
            item.style.transform = `translateX(${offset}%)`;
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});