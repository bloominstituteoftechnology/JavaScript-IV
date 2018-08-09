// CODE here for your Lambda Classes
class Person {
  constructor(props){
    this.specialty = props.specialty,
    this.favLanguage = props.favLanguage,
    this.catchPhrase = props.catchPhrase
  }
  demo(subject) {
    // receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    return console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    return console.log(`${student.name} receives a perfect score on ${subject}`)
    // grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  }
}

class Student {
  constructor(props){
    this.previousBackground = props.previousBackground,
    this.className = props.className,
    this.favSubjects = props.favSubjects,
  }
  listsSubjects() {
    // a method that logs out all of the student's favoriteSubjects one by one.
  }
  PRAssignment() {
    // a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
  }
  sprintChallenge() {
    // similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
  }
}

class ProjectManager {
  constructor(props){
    this.gradClassName = props.gradClassName,
    this.favInstructor = props.favInstructor
  }
  standUp() {
    // a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  }
  debugsCode() {
    // a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
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