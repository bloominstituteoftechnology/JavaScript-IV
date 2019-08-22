// CODE here for your Lambda Classes

/*
- We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a 
    brand new data set.
* Lambda personnel can be broken down into three different types of people.
    - Instructors - extensions of Person
    - Students - extensions of Person
    - Project Managers - extensions of Instructors
IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
*/

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock`' where `name` and `location` are the object's own props

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this. location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        returns `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}.`)
    }
}


const instructorGeorge = new Instructor ({
    name: "George",
    age: 33,
    location: "Utah",
    favLanguage: "JavaScript",
    specialty: "Back-End",
    catchPhrase: "Woo-Hoo!"
})

const instructorMary = new Instructor ({
    name: "Mary",
    age: 28,
    location: "California",
    favLanguage: "CSS",
    specialty: "Front-End",
    catchPhrase: "Noiiiice"
})

// * ProjectManagers are extensions of Instructors
// * Project Manger has the following unique props:
// * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standup time!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const pmCurtis = new ProjectManager ({
    name: "Curtis",
    age: 28,
    location: "Montana",
    specialty: "User Research",
    favLanguage: "CSS",
    catchPhrase: "Ruh-Oh",
    gradClassName: "UX2",
    favInstructor: "Ryan Hamblin"

})

const pmHannah = new ProjectManager ({
    name: "Hannah",
    age: 25,
    location: "Idaho",
    specialty: "JavaScript",
    favLanguage: "JavaScript",
    catchPhrase: "We got this",
    gradClassName: "Web20",
    favInstructor: "Nick Basile"

})



// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject){
        console.log(`${student.name} has begun spring challenge on ${subject}.`)
    }
}

const studentNathan = new Student ({
    name: "Nathan",
    age: 30,
    location: "Wisconsin",
    previousBackground: "Beer Sales",
    className: "UX2",
    favSubjects: ["Web Dev", "User Experience Design"]
})

const studentMeera = new Student ({
    name: "Meera",
    age: 30,
    location: "Utah",
    previousBackground: "ABA Therapy",
    className: "UX2",
    favSubjects: ["Web Dev", "User Experience Design"]
})


console.log(studentMeera.speak());
console.log(studentNathan.listsSubjects());
console.log(pmCurtis.standUp("Curtis-Web23"));
console.log(pmHannah.)




/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
