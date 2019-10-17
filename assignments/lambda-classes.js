// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name
        this.age = person.age
        this.location = person.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructor) {
        super(instructor)
        this.specialty = instructor.specialty
        this.favLanguage = instructor.favLanguage
        this.catchPhrase = instructor.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

class Student extends Person {
    constructor(student) {
        super(student)
        this.previousBackGround = student.previousBackGround
        this.className = student.className
        this.favSubjects = student.favSubjects
    }
    listsSubjects() {
        return this.favSubjects.map(subject => console.log(subject))
            // this.favSubjects.forEach(element => {
            //     console.log(element)
            // })
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(projectManager) {
        super(projectManager)
        this.gradClassName = projectManager.gradClassName
        this.favInstructor = projectManager.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const peter = new Person({
    name: 'Fred',
    age: 35,
    location: 'Chicago'
})

const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`

})

const jess = new Student({
    name: 'jess',
    age: 16,
    location: 'Minnesota',
    previousBackGround: 'Java',
    className: 'Intro to Java',
    favSubjects: ['C++', 'Java', 'Python', 'Javascript']
})

const PM = new ProjectManager({
    name: 'John',
    age: 22,
    location: 'San Diego',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
})

console.log(peter.speak())

console.log(fred.demo('Classes'))
console.log(fred.grade(jess, 'Python'))

console.log(jess.previousBackGround)
console.log(jess.className)
console.log(jess.listsSubjects())
console.log(jess.PRAssignment('Angular'))
console.log(jess.sprintChallenge('JS IV'))
console.log(jess.speak())
console.log(PM.standUp('@PM11'))
console.log(PM.debugsCode(fred, 'Java'))
console.log(PM.speak())