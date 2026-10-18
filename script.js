// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const inquiryForm = document.getElementById('inquiryForm');
const formMessage = document.getElementById('formMessage');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Validate required fields
        if (!formData.name || !formData.phone || !formData.service || !formData.message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Show success message
        showMessage('Thank you! Your inquiry has been submitted. We will contact you soon.', 'success');

        // Optional: Send email via mailto link
        const mailtoLink = `mailto:tasir.atd@gmail.com?subject=Inquiry from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0A%0AMessage:%0A${formData.message}`;

        // Reset form
        inquiryForm.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.classList.remove('success', 'error');
        }, 5000);
    });
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.remove('success', 'error');
    formMessage.classList.add(type);
}