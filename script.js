window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Hide preloader and show main content
    preloader.style.display = 'none';
    mainContent.style.display = 'block';

    // Allow scrolling again
    document.body.style.overflow = 'auto';
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});