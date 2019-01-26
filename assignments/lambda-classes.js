// CODE here for your Lambda Classes



/*

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:


#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

#### Stretch Problem
*/

class Person {
    
  constructor(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.location = attributes.location;
  this.gender = attributes.gender;
  }

  speak() {
    console.log(` Hello, my name is ${this.name}, I am from ${this.location}.`)
  }
  
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }

  grade(subject) {
    console.log(`${Student.name} has recieved a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(attributes) {
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubject = attributes.favSubject;
  }

    listObjects() {
      return Student.favSubject;
    }

    PRAssignment(subject) {
      console.log(`${Student.name} has submitted a PR for  ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${Student.name} has started a sprint for ${subject}`)
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = this.favInstructor;

  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
  }

  debugsCode(subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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

const John = new Instructor({
  name: 'John',
  location: 'Kansas',
  age: 25,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `JS FOR LIFE`
});

const fred = new Instructor({
  name: 'Kiwi',
  location: 'NY City',
  age: 22,
  gender: 'female',
  favLanguage: 'css',
  specialty: 'Front-end',
  catchPhrase: `I like pretty things`
});

const fred = new Student({
  name: 'Jason' ,
  location: 'Texas' ,
  age: 18 ,
  gender: 'male' ,
  previousBackground: 'retail' ,
  className: 'web14' ,
  favSubject: 'JavaScript',

});

const fred = new Student({
  name: 'Welma' ,
  location: 'Bedrok' ,
  age: 15 ,
  gender: 'female' ,
  previousBackground: 'hostess' ,
  className: 'ios10' ,
  favSubject: 'Swift',

});

const fred = new ProjectManagers({
  name: 'Jason' ,
  location: 'Texas' ,
  age: 18 ,
  gender: 'male' ,
  gradClassName: 'CS 1' ,
  favInstructor: 'Dennis'

});