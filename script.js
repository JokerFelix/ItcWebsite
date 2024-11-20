document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate form submission success
    document.getElementById('form-response').textContent = 'Thank you for your message! We will get back to you shortly.';
    // Reset the form
    this.reset();
});
