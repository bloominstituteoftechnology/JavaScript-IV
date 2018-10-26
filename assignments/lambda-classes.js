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
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.favSubjects = attributes.favSubjects;
    }

    standUp(slackChannel){
        console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}

//TEST
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.name);

  const ira = new Student({
    name: 'Ira Sanchez',
    location: 'Phoenix',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'working on it',
    catchPhrase: `Que pasa, Mufasa?`
  });

  console.log(ira.prAssignment('Javascript-IV'));


// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
