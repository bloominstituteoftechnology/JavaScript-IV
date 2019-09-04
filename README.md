//initial commit here

# JavaScript IV

This challenge focuses on classes in JavaScript using the new `class` keyword.

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [X] Create a forked copy of this project.
* [X] Add your project manager as collaborator on Github.
* [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [X] Create a new branch: git checkout -b `<firstName-lastName>`.
* [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [X] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [ ] Add your project manager as a reviewer on the pull-request
* [ ] Your project manager will count the project as complete by merging the branch back into master.

## Assignment Description

You already pretty much know all about classes but you're used to seeing them built in the following context:

```js
function Person(personAttributes)  {
  this.name = personAttributes.name;
  this.age = personAttributes.age;
  this.location = personAttributes.location;
}

const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock'
});
```

* Because none of the above code is new, you're about to see your world get much much easier when dealing with Object Creation and Classical Inheritance as it pertains to JavaScript.
* The Class Keyword makes this SO MUCH EASIER!
* **Fork** and clone this repository.
* **Complete** all of the exercises found in the assignment files.

## `prototype-refactor` - Take existing code and make it modern.

* You're going to work with your prototypes assignment you built out yesterday.
* `Challenge:` **Convert** all of your constructors into ES6 Classes using the `class` and `extends` keywords. You should be able to run your same logs and they should build out the proper expected behaviors.

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
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```

#### Person

[X]First we need a Person class. This will be our `base-class`
[X]Person receives `name` `age` `location` all as props
[X]Person receives `speak` as a method.
[X]This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  [X]`specialty` what the Instructor is good at i.e. 'redux'
  [X]`favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  [X]`catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  [X]`demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  [X]`grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'<-- COMPARE TO THE OTHER METHODS AND SEE IF THEY NEED THE PARAMS...they do, don't need this. in front of the string template literal --> 

#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  [X]`previousBackground` i.e. what the Student used to do before Lambda School
  [X]`className` i.e. CS132
  [X]`favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript'] <-- CHECK IF THIS WORKS!!....it does, needs the function () in the console.log -->
* Student has the following methods:
  [X] `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one. <-- CHECK IF THIS WORKS!! needs the function () in the console.log (same as above) -->
  [X] `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}` <-- CHECK IF THIS WORKS!!....it does, just use a string in the console.log -->
  [X]`sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  [X] `gradClassName`: i.e. CS1
  [X] `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  [X]`standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​ <-- CHECK IF THIS WORKS!!...it does-->
  [X] `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}` <-- CHECK IF THIS WORKS!!...it does-->

#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
