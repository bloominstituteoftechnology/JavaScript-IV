class Person {
  constructor(personStuff) {
    this.name = personStuff.name;
    this.location = personStuff.location;
    this.age = personStuff.age;
    this.gender = personStuff.gender;
    this.favLanguage = personStuff.favLanguage;
    this.specialty = personStuff.specialty;
    this.catchPhrase = personStuff.catchPhrase;
  }
  sayName() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
};

class Instructor extends Person {
  constructor(constructorStuff) {
    super(constructorStuff);
  }
  demo() {
    return `Today we are learning about ${this.subject}`
  }
  grade() {
    return `${this.name} receives a perfect score on ${this.subject}`
  }
};

class Student extends Person {
  constructor(studentStuff) {
    super(studentStuff);
    this.previousBackground = studentStuff.previousBackground;
    this.className = studentStuff.className;
    this.favSubjects = studentStuff.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmStuff) {
    super(pmStuff);
    this.gradClassName = pmStuff.gradClassName;
    this.favInstructor = pmStuff.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel} '@channel standy times!​​​​​'`
  }
  debugsCode() {
    return ``
  }
}

const josh = new Instructor({
  name: 'Josh',
  location: 'Provo',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Teaching FSW',
  catchPhrase: `Don't forget the homies`
});

const bob = new Instructor({
  name: 'Bob',
  location: 'Iceland',
  age: 12,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Being a genius',
  catchPhrase: 'Doogie Houser aint got nothin on me'
});

const bill = new Instructor({
  name: 'Bill',
  location: `Mom's basement`,
  age: 48,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Being frugal by not paying rent',
  catchPhrase: `I don't know why girls don't like to date me`
})

const cesar = new ProjectManager({
  name: 'Cesar',
  location: 'California',
  age: 30,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Great job',
  gradClassName: 'CS11',
  favInstructor: 'Josh'
});

const Shawn = new ProjectManager({
  name: 'Shawn',
  location: 'Las Vegas',
  age: 28,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'cooking apps',
  catchPhrase: 'I never gamble',
  gradClassName: 'CS1',
  favInstructor: 'Napolean'
});

const Jodi = new ProjectManager({
  name: 'Jodi',
  location: 'Seattle',
  age: 30,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'extreme ironing',
  catchPhrase: `I only iron clothes if I'm on top of a mountain when I do it`,
  gradClassName: 'CS1',
  favInstructor: 'Napolean'
});

const adam = new Student({
  name: 'Adam',
  location: 'Boise',
  age: 36,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  previousBackground: 'insurance sales',
  catchPhrase: 'Weeks of coding can save you hours of planning',
  className: 'FSW14',
  favSubjects: ['Web Dev', 'cooking', 'hiking', 'family time']
});

const greg = new Student({
  name: 'Greg',
  location: 'Orlando',
  age: 33,
  gender: 'male',
  favLanguage: 'surfScript',
  specialty: 'surfing',
  previousBackground: 'surfing, only surfing',
  catchPhrase: 'surfing is the best thing to do between pomodoro cycles',
  className: 'FSW14',
  favSubjects: ['Web Dev', 'cooking', 'hiking', 'family time']
});

const john = new Student({
  name: 'John',
  location: 'Denver',
  age: 41,
  gender: 'male',
  favLanguage: 'English',
  specialty: 'Front-end',
  previousBackground: 'Mountaineer',
  catchPhrase: 'do it until you get it right',
  className: 'FSW200',
  favSubjects: ['Web Dev', 'cooking', 'hiking', 'family time']
});

console.log(greg.location);
console.log(greg.catchPhrase);
console.log(adam.PRAssignment('math'));
console.log(john.sprintChallenge('Node'));
console.log(cesar.standUp('FSW14'));
console.log(adam.listsSubjects());