// Variables
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownParent = document.querySelector('.dropdown');

    // Toggle main menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Toggle nested Key Insights menu
    if (dropbtn) {
        dropbtn.addEventListener('click', (e) => {
            // Only toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownParent.classList.toggle('open');
            }
        });
    }
});