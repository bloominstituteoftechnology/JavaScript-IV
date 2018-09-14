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
            `${this.name} 'and I'm from' ${this.location}`);
    };
};
// console.log(speak);

class Instructor extends Person {
    constructor(instrQualities) {
        super(instrQualities);
        this.specialty = instrQualities.specialty;
        this.favLanguage = instrQualities.favLanguage;
        this.catchPhrase = instrQualities.catchPhrase;

    };

    // demo(subject) {
    //     return ('Today we are learning about'
    //         `${subject}`)
    // };

    // grade(student, {subject}) {
    //     return (`${student.name} 'receives a perfect score on' {subject}`);
    // };
};

// console.log(demo)
// console.log(grade)
class PMs extends Instructor {
    constructor(pmQualities) {
        super(pmQualities);
        this.gradClassName = pmQualities.gradClassName;
        this.favInstructor = pmQualities.favInstructor;
    };

    // standUp(slackChannel) {
    //     return (`${pmQualities.name} '@channel it's time for standup!'`)
    // };

    // debugsCode(student, subject) {
    //     return (`${this.name} debugs ${student.name} 'code on' {subject}`);
    // };
};

// console.log(standUp)
// console.log(debugsCode)

class Student extends Person {
    constructor(stuQualities) {
        super(stuQualities);
        this.previousBackground = stuQualities.previousBackground;
        this.className = stuQualities.className;
        this.favSubjects = stuQualities.favSubjects;
    };

    // listSubjects(subjects) {
    //     return ''
    // };

    // PRAssignment() {
    //     return (`${this.name} 'has submitted a PR for' {subject}`);
    // };
    sprintChallenge() {
        return (`${this.name} 'has begun sprint challange' {subject}`);
    };



};

// console.log(ListSubjects);
// console.log(PRAssignment);
// console.log(sprintChallenge);


const Austin = new Instructor({
    name: 'Austin',
    location: 'San Francisco',
    age: 40,
    gender: 'male',
    favLanguage: 'money',
    specialty: 'fundraising and path forging',
    catchPhrase: `It's time for another whiteboard Friday`
});

console.log(Austin.name);
console.log(Austin.catchPhrase)