const form = document.getElementById("supportForm");
const responseBox = document.getElementById("response");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const message = document.getElementById("message").value.toLowerCase();

  let priority = "Normal";

  // Simple automation logic
  if (
    message.includes("urgent") ||
    message.includes("emergency") ||
    message.includes("pain") ||
    message.includes("blood")
  ) {
    priority = "Emergency";
  }

  responseBox.style.display = "block";

  if (priority === "Emergency") {
    responseBox.className = "emergency";
    responseBox.innerHTML = `
      <strong>⚠️ Emergency Request Detected</strong><br/>
      Thank you ${name}. Your request has been marked as high priority.
      Our team will contact you immediately.
    `;
  } else {
    responseBox.className = "success";
    responseBox.innerHTML = `
      <strong>✅ Request Submitted</strong><br/>
      Thank you ${name}. We have received your request.
      Our team will reach out to you soon.
    `;
  }

  form.reset();
});
