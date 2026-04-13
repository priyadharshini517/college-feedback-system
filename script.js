document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackForm");

  if (!form) {
    alert("Form not found ❌");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const category = document.getElementById("category").value;
    const feedback = document.getElementById("feedback").value;

    // 🔥 FIXED FETCH (no stuck)
    fetch("https://script.google.com/macros/s/AKfycbxaIkTGpp3AL3vXMtTUbXO1LPFIg24dbwSueaOHAa4robVvNWoDdZFGkW326ITZbdRP/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name: name,
        department: department,
        category: category,
        feedback: feedback
      })
    });

    // ✅ Instant success (no waiting)
    alert("Feedback submitted successfully! ✅");
    form.reset();
  });

});
