const formAuthEl = document.querySelector("#registration-form");
const loginButton = document.querySelector('button[type="submit"]');
const regButton = document.getElementById("reg");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const nicknameInput = document.querySelector('input[name="nick"]'); // Get the nickname input

const handleLoginSubmit = (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const nickname = nicknameInput.value;
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    if (user.nick === nickname) {
      localStorage.setItem("activeUser", JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "../captcha/example.html";
    } else {
      alert("Invalid nickname. Please try again.");
    }
  } else {
    alert("Invalid email or password. Please try again.");
  }
};

formAuthEl.addEventListener("submit", handleLoginSubmit);

regButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../index.html";
});
