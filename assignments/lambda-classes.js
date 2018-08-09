// CODE here for your Lambda Classes

class Person {
    constructor(generalInfo) {
        this.name = generalInfo.name;
        this.age = generalInfo.age;
        this.location = generalInfo.location;
    }

    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(studentObj, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousbackground = studentInfo.previousbackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject));
        });
    }

    PRassignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    springChallenge(subject) {
        console.log(`${this.name} has begun sprint challenege on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerInfo) {
        super(projectManagerInfo);
        this.gradClassName = projectManagerInfo.gradClassName;
        this.favInstructor = projectManagerInfo.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${SlackChannel}, @channel standy times!​​​​​`);
    }

    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

console.log(Instructor.demo('Javascript IV'));