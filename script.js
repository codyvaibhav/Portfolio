
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();
        let isValid = true;

        // --- Field Validation ---
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError('nameError', 'Name is required.');
            isValid = false;
        }

        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            showError('emailError', 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError('messageError', 'Message is required.');
            isValid = false;
        }
        if (isValid) {
            alert('Form submitted successfully!');
            form.submit(); // Or use AJAX to send the data
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((element) => {
            element.textContent = '';
        });
    }
    
    function isValidEmail(email) {
        // Simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});