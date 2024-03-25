let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading process
    setTimeout(function() {
        // Hide the loader and show the content
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // Change the time (in milliseconds) to simulate different loading times
});

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});