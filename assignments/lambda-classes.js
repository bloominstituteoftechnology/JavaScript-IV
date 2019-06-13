// CODE here for your Lambda Classes
class Person{
    constructor(prop) {
        this.name = prop.name;
        this.age = prop.age;
        this.location = prop.location;
        this.gender = prop.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorPerfs){
        super(instructorPerfs);
        this.specialty = instructorPerfs.specialty;
        this.favLanguage = instructorPerfs.favLanguage;
        this.catchPhrase = instructorPerfs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentPerfs){
        super(studentPerfs);
        this.previousBackground = studentPerfs.previousBackground;
        this.className = studentPerfs.className;
        this.favSubjects = studentPerfs.favSubjects;
    }

    listSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(PMPerfs){
        super(PMPerfs);
        this.gradClassName = PMPerfs.gradClassName;
        this.favInstructor = PMPerfs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Student
const Matt = new Student({
    name: 'Matthew',
    age: '23',
    location: 'Texas',
    gender: 'male',
    previousBackground: 'Graphics Programming',
    className: 'WEB19',
    favSubjects: {sub1: 'JavaScript', sub2: 'Java', sub3: "C++"}
})

console.log(Matt.listSubjects());
console.log(Matt.PRAssignment('JavaScript'));
console.log(Matt.sprintChallenge('JavaScript'));
//Instructor
const Josh = new Instructor({
    name: 'Josh',
    age: 'Well Aged',
    location: 'Banjo',
    gender: 'male',
    specialty: 'Front end',
    favLanguage: 'JavaScript',
    catchPhrase: 'To the Banjo Mobile'
});

console.log(Josh.demo('HTML'));
console.log(Josh.grade(Matt, 'HTML'));
//PM
const Byron = new ProjectManager({
    name: 'Byron',
    age: '32',
    location: 'Colorado',
    gender: 'male',
    gradClassName: 'WEB16',
    favInstructor: 'Josh?'
})

console.log(Byron.standUp('web19_byron'));
console.log(Byron.debugsCode(Matt, 'javascript'));


