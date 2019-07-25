// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        return `Today we are leaning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listSubjects () {
        let subjects = "";
        this.favSubjects.forEach(subject => {
            subjects += subject + "  ";
        });
        return subjects.trim();
    }
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});

const gurpreet = new Student({
    name: 'Gurpreet',
    location: 'SF',
    age: 33,
    previousBackground: 'Logistics',
    className: 'WEB22',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
  });

  const sally = new ProjectManager({
    name: 'Sally',
    location: 'Los Angeles',
    age: 25,
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `Whats up`,
    gradClassName: 'WEB19',
    favInstructor: 'Fred',
  });