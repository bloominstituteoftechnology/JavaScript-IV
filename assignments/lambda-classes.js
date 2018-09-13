// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects(){
        //logs out all of the student's favoriteSubjects one by one.
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}
class ProjectManagers extends Instructor{
    constructor(PmAttributes){
        super(PmAttributes);
        this.gradClassName = PmAttributes.gradClassName;
        this.favInstructor = PmAttributes.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @${slackChannel} standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name} code on ${subject}`
    }
}
//Objects
const andrew = new Instructor({
    name: "Andrew Mendez",
    age: "38",
    location: "Australia",
    gender: "Male",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies!"
});

const aaron = new Instructor({
    name: "Aaron Swartz",
    age: "27",
    location: "New York",
    gender: "Male",
    specialty: "Python",
    favLanguage: "C++",
    catchPhrase: "IDKKK!!!"
});
const sarah = new Instructor({
    name: "Sarah Vega",
    age: "31",
    location: "Spain",
    gender: "Female",
    specialty: "C",
    favLanguage: "C#",
    catchPhrase: "Idk!!!!"
});

console.log(sarah.demo("react"));