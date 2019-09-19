// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name,
            this.age = personAttributes.age,
            this.location = personAttributes.location
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
            this.favLanguage = attributes.favLanguage,
            this.catchPhrase = attributes.catchPhrase,
            this.gradingScale = attributes.gradingScale
    }
    demo() {
        return (`Today we are learning about ${this.specialty}`)
    }
    grade() {
        return (`${this.name} receives a perfect score on ${this.specialty}`);
    }
    score() {
        if (this.gradingScale >= 70) {
            return `Congratulations, you have graduated!`
        }
        `Still grading to determine if passing.`
    }
}


class Students extends Instructor {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground,
            this.classname = studentAttributes.classname,
            this.favSubjects = studentAttributes.favSubjects
    }
    listsSubjects() {
        return ['HTML', 'CSS', 'JavaScript']
    }
    prassignment() {
        return (`${this.name} has submitted a PR for ${this.specialty}`)
    }
    sprintChallenge() {
        return (`${this.name} has begun sprint challenge on ${this.specialty} `);
    }
    score() {
        if (this.gradingScale >= 70) {
            return `Congratulations, you have graduated!`
        }
        `Still grading to determine if passing.`
    }
}

class Projectmanagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName,
            this.favInstructor = pmAttributes.favInstructor,
            this.channel = pmAttributes.channel
    }
    standUp() {
        return (`${this.name} announces to ${this.channel}, @channel standby times!`)
    }
    debugsCode() {
        return (`${this.name} debugs ${this.name}'s code on ${this.specialty}`)
    }
}

const user = new Person({
    name: 'Fred',
    age: 45,
    location: 'Bedrock',
    catchPhrase: `it is what it is`

});

const student = new Students({
    name: 'Jane',
    location: 'Tampa',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'CSS',
    previousBackground: 'teacher',
    classname: 'Web24',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    gradingScale: 95,
});

const instruct = new Instructor({
    name: 'Tina',
    location: 'Utah',
    age: 34,
    favLanguage: 'HTML',
    specialty: 'React',
    catchPhrase: `Don't forget the homies`
});

const projectMag = new Projectmanagers({
    name: 'Tom',
    location: 'San Francisco',
    age: 34,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    channel: 'Web24'
});

console.log(user.speak());
console.log(instruct.demo());
console.log(instruct.grade());
console.log(student.listsSubjects());
console.log(student.prassignment());
console.log(student.sprintChallenge());
console.log(projectMag.standUp());
console.log(projectMag.debugsCode());
console.log(student.score());