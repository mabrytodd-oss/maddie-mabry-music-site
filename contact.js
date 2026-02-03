// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('contactFormMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // In production, you would send this to your backend or use Netlify Forms
        // For now, we'll simulate the submission
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log the form data (in production, this would be sent to your email service)
        console.log('Form submitted:', data);
        
        // Show success message
        formMessage.textContent = 'Thank you for reaching out! I\'ll get back to you as soon as possible.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 7 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 7000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try emailing me directly at maddiemabrymusic@gmail.com';
        formMessage.className = 'form-message error';
        
        // Hide message after 7 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 7000);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Add fade-in animation
const contactHero = document.querySelector('.contact-hero');
const contactFormSection = document.querySelector('.contact-form-section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

[contactHero, contactFormSection].forEach(section => {
    if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    }
});
