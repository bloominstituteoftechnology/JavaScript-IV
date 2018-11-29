// CODE here for your Lambda Classes
class Person{
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.gender = personAttr.gender;
        this.location = personAttr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(){
        for(let i in this.favSubjects){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.grandClassName = pmAttrs.grandClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const kieran = new Student({
    name: 'Kieran',
    location: 'Niagara Falls',
    age: 19,
    gender: 'male',
    previousBackground: 'Graphic Design',
    className: "FSW16",
    favSubjects: ['HTML', 'CSS', 'PreProcesors', 'Javascript']
});

const PM = new ProjectManager({
    name: 'Bob',
    location: 'West Hollywood',
    age: 25,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'JavaScript',
    catchPhrase: '.this is amazing!',
    grandClassName: 'FSW16',
    favInstructor: 'Fred'
});

console.log(PM.name); // 'Bob'
console.log(fred.specialty); // 'Front-end'
console.log(fred.grade(kieran, 'JavaScript')); //`Kieran recieves a perfect score on Java-Script`
console.log(PM.speak()); //`Hello my name is Bob and I live in West Hollywood`
console.log(kieran.listsSubjects()); //'HTML' 'CSS' 'PreProcesors' 'Javascript'
console.log(kieran.previousBackground); //'Graphic Design'
console.log(PM.favInstructor)// 'Fred'
console.log(PM.debugsCode(kieran, 'Python'))// `Bob debugs Kieran's code on Python`