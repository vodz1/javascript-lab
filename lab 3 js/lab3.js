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



// PART 2
/*
let input = Number(prompt("How many numbers do you want to enter"));
let arr = [];
var sum = 0;
for (i = 0; i < input; i++) {
  value = parseFloat(prompt(`Enter number ${i + 1}`));
  arr[i] = value;
  sum += arr[i];
}
let average = sum / input;
document.write(`Sum = ${sum}`);
document.write("<br>");
document.write(`Average = ${average}`);
*/

// phone book
// const contactArr = [];
// function addContact() {
//   const Contactname = prompt("Enter contact name");
//   const Contactnumber = prompt("Enter contact number");

//   const Contact = {
//     name: Contactname,
//     phoneNumber: Contactnumber,
//   };
//   contactArr.push(Contact);
//   alert("Contact added successfully");
// }

// function searchContact() {
//   const searchinput = prompt("Enter the conctact name or phone number");
//   if (searchinput === null || searchinput === "") {
//     alert("you haven't entered a name or a phone number");
//   } else {
//     for (const contact of contactArr) {
//       if (
//         contact.name.toLowerCase().includes(searchinput.toLowerCase()) ||
//         contact.phoneNumber.includes(searchinput)
//       ) {
//         alert(
//           `contact found !\n\n Name : ${contact.name}\n\n phone number : ${contact.phoneNumber}`
//         );
//         return;
//       } else {
//         alert("Contact not found !");
//       }
//     }
//   }
// }
// while (true) {
//   let input = prompt("Enter your option (add , search)");
//   if (input === null) {
//     alert("Goodbye!");
//     break;
//   } else {
//     switch (input) {
//       case "add":
//         addContact();
//         break;
//       case "search":
//         searchContact();
//         break;
//       default:
//         alert("Choose an option");
//     }
//   }
// }

