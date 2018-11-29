//Person Class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}//Person Class End
//Instructor Class 
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.speciality = instructorAttributes.speciality;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) { //possible needs subject to be a string
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student,subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}

const instructorTest = new Instructor ({
    name: "Test Instructor",
    age: 27,
    location: "Super Secret Place",
    gender: "Male",
    speciality: "Javascript",
    catchPhrase: "I swear I am original"
});
instructorTest.demo("Javscript");
//Instructor Class End
//Student Class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(favSubject) {
            console.log(favSubject);
        }
        )}
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }    
};

const studentTest = new Student ({
    name: "Test Student",
    age: 21,
    location: "Super Secret Place",
    gender: "Male",
    previousBackground: "Biology",
    className: "FSW16",
    favSubjects: ["Javascript","Python", "HTML", "CSS"]
});
studentTest.listsSubjects();
studentTest.PRAssignment("Python");
studentTest.sprintChallenge("Python");
//Student Class End
//Project Manager
class ProjectManager extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`)
    };
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`)
    };
}
const pmTest = new ProjectManager ({
    name: "Test Project Manager",
    age: 24,
    location: "Super Secret Place",
    gender: "Male",
    speciality: "Javascript",
    catchPhrase: "I swear I am original",
    gradClassName: "CS 13",
    favInstructor: "I could never choose"
});

pmTest.standUp("FSW16");
pmTest.debugsCode(studentTest,"Python");