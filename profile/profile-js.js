const formAuthEl = document.querySelector("#data-change");
let btnDataChange = document.getElementById("btn-data-change");
const nicknameInput = document.getElementById("nickname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
let logoutBtn = document.getElementById("logoutBtn");

btnDataChange.onclick = changeData;
logoutBtn.onclick = logout;

function changeData() {
  formAuthEl.style.display = "block";
  btnDataChange.textContent = "Cancel";
  btnDataChange.onclick = cancelChanging;
}

function cancelChanging() {
  formAuthEl.style.display = "none";
  btnDataChange.textContent = "Change data";
  btnDataChange.onclick = changeData;
}

const handleformAuthSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formAuthEl);
  const updatedUser = Object.fromEntries(formData);

  if (updatedUser.password === updatedUser['password-repeat']) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

    // Update user data in the users array
    users = users.map(user => {
      if (user.email === activeUser.email) {
        return updatedUser;
      }
      return user;
    });

    // Update local storage
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("activeUser", JSON.stringify(updatedUser));

    alert("Data has been updated!");
    formAuthEl.style.display = "none";
    btnDataChange.textContent = "Change data";
    btnDataChange.onclick = changeData;
  } else {
    alert("Passwords don't match");
  }
};

formAuthEl.addEventListener("submit", handleformAuthSubmit);

// Populate form with active user data
const activeUserData = JSON.parse(localStorage.getItem("activeUser"));

if (activeUserData) {
  nicknameInput.value = activeUserData.nickname;
  emailInput.value = activeUserData.email;
  passwordInput.value = activeUserData.password;
}

function logout() {
  alert("You've successfully logged out");
  localStorage.removeItem("activeUser");
  window.location.href = "../index.html";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
