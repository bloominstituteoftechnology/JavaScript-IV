// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
    }

    speak() {
        console.log(`Hellow, my name is ${this.name}. I am from ${this.location}.`)
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
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects(subjectsArray){
        subjectsArray.forEach(element => {
            console.log(element);
        });
    }

    prAssignment(subject){
        console.log(`student.name has submitted a PR for ${subject}.`);
    }

    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
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

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
