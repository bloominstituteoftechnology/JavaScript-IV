/**
 * A class to represent a person at school.
 * @class
 * @constructor
 * @property name the person's name
 * @property age the person's age
 * @property location the person's location
 * @property gender the person's gender
 * @function speak() return a string  
 */

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
} 

/**
 * A class to represent an instructor at school.
 * @class
 * @constructor
 * @augments Person
 * @property specialty the instructor's specialty
 * @property favLanguage the instructor's favLanguage
 * @property catchPhrase the instructor's catchPhrase
 * @function demo() 
 *      @param subject 
 *      @returns string '​​​​​Today we are learning about {subject}' 
 * @function grade() 
 *      @param studentObject
 *      @param subject
 *      @returns string '​​​​​{student.name} receives a perfect score on {subject}'
 */
class Instructors extends Person {
    constructor(instructorObj){
        super(instructorObj);
        this.specialty = instructorObj.specialty;
        this.favLanguage = instructorObj.favLanguage;
        this.catchPhrase = instructorObj.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    }
}

/**
 * @class
 * @constructor
 * @augments Person
 * @property previousBackground the student's previousBackground
 * @property favSubjects array the student's favSubjects list
 * @property className the student's className
 * @function listsSubjects() 
 *      @returns all of the student's favoriteSubjects
 * @function PRAssignment()
 *      @param subject 
 *      @returns string `The ${student name} has submitted a PR for ${subject}`
 * @function sprintChallenge() 
 *      @param subject 
 *      @returns string `The ${student name} has begun spring challenge on {subject}`
*/

class Students extends Person {
    constructor(studentObj){
        super(studentObj);
        this.previousBackground = studentObj.previousBackground;
        this.favSubjects = studentObj.favSubjects;
        this.className = studentObj.className;
        this.grade = studentObj.grade;
    }
    listsSubject() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
}

/**
 * @class
 * @constructor
 * @augments Instructors
 * @property gradClassName the student's gradClassName
 * @property favInstructor array the student's favInstructor list
 * @function standUp()
 *      @param channel slack channel name 
 *      @returns `{name} announces to {channel}, @channel standy times!​​​​​`
 * @function debugsCode() 
 *      @param studentObj
 *      @param subject
 *      @returns string `{​​​​​name} debugs {student.name}'s code on {subject}`
*/

class ProjectManagers extends Instructors {
    constructor(projectManagerObj){
        super(projectManagerObj);
        this.gradClassName = projectManagerObj.gradClassName;
        this.favInstructor = projectManagerObj.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    }
}

// Objects

const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const alice = new Students({
    name: 'Alice',
    location: 'Seattle',
    age: 27,
    gender: 'female',
    previousBackground: 'college student',
    favSubjects: ['HTML', 'CSS'],
    className: 'CS8',
    grade: 80
});

const pete = new Students({
    name: 'Pete',
    location: 'Denver',
    age: 30,
    gender: 'male',
    previousBackground: 'freelancer',
    favSubjects: ['HTML', 'CSS', 'Wordpress'],
    className: 'CS8',
    grade: 60
});

const jess = new ProjectManagers({
    name: 'Jess',
    location: 'New York',
    age: 34,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

// Tests
console.log(pete.speak()); // Hello, my name is Pete, I am from Denver
console.log(fred.demo('Js-III')); // Today we are learning about Js-III
console.log(fred.grade(pete, 'Js-III')); // Pete receives a perfect score on Js-III
console.log(pete.PRAssignment('Bootstrap')); // Pete has submitted a PR for Bootstrap
console.log(jess.debugsCode(alice, 'Bootstrap')); // Jess debugs Alice's code on Bootstrap

// Stretch Assignment
//1. Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
//2. Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
//3. Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.