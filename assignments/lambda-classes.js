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
/*
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's)
 that will randomly add or subtract points to a student's grade. _Math.random_ will help.
*/
changeGrade(student, subject) {
        let neg = Math.random();
        if (neg < 0.5)
        {neg = -1}
        else{neg = 1}
        const amt = Math.round(neg * 10 * Math.random());
        let oldGrade = student.grade;
        student.grade = student.grade + amt;

        console.log(`${student.name}'s grade was ${oldGrade}, but is now ${student.grade} for ${subject}`)
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

class Student extends Person {
    constructor(attrs){
        super(attrs)
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
//        * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
        this.grade = attrs.grade; 
    }
    listSubjects() {
        let nam = this.name;
        this.favSubjects.forEach(function(subject,idx) {
            let num = idx + 1;
            console.log(`${nam}'s number ${num} favorite subject is ${subject}.`)
    }, 0)
    }
    pRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}`)
    }
}
/*
* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
    constructor(attrs){
        super(attrs)
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}
const scott = new Student({
    name: 'Scott',
    age: '21',
    location: 'North Carolina',
    previousBackground: 'Computer Programmer',
    className: 'Web21',
    favSubjects: ['Javascript','Preprocessor'],
// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.    
    grade: 12,
})
console.log(scott);
scott.listSubjects();
scott.pRAssignment('Writing');
scott.sprintChallenge('Singing');


const joe = new ProjectManager
({
name: 'Joe', age: 18, location: 'North Pole', specialty: 'Java', favLanguage: 'SAS', CatchPhrase: 'Oh Yeah', gradClassName: 'ab12', favInstructor: 'Pat'
});

console.log(joe);
joe.demo('paper');
joe.grade(scott, 'Skiing');
joe.standup('xyz');
joe.debugsCode(scott, 'thought');
joe.changeGrade(scott,'Math');
