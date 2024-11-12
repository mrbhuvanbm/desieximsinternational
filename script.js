document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    document.getElementById("contactForm").reset();
});
