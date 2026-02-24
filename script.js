document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "admin@gmail.com" && password === "123456") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "home.html";
      } else {
        alert("Invalid Email or Password ❌");
      }
    });
  }

});

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}