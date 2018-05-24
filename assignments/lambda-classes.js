// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person {
    constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    };

    grade(student, subject) {
        `${student.name} receives a perfect score on ${this.subject}`;
    };
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects; // this is an array. does anything change?
    };

    listSubjects() {
        return `${this.favSubjects}`; // this is the same array from 38. what's the diff if any?
    };

    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };

    sprintChallenge(subect) {
        return `${this.name} has begun spring challenge on ${subject}`;
    };

}

class ProjectManager extends Instructor {
    constructor(projectManagerAttrs) {
        super(projectManagerAttrs);
        this.gradClassName = projectManagerAttrs.gradClassName;
        this.favInstructor = projectManagerAttrs.favInstructor;
    };

    standUp(channel) {
        `${this.name} announces to ${channel}, @channel standup times!​​​​​`;
    };

    debugsCode(student, subject) {
        `${this.name} debugs ${student.name}'s code on ${subject}`
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

const annie = new Instructor({
    name: 'Annie',
    location: 'Utah',
    age: 31,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Jahvascript, jah mon.`
  });

const cathy = new Student({
    name: 'Cathy',
    location: 'Texas',
    age: 24,
    gender: 'female',
    previousBackground: 'Marketing',
    className: 'CS7',
    favSubjects: ['React', 'Node', 'Javascript']
});

const joe = new Student({
    name: 'Joe',
    location: 'Minnesota',
    age: 41,
    gender: 'male',
    previousBackground: 'Healthcare',
    className: 'CS8',
    favSubjects: ['Bootstrap', 'CSS', 'LESS']
});

const allen = new ProjectManager({
    name: 'Allen',
    location: 'Florida',
    age: 46,
    gender: 'male',
    favInstructor: 'Fred',
    gradClassName: 'CS4',
});

const julia = new ProjectManager({
    name: 'Julia',
    location: 'California',
    age: 27,
    gender: 'female',
    favInstructor: 'Annie',
    gradClassName: 'CS2',
});