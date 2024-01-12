// Part 1
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name}: ${perimeter}`);
  }
}

const squareshape = new Shape("square", 4, 5);
squareshape.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

// Part 2
class Square extends Shape {
  constructor(sideLength) {
    // Automatically set name to "square" and sides to 4
    super("square", 4, sideLength);
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`Area of square: ${area}`);
  }
}

const square = new Square(5);

// Call calcPerimeter and calcArea methods
square.calcPerimeter(); // Output: Perimeter of square: 20
square.calcArea(); // Output: Area of square: 25

// part 3

class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static description = "I square the triple of any number you provide";
  static longDescription; // Undefined as per your requirement

  static calculate(n) {
    const tripleResult = super.calculate(n);
    return tripleResult * tripleResult;
  }
}

// Example test
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'
