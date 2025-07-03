document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can collect the form data here if you want to send it somewhere
    const formData = new FormData(form);
    const name = formData.get("name");

    // Simulate a successful submission
    responseMsg.style.color = "green";
    responseMsg.textContent = `Thanks, ${name || "there"}! We'll be in touch shortly.`;

    // Optionally clear the form
    form.reset();
  });
});
