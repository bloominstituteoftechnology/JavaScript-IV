// CODE here for your Lambda Classes

class Person {
    constructor(initProperties) {
        this.name = initProperties.name;
        this.age = initProperties.age;
        this.gender = initProperties.gender;
        this.location = initProperties.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructProperties) {
        super(instructProperties);
        this.specialty = instructProperties.specialty;
        this.favLanguage = instructProperties.favLanguage;
        this.catchPhrase = instructProperties.catchPhrase;
    }
    demo(topic) {
        console.log(`Today we are learning about ${topic}`);
    }
    grade(stu, topic) {
        console.log(`${stu.name} receives a perfect score on ${topic}`);
    }
    alterGrade(stu) {
        stu.grade = Math.floor(stu.grade + 2 * randn() + 1);
        stu.grade = Math.max(stu.grade, 0);
        stu.grade = Math.min(stu.grade, 100);
    }
}

class Student extends Person {
    constructor(studentProperties) {
        super(studentProperties);
        this.previousBackground = studentProperties.previousBackground;
        this.className = studentProperties.className;
        this.favSubjects = studentProperties.favSubjects;
        this.grade = Math.floor(Math.random() * 101);
        console.log(`${this.name}'s grade: ${this.grade}`);
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }
    PRAssignment(topic) {
        console.log(`${this.name} has submitted a PR for ${topic}`);
    }
    sprintChallenge(topic) {
        console.log(`${this.name} has begun sprint challenge on ${topic}`);
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} graduates! Congratulations!`);
        } else {
            console.log(`${this.name} has a grade of ${this.grade} and is not ready to graduate--keep trying!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmProperties) {
        super(pmProperties);
        this.gradClassName = pmProperties.gradClassName;
        this.favInstructor = pmProperties.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(stu, topic) {
        console.log(`${this.name} debugs ${stu.name}'s code on ${topic}`)
    }
}

const josh = new Instructor({
    name: "Josh",
    location: "Utah",
    age: 35,
    gender: "male",
    specialty: "Front-end",
    favLanguage: "Flash",
    catchPhrase: "It's in the ecosystem"
});

const julio = new Instructor({
    name: "Julio",
    age: 60,
    gender: "male",
    favLanguage: "Draconic",
    catchPhrase: "You always knew how to cut a rug.",
    location: "The Mechane",
    specialty: "puns"
});

const mckay = new Student({
    name: "McKay",
    age: 34,
    gender: "male",
    location: "Lehi",
    previousBackground: "aspiring patent agent",
    className: "FSW14",
    favSubjects: ["Less", "React", "Django"]
});

const jenny = new Student({
    name: "Jenny",
    gender: "female",
    location: "Memphis",
    age: 29,
    previousBackground: "flight attendant",
    className: "CS9",
    favSubjects: ["chocolate", "CSS"]
});

const jeff = new ProjectManager({
    gender: "male",
    favLanguage: "JavaScript",
    age: 27,
    location: "California",
    gradClassName: "CS11",
    catchPhrase: "I guess we'll end early today.",
    name: "Jeff",
    specialty: "empathizing",
    favInstructor: "Julio"
});

const sharon = new ProjectManager({
    gender: "female",
    name: "Sharon",
    location: "Seattle",
    age: 23,
    specialty: "quick Slack reaction time",
    favLanguage: "Python",
    catchPhrase: "ZING! lightbulb moment",
    favInstructor: "Josh",
    gradClassName: "CS4"
});

mckay.speak();
jeff.standUp("fsw_14_jeff");
console.log(josh.catchPhrase);
console.log(sharon.catchPhrase);
josh.demo("git");
jenny.sprintChallenge("JavaScript Fundamentals");
jeff.grade(mckay, "React");
jenny.listsSubjects();
sharon.debugsCode(jenny, "HTML");
sharon.demo("writing a resume");
console.log(mckay.className);
julio.speak();
julio.grade(jenny, "punctuality");
mckay.PRAssignment("DOM");

function randn() { // Normal distribution, mean 0, std deviation 1, using the Box-Muller Transform
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); // Converts [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log(u)) * Math.cos( 2.0 * Math.PI * v);
}

for (let i = 0; i < 40; i++) {
  sharon.alterGrade(jenny);
}
jenny.graduate();

while (true) {
  mckay.graduate();
  if (mckay.grade >= 70) break;
  jeff.alterGrade(mckay);
}