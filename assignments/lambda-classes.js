// CODE here for your Lambda Classes

//PERSON class
class Person {
  constructor(person) {
    this.name = person.name
    this.age = person.age
    this.location = person.location
    this.gender = person.gender
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`
  }
}

//INSTRUCTOR class
class Instructor extends Person{
  constructor(instructor) {
    super(instructor)
    this.specialty = instructor.specialty
    this.favLanguage = instructor.favLanguage
    this.catchPhrase = instructor.catchPhrase
  }
  demo() {
    return `Today we are learning about ${this.specialty}.`
  }
  grade() {
    return `${this.name} receives a perfect score on ${this.specialty}`
  }
}

//STUDENT class
class Student extends Person{
  constructor(student) {
    super(student)
    this.previousBackground = student.previousBackground
    this.className = student.className
    this.favSubjects = student.favSubjects
  }
  listsSubjects(){
    this.favSubjects.forEach(subject => {
      console.log(subject)
    });
  }

  PRAssignment() {
    return `${this.name} has submitted a PR for ${SUBJECT}`
  }

  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${SUBJECT}`
  }
}

//PROJECT MANAGER
class ProjectManager extends Instructor{
  constructor(pm){
    super(pm)
    this.gradClassName = pm.gradClassName
    this.favInstructor = pm.favInstructor
  }

  standUp(){
    return `${this.name} debugs ${student.name}'s code on ${SUBJECT}`
  }

  debugsCode() {
    return `${this.name} debugs ${student.name}'s code on ${SUBJECT}`
  }
}

