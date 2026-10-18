
"use strict";

// Display the current year in every footer.
document.querySelectorAll("#current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

// Handle the contact form.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent =
            "Your form is valid! This demo does not send messages yet. Connect a backend or form service to receive submissions.";

        contactForm.reset();
    });
}
