// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
    this.gender= props.gender
  }

  speak() {
    console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty
    this.favLanguage = props.favLanguage
    this.catchPhrase = props.catchPhrase
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(props){
    super(props)
    this.previousBackground = props.previousBackground
    this.className = props.className
    this.favSubjects = props.favSubjects
  }

  listSubjects() {
    this.favSubjects.map(item => console.log(item))
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props)
    this.gradClassName = props.gradClassName
    this.favInstructor = props.favInstructor
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel} stand up time!`)
  }

  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`)
  }
}
