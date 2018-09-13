// CODE here for your Lambda Classes

class Person {
  constructor(peopleAttributes) {
    this.name = peopleAttributes.name;
    this.age = peopleAttributes.age;
    this.location = peopleAttributes.location;
    this.gender = peopleAttributes.gender;
  }

  speak() {
    return `Hello, my name is ${this.name}. I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listSubjects() {
    return `${this.name}'s favorite subjects are ${this.favSubjects.join(', ')}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class PM extends Instructor {
  constructor(PMAttributes){
    super(PMAttributes);
    this.gradClassName = PMAttributes.gradClassName;
    this.favInstructor = PMAttributes.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

// testing person objects
const andrew = new Person({
  name: 'Andrew',
  age: 40,
  location: 'Chatanooga',
  gender: 'male',
});

console.log(andrew);
console.log(andrew.speak());
console.log(console.log(andrew.age));

// instructor objects
const josh = new Instructor({
  name: 'Josh',
  age: 38,
  location: 'Utah',
  gender: 'male',
  favLanguage: 'JavaScript',
  catchPhrase: 'Whatever the big boss wants.',
});

const yoda = new Instructor({
  name: 'Yoda',
  age: 132,
  location: 'Dagobah',
  gender: 'male',
  favLanguage: 'Yoda-Speak',
  catchPhrase: 'Do or do not. There is no try.',
});

const socrates = new Instructor({
  name: 'Socrates',
  age: 50,
  location: 'Athens',
  gender: 'male',
  favLanguage: 'Greek',
  catchPhrase: 'Unexamined code is not worth compiling.',
});

// student objects

const luke = new Student({
  name: 'Luke',
  age: 25,
  location: 'Tatooine',
  gender: 'male',
  favLanguage: 'English',
  catchPhrase: 'But I was going into Tosche Station to pick up some power converters!',
  previousBackground: 'Moisture farmer',
  className: 'FSW1',
  favSubjects: ['Droids', 'the Force', 'Jedi training'],
});


const justin = new Student({
  name: 'Justin',
  age: 38,
  location: 'Oregon',
  gender: 'male',
  favLanguage: 'Python',
  catchPhrase: 'I don\'t have a catchphrase.',
  previousBackground: 'publishing',
  className: 'FSW14',
  favSubjects: ['CSS', 'JavaScript', 'Python'],
});

// PM objects

const jeffery = new PM({
  name: 'Jeffery',
  age: 30,
  location: 'LA',
  gender: 'male',
  favLanguage: 'React',
  catchPhrase: 'Do or do not. There is no try.',
  gradClassName: 'CS11',
  favInstructor: 'Yoda',
});

const allen = new PM({
  name: 'Allen',
  age: 29,
  location: 'Someplace',
  gender: 'male',
  favLanguage: 'Go',
  catchPhrase: 'Do or do not. There is no try.',
  gradClassName: 'CS11',
  favInstructor: 'Socrates',
});

// tests
[josh, yoda, socrates].forEach(function(instructor) {
  console.log(instructor);
  console.log(instructor.demo('JS-IV'));
  console.log(instructor.grade(justin, 'javascript'));
});

[jeffery, allen].forEach(function(pm) {
  console.log(pm);
  console.log(pm.standUp('FSW14'));
  console.log(pm.debugsCode(justin, 'CSS'));
});

[justin, luke].forEach(function(student) {
  console.log(student.listSubjects());
  console.log(student.PRAssignment('Javascript IV'));
  console.log(student.sprintChallenge('the Force'));
});
