document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Clicked 🔥");   // 👈 test

  const data = {
    name: document.getElementById("name").value
  };

  db.ref("feedbacks").push(data)
    .then(() => {
      alert("Saved 🔥");
    })
    .catch(() => {
      alert("Error ❌");
    });
});

