// CODE here for your Lambda Classes

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
}

class Instructor extends Person {
    constructor (instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    change(myStudent) {
        let oldGrade = myStudent.grade;
        myStudent.grade = oldGrade + (Math.random() < 0.5 ? -1 : 1);
        console.log(`Your grade was ${oldGrade}. It is now ${myStudent.grade}`)
    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade;
    }
    listsSubjects() {
        console.log(`Me gusta ${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`You got ${this.grade} - you've graduated!`);
        }
        else {
            console.log(`You got ${this.grade} - you've failed! Try again.`);
        }
    }
}


class ProjectManagers extends Instructor {
    constructor (pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(student, channel) {
        console.log(`${student.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


// Person test
const personTest = new Person ({
    name: "The Rascal",
    age: 45,
    location: "Brazil",
    gender: "M",
})

console.log(personTest);
personTest.speak();



// Student test
const studentTest = new Student ({
    name: "Daniela",
    age: 25,
    location: "Portugal",
    gender: "F",
    grade: 70,
    previousBackground: "Pilot",
    className: "FSW15",
    favSubjects: "Python"
})

console.log(studentTest);
studentTest.listsSubjects();
studentTest.PRAssignment('JavaScript');
studentTest.sprintChallenge('React');
studentTest.graduate();


// Instructor test
const instructorTest = new Instructor ({
    name: "Derek",
    age: 65,
    location: "UK",
    gender: "M",
    grade: 85,
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Vamos"
})

console.log(instructorTest);
instructorTest.demo("Maths");
instructorTest.grade(instructorTest, "English");
instructorTest.change(studentTest);
instructorTest.change(studentTest);
instructorTest.change(studentTest);
instructorTest.change(studentTest);
instructorTest.change(studentTest);
instructorTest.change(studentTest);



// Project Manager test
const pmTest = new ProjectManagers ({
    name: "Paul",
    age: 25,
    location: "France",
    gender: "M",
    grade: 70,
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Leggo",
    favSubjects: "Python",
    gradClassName: "Best",
    favInstructor: "Josh"
})

console.log(pmTest);
pmTest.standUp(pmTest, 'secretChannel');
pmTest.debugsCode(personTest, 'The Impossible');
