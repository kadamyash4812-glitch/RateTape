document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Fade-In Animation (Apple-style reveal)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 2. Premium Toast Notification for "Add to Cart"
    const cartButtons = document.querySelectorAll('.add-to-cart, .btn-primary');
    const toast = document.getElementById('toast');
    let toastTimeout;

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show toast
            toast.classList.add('show');
            
            // Clear previous timeout if user clicks rapidly
            clearTimeout(toastTimeout);
            
            // Hide toast after 2.5 seconds
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        });
    });

    // 3. Smooth Scrolling for Navbar Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });
});
