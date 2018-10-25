// CODE here for your Lambda Classes

class Person {
    constructor(quals) {
        this.name = quals.name;
        this.age = quals.age;
        this.location = quals.location;
        this.gender = quals.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}

class Instructor extends Person {
    constructor(quals) {
        super(quals);
        this.specialty = quals.specialty;
        this.favLanguage = quals.favLanguage;
        this.catchPhrase = quals.catchPhrase;
    }

    demo (subject) {
        `Today we are learning about ${subject}`;
    }

    grade (student, subject) {
        `${student.name} receives a perfect score on ${subject}`;
    }

}

class Student extends Person {
    constructor(quals) {
        super(quals);
        this.previousBackground = quals.previousBackground;
        this.className = quals.className;
        this.favSubjects = quals.favSubjects;
    }

    listSubjects() {
        console.log(this.favSubjects);
    }

    PRAssignment (subject) {
        `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge (subject) {
        `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(quals) {
        super(quals);
        this.gradClassName = quals.gradClassName;
        this.favInstructor = quals.favInstructor;
    }

    standUp (channel) {
        `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        `${this.name} debugs ${student.name}'s code on ${subject}`;
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