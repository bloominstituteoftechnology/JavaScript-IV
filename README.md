// # JavaScript IV

// This challenge focuses on classes in JavaScript using the new `class` keyword.

// ## Assignment Description

// You already pretty much know all about classes but you're used to seeing them built in the following context:

// ```js
// function Person(personAttributes)  {
//   this.name = personAttributes.name;
//   this.age = personAttributes.age;
//   this.location = personAttributes.location;
// }

// const fred = new Person({
//   name: 'Fred',
//   age: 37,
//   location: 'Bedrock'
// });
// ```

// * Because none of the above code is new, you're about to see your world get much much easier when dealing with Object Creation and Classical Inheritance as it pertains to JavaScript.
// * The Class Keyword makes this SO MUCH EASIER!
// * **Fork** and clone this repository.
// * **Complete** all of the exercises found in the assignment files.

// ## `prototype-refactor` - Take existing code and make it modern.

// * You're going to work with your prototypes assignment you built out yesterday. Only this time you're going to actually have a solution built out for you.
// * `Challenge:` **Convert** all of your constructors into ES6 Classes using the `class` and `extends` keywords. You should be able to run your same logs and they should build out the proper expected behaviors.

// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// **COMPLETE** First we need a Person class. This will be our `base-class`
// **COMPLETE** Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// **COMPLETE** This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
  constructor(personObj) {
      this.name = personObj.name;
      this.age = personObj.age;
      this.location = personObj.location;
      this.gender = personObj.gender;
  }
   speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}
// const myPerson = new Person('Marcus', 38, 'Las Vegas', 'Male');

// #### Instructor

// **COMPLETE** Now that we have a Person as our base class, we'll build our Instructor class.
// **COMPLETE** Instructor uses the same attributes that have been set up by Person
// **COMPLETE** Instructor has the following unique props:
// **COMPLETE** `specialty` what the Instructor is good at i.e. 'redux'
// **COMPLETE** `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
// **COMPLETE** `catchPhrase` i.e. `Don't forget the homies`
// **COMPLETE** Instructor has the following methods:
// **COMPLETE** `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// **COMPLETE** `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(instructorObj) {
      super(instructorObj);
      this.specialty = instructorObj.specialty;
      this.favLanguage = instructorObj.favLanguage;
      this.catchPhrase = instructorObj.catchPhrase;
  }
   demo(subject) {
      console.log(`Today we are learning about ${subject}.`);
  }
   grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(studentObj) {
      super(studentObj);
      this.previousBackground = studentObj.previousBackground;
      this.className = studentObj.className;
      this.favSubjects = studentObj.favSubjects;
  }
   listsSubjects() {
      this.favSubjects.forEach(element => {
          console.log(element);
      });
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
}
   PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

}
// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
  constructor(pmObj) {
      super(pmObj);
      this.gradClassName = pmObj.gradClassName;
      this.favInstructor = pmObj.favInstructor;
  }
   standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
  }
   debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}


const Marcus = new Student({
  name: 'Marcus Bass',
  age: 38,
  location: 'Las Vegas',
  gender: 'Male',
  previousBackground: 'Hospitality',
  className: 'CSPT2',
  favSubjects: ['JavaScript', 'HTML', 'CSS']
});

const BigMyke = new ProjectManager({
  name: 'Mykeal Kenny',
  age: '21 years young',
  location: 'Florida Man',
  gender: 'Male',
  specialty: 'Code Ninja',
  favLanguage: 'JavaScript',
  catchPhrase: 'Right on man!',
  gradClassName: 'Unsure',
  favInstructor: 'Himself'
});
console.log(Marcus);

Marcus.listsSubjects();

console.log(BigMyke);

BigMyke.grade(Marcus, 'JavaScript');

BigMyke.demo('JavaScript');

BigMyke.debugsCode(Marcus, 'Node.js Project'); 

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
