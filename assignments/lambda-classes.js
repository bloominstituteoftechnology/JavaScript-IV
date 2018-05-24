class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
    this.grade = studentOptions.grade;
  }

  listsSubjects() {
    return this.favSubjects.join(" ");
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerOptions) {
    super(projectManagerOptions);
    this.gradClassName = projectManagerOptions.gradClassName;
    this.favInstructor = projectManagerOptions.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const gabe = new Student({
  name: 'Gabe',
  location: 'West Hartford',
  age: 39,
  previousBackground: 'music',
  className: 'CS11',
  favSubjects: ['JavaScript', 'React', 'CSS']
});

const alice = new Student({
  name: 'Alice',
  location: 'Boston',
  age: 30,
  previousBackground: 'customer service',
  className: 'CS11',
  favSubjects: ['JavaScript', 'React', 'CSS']
});

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bill = new Instructor({
  name: 'Bill',
  location: 'New York City',
  age: 25,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `C'est la vie`
});

const albert = new ProjectManager({
  name: 'Albert',
  location: 'Austin',
  age: 26,
  gradClassName: 'CS10',
  favInstructor: 'Josh'
});

const sally = new ProjectManager({
  name: 'Sally',
  location: 'Houston',
  age: 29,
  gradClassName: 'CS9',
  favInstructor: 'Josh'
});

console.log(gabe.PRAssignment('JavaScript-III'));
console.log(alice.listsSubjects());
console.log(fred.demo('HTML'));
console.log(bill.grade(alice, 'CSS'));
console.log(albert.standUp('cs_11'));
console.log(sally.debugsCode(gabe, 'JavaScript-III'));
