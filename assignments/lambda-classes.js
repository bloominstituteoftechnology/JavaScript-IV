// define objects, properties, and methods

class Person {
  constructor(attributes) {
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes)
    this.specialty = attributes.specialty
    this.favLanguage = attributes.favLanguage
    this.catchPhrase = attributes.catchPhrase
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes)
    this.previousBackground = attributes.previousBackground
    this.className = attributes.className
    this.favSubjects = attributes.favSubjects
  }

  listSubjects() {
    this.favSubjects.forEach(subject => console.log(subject))
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes)
    this.gradClassName = attributes.gradClassName
    this.favInstructor = attributes.favInstructor
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    )
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}

// instantiate objects

// instructors

const Glorthox = new Instructor({
  name: 'Glorthox',
  location: 'Jupiter',
  age: 456,
  gender: 'male',
  favLanguage: 'Haskell',
  specialty: 'DevOps',
  catchPhrase: `Blergle dirgle daaa!!`
})

const Zergle = new Instructor({
  name: 'Zergle',
  location: 'Pluto',
  age: 345,
  gender: 'female',
  favLanguage: 'Clojure',
  specialty: 'Cloud',
  catchPhrase: `My name is Zergle, m'kay?`
})

// students

const Jeff = new Student({
  name: 'Jeff',
  location: 'Berlin',
  age: 17,
  gender: 'male',
  previousBackground: 'JavaScript, CSS, and multivariate calculus',
  className: 'FSW14',
  favSubjects: ['a', 'b', 'c']
})

const Jennifer = new Student({
  name: 'Jennifer',
  location: 'Stockholm',
  age: 43,
  gender: 'female',
  previousBackground: 'Life Experience',
  className: 'FSW87',
  favSubjects: [`All of them`]
})

const Constantine = new Student({
  name: 'Constantine',
  location: 'Rome',
  age: 43,
  gender: 'male',
  previousBackground: 'Being emperor',
  className: 'FSW14',
  favSubjects: ['Algorithms', 'CS']
})

// PMs

const GiantSquid = new ProjectManager({
  name: 'GiantSquid',
  location: 'The Mariana Trench',
  age: Number.POSITIVE_INFINITY,
  gender: 'female',
  favLanguage: 'SquidScript',
  specialty: 'Sinking ships',
  catchPhrase: `I am the Krakken`,
  gradClassName: 'AIMLDSTHLES3000',
  favInstructor: 'Glorthox'
})

const Tiger = new ProjectManager({
  name: 'Tiger',
  location: 'Siberia',
  age: 20,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Rar`,
  gradClassName: 'FSW14',
  favInstructor: 'Zergle'
})

// testing

Glorthox.demo(Glorthox.favLanguage)
Zergle.grade(Jennifer, Zergle.specialty)
Jeff.listSubjects()
Jennifer.PRAssignment('JavaScript LVI')
Constantine.sprintChallenge('CSS Least')
console.log(GiantSquid.age)
GiantSquid.standUp('#PM-GiandSquid')
Tiger.debugsCode(Constantine, 'Ruling')
