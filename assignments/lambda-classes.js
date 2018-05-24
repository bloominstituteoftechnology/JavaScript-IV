// CODE here for your Lambda Classes
class Person {
  constructor (attributes) {
    this.name = attributes.name
    this.location = attributes.location
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

const jose = new Person({ name: 'Jose', location: 'LA' })

console.log(jose.speak())

class Instructor extends Person {
  constructor (attributes) {
    super(attributes)
    this.specialty = attributes.specialty
    this.favLanguage = attributes.favLanguage
    this.catchPhrase = attributes.catchPhrase
  }

  demo (subject) {
    return `Today we are learning about ${subject}`
  }
  grade (student, subject) {
    return `${student} receives a perfect score on ${subject}`
  }
}

// const ryan = new Instructor({
//   specialty: 'react',
//   favLanguage: 'javascript',
//   catchPhrase: 'none',
// });

// console.log(ryan.grade('luis', 'java'))

class Students extends Person {
  constructor (attributes) {
    super(attributes)
    this.previousBackGround = attributes.previousBackGround
    this.className = attributes.className
    this.favSubject = attributes.favSubject
  }
  listsSubjects () {
    return `${this.name} likes ${this.favSubject}`
  }
  PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge (subject) {
    return `student.name has begun spring challenge on ${subject}`
  }
}

class ProjectManagers extends Instructor {
  constructor (attributes) {
    super(attributes)
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
  }

  standUp (slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`
  }
  debugsCode (student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const ryan = new Instructor({
  name: 'Ryan',
  location: 'Cali',
  specialty: 'Java',
  favLanguage: 'Java',
  catchPhrase: 'Nifty'
})

const Bryan = new Instructor({
  name: 'Bryan',
  location: 'Boston',
  specialty: 'Yarn',
  favLanguage: 'Ruby',
  catchPhrase: "Hey ya'll"
})
console.log(Bryan.demo('Yarn'))

const Kevin = new Instructor({
  name: 'Kevin',
  location: 'Texas',
  specialty: 'Human resources',
  favLanguage: 'Python'
})

const sally = new ProjectManagers({
  name: 'Sally',
  location: 'Oregon',
  specialty: 'Node',
  previousBackGround: 'Management',
  gradClassName: 'CS10'
})
console.log(sally)

const Xanadu = new ProjectManagers({
  name: 'Xanadu',
  location: 'Wyoming',
  specialty: 'CSS',
  favLanguage: 'CSS',
  favInstructor: 'Ron',
  previousBackGround: 'Ranching',
  catchPhrase: 'Take me to Xanadu',
  gradClassName: 'CS4'
})
console.log(Xanadu.standUp('cs_10 Help'))

const Joe = new Students({
  name: 'Joe',
  location: 'Liberal lala land',
  previousBackGround: 'Playerr',
  className: 'CS 10',
  favSubject: 'CSS'
})
console.log(Joe.listsSubjects())

const Mike = new Students({
  name: 'Mike',
  location: 'Florida',
  favLanguage: 'JS',
  favInstructor: 'Bob',
  previousBackGround: 'Food Service',
  catchPhrase: 'Mike Rox',
  gradClassName: 'CS12'
})
console.log(Mike.PRAssignment('JSIII'))
