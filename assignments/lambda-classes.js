// CODE here for your Lambda Classes
/*

    First we need a Person class. This will be our base-class
    Person receives name age location all as props
    Person receives speak as a method.
    This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
*/

class Person {
  constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
/*
* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Person {
    constructor(attrs){
        super(attrs)
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.CatchPhrase = attrs.CatchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}
/*
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
*/

class student extends Person {
    constructor(attrs){
        super(attrs)
        this.previousBackground = previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listSubjects() {
        student.favSubjects.foreach(function(subject,idx){
            let num=idx - 1;
            console.log(`${this.name}'s number ${num} favorite subject is ${subject}.`)
    }, 0)
    }
    pRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}`)
    }
}
