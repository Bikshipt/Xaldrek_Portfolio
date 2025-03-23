// Toggle Navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle Icon and Navbar When Clicking a Link (for mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-box, .portfolio-box, .team-box, .faq-box, .testimonials-box, .blog-box', { origin: 'bottom' });
ScrollReveal().reveal('.about-content', { origin: 'left' });
ScrollReveal().reveal('.contact form', { origin: 'right' });

// Typed.js for Multiple Text
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Game Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        portfolioBoxes.forEach(box => {
            const category = box.getAttribute('data-category');
            if (filter === 'all' || filter === category) {
                box.style.display = 'block';
                setTimeout(() => box.classList.remove('hidden'), 10);
            } else {
                box.classList.add('hidden');
                setTimeout(() => box.style.display = 'none', 300);
            }
        });
    });
});

// Collapsible FAQs
const faqBoxes = document.querySelectorAll('.faq-box');

faqBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

// Contact Form Submission Feedback
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
    alert('Thank you for your message! I will get back to you soon.');
});