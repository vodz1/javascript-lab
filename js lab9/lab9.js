function validateLogin() {
  var UsRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
  var PwRegex = /[a-zA-Z0-9]{8,}/;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var Res = document.getElementById("result");

  // Create a login object
  var login = {
    username: username,
    password: password,
  };

  // Check credentials
  if (login.username === "" && login.password === "") {
    Res.className = "error";
    Res.innerHTML = "please Enter your username and password";
  } else if (login.username === "") {
    Res.className = "error";
    Res.innerHTML = "please Enter your username";
  } else if (!login.username.match(UsRegex) && !login.password.match(PwRegex)) {
    Res.className = "error";
    Res.innerHTML = "Invalid username or password";
  } else if (!login.username.match(UsRegex)) {
    Res.className = "error";
    Res.innerHTML = "Invalid username";
  } else if (login.password === "") {
    Res.className = "error";
    Res.innerHTML = "please Enter your password";
  } else if (!login.password.match(PwRegex)) {
    Res.className = "error";
    Res.innerHTML = "Invalid password (at least 8-characters)";
  } else if (login.username.match(UsRegex) && login.password.match(PwRegex)) {
    Res.className = "success";
    Res.innerHTML = "Welcome!";
  }
}
