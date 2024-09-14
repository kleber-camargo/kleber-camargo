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
