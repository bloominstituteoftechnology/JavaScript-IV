// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location) {
    this.name = name
    this.age = age
    this.location = location
  }
speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
}
}

class Instructor extends Person{
  constructor(speciality, favLanguage, catchPhrase) {
    super()
    this.speciality = speciality
    this.favLanguage = favLanguage
    this.catchPhrase = catchPhrase
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject} `)
  }
  grade(student, subject) {
    console.log(`${student.name} recieved a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(name, age, location, previousBackground, className, favSubjects) {
    super(name, age, location)
    this.name = name
    this.age = age
    this.location = location
    this.previousBackground = previousBackground
    this.className = className
    this.favSubjects = favSubjects
  }
  listsSubjects() {
      this.favSubjects.forEach(subject => {
          console.log(`${subject}`)
      })
  }
  PRAssignment(student, subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }
  sprintChallange(student, subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(gradClassName, favInstructor) {
    super()
    this.gradClassName = gradClassName
    this.favInstructor = favInstructor
  }
  standup(channal) {
    console.log(`@${channal} standup time`)
  }
  debugCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

const person = new Person('James', 34, 'Glen Ridge' )
const instructor = new Instructor('redux', 'Javascript', 'Do not forget the homies')
const student = new Student('James', 35, 'CA', 'Telecomm', 'CS12', ['Html', 'CSS', 'Javascript'])
const pm = new ProjectManager('CS1', 'Sean')
instructor.demo('Data structure')
instructor.grade(student, 'HTML')
student.listsSubjects()
student.PRAssignment(student, 'CSS')
student.sprintChallange(student, 'Javascript')
pm.standup()