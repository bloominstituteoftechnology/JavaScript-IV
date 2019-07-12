// CODE here for your Lambda Classes

class Person {
    constructor(prop) {
        this.name = prop.name;
        this.age = prop.age;
        this.location = prop.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(prop) {
        super(prop);
        this.specialty = prop.specialty;
        this.favLanguage = prop.favLanguage;
        this.catchPhrase = prop.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
class Student extends Person {
    constructor(prop) {
        super(prop);
        this.previousBackground = prop.previousBackground;
        this.className = prop.className;
        this.favSubjects = prop.favSubject;
    }
    listSubjects() {
        favSubjects.forEach(element => {
            console.log(element[i])
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class TeamLead extends Instructor {
    constructor(prop) {
        super(prop);
        this.gradClassName = prop.gradClassName;
        this.favInstructor = prop.favInstructor;
    }
    standUp(channel) {
        console.log(`{this.name} announces to {channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        `{this.name} debugs {student.name}'s code on {subject}`
    }
}

const Keirnan = new Instructor({ name: 'Keirnan', age: 30, location: 'Kansas City', specialty: 'Web Design', favLanguage: 'React', catchPhrase: 'You gotta catch em all' });

const Doug = new Student({ name: 'Doug', age: 49, location: 'Lehigh Acres', previousBackground: 'Inoformation Technology', className: 'WEBPT8', favSubjects: ['HTML', 'CSS', 'JavaScript'] });

const Josh = new TeamLead({ name: 'Josh', age: 27, location: 'Austin', specialty: 'Web Design', favLanguage: 'LESS', catchPhrase: 'Alright, alright. alright.', gradClassName: 'WEB13', favInstructor: 'Keirnan' });


console.log(Keirnan);
Keirnan.speak();
Keirnan.demo('JavaScript');
Keirnan.grade(Doug, 'Web Design');

console.log(Doug);
Doug.speak();
//Doug.listSubjects();
Doug.PRAssignment('JavaScript IV');
Doug.sprintChallenge('JavaScript');

console.log(Josh);
Josh.speak();