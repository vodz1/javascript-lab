// login
/*let correct = true;
do {
  let usrname = prompt("Enter your username");
  let passwd = prompt("Enter your password");
  if (usrname === "admin" && passwd === "421$$") {
    alert("welcome login success");
    correct = false;
  } else {
    switch (true) {
      case usrname != "admin" && passwd === "421$$":
        alert("incorrect usrname");
        break;
      case usrname === "admin" && passwd != "421$$":
        alert("incorrect password");
        break;
      default:
        alert("Enter your username and password please");
        break;
    }
  }
} while (correct);
*/

// CAlC
/*
let fnumber = Number(prompt("Enter your first number"));
let choice = prompt(
  "Choose the operation to be performed (sum-sub-div -multi-modul)"
);
let snumber = Number(prompt("Enter your second number"));
console.log(fnumber, snumber);
switch (choice) {
  case "sum":
    result = fnumber + snumber;
    document.write(`result = ${result}`);
    break;
  case "sub":
    result = fnumber - snumber;
    document.write(`result = ${result}`);
    break;
  case "div":
    if (snumber != 0) {
      result = fnumber / snumber;
      document.write(`result = ${result}`);
    } else {
      alert("Invalid operation");
    }
    break;
  case "multi":
    result = fnumber * snumber;
    document.write(`result = ${result}`);
    break;
  case "modul":
    if (snumber != 0) {
      result = fnumber % snumber;
      document.write(`result = ${result}`);
    } else {
      alert("Invalid operation");
    }
    break;
}
*/
