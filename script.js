// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Gallery Image Hover Effect
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const description = item.getAttribute('data-description');
        const overlay = document.createElement('div');
        overlay.classList.add('gallery-overlay');
        overlay.textContent = description;
        item.appendChild(overlay);
    });

    item.addEventListener('mouseout', () => {
        const overlay = item.querySelector('.gallery-overlay');
        if (overlay) {
            overlay.remove();
        }
    });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const showError = (input, message) => {
    const errorSpan = input.nextElementSibling;
    errorSpan.style.display = 'block';
    errorSpan.textContent = message;
    input.style.borderColor = '#e74c3c';
};

const showSuccess = (input) => {
    const errorSpan = input.nextElementSibling;
    errorSpan.style.display = 'none';
    input.style.borderColor = '#2ecc71';
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'Name must be at least 2 characters');
        isValid = false;
    } else {
        showSuccess(nameInput);
    }

    // Email validation
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Message must be at least 10 characters');
        isValid = false;
    } else {
        showSuccess(messageInput);
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
        contactForm.reset();
        [nameInput, emailInput, messageInput].forEach(input => {
            input.style.borderColor = '#ddd';
        });
    }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close mobile menu after clicking a link
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});