// CODE here for your Lambda Classes
class Person {
  constructor(personAttr){
    this.name = personAttr.name
    this.age = personAttr.age
    this.location = personAttr.locaiton
    this.gender = personAttr.name
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructorAttr){
    super(instructorAttr)
    this.specialty = instructorAttr.specialty
    this.favLanguage = instructorAttr.favLanguage
    this.catchPhrase = instructorAttr.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
  grading(prop){
    prop += Math.floor(Math.random()*100)
  }
}

class Student extends Person {
  constructor(studentAttr){
    super(studentAttr)
    this.previousBackground = studentAttr.previousBackground
    this.className = studentAttr.className
    this.favSubjects = studentAttr.favSubjects
    this.grade = 94;
  }
  listSubjects() {
    return this.favSubjects
  }
  PRAssignment(subject) {
    return `${Student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${Student.name} has begun sprint challengeon ${subject}`
  }
  grade() {
    return this.grade
  }
  graduate() {
    if (this.grade >= 70) {
      return `Student can graduate`
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(pmAttr) {
    super(pmAttr)
    this.gradClassName = pmAttr.gradClassName
    this.favInstructor = pmAttr.favInstructor
  }
  standUp(channel) {
    return `${ProjectManagers.name} announces to ${channel}, @${channel} standy times!`
  }
  debugsCode(student, subject) {
    return `${ProjectManagers.name} debugs ${student.name}'s code on ${subject}`
  }
}