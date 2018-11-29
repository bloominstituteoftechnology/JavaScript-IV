// CODE here for your Lambda Classes


class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Instructor Objects

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Utah',
    gender: 'Male',
    specialty: 'Banjo',
    favLanguage: 'JavaScript',
    catchPhrase: 'Big Boss'
});

const joshAlt = new Instructor({
    name: 'Josh Alternate',
    age: 36,
    location: 'Idaho',
    gender: 'Male-ish',
    specialty: 'Guitar',
    favLanguage: 'French',
    catchPhrase: 'I love using !important'
});

const dan = new Student({
    name: 'Dan',
    age: 30,
    location: 'Boston',
    gender: 'Male',
    previousBackground: 'Poker',
    className: 'FSW 16',
    favSubjects: ['HTML', 'CSS', 'JS']
});

const marissa = new Student({
    name: 'Marissa',
    age: 28,
    location: 'Somerville',
    gender: 'Female',
    previousBackground: 'Chemical Engineering',
    className: 'Northeastern Grad School',
    favSubjects: ['Chem', 'Thermo', 'Transport']
});

const PM1 = new ProjectManagers({
    name: 'shaun',
    age: 31,
    location: 'albany',
    gender: 'Male',
    specialty: 'eating',
    favLanguage: 'derision',
    catchPhrase: 'I am longing the bottom',
    gradClassName: 'Bentley, the school not the car',
    favInstructor: 'ashley'
});

const PM2 = new ProjectManagers({
    name: 'Glantz',
    age: 47,
    location: 'philly',
    gender: 'Male',
    specialty: 'icx',
    favLanguage: 'agreeing with paulgees',
    catchPhrase: 'I saw a chest',
    gradClassName: 'School of hard knocks',
    favInstructor: 'shaun'
});

josh.demo('classes');
joshAlt.grade(dan, 'Java');
marissa.listsSubjects();
dan.PRAssignment('pseudo-classical inheritance');
marissa.sprintChallenge('sprinting');
PM1.standUp('FSW16');
PM2.debugsCode(marissa, 'aiming');