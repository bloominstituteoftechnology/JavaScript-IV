class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  checkWork(student) {
    if (Math.random() < 0.75) {
      let grade = Math.floor(Math.random() * 10 + 1);
      student.grade += grade;
      return `${student.name} did great! ${
        student.gender == 'male' ? 'He' : 'She'
      } got ${grade} points and now has ${student.grade} points.`;
    }
    let grade = Math.floor(Math.random() * 10 + 1);
    student.grade -= grade;
    return `${student.name} had a rough go. ${
      student.gender == 'male' ? 'He' : 'She'
    } lost ${grade} points and now has ${student.grade} points.`;
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    this.grade = Math.floor(Math.random() * 50 + 20);
  }
  listSubjects() {
    let subjects = '';
    this.favSubjects.forEach(subject => {
      subjects += subject + ' ';
    });
    return subjects.trim();
  }
  prAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return {
        status: `Congratulations!! ${this.name} has graduated :)`,
        grad: 1,
      };
    }
    return {
      status: `Sorry ${
        this.name
      }, you need to take a few more courses to graduate.`,
      grad: 0,
    };
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});

const pebbles = new Student({
  name: 'Pebbles',
  location: 'Bedrock',
  age: 18,
  gender: 'female',
  previousBackground: 'partier',
  className: 'CS12',
  favSubjects: ['JavaScript', 'Node', 'React'],
});

const dino = new ProjectManager({
  name: 'Dino',
  location: 'Bedrock',
  age: 27,
  gender: 'male',
  favLanguage: 'Go',
  specialty: 'Back-end',
  catchPhrase: `Where's my bone?!?`,
  gradClassName: 'CS11',
  favInstructor: 'Fred',
});

const bob = new Student({
  name: 'Bob',
  location: 'Bedrock',
  age: 18,
  gender: 'male',
  previousBackground: 'partier',
  className: 'CS12',
  favSubjects: ['JavaScript', 'Node', 'React'],
});
// console.log(fred.speak());
// console.log(`${fred.name} loves ${fred.favLanguage} on the ${fred.specialty}!`);
// console.log(fred.demo('stone carving'));
// console.log(fred.grade(pebbles, 'React I'));
// console.log(pebbles.listSubjects());
// console.log(pebbles.prAssignment('Go'));
// console.log(pebbles.sprintChallenge('node'));
// console.log(dino.name);
// console.log(dino.catchPhrase);
// console.log(dino.favInstructor);
// console.log(dino.standUp("Dino's Groupies"));
// console.log(dino.debugsCode(pebbles, 'libuv'));

console.log(
  `Welcome to LambdaSchool, ${bob.name}! \nYou're current grade is: ${
    bob.grade
  }\n`,
);
while (!bob.graduate().grad) {
  console.log(bob.graduate().status);
  console.log(fred.checkWork(bob) + '\n');
}
console.log(bob.graduate().status);
