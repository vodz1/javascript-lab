//-------------------------PART 1----------------------

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Create a login object
  var login = {
    username: username,
    password: password,
  };

  // Check credentials
  if (login.username === "admin" && login.password === "123") {
    document.getElementById("result").innerHTML = "Welcome!";
  } else {
    document.getElementById("result").innerHTML = "Not registered";
  }
}
