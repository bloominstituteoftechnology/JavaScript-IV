// CODE here for your Lambda Classes
class Person {
    constructor(qualities) {
        this.name = qualities.name;
        this.age = qualities.age;
        this.location = qualities.location;
        this.gender = qualities.gender;
    }
    speak() {
        return ('Hello my name is'
            `${qualities.name} 'and I'm from' ${qualities.location}`);
    };
};
console.log(speak);

class Instructors extends Person {
    constructor(instrQualities) {
        super(qualities);
        this.specialty = instrQualities.specialty;
        this.favLanguage = instrQualities.favLanguage;
        this.catchPhrase = instrQualities.catchPhrase;

    };

    demo() {
        return ('Today we are learning about'
            `${.subject}`)
    };

    grade() {
        return (`${student.name} 'receives a perfect score on' {.subject}`);
    };
};

console.log(demo)
console.log(grade)
class PMs extends Instructors {
    constructor(pmQualities) {
        super(pmQualities);
        this.gradClassName = pmQualities.gradClassName;
        this.favInstructor = pmQualities.favInstructor;
    };

    standUp() {
        return (`${.channel} '@channel it's time for standup!'`)
    };

    debugsCode() {
        return (`${this.name} debugs ${student.name} 'code on' {.subject}`);
    };
};

console.log(standUp)
console.log(debugsCode)

class Student extends Person {
    constructor(stuQualities) {
        super(stuQualities);
        this.previousBackground = stuQualities.previousBackground;
        this.className = stuQualities.className;
        this.favSubjects = stuQualities.favSubjects;
    };

    listSubjects() {
        return
    };

    PRAssignment() {
        return (`${student.name} 'has submitted a PR for' {.subject}`);
    };
    sprintChallenge() {
        return (`${student.name} 'has begun sprint challange' {.subject}`);
    };



};

console.log(ListSubjects);
console.log(PRAssignment);
console.log(sprintChallenge);