// CODE here for your Lambda Classes

//Person Class (base class)

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


//Person objects

const kyle = new Person({
    name: 'Kyle',
    age: 28,
    location: 'Chicago',
    gender: 'M'
});

// console.log(kyle.name);
// kyle.speak();

const garrett = new Person({
    name: 'Garrett',
    age: 30,
    location: 'Chicago',
    gender: 'M'
});

// console.log(garrett.age);
// garrett.speak();

//Instructor Class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

//Instructor objects

const josh = new Instructor({
    name: "Josh",
    age: 30,
    location: "Utah",
    gender: 'M',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Caveman it!'
});

// console.log(josh.location);
// console.log(josh.age);
// console.log(josh.specialty);
// console.log(josh.catchPhrase);
// josh.demo('HTML');
// josh.grade(kyle, 'JavaScript');

const diandra = new Instructor({
    name: "Diandra",
    age: 22,
    location: "Bisbee",
    gender: 'F',
    specialty: 'Math',
    favLanguage: 'JavaScript',
    catchPhrase: 'Good evening!'
});

// console.log(diandra.name);
// console.log(diandra.favLanguage);
// console.log(diandra.gender);
// diandra.demo('JavaScript');
// diandra.grade(garrett, 'JavaScript');


//Student Class

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => { console.log(subject) });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}


//Student objects

const charles = new Student({
    name: 'Charles',
    age: 25,
    location: 'New Hampshire',
    gender: 'M',
    previousBackground: 'teacher',
    className: 'CS12',
    favSubjects: ['HTML', 'CSS', 'JavaScript', 'Math', 'History']
});

// console.log(charles.name);
// console.log(charles.location);
// console.log(charles.previousBackground);
// console.log(charles.favSubjects);
// charles.listsSubjects();
// charles.PRAssignment('JavaScript');
// charles.sprintChallenge('CSS');



//Project Manager Class

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const dixie = new ProjectManager({
    name: "Dixie",
    age: 23,
    location: "New Jersey",
    gender: 'F',
    specialty: 'Full-stack',
    favLanguage: 'Python',
    catchPhrase: 'Hi guys!',
    gradClassName: 'CS5',
    favInstructor: 'Josh'
}); 

// console.log(dixie.name);
// console.log(dixie.location);
// console.log(dixie.favLanguage);
// console.log(dixie.catchPhrase);
// console.log(dixie.gradClassName);
// console.log(dixie.favInstructor);
// dixie.demo('Data Structures!');
// dixie.standUp('cs12');
// dixie.debugsCode(charles, 'JavaScript');