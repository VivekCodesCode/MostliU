const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
if (contactForm && formMessage) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("interest") === "EjiPG") {
    const business = document.getElementById("business");
    if (business) business.value = "EjiPG product enquiry";
    const message = document.getElementById("message");
    if (message) message.value = "I'm interested in EjiPG. Please share more information.";
  }
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const name = new FormData(contactForm).get("name");
    formMessage.textContent = `Thanks, ${name}! The form is working on the front end. Connect a backend or email service to receive enquiries.`;
    formMessage.style.color = "#398d6c";
    contactForm.reset();
  });
}
