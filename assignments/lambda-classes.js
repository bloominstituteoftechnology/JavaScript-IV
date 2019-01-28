class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }

    demo(subject) {
        return `Today we are learning ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

}

class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
    }

    listSubjects() {
        this.favSubjects.forEach(function(a) {
            console.log(a)
        })
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`
    }


}


class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel study times`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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

const mark = new Student({
    name: 'Mark',
    location: 'lost',
    age: 25,
    gender: 'male',
    previousBackground: 'Spy',
    className: 'fswpt4',
    favSubjects: ['assembly language', 'javascript']
});


const rod = new ProjectManagers({
    name: 'Rod',
    location: 'sitting at laptop',
    age: '26',
    gender: 'male',
    gradClassName: 'samunja',
    favInstructor: 'ALL',
});


console.log(mark.favSubjects)
console.log(fred.demo('React'))
console.log(fred.grade(mark, 'fs'))
console.log(rod.standUp('RodSub'))
console.log(mark.sprintChallenge('Javascript I - IV'))




//fdsfddf```'