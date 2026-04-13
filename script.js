document.addEventListener("DOMContentLoaded", function () {

  console.log("JS WORKING");

  const form = document.getElementById("feedbackForm");

  if (!form) {
    console.log("Form not found ❌");
    return;
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log("FORM SUBMITTED");

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const category = document.getElementById("category").value;
    const feedback = document.getElementById("feedback").value;

    fetch("https://script.google.com/macros/s/AKfycbxaIkTGpp3AL3vXMtTUbXO1LPFIg24dbwSueaOHAa4robVvNWoDdZFGkW326ITZbdRP/exec", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        department: department,
        category: category,
        feedback: feedback
      })
    })
    .then(res => res.text())
    .then(data => {
      alert("Feedback submitted successfully! ✅");
      form.reset();
    })
    .catch(err => {
      console.log(err);
      alert("Error ❌ Check console");
    });

  });

});
