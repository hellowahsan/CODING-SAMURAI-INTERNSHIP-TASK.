document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email) {
    formMsg.textContent = "Please fill in all fields!";
    formMsg.style.color = "red";
  } else if (!email.includes("@")) {
    formMsg.textContent = "Enter a valid email!";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = `Thanks, ${name}! You’ve been signed up!`;
    formMsg.style.color = "green";
    document.getElementById("signupForm").reset();
  }
});
