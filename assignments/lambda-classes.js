// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak = function () {
        return ` Hello my name is  ${this.name} I am from  ${this.location}`;
    }
}
class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo = function (subject) {
        return `Today we are learning about ${this.subject}`
    }
    grade = function(student, subject){
        return `${student.name} receives a perfect score on ${this.subject}`
    }
}

    const brian = new Instructor({
        name: 'Brian',
        location: 'New York',
        age: 27,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `what's up people`
      });
      const jeff = new Instructor({
        name: 'Jeff',
        location: 'Chicago',
        age: 30,
        favLanguage: 'Java',
        specialty: 'Front-end',
        catchPhrase: `Keep it up`
      });
      const victor = new Instructor({
        name: 'Victor',
        location: 'Paris',
        age: 25,
        favLanguage: 'JavaScript',
        specialty: 'Back-end',
        catchPhrase: `Très bien mes amis`
      });

console.log(victor.location);
console.log(jeff.grade);
class Student extends Person{
    constructor(StAttr){
        super (StAttr);
        this.previousBackground = StAttr.previousBackground;
        this.className = StAttr.className;
        this.favSubjects = StAttr.favSubjects;
    }
    listsSubjects = function (){
        return `${this.favSubjects}`
    }
    PRAssignment = function(subject){
        return   `${this.student.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge =function(subject){
        return   `${this.student.name} has begun sprint challenge on ${this.subject}`
    }
}
    const fred = new Instructor({
        name: 'Victor',
        location: 'Paris',
        age: 25})

class TeamLead extends Instructor {
    constructor(TLAttr){
        super(TLAttr);
        this.gradClassName = TLAttr.gradClassName;
        this.favInstructor = TLAttr.favInstructor;
    }
    standUp = function(channel){
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`
    }
    debugsCode = function(obj, subject){
        return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`
    }
}