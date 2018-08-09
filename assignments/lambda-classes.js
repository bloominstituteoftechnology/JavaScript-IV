// CODE here for your Lambda Classes

class Person {
    constructor(traits) {
        this.name = traits.name;
        this.age = traits.age;
        this.location = traits.location;
        this.gender = traits.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(insTraits) {
        super(insTraits);
        this.specialty = insTraits.specialty;
        this.favLanguage = insTraits.favLanguage;
        this.catchPhrase = insTraits.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    assessment(student) {
        student.grade = Math.floor((Math.random() * 100) + 1);
        return `${student.name} received ${student.grade}`;
    }
}

class Student extends Person {
    constructor(stuTraits) {
        super(stuTraits);
        this.previousBackground = stuTraits.previousBackground;
        this.className = stuTraits.className;
        this.favSubjects = stuTraits.favSubjects;
        this.stuTraits = stuTraits.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade >= 70) {
            return `You succesfully completed the course work for Lambda with a score of ${this.grade}, good luck on your job search!`;
        } else {
            return `Unfortunately your grade is ${this.grade} and you must keep plugging away before we let you leave.`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmTraits) {
        super(pmTraits);
        this.gradClassName = pmTraits.gradClassName;
        this.favInstructor = pmTraits.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const tom = new Instructor({
    name: 'Tom',
    location: 'Bedrock',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const sam = new Student({
    name: 'Sam',
    location: 'Bedrock',
    age: 24,
    gender: 'female',
    previousBackground: 'C++ college course',
    className: 'CS12',
    grade: 56,
    favSubjects: ['Python', 'C++', 'Java']
});

const lauren = new Student({
    name: 'Lauren',
    location: 'Bedrock',
    age: 30,
    gender: 'female',
    previousBackground: 'none',
    className: 'CS13',
    grade: 100,
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const ryan = new ProjectManager({
    name: 'Ryan',
    location: 'Bedrock',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Yee-haw`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});



console.log(ryan.name);
console.log(tom.location);
console.log(tom.specialty);
console.log(tom.favLanguage);
console.log(tom.demo('CSS'));
console.log(tom.grade(lauren, `HTML`));
console.log(sam.age);
console.log(lauren.listsSubjects());
console.log(lauren.PRAssignment(`LESS`));
console.log(lauren.sprintChallenge(`Python`));
console.log(ryan.gradClassName);
console.log(ryan.favInstructor);
console.log(ryan.standUp(`CS13_ryan`));
console.log(ryan.debugsCode(sam, `CSS`));
console.log(tom.assessment(lauren));
console.log(ryan.assessment(lauren));
console.log(lauren.graduate());