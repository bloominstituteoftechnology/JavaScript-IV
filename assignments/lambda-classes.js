// CODE here for your Lambda Classes

// create Person class
class Person {
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

// create two objects of Person
const rebs = new Person({
    name : 'Rebecca',
    age : 34,
    location: 'San Diego, CA',
    gender: 'Female'
}) 

console.log(rebs)
console.log(rebs.speak())

const lee = new Person({
    name : 'Lee',
    age : 38,
    location: 'San Diego, CA',
    gender: 'Male'
}) 

console.log(lee)
console.log(lee.speak())

// create Instructor class that extends from Person
class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.name = instructorAttr.name;
        this.age = instructorAttr.age;
        this.location = instructorAttr.location;
        this.gender = instructorAttr.gender;
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

// create two object from Instructor
const cam = new Instructor({
    name : 'Cameron',
    age : 30,
    location : 'Utah',
    gender: 'Male',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Howdy folks'
})

console.log(cam)
console.log(cam.demo('Javascript IV'))
console.log(cam.grade('Jordan', 'Javascript IV'))

const dan = new Instructor({
    name : 'Daniel',
    age : 100,
    location : 'Colorado',
    gender: 'Male',
    specialty: 'CSS',
    favLanguage: 'Python',
    catchPhrase: 'Go Dodgers'
})

console.log(dan)
console.log(dan.demo('Floats'))
console.log(dan.grade('Jordan', 'Flex-box'))

// create Student class which extends from Person
class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.name = studentAttr.name;
        this.age = studentAttr.age;
        this.location = studentAttr.location;
        this.gender = studentAttr.gender;
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

// create two Student object
const branden = new Student({
    name: 'Branden',
    age: 31,
    location: 'Carlsbad, CA',
    gender: 'Male',
    previousBackground: 'Artist',
    className: 'PTFSW4',
    favSubjects: ['CSS', 'HTML', 'JavaScript']
})

console.log(branden)
branden.listsSubjects()
branden.PRAssignment('JS III')
branden.sprintChallenge('JS IV')

const melissa = new Student({
    name: 'Melissa',
    age: 29,
    location: 'Carlsbad, CA',
    gender: 'Female',
    previousBackground: 'Diamond Grader',
    className: 'PTFSW4',
    favSubjects: ['Python', 'Ruby', 'Math']
})

console.log(melissa)
melissa.listsSubjects()
melissa.PRAssignment('Python I')
melissa.sprintChallenge('Python II')

// create Project Manager class that extends from Instructor
class ProjectManager extends Instructor {
    constructor(projectManagerAttr) {
        super(projectManagerAttr);
        this.name = projectManagerAttr.name;
        this.age = projectManagerAttr.age;
        this.location = projectManagerAttr.location;
        this.gender = projectManagerAttr.gender;
        this.gradClassName = projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times`)
    }
    debugsCode(studentObject, subject) {
        console.log(`${this.name} debugs ${studentObject.name} code on ${subject}`)
    }
}

//create two PM object
const casey = new ProjectManager ({
    name: 'Casey',
    age: 24,
    location: 'Riverside',
    gender: 'Female',
    gradClassName: 'CS1',
    favInstructor: 'Josh'
})

console.log(casey)
console.log(casey.favInstructor)
casey.standUp('fswpt3')
casey.debugsCode(melissa, 'JS II')

const allen = new ProjectManager ({
    name: 'Allen',
    age: 25,
    location: 'Texas',
    gender: 'Male',
    gradClassName: 'CS1',
    favInstructor: 'Dan'
})

console.log(allen)
console.log(allen.favInstructor)
allen.standUp('CS14')
allen.debugsCode(branden, 'JS III')

