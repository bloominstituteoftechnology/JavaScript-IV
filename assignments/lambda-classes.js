// CODE here for your Lambda Classes
class Person {
    constructor(personStats) {
        this.name = personStats.name;
        this.age = personStats.age;
        this.location = personStats.location;
        this.gender = personStats.gender;
    }
    greet() {
       return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorStats) {
        super(instructorStats);
        this.specialty = instructorStats.specialty;
        this.favLanguage = instructorStats.faveLanguage;
        this.catchPhrase = instructorStats.catchPhrase;
    }
    demo(string){
        return `Today we are learning about ${this.name}`;
    } 
    grade(student, subject) {
        return `${student.name} receives a perfect score on {subject}`;
    }
}

class Student extends Instructor {
    constructor(studentStats) {
        super(studentStats);
        this.previousBackground = studentStats.previousBackground;
        this.className = studentStats.className;
        this.favSubjects = studentStats.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for {subject}`;
    }
    sprintChallenge() {
        return `${student.name} has submitted a PR for {subject}`;
    }
}

class ProjectManager extends Student {
    constructor(PMstats) {
        super(PMstats);
        this.gradClassName = PMstats.gradClassName;
        this.favInstructor = PMstats.favInstructor;
    }
    standUp(channel){
        return `{name} announced to {channel}, @channel standup time!`;
    }
    debugsCode(student, subject) {
        return `{name} debugs {student.name}'s code on {subject}`;
    }
}

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });