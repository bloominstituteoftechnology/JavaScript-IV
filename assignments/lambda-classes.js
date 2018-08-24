// CODE here for your Lambda Classes
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

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

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

const ben = new Student({
    name: 'Ben Masterson',
    age: 30,
    location: 'Philadelphia',
    gender: 'Male',
    previousBackground: 'I.T. Technician',
    className: 'CSPT2',
    favSubjects: ['JavaScript', 'Node', 'React']
});

const JohnSpraulingForNetflix = new ProjectManager({
    name: 'John Spraul',
    age: 42,
    location: 'Mom\'s Basement',
    gender: 'Possibly Male',
    specialty: 'Recording Code Challenges / Grading Projects',
    favLanguage: 'JavaScript',
    catchPhrase: 'Looks like you know what you\'re doing. Great job.',
    gradClassName: 'CS5',
    favInstructor: 'Himself'
});

console.log(ben);
ben.listsSubjects();
console.log(JohnSpraulingForNetflix);
JohnSpraulingForNetflix.grade(ben, 'JavaScript');
JohnSpraulingForNetflix.demo('JavaScript');
JohnSpraulingForNetflix.debugsCode(ben, 'Node.js Project');