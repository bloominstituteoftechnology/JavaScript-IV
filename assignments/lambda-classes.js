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
    changeGrade(student) {
        // randomNumber generates either 1 or 2 leading to 50/50 chance of grade increasing or decreasing
        const randomNumber = Math.floor(Math.random() * 2 + 1)
        const gradeNumber = Math.floor(Math.random() * 15 + 1)
        if (randomNumber === 1) {
            student.grade = student.grade + gradeNumber;
            console.log(`${this.name} has added ${gradeNumber} points to ${student.name}'s grade for a final grade of ${student.grade}! `)
        } else {
            student.grade = student.grade - gradeNumber;
            console.log(`${this.name} has subtracted ${gradeNumber} points from ${student.name}'s grade for a final grade of ${student.grade}!`)
        }
    }
}
// Student class ============================
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        const list = this.favSubjects;
        list.forEach(item => console.log(item));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`Hooray! I get to graduate!`)
        } else {
            console.log(`Oh no! I can't graduate!`)
        }
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
    favSubjects: ["HTML", "CSS", "Javascript" ],
    grade: 79,
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

// frank.speak();
// frank.demo("prototypes");
// frank.grade(olivia, "JavaScript-IV");
// olivia.listsSubjects();
// olivia.PRAssignment("JavaScript-IV");
// olivia.sprintChallenge("JavaScript-IV")
// julia.standUp("FSW16 - Julia");
// julia.debugsCode(olivia, "classes");
julia.changeGrade(olivia);
olivia.graduate();



