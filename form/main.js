const formAuthEl = document.querySelector("#registration-form");
const newEmailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[id="password"]');
const passwordRepeatInput = document.querySelector('input[id="password-repeat"]');
const logInBtn = document.querySelector("#login")

const handleformAuthSubmit = (event) => {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const formData = new FormData(formAuthEl);
  const newUser = Object.fromEntries(formData);

  let emailExists = false;

  users.forEach(user => {
    if (user.email === newUser.email) {
      emailExists = true;
    }
  });

  if (emailExists) {
    alert("Email already exists. Please use a different email.");
    return;
  }

  if (newUser.password !== newUser.repeatPassword) {
    alert("Passwords do not match. Please re-enter your password.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("activeUser", JSON.stringify(newUser));
  localStorage.setItem("users", JSON.stringify(users));
 window.location.href = "./captcha/example.html"
};

formAuthEl.addEventListener("submit", handleformAuthSubmit);

logInBtn.onclick = login

function login() {
  window.location.href = "./loginpage/login.html"
  console.log("1")
}