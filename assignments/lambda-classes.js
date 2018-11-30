// CODE here for your Lambda Classes
class Person {
    constructor (props){
        this.age= props.age;
        this.name= props.name;
        this.location= props.location;
        this.gender= props.gender;
    }
    speak(){
        return (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase= props.catchPhrase;
    }
    demo(subject){
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return (`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground= props.previousBackground;
        this.className= props.className;
        this.favSubjects= props.favSubjects;
    }
    listSubjects(){
        return (`${this.favSubjects}`);
    }
    PRAssignments(subject){
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        return(`${this.name} has begun sprint challenge on ${subject}`);
    }
}
class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName= props.gradClassName;
        this.favInstructor= props.favInstructor;
    }
    standUp(channel){
        return (`${this.name} announces to ${channel}. @Channel stand up time!`)
    }
    debugsCode(student, subject){
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
const fred = new Person({
    age:36,
    name: 'Fred',
    location: 'Bedrock',
    gender: 'male'
});

const Josh = new Instructor({
    age:40,
    name: "Josh",
    favLanguage: "JavaScript",
    subject:"C+",
    student: "John",

});

const Marquis = new Student ({
    age: 34,
    name: "Marquis",
    subject: "Math",


});

const Brutus = new ProjectManagers({
    name: "Brutus",

});
console.log(Josh.grade(Marquis, "JavaScript"));

console.log(Marquis.PRAssignments( "Javascript"));

console.log(Marquis.sprintChallenge("Javascript"))

console.log(Brutus.standUp("FSW 16"));

console.log(Brutus.debugsCode(Marquis, "JavaScript!"))