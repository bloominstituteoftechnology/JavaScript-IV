// CODE here for your Lambda Classes

class Person {
    constructor(personObject) {
        this.name = personObject.name;
        this.age = personObject.age;
        this.location = personObject.location;
        this.gender = personObject.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorObject) {
        super(instructorObject);
        this.specialty = instructorObject.specialty;
        this.favLanguage = instructorObject.favLanguage;
        this.catchPhrase = instructorObject.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentObject) {
        super(studentObject);
        this.previousBackground = studentObject.previousBackground;
        this.className = studentObject.className;
        this.favSubjects = studentObject.favSubjects;
    }

    listsSubjects() {
        return `${this.name}'s subjects are ${this.favSubjects.join(', ')}`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerObject) {
        super(projectManagerObject);
        this.gradClassName = projectManagerObject.gradClassName;
        this.favInstructor = projectManagerObject.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Instructors
const jack = new Instructor({
    name: 'Jack',
    location: 'San Francisco',
    age: 42,
    gender: 'Male',
    favLanguage: 'Javascript',
    specialty: 'Front-End',
    catchPhrase: 'Hard work pays off.'
});

const jill = new Instructor({
    name: 'Jill',
    location: 'Los Angeles',
    age: 36,
    gender: 'Female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Make the information meaningful.'
});

// Students
const larry = new Student({
    name: 'Larry',
    location: 'New York',
    age: 26,
    gender: 'Male',
    previousBackground: 'Waiter',
    className: 'CS7',
    favSubjects: ['HTML', 'CSS', 'Javascript', 'React']
});

const moe = new Student({
    name: 'Moe',
    location: 'Chicago',
    age: 31,
    gender: 'Female',
    previousBackground: 'Patient Accounting',
    className: 'CS7',
    favSubjects: ['Python', 'Django', 'Testing']
});

const curly = new Student({
    name: 'Curly',
    location: 'Denver',
    age: 52,
    gender: 'Male',
    previousBackground: 'Machining',
    className: 'CSPT3',
    favSubjects: ['Databases', 'Operating Systems', 'Networking']
});

//Project Managers
const mulder = new ProjectManager({
    name: 'Mulder',
    location: 'Dallas',
    age: 33,
    gender: 'Male',
    favLanguage: 'Python',
    specialty: 'Testing',
    catchPhrase: 'You\'ve got this!',
    gradClassName: 'CSPT3',
    favInstructor: jill
});

const scully = new ProjectManager({
    name: 'Scully',
    location: 'Seattle',
    age: 34,
    gender: 'Female',
    favLanguage: 'Javascript',
    specialty: 'Design',
    catchPhrase: 'You can do it!',
    gradClassName: 'CS7',
    favInstructor: jack
});

console.log(jack.demo('React'));
console.log(jill.grade(larry, 'Django'));
console.log(larry.listsSubjects());
console.log(moe.PRAssignment('Node'));
console.log(curly.sprintChallenge('Data Structures'));
console.log(mulder.standUp('cspt3'));
console.log(scully.debugsCode(moe, 'Rest APIs'));