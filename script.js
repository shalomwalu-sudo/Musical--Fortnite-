function showSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === 7) {
    result.textContent = "Correct! 🎉";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong. Try again.";
    result.style.color = "red";
  }
}