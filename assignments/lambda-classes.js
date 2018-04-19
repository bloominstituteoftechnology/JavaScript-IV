class Person {
    constructor(personOpts) {
        this.name = personOpts.name;
        this.age = personOpts.age;
        this.location = personOpts.location;
        this.gender = personOpts.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorOpts) {
        super(instructorOpts);
        this.specialty = instructorOpts.specialty;
        this.favLanguage = instructorOpts.favLanguage;
        this.catchPhrase = instructorOpts.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(studentOpts) {
        super(studentOpts);
        this.previousBackground = studentOpts.previousBackground;
        this.className = studentOpts.className;
        this.favSubjects = studentOpts.favSubjects;
    }
    listSubjects() {
        this.favSubjects.forEach(sub => console.log(sub))
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge() {
        console.log(`${this.name} has begun spring challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmOpts) {
        super(pmOpts);
        this.gradClassName = pmOpts.gradClassName;
        this.favInstructor = pmOpts.favInstructor;
    }
    standUp(slackName) {
        console.log(`${this.name} announces to ${slackName}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 33,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Jazz Rising`
});


const ellen = new ProjectManager({
    name: 'Ellen',
    location: 'Oregon',
    age: 21,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Arrays are the best!`,
    gradClassName: 'CS2',
    favInstructor: 'Josh'
});


const erinc = new Student({
    name: 'Erinc',
    location: 'San Francisco',
    age: 31,
    gender: 'male',
    prevBackground: 'Sales',
    className: 'CS10',
    favSubjects: ['CSS', 'JavaScript', 'HTML']
});

console.log(josh)
console.log(erinc.speak())
console.log(josh.demo('react'))
console.log(josh.speak())
console.log(ellen)
console.log(ellen.standUp('cs10'))
console.log(ellen.debugsCode(erinc, 'inheritance'))
console.log(ellen.grade(erinc, 'css'))

