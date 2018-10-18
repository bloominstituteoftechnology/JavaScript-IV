// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructors extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo() {
    return `Today we are learning about ${subject}.`
  }
  grade() {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

class Student extends Instructors {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects() {
    return `${favSubjects}`;
  }
  PRAssignment() {
    return `${student.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge() {
    return `${student.name} has begun sprint challenge on ${subject}.`
  }
}

class ProjectManager extends Student {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp () {
    console.log(`${this.name} announces to ${channel}, @channel standup times!`);
  }
  debugsCode () {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
  }
}

const jon = new Instructors({
  name: 'Jon',
  age: 33,
  location: 'Seattle',
  gender: 'M',
  specialty: 'JavaScript',
  favLanguage: 'JavaScript',
  catchPhrase: 'latte, with heavy cream',
})

const jules = new Instructors({
  name: 'Jules',
  age: 29,
  location: 'Menlo Park',
  gender: 'F',
  specialty: 'Java',
  favLanguage: 'Python',
  catchPhrase: 'there is no spoon',
})

const joan = new Instructors({
  name: 'Joan',
  age: 27,
  location: 'Long Beach',
  gender: 'F',
  specialty: 'PHP',
  favLanguage: 'SQL',
  catchPhrase: 'I need %110',
})

const jared = new Student({
  name: 'Jared',
  age: 21,
  location: 'Palo Alto',
  gender: 'M',
  previousBackground: 'play football',
  className: 'UX12',
  favSubjects: [
    'art',
    'music',
    'design'
  ],
})

const jacky = new Student({
  name: 'Jacky',
  age: 19,
  location: 'San Diego',
  gender: 'F',
  previousBackground: 'mathlete',
  className: 'DS13',
  favSubjects: [
    'algebra',
    'statistics',
    'triganometry'
  ],
})

const joe = new Student({
  name: 'Joe',
  age: 20,
  location: 'Chicago',
  gender: 'M',
  previousBackground: 'delivery',
  className: 'FSW16',
  favSubjects: [
    'design',
    'marketing',
    'writing'
  ],
})

const jenny = new ProjectManager({
  name: 'Jenny',
  age: 25,
  location: 'Kona',
  gender: 'F',
  specialty: 'CSS',
  favLanguage: '.LESS',
  catchPhrase: 'aloha',
  gradClassName: 'FSW5',
  favInstructor: 'Joan',
})

const jermy = new ProjectManager({
  name: 'Jermy',
  age: 24,
  location: 'Portland',
  gender: 'M',
  specialty: 'React',
  favLanguage: 'JavaScript',
  catchPhrase: 'no sun today',
  gradClassName: 'FSW2',
  favInstructor: 'Jon',
})

const jordan = new ProjectManager({
  name: 'Jordan',
  age: 23,
  location: 'Miami',
  gender: 'F',
  specialty: 'Python',
  favLanguage: 'C++',
  catchPhrase: 'suns out guns out',
  gradClassName: 'iOS7',
  favInstructor: 'Jules',
})
