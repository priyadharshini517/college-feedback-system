document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const category = document.getElementById("category").value;
    const feedback = document.getElementById("feedback").value;

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

    alert("Feedback submitted successfully! ✅");
    form.reset();
  });

});
