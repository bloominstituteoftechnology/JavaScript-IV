// Person constructor
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Henlo my name is ${this.name}, I am from ${this.location}.`);
    }
}

// Instructor constructor
class Instructor extends Person {
    constructor(instructAttributes) {
        super(instructAttributes);
        this.specialty = instructAttributes.specialty;
        this.favlanguage = instructAttributes.favlanguage;
        this.catchphrase = instructAttributes.catchphrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    editGrade(student) {
        student.grade -= Math.floor((Math.random() * 10));
        return console.log(`The student's grade is now ${student.grade}`);
    }
}


// Student constructor
class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
        this.grade = stuAttributes.grade;
    }
    listSubjects() {
        this.favSubjects.forEach((x) => console.log(x));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begin sprint challenge on ${subject}.`);
    }
    graduate(instructor) {
        if (this.grade > 70) {
            return console.log(`${this.name} graduates! Yay!`);
        }
        else {
            instructor.editGrade(this);
            return console.log(`Try again next time :(`);
        }
    }
}

// PM constructor
class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// 2 Instructors:
const rick = new Instructor({
    name: 'Rick',
    age: 70,
    location: 'Earth C-137',
    gender: 'M',
    specialty: 'Cutting the Cheeese',
    favlanguage: 'x86 Assembly',
    catchphrase: 'There is no God, Summer. Gotta rip that band-aid off now, you\'ll thank me later.',
})

const dumbledore = new Instructor({
    name: 'Dumbledore',
    age: 150,
    location: 'U.K.',
    gender: 'M',
    specialty: 'Cool Spells',
    favlanguage: 'Latin (or something)',
    catchphrase: 'One can never have enough socks.',
})

// 2 Students:
const morty = new Student({
    name: 'Morty',
    age: 14,
    location: 'U.S.',
    gender: 'M',
    previousBackground: '(Regular) Student',
    className: 'FSW15',
    favSubjects: ['React', 'Node', 'Interdimensional Cable'],
    grade: 70,
})

const hermione = new Student({
    name: 'Hermione',
    age: 17,
    location: 'U.K.',
    gender: 'F',
    perviousBackground: 'Muggle',
    className: 'FSW14',
    favSubjects: ['Restful', '.net', 'Muggle Studies'],
    grade: 80,
})

// 2 PMs:
const summer = new ProjectManager({
    name: 'Summer',
    age: 16,
    location: 'U.S.',
    gender: 'F',
    specialty: 'Being Helpful',
    favlanguage: 'C++',
    catchphrase: 'Oh my God',
    gradClassName: 'CS12',
    favInstructor: 'Rick',
})

const snape = new ProjectManager({
    name: 'Severus',
    age: 38,
    location: 'U.K.',
    gender: 'M',
    specialty: 'Snide Remarks',
    favlanguage: 'Python (get it?)',
    catchphrase: 'Snape, Snape, Severus Snape',
    gradClassName: 'CS8',
    favInstructor: 'Dumbledore',
})

console.log(rick.catchphrase);
dumbledore.grade(hermione, 'Mongo');
morty.PRAssignment('prototypes.js');
hermione.listSubjects();
summer.debugsCode(morty, 'Feminist Studies');
snape.speak();
console.log(snape.specialty);
dumbledore.editGrade(hermione);
hermione.graduate(dumbledore);

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
