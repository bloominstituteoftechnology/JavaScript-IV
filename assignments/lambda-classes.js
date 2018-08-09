// CODE here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name,
    this.age = props.age,
    this.location = props.location,
    this.gender = props.gender
  }
  speak() {
    // This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
    return console.log(` Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(props){
    super(props);
    this.specialty = props.specialty,
    this.favLanguage = props.favLanguage,
    this.catchPhrase = props.catchPhrase
  }
  demo(subject) {
    // receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    // return console.log(`Today we are learning about ${subject}`)
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    // grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    // return console.log(`${student} receives a perfect score on ${subject}`)
    return `${student} receives a perfect score on ${subject}`
  }
}

class Student extends Instructor {
  constructor(props){
    super(props);
    this.previousBackground = props.previousBackground,
    this.className = props.className,
    this.favSubjects = props.favSubjects
  }
  listsSubjects() {
    // a method that logs out all of the student's favoriteSubjects one by one.
    return console.log(`${this.favSubjects}`) // NOT DONE
  }
  PRAssignment(subject) {
    // a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
    // return console.log(`${this.name} has submitted a PR for ${subject}`)
    return (`${this.name} has submitted a PR for ${subject}.`)
    
  }
  sprintChallenge() {
    // similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    // return console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    return (`${this.name} has begun sprint challenge on ${subject}.`)
  }
}

class ProjectManager extends Student {
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName,
    this.favInstructor = props.favInstructor
  }
  standUp(slackChannel) {
    // a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    // return console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    return (`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(student, subject) {
    // a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    // return console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    return (`${this.name} debugs ${student.name}'s code on ${subject}.`)
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const tom = new Student({
  name: 'Tom',
  location: 'Red Rock',
  age: 26,
  gender: 'male',
  previousBackground: 'quarry yard',
  className: 'CS-12',
  favSubjects: 'archaeology'
})

const barney = new ProjectManager({
  name: 'Barney',
  location: 'Slate City',
  age: 28,
  gender: 'male',
  gradClassName: 'CS1-BC',
  favInstructor: 'Fred'
})

console.log(tom.grade('Tom', 'the test'));
console.log(tom.demo('banjo'));

console.log(fred.name);
console.log(fred.catchPhrase);

console.log(tom.favSubjects);
console.log(tom.listsSubjects);
console.log(tom.PRAssignment);
console.log(tom.sprintChallenge);