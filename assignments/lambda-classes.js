// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        for (let key of['name', 'age', 'location']) {
            this[key] = personAttributes[key]
        }
    }
    speak() {
        return `Hello my name ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        for (let key of['specialty', 'favLanguage', 'catchPhrase']) {
            this[key] = instructorAttributes[key]
        }
    }
    demo(subject) { return `Today we are learning about ${subject}` }
    grade(student, subject) { return `${student.name} receives a perfect score on ${subject} ` }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        for (let key of['previousBackground', 'className', 'favSubjects']) {
            this[key] = studentAttributes[key]
        }
    }
    listsSubjects() {
        console.log('Favourite subjecs are:')
        student1.favSubjects.forEach(function(current) { console.log(`${current}`) }, this)
    }
    PRAssignment(subject) {
        return console.log(`${student1.name} has submitted a PR for ${subject} \nand ${student2.name} has submitted a PR for ${subject} too`)
    }
    sprintChallenge(subject) {
        return console.log(`${student1.name} has begun sprint challenge on ${subject} \nand ${student2.name} has begun sprint challenge on ${subject} too`)
    }
}
class ProjectManger extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        for (let key of['gradClassName', 'favInstructor']) {
            this[key] = pmAttributes[key]
        }
    }
    standUp(slackChannel) {
        return console.log(`${pm1.name} announces to ${slackChannel}, @channel it's standUp times!`)

    }
    debugsCode(student, subject) {
        return console.log(`${pm1.name} debugs ${student.name}'s code on ${subject}`)
    }
}


/**OBJECTS CREATION */

//PERSON'S OBJECT
const person1 = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
})
const person2 = new Person({
    name: 'Adela',
    age: 28,
    location: 'Nigeria'
})

//STUDENT'S OBJECT
const student1 = new Student({
    name: 'Adela',
    previousBackground: 'NONE',
    className: 'WEB23',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const student2 = new Student({
    name: 'Devin',
    previousBackground: 'flatiron',
    className: 'WEB20',
    favSubjects: ['Html', 'CSS', 'JavaScript', 'Pyton']
});

//INSTRUCTOR'S OBJECT
const instructor1 = new Instructor({
    name: 'Britt',
    location: 'USA',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const instructor2 = new Instructor({
    name: 'TY',
    location: 'CA',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Let's code`
});

//PROJECT MANAGER
const pm1 = new ProjectManger({
    name: 'Britt'
})
const pm2 = new ProjectManger({
    name: 'TY'
})

/**LOG's TO CHECK CODE */

//PERSON LOG
console.log(person1.speak())
console.log(person2.speak())

//INSTRUCTOR LOG

//***DEMO METHOD
console.log(instructor1.demo('JAVASCRIPT'))
console.log(instructor2.demo('PREPROCESSOR'))

//***GRADE METHOD
console.log(instructor1.grade(student1, 'JavaScript'))
console.log(instructor2.grade(student2, 'PREPROCESSOR'))

//STUDENT LOG
//***LISTS SUBJECT METHOD
console.log(`${student1.listsSubjects()}`)

// ***PRAssignment METHOD
console.log(`${student1.PRAssignment('JAVASCRIPT')}`)

// ***PRAssignment METHOD
console.log(`${student1.sprintChallenge('JAVASCRIPT')}`)

// PROJECT MANAGER LOG
// ***standUp METHOD
console.log(pm1.standUp('Web23'))

// *** debugsCode METHOD
console.log(pm1.debugsCode(student1, 'JavaScript'))

// console.log(fred.demo('Yoruba'))
// console.log(Britt.debugsCode(student, 'JavaScript'))
// console.log(Britt.standUp('Web23'))
// console.log(`${student.listsSubjects()}`)
// console.log(`${student.PRAssignment('Yoruba')}`)
// console.log(`${student.sprintChallenge('Yoruba')}`)
// console.log(fred.grade(student, 'Yoruba'))