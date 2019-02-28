// CODE here for your Lambda Classes

//base class
class Person {
    constructor(name) {
        this.name = name.name;
        this.age = name.age;
        this.location = name.location;
        this.gender = name.gender;
    }

    speak () {
        return(`Hello my name is${this.name}, and I\'m from ${this.location}`);
    }
}

//extension of Person
class Instructor extends Person {
    constructor(name){
        super(name);
        this.specialty = name.specialty;
        this.favLanguage = name.favLanguage;
        this.catchPhrase = name.catchPrase;
        this.subject = name.subject;
    }

    demo (subject) {
        return(`Today we are learning about ${subject}`);        
    }

    grade (student, subject) {
        return(`${student.name} recieves a perfect score on ${subject}`);
    }
}

//extension of Person
class Student extends Person {
    constructor(name){
        super(name);
        this.previousBackground = name.previousBackground;
        this.className = name.className;
        this.favSubjects = name.favSubjects;
    }

    listsSubjects () {
         let arrayIndexDemo = this.favSubjects        
       
        for (let i = 0; i < arrayIndexDemo.length; i++){
            console.log(arrayIndexDemo[i]);
       }
    }

    pRAssignment (subject) {
        return(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge (subject) {
        return(`${this.name} has begun a sprint challenge on ${subject}`);
    }
}

//extension of Instructors
class ProjectManager extends Instructor {
    constructor(name){
        super(name);
        this.gradClassName = name.gradClassName;
        this.favInstructor = name.favInstructor;
    }

    standUp (channel) {
        return(`${this.name} announces to ${channel}, @channel standup time starts soon`);
    }

    debugsCode (student, subject) {
        return(`${this.name} debugs ${student.name}\'s code on ${subject}`);
    }
}

//Instructor Examples

const fred = new Instructor({
    name: 'Fred',
    location: 'Bahamas',
    age: 24,
    specialty: 'Front-End',
    gender: 'Male',
    favLanguage: 'JavaScript',
    catchPrase: 'Surfs up Dudes!'
});

const bill = new Instructor({
    name: 'Bill',
    location: 'Green Bay',
    age: 37,
    specialty: 'Computer Science',
    gender: 'Male',
    favLanguage: 'Processing',
    catchPrase: 'Welcome Everyone!'
});

const ted = new Instructor({
    name: 'Ted',
    location: 'Washington D.C.',
    age: 28,
    specialty: 'Python',
    gender: 'Male',
    favLanguage: 'Python',
    catchPrase: 'Today is going to be a great day!!!'
});

//student examples

const tash = new Student({
    name: 'Tash',
    location: 'Seattle',
    age: 38,
    gender: 'Female',
    favSubjects: ['Javascript', 'CSS', 'HTML'],
    className: 'JS158',
    previousBackground: 'server'
});

const lexy = new Student({
    name: 'Lexy',
    location: 'New York',
    age: 18,
    gender: 'Female',
    favSubjects: ['Python', 'JavaScript', 'CSS'],
    className: 'CS354',
    previousBackground: 'construction'
});

const hanah = new Student({
    name: 'Hanah',
    location: 'Hollywood',
    age: 22,
    gender: 'Female',
    favSubjects: ['Python', 'Java', 'Processing'],
    className: 'PY231',
    previousBackground: 'line worker'
});

//Project Manager Examples

const sean = new ProjectManager({
    name: 'Sean',
    location: 'Austin',
    age: 36,
    gender: 'Male',
    favInstructor: 'Fred',
    gradClassName: 'CS265'
});

const will = new ProjectManager({
    name: 'Will',
    location: 'Madrid',
    age: 32,
    gender: 'Male',
    favInstructor: 'Ted',
    gradClassName: 'CS265'
});

const hunter = new ProjectManager({
    name: 'Hunter',
    location: 'Anchorage',
    age: 25,
    gender: 'Male',
    favInstructor: 'Fred',
    gradClassName: 'JS154'
});


//testing
console.log('-------Lambda Classes Logs-------');

console.log(hunter.gradClassName);
console.log(sean.favInstructor);
console.log(hanah.previousBackground);
console.log(lexy.className);
console.log(tash.favSubjects);
console.log(bill.catchPhrase);
console.log(fred.favLanguage);
console.log(ted.specialty);
console.log(ted.demo('arrays'));
console.log(bill.grade(lexy, 'CSS'));
console.log(lexy.sprintChallenge('Java'));
console.log(hanah.pRAssignment('Python'));
console.log(hunter.standUp('web5'));
console.log(will.debugsCode(tash, 'Processing'));
console.log(lexy.listsSubjects());