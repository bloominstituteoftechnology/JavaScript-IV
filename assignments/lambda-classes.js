class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        for (let subj of this.favSubjects) {
            console.log(subj);
        }
    }

    PRAssignment(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const student = new Student({
    name: "Kyle",
    location: "Washington State"
});

const pm = new ProjectManager({
    name: "Chris",
    location: "Earth"
});

student.speak();
student.PRAssignment(student, "ES6 Classes");
pm.speak();
pm.debugsCode(student, "ES6 Classes");
pm.grade(student, "ES6 Classes");
