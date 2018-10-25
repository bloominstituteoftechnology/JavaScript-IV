// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
    this.gender= props.gender
  }

  speak() {
    console.log(`Hello my name is ${this.name}, and I am from ${this.location]}`)
  }
}

class Intructor extends Person {
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
