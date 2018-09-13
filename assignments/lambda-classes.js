// CODE here for your Lambda Classes

class Person {
    constructor(persons) {
        this.name = persons.name;
        this.age = persons.name;
        this.location = persons.location;
        this.gender = persons.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructors) {
        super(instructors);
        this.specialty = instructors.specialty;
        this.favLanguage = instructors.favLanguage;
        this.catchPhrase = instructors.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receiver a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(students) {
        super(students);
        this.previousBackground = students.previousBackground;
        this.className = students.className;
        this.favSubjects = students.favSubjects;
    }
    listsSubjects(sub) {
        for (let i = 0; i < sub.length ; i++) {
            console.log(sub[i]);
        }
    }
    PrAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManange extends Instructor {
    constructor(projectMananges) {
        super(projectMananges);
        this.gradClassName = projectMananges.gradClassName;
        this.favInstructor = projectMananges.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announce to ${channel}, @chaneel standy times!`);
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const josh = new Instructor({
    name: 'Josh',
    age: 30,
    location: 'Miami',
    gender: 'Male',
    specialty: 'front-end',
    favLanguage: 'c++',
    catchPhrase: 'I am the king'
})

const tim = new Instructor({
    name: 'Tim',
    age: 50,
    location: 'Orlando',
    gender: 'Male',
    specialty: 'Back-End',
    favLanguage: 'JavaScript',
    catchPhrase: 'I am above Josh'
})

const mei = new Student({
    name: "Mei",
    age: 18,
    location: 'Denver',
    gender: 'Female',
    previousBackground: 'Computer Science',
    className: 'CS14',
    favSubjects: ['Html','CSS', 'Javascript']
})

const tao = new Student({
    name: "Tao",
    age: 20,
    location: 'New York',
    gender: 'Male',
    previousBackground: 'Business Adminstration',
    className: 'CS14',
    favSubjects: ['Html','CSS', 'C++']
})

const hui = new Student({
    name: "Hui",
    age: 21,
    location: 'Maine',
    gender: 'Female',
    previousBackground: 'Chemistry',
    className: 'CS14',
    favSubjects: ['Html','CSS', 'Java']
})

const kam = new ProjectManange({
    name: "Kam",
    age: 23,
    location: 'Oregen',
    gender: 'Male',
    gradClassName: 'CS10',
    favInstructor: 'Josh'
})

const dam = new ProjectManange({
    name: "Dam",
    age: 24,
    location: 'California',
    gender: 'Male',
    gradClassName: 'CS9',
    favInstructor: 'Tim'
})

josh.speak();
mei.speak();
kam.speak();

josh.demo('Javascript!!');
josh.grade(hui,'history');

hui.listsSubjects(hui.favSubjects);
mei.listsSubjects(mei.favSubjects);


hui.PrAssignment('PE');
hui.sprintChallenge('Javascript-III');

kam.standUp('FSW14');
dam.debugsCode(mei,'EGN101');