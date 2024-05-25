document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (name && email && message) {
        confirmationMessage.textContent = `Thank you for your message, ${name}! I will get back to you at ${email}.`;
        confirmationMessage.style.color = '#28a745';

        // Optionally, clear the form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        confirmationMessage.textContent = 'Please fill out all fields.';
        confirmationMessage.style.color = '#dc3545';
    }
});
