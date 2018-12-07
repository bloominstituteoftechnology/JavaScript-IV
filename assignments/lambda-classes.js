class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.gender
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Instructor extends Person {
    constructor(instDetails) {
        super(instDetails)
        this.specialty = instDetails.specialty;
        this.favLanguage = instDetails.favLanguage;
        this.catchPhrase = instDetails.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject} `
    };
};

class Student extends Person {
    constructor(studentDetails) {
        super(studentDetails)
        this.previousBackground = studentDetails.previousBackground;
        this.className = studentDetails.className;
        this.favSubjects = studentDetails.favSubjects;
    };

    listsSubjects() {
        return `${this.favSubjects}`;
    }

    PRAssignment (student, subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge (student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
};

class ProjectManagers extends Instructor {
    constructor(pmDetails) {
        super(pmDetails)
        this.gradClassName = pmDetails.gradClassName;
        this.favInstructor = pmDetails.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to @${channel}, standby times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

// Three Person Class Examples:

const personOne = new Person({
    name: 'Bob',
    age: 30,
    location: 'Denver, CO',
    gender: 'M'

});

const personTwo = new Person({
    name: 'Jan',
    age: 35,
    location: 'Los Angeles, CA',
    gender: 'F'

});

const personThree = new Person({
    name: 'Will',
    age: 24,
    location: 'Tallahassee, FL',
    gender: 'M'

});

console.log(personOne.speak());
console.log(personTwo.speak());
console.log(personThree.speak());

// Two Instructor Class Examples:

const InstructorOne = new Instructor({
    name: 'Dan',
    age: 42,
    location: 'Seattle, WA',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lorum Ipsum Dan'

});

console.log(InstructorOne.speak());
console.log(InstructorOne.demo('CSS'));
console.log(InstructorOne.grade(personOne, 'LESS'));