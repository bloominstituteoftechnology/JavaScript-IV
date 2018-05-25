// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    introduce() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject} `
    }
}

const Gene = new Instructor({
    name: 'Gene Cousineau',
    age: 65,
    location: 'L.A.',
    gender: 'M',
    specialty: 'Teaching acting',
    favLanguage: 'the language of Theatre',
    catchPhrase: 'You\'re never going to see the inside of this acting class again!'
});

const Fuches = new Instructor({
    name: 'Fuches',
    age: 58,
    location: 'L.A.',
    gender: 'M',
    specialty: 'handling the "business"',
    favLanguage: 'money',
    catchPhrase: 'BARRY, YOU\'RE ALIVE!',
})



class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(arr) {
        return `${this.favSubjects}; `
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }
}

const Barry = new Student({
    name: 'Barry Berkman',
    age: 35,
    location: 'L.A.',
    gender: 'M',
    previousBackground: 'Hitman',
    className: 'Cousineau\'s Acting Class',
    favSubjects: ['Acting', 'Shooting guns', 'daydreaming about Sally'],
});

const Sally = new Student({
    name: 'Sally Reed',
    age: 29,
    location: 'L.A.',
    gender: 'F',
    previousBackground: 'Acting',
    className: 'Cousineau\'s Acting Class',
    favSubjects: ['Acting', 'Auditioning'],
})

class ProjectManager extends Instructor {
    constructor(PMAttrs) {
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy time!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Hank = new ProjectManager ({
    name: 'Noho Hank',
    age: 32,
    location: 'L.A.',
    gender: 'M',
    specialty: 'being a Mobster',
    favLanguage: 'Chechen',
    catchPhrase: 'We will find you, and we will kill you.',
    gradClassName: 'right-hand man',
    favInstructor: 'Goran Pazar',
})


console.log(Gene.demo('MacBeth')); 
console.log(Fuches.grade(Barry, 'Killing the target'));
console.log(Barry.listsSubjects(this.favSubjects));
console.log(Sally.PRAssignment('playing MacBeth'));
console.log(Barry.sprintChallenge('stopping Chris from saying anything'));
console.log(Hank.standUp('the mobsters'));
console.log(Hank.debugsCode(Barry, 'CSS'));
