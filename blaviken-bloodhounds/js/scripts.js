// Toggle navigation menu on mobile when #menu-toggle is clicked
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    // Track menu state
    let menuOpen = false;

    menuToggle.addEventListener('click', function () {
        menuOpen = !menuOpen;
        if (menuOpen) {
            nav.style.display = 'flex';
            document.querySelector('nav ul').style.flexDirection = 'column';
            document.querySelector('nav ul').style.alignItems = 'center';
            document.querySelector('nav ul').style.width = '100%';
        } else {
            nav.style.display = 'none';
        }
    });
});