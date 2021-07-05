class Person {
    constructor (att) {
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
        this.gender = att.gender;
    }
    speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}`;
    }
};

class Instructor extends Person {
    constructor (insAtt) {
        super (insAtt);
        this.specialty = insAtt.specialty;
        this.favLanguage = insAtt.favLanguage;
        this.catchPhrase = insAtt.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
};

class Student extends Person {
    constructor (stuAtt) {
        super(stuAtt);
        this.previousBackground = stuAtt.previousBackground;
        this.className = stuAtt.className;
        this.favSubjects = stuAtt.favSubjects;
    }
    listsSubjects() {
        return `My favorite subjects are ${this.favSubjects}.`
    }
    pRAsignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
};

class ProjectManager extends Instructor {
    constructor (pMAtt) {
        super(pMAtt);
        this.gradClassName = pMAtt.gradClassName;
        this.favInstructor = pMAtt.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}.`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
};

const michaela = new Instructor ({
    name: 'Michaela',
    age: 35,
    location: 'Kansas City',
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'back-end',
    catchPhrase: `Can't catch me, I'm the gingerbread man.`
});

const mitchell = new Student ({
    name: 'Mitchell',
    age: 26,
    location: 'Detroit',
    gender: 'male',
    preveiousBackground: `Dick's Sporting Goods manager`,
    className: 'CS555',
    favSubjects: [' HTML', ' CSS', ' and Intro to Git']
});

const maleficent = new ProjectManager ({
    name: 'Maleficent',
    age: 48,
    location: 'San Angelo',
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'front-end',
    catchPhrase: 'Wubba lubba dub dub!',
    gradClassName: 'CS3',
    favInstructor: 'Michaela'
});



console.log(michaela.catchPhrase);
console.log(michaela.demo('Javascript'));
console.log(mitchell.pRAsignment('Intro to Git'));
console.log(mitchell.sprintChallenge('Advanced CSS'))
console.log(mitchell.listsSubjects())
console.log(maleficent.standUp('FSW2_maleficent'));
console.log(maleficent.debugsCode(mitchell, 'Advanced Javascript'));
console.log();
console.log();
console.log();
console.log();