// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello My name is ${this.name}, and i am from ${this.location}`;
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favoriteClasses = attr.favoriteClasses;
    }
    listSubjects() {
        for (let i = 0; i < this.favoriteClasses.length; i++) {
            console.log(this.favoriteClasses[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Student {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favoriteInstructor = attr.favoriteInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, '@channel standby times'`
    }
    debugsCode(student){
        return `${this.name} debugs ${student.name}'s code on ${student.className}. `
    }

}

const high_school_applicant = new Person({
    name: 'Jaxon',
    age: 17,
    location: 'US'
});

const Lambda_School_Student = new Student({
    name: 'Mark',
    age: 23,
    location: 'Italy',
    className:'WEBPT7',
    previousBackground: 'none',
    favoriteClasses: ['Math', 'Art', 'Physical-Education']
});

const Lambda_School_PM = new ProjectManager({
    name: 'Horris',
    age: 31,
    location: 'Mars',
    previousBackground: 'none',
    favoriteClasses: ['Reading', 'Economics', 'History'],
    gradClassName:'JS19',
    favoriteInstructor:'Ryan',
});
console.log(`--------------------------------------`) 
console.log(high_school_applicant.location);
console.log(Lambda_School_Student.PRAssignment("Math"));
console.log(Lambda_School_Student.sprintChallenge("Javascript-Fundamentals"));
console.log(Lambda_School_PM.standup('WEBPT7'))
console.log(Lambda_School_PM.debugsCode(Lambda_School_Student));