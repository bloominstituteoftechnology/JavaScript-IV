// CODE here for your Lambda Classes
class Person {
  constructor(attribute) {
    this.name = attribute.name;
    this.age = attribute.age;
    this.location = attribute.location;
    this.gender = attribute.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  };
  
}

class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  gradeAssignment(student) {
    let points = 20 - Math.floor(Math.random() * 30);
    let score = student.grade + points;
    student.grade = score;
    return `${student.name}'s grade of ${
      student.grade
    } changed by ${points} amount of points and now has a total of ${score}`;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }
  graduate(grader) {
    if (this.grade >= 70) {
        return `Congrats ${this.name}! You have just graduated Lambda School!`;
    } 
    while (this.grade < 70) {
        console.log(`Sorry ${this.name}. You only have a ${this.grade} and that is not enough to graduate. Please keep on trying until you pass.`);
        // debugger;
        grader.gradeAssignment(this);
    }
    return `Congrats ${this.name}! You have just graduated Lambda School!`;
}

  listsSubjects() {
    return `${this.favSubjects[0]},${this.favSubjects[1]},${
      this.favSubjects[2]
    }`;
  }
  PRAssignment(subject) {
    // debugger
    return `${this.name} has submitted a PR for ${subject}`;
    // debugger
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
  standUP(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const josh = new Instructor({
  name: "Josh Knell",
  age: 42,
  location: "Utah",
  gender: "M",
  specialty: "Flex-Box Master",
  favLanguage: "CSS",
  catchPhrase: "Flexin aint eazy!"
});

const amy = new Instructor({
  name: "Amy Lee",
  age: 38,
  location: "California",
  gender: "F",
  specialty: "Blockchain",
  favLanguage: "JS",
  catchPhrase: "Objects, strings and arrays I can do it all day!"
});
const ben = new Student({
  name: "ben",
  location: "tx",
  age: 65,
  gender: "M",
  previousBackground: `Professional cat magician that shows magic to cats because he can`,
  className: "FSW15",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 29
});
const tommy = new Student({
  name: "Tommy",
  location: "CA",
  age: "??",
  gender: "??",
  previousBackground: "Best Accountant In the World",
  className: "FSW15",
  favSubjects: ["Html", "CSS", "JavaScript"],
  grade: 90
});
const ash = new ProjectManager({
  name: "Ashwin",
  location: "India",
  age: `immortal cause I'm a vampire`,
  gender: "M",
  specialty: "CSS",
  favLanguage: "CSS",
  catchPhrase: "TIME TO SHOW ME YOUR EMOJI OF THE DAY!",
  gradClassName: `CS1`,
  favInstructor: `Josh`
});
const trevor = new ProjectManager({
  name: "Trevor",
  location: "CA",
  age: `Immortal because Dota2`,
  gender: "M",
  specialty: "JS",
  favLanguage: "CSS",
  catchPhrase: "EVERYTHING I SAY IS A CATCHPHRASE",
  gradClassName: `CS1`,
  favInstructor: `Josh`
});

console.log(josh.speak());
console.log(josh.demo('JS'));
console.log(josh.grade(tommy,'JS'));
console.log(ben.listsSubjects());
console.log(tommy.PRAssignment(`Is JS Art?`));
console.log(ben.sprintChallenge('Is JS Art?'));
console.log(ash.standUP(`FSW15 isn't slacking slack channel`));
console.log(trevor.debugsCode(ben,'YDKJS'));
console.log(ben.graduate(ash));
