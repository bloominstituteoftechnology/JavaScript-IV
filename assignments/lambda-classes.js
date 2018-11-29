// CODE here for your Lambda Classes


// Person class ============================
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// Instructor class ============================
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

// Student class ============================
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(item => console.log(item))
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
}

// Project Manager class ============================
class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const olivia = new Student({
    name: "Olivia",
    age: 23,
    location: "Baltimore, MD",
    gender: "F",
    previousBackground: "Lab tech",
    className: "FSW-16",
    favSubjects: ["HTML", "CSS", "Javascript" ]
})

const frank  = new Instructor({
    name: "Frank",
    age: "52",
    location: "Kansas",
    gender: "M",
    specialty: "Front-end",
    catchPhrase: "yee boi"
})

const julia = new ProjectManager({
    name: "Julia",
    age: "30",
    location: "Arkansas",
    gender: "F",
    gradClassName: "FSW-15",
    favInstructor: "Josh"

})

