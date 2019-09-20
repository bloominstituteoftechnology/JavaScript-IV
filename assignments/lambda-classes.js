// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }

    adjustGrade(student) {
        let points = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= points;
            return `${points} points are subtracted from ${student.name}'s grade.  ${student.name}'s current grade is ${student.grade}`;
        } else {
            student.grade += points;
            return `${points} points are added to ${student.name}'s grade.  ${student.name}'s current grade is ${student.grade}`;
        }
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        } else {
            let diff = 70 - this.grade;
            this.grade += diff;
            return `After more grading, ${diff} points were earned and ${this.name} has graduated with a final grade of ${this.grade}!`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(managerAttrs) {
        super(managerAttrs);
        this.gradClassName = managerAttrs.gradClassName;
        this.favInstructor = managerAttrs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const brit = new Instructor({
    name: "Brit",
    location: "Canada",
    age: 31,
    gender: "female",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `We'll go ahead and do some pair programming. `
});

const don = new Instructor({
    name: "Don",
    location: "Indiana",
    age: 38,
    gender: "male",
    favLanguage: "CSS",
    specialty: "Fullstack",
    catchPhrase: `Ready`
});

const john = new Student({
    name: "Hunter",
    location: "Salt Lake City",
    age: 21,
    gender: "male",
    favSubjects: ["Javascript"],
    grade: 100
});

const andi = new Student({
    name: "andy",
    location: "Tokyo",
    age: 26,
    gender: "female",
    favSubjects: ["Javascript"],
    grade: 100
});

const shawn = new ProjectManager({
    name: "Shawn",
    location: "Toledo",
    age: 58,
    gender: "male",
    gradClassName: "CS1"
});

const tina = new ProjectManager({
    name: "Tina",
    location: "Scranton",
    age: 30,
    gender: "female",
    gradClassName: "CS2"
});


console.log(tina.speak());
console.log(jen.listsSubjects());
console.log(shawn.gender);
console.log(tina.debugsCode(jen, "Javascript"));
console.log(shawn.standUp("FSW14"));
console.log(jen.sprintChallenge("Javascript"));
console.log(brit.demo("React"));
console.log(brit.grade(jen, "CSS"));
console.log(shawn.speak());
console.log(john.PRAssignment("Responsive Design"));
console.log(don.catchPhrase);
console.log(tina.adjustGrade(jen));
console.log(jen.graduate(brit));