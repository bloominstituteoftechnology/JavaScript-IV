// CODE here for your Lambda Classes
class Person {
    constructor(stuff) {
        this.name = stuff.name;
        this.age = stuff.age;
        this.location = stuff.location;
        this.gender = stuff.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(teacherStuff) {
        super(teacherStuff);
        this.specialty = teacherStuff.specialty;
        this.favLanguage = teacherStuff.favLanguage;
        this.catchPhrase = teacherStuff.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    reviewSprint(student) {
        let evaluate = Math.floor((Math.random() * 101) - 50);
        let pointsValue = "";
        if (evaluate > 0) {
            pointsValue = `add ${evaluate} points!`;
            student.grade += evaluate;
        }
        else if (evaluate < 0) {
            pointsValue = `subtract ${evaluate} points`;
            student.grade -= evaluate;
        }
        else if (evaluate == 0) {
            pointsValue = `see more work before making a decision`
        }
        console.log(`After reviewing your work, ${student.name}, we're going to have to ${pointsValue}`)
    }
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
        this.grade = studentStuff.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade > 70) {
            console.log(`Congratulations, ${this.name}, you get to graduate!`);
        }
        else if (this.grade < 70) {
            console.log(`Sorry, ${this.name}, we're gonna need to see more work first.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMStuff) {
        super(PMStuff);
        this.gradClassName = PMStuff.gradClassName;
        this.favInstructor = PMStuff.favInstructor;

    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to #${slackChannel}, @channel stand up time!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Instructor({
    name: "Josh",
    location: "Utah",
    age: "classified",
    gender: "male",
    favLanguage: "JavaScript",
    speciality: "Front-end",
    catchPhrase: "Let's take a five minute break",
})

josh.speak();
josh.demo("JavaScript");

const andre = new Student({
    name: "Andre",
    age: "26",
    location: "Virginia Beach",
    gender: "male",
    previousBackground: "Boring stuff",
    className: "FSW14",
    favSubjects: ["HTML", "CSS", "JavaScript"],
    grade: 50,
})

josh.grade(andre, "JavaScript");
andre.speak();
andre.listsSubjects();
andre.PRAssignment("JavaScript");
andre.sprintChallenge("JavaScript");

const joe = new ProjectManager({
    name: "Joe",
    age: "classified",
    location: "Nunya",
    gender: "male",
    favLanguage: "JavaScript",
    favInstructor: "Josh",
})

joe.speak();
joe.demo("JavaScript");
joe.grade(andre, "JavaScript");
joe.standUp("fsw14_joe");
joe.debugsCode(andre, "JavaScript");
joe.reviewSprint(andre);
andre.graduate()