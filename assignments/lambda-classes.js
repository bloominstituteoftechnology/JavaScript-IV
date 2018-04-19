//Wladimir Fraga
// CODE here for your Lambda Classes

/*
#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock​​​​​` where `name` and `location` 
are the object's own props
*/

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} and are the object's own props`);
    }
}

/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subect` string as an argument and logs out the phrase '​​​​​Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a student object and a subject string as arguments and logs out '​​​​​{student.name} receives a perfect score on {variables​​​​​}'

  */
 
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`); 
    }
    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    setGrade(student) {
        student.grade+=Math.floor(Math.random() * (11)) -5;
        student.grade = student.grade < 0 ? 0 : student.grade > 100 ? 100 : student.grade; 
        return student.grade
    }
}

  /*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument 
  * and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`
*/

class Student extends Person {
    constructor (studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(favSubject => {
            console.log(`${favSubject}`);
        });
    } 
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    } 
    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`);
    } 
    graduate () {
        return this.grade >= 70 ? true : false;
    }
}

/*
  #### Project Mananger

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following uniqe props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManangers have the following Methods:
  * `standUp` a method that takes in a slack channel 
  * and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object 
  * and a subject and logs out `{​​​​​name} debugs {student.name}'s code on {subject}`

  */

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName
        this.favInstructor = projectManagerAttributes.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`);
    }
}

  /**
 * ------- INSTANCES -------
 */

 /** ------- Instructor ------- */

const josh = new Instructor({
    name: 'Josh',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const pedro = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Docs, refer to documentation!'
});
  
/** ------- Student ------- */

const vlad = new Student({
      name: 'Wladimir',
      location: 'Florida',
      age: 48,
      gender: 'male',
      previousBackground: 'Some HTML, CSS and JS',
      className: 'CS10',
      favSubjects: ['Javascript', 'React', 'Node'],
      grade: 0,
});
const sarah = new Student({
    name: 'Sarah',
    location: 'England',
    age: 39,
    gender: 'female',
    previousBackground: 'Antropology',
    className: 'CS11',
    favSubjects: ['Humanism', 'Gestalt'],
    grade: 75,
});
    
/** ------- Project Manager ------- */    

const cole = new ProjectManager({
    name: 'Cole',
    location: 'California',
    age: 30,
    gender: 'female',
    favLanguage: 'C',
    specialty: 'Back-end',
    catchPhrase: `Refer to syllabus`
});
const pepito = new ProjectManager({
    name: 'Pepito',
    location: 'Colombia',
    age: 57,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'React',
    catchPhrase: 'Instantiate yourself!'
});

/**
 * ------- PLAY GORUND -------
 */
/** ------- Instructor ------- */

// josh
console.log(josh);
console.log(josh.demo("JS"));
console.log(josh.grade(vlad, "JS"));

// pedro
console.log(pedro);

/** ------- Student ------- */

// vlad
console.log(vlad);
console.log(vlad.listsSubjects());
console.log(vlad.PRAssignment("Node"));
console.log(vlad.sprintChallenge("React"));

// sarah
console.log(sarah);

/** ------- Project Manager ------- */   

// cole
console.log(cole);
console.log(cole.standUp("Struggling-Brains"));
console.log(cole.debugsCode(sarah, 'JS'));

// pepito
console.log(pepito);

/*
#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor 
(this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
*/


console.log(vlad.grade);
console.log(vlad.graduate());

do {
    console.log(cole.setGrade(vlad));
} while ( ! vlad.graduate());

console.log(vlad.graduate());
console.log(vlad.grade);