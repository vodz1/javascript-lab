/*
// OLOO (object linking to other object)
// Person object constructor
function Person(name, money, sleepMood, healthRate) {
  this.name = name;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
}

// Sleep method
Person.prototype.sleep = function (hours) {
  if (hours === 7) {
    this.sleepMood = "happy";
  } else if (hours < 7) {
    this.sleepMood = "tired";
  } else {
    this.sleepMood = "lazy";
  }
};

// Eat method
Person.prototype.eat = function (meals) {
  if (meals === 3) {
    this.healthRate = 100;
  } else if (meals === 2) {
    this.healthRate = 75;
  } else if (meals === 1) {
    this.healthRate = 50;
  }
};

// Buy method
Person.prototype.buy = function (items) {
  if (items === 1) {
    this.money -= 10;
  }
};

let ahm = new Person("ahmed", 100, "happy", 80);

ahm.sleep(8);
console.log(`${ahm.name} is feeling ${ahm.sleepMood} after sleeping.`);

ahm.eat(2);
console.log(`${ahm.name}'s health rate is ${ahm.healthRate} after eating.`);

ahm.buy(1);
console.log(`${ahm.name} has $${ahm.money} left after buying an item.`);
*/

/*
// constructor function
function Person(fullName, initialMoney, initialSleepMood, initialHealthRate) {
  this.fullName = fullName;
  this.money = initialMoney;
  this.sleepMood = initialSleepMood;
  this.healthRate = initialHealthRate;

  this.sleep = function (hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  };

  this.eat = function (meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  };

  this.buy = function (items) {
    const cost = items * 10;
    if (cost <= this.money) {
      this.money -= cost;
    } else {
      console.log("Not enough money to buy the items.");
    }
  };
}

const person1 = new Person("ahmed adel", 100, "happy", 80);
console.log(person1);

person1.sleep(8);
console.log(person1);

person1.eat(2);
console.log(person1);

person1.buy(3);
console.log(person1);
*/

/*
// Factory function to create a new person
function createPerson(fullName, initialMoney) {
  return {
    fullName,
    money: initialMoney,
    sleepMood: "neutral", // Default sleep mood
    healthRate: 100, // Default health rate

    // Sleep method
    sleep: function (hours) {
      if (hours === 7) {
        this.sleepMood = "happy";
      } else if (hours < 7) {
        this.sleepMood = "tired";
      } else {
        this.sleepMood = "lazy";
      }
    },

    // Eat method
    eat: function (meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },

    // Buy method
    buy: function (items) {
      const cost = items * 10;
      if (this.money >= cost) {
        this.money -= cost;
      } else {
        console.log("Not enough money to buy items.");
      }
    },
  };
}

const ahm = createPerson("ahmed adel", 50); // Creating a person with initial money of 50

ahm.sleep(7);
ahm.eat(2);
ahm.buy(3);

console.log(ahm.fullName);
console.log("Sleep Mood:", ahm.sleepMood);
console.log("Health Rate:", ahm.healthRate);
console.log("Money:", ahm.money);
*/

/*
// using classes
class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    switch (meals) {
      case 3:
        this.healthRate = 100;
        break;
      case 2:
        this.healthRate = 75;
        break;
      case 1:
        this.healthRate = 50;
        break;
      default:
        console.log("Invalid number of meals.");
    }
  }

  buy(items) {
    const cost = items * 10;
    if (cost <= this.money) {
      this.money -= cost;
    } else {
      console.log("Not enough money to buy the items.");
    }
  }
}

// Example usage:
const person1 = new Person("ahmed adel", 100, "happy", 80);

console.log(person1); // Initial state

person1.sleep(6);
console.log(person1); // Updated sleep mood

person1.eat(2);
console.log(person1); // Updated health rate

person1.buy(3);
console.log(person1); // Updated money after buying items

*/
