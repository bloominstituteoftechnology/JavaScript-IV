// CODE here for your Lambda Classes
// Initial Pull Request

// Base Class
class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// Instructor Class
class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.favLanguage;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const dan = new Student({
  name: "Dan",
  location: "Charlotte",
  age: 34,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Back-end",
  catchPhrase: `Biggest risk in life is not taking one`,
  previousBackground: "MySQL",
  className: "CS11",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

console.log(fred.demo("Javascript"));
console.log(fred.speak());
