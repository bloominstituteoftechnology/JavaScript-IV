// CODE here for your Lambda Classes
class Person {
  constructor (personAttribs) {
    console.log(personAttribs, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    this.name = personAttribs.name
    this.age = personAttribs.age
    this.location = personAttribs.location
  }
  speak () {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor (instructorAttribs) {
    super(instructorAttribs)
    this.specialty = instructorAttribs.specialty
    this.favLanguage = instructorAttribs.favLanguage
    this.catchPhrase = instructorAttribs.catchPhrase
  }
  demo (subject) {
    console.log(`Today we are learning about ${subject} `)
  }
  grade (student, subject) {
    console.log(`${student.name} received a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor (studentAttribs) {
    console.log(studentAttribs, 'Student Attributes')
    super(studentAttribs)
    this.previousBackground = studentAttribs.previousBackground
    this.className = studentAttribs.className
    this.favSubjects = studentAttribs.favSubjects
  }
  listsSubjects () {
    this.favSubjects.forEach(subject => {
      console.log(`${subject}`)
    })
  }
  PRAssignment (student, subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }
  sprintChallange (student, subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor (pmAttribs) {
    super(pmAttribs)
    this.gradClassName = pmAttribs.gradClassName
    this.favInstructor = pmAttribs.favInstructor
  }
  standup (channal) {
    console.log(`@${channal} standup time`)
  }
  debugCode (student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

const person = new Person({name: 'James', age: 34, location: 'Glen Ridge'})
const instructor = new Instructor({name: 'James', age: 34, location: 'Glen Ridge', specialty: 'redux', favSubjects: 'Javascript', catchPhrase: 'Do not forget the homies'})
const student = new Student({name: 'James', age: 34, location: 'Glen Ridge', previousBackground: 'Telecom', className: 'CS12', favSubjects: ['Html', 'CSS', 'Javascript']})
const pm = new ProjectManager('CS1', 'Sean')
console.log(student)
instructor.demo('Data structure')
instructor.grade(student, 'HTML')
student.listsSubjects()
student.PRAssignment(student, 'CSS')
student.sprintChallange(student, 'Javascript')
pm.standup()
person.speak()
