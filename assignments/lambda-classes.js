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
    console.log(`${student.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
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

/*

## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

  */
