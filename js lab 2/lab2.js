/*while (true) {
  // Prompt user for age
  let userInput = prompt("Enter your age:");

  // Check if the user clicked cancel
  if (userInput === null) {
    alert("Goodbye!");
    break; // Exit the loop if the user clicked cancel
  }

  let age = Number(userInput);

  // Validate if the input is a positive number
  if (age <= 0) {
    alert("Please enter a valid positive number for age.");
    continue; // Ask for input again
  }

  // Determine the user's status based on age
  let userStatus;
  switch (true) {
    case age <= 10:
      userStatus = "Child";
      break;
    case age <= 18:
      userStatus = "Teenager";
      break;
    case age <= 50:
      userStatus = "Grown up";
      break;
    default:
      userStatus = "Old";
      break;
  }

  // Display the user's status
  alert(`You are ${userStatus}`);
}*/

// Function to convert 24-hour clock to 12-hour format
/*function convertTo12HourFormat(hour) {
    if (hour < 0 || hour > 23) {
        return "Invalid hour";
    }

    // Determine AM or PM
    let period = (hour < 12) ? "AM" : "PM";

    // Convert to 12-hour format
    if (hour === 0) {
        return "12AM";
    } else if (hour <= 12) {
        return hour + period;
    } else {
        return (hour - 12) + period;
    }
}

// Examples
let time1 = 0;   // 12AM
let time2 = 11;  // 11AM


// Display results
console.log(time1 + " -> " + convertTo12HourFormat(time1));
console.log(time2 + " -> " + convertTo12HourFormat(time2));
*/

/*
function countvowels() {
  let vowels = {
    a: 0,
    e: 0,
    o: 0,
    u: 0,
    i: 0,
  };
  let str = prompt("Enter string");
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
      case "a":
        vowels.a++;
        break;

      case "E":
      case "e":
        vowels.e++;
        break;

      case "O":
      case "o":
        vowels.o++;
        break;

      case "U":
      case "u":
        vowels.u++;
        break;

      case "I":
      case "i":
        vowels.i++;
        break;
    }
  }
  alert(JSON.stringify(vowels));
}

countvowels();

*/
