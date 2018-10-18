// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        for(let i=0;i<this.favSubjects.length;i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
/////////////////////////
const dan = new Student({
    name: 'Dan',
    location: 'Florida',
    age: 26,
    gender: 'Male',
    previousBackground:'Python',
    className: 'FSW_15',
    favSubjects: ["Inheritance","Flexbox","Generator functions"]
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const trevor = new ProjectManager({
    name: 'Trevor',
    location: 'California',
    age: 30,
    gender: 'Male',
    gradClassName: 'CS_13',
    favInstructor: 'Josh',
    catchPhrase: `Don't forget the homies`
});

/////////////////////////
console.log("----------------------")
console.log(fred.speak());
console.log(fred.demo("JS-III"));
console.log(fred.grade(dan,"JS-IV"));

/////////////////////////
console.log("----------------------")
console.log(dan.speak("JS"));
dan.listsSubjects();
console.log(dan.PRAssignment("JS-I"));
console.log(dan.sprintChallenge("HTML"));

/////////////////////////
console.log("----------------------")
console.log(trevor.speak());
console.log(trevor.standUp("FSW_15_Trevor"));
console.log(trevor.debugsCode(dan,"React"));