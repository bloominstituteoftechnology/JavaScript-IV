// CODE here for your Lambda Classes

class Person {
    constructor (Pattributes) {
        this.name = Pattributes.name;
        this.age = Pattributes.age;
        this.location = Pattributes.location;
        this.gender = Pattributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
constructor (Iattributes) {
    super(Iattributes);
    this.specialty = Iattributes.specialty;
    this.favLanguage = Iattributes.favLanguage;
    this.catchPhrase = Iattributes.catchPhrase;
}

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor (Sattributes) {
        super (Sattributes);
        this.previousBackground = Sattributes.previousBackground;
        this.className = Sattributes.className;
        this.favSubjects = Sattributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}


class ProjectManager extends Instructor {
    constructor (PMAttributes) {
        super (PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const Socrates = new Instructor({
    name: 'Socrates',
    location: 'Athens',
    age: 71,
    gender: 'male',
    favLanguage: 'Greek',
    specialty: "logic",
    catchPhrase: "#ChangeMyMind"

})

const Nietzsche = new Instructor({
    name: 'Nietzsche',
    location: 'Prussia',
    age: '55',
    gender: 'male',
    favLanguage: 'German',
    specialty: "Nihilism",
    catchPhrase: "God is Dead"
})

const Plato = new ProjectManager ({
    name: 'Plato',
    location: 'School of Athens',
    age: '80',
    gender: 'male',
    favLanguage: 'Latin',
    specialty: 'dialogue',
    catchPhrase: 'Do not get me started on caves!',
    gradClassName: 'Socrates01',
    favInstructor: 'Socrates'
})

const Heidegger = new ProjectManager ({
    name: 'Heidegger',
    location: 'Germany',
    age: '86',
    gender: 'male',
    favLanguage: 'Germany',
    specialty: 'ontological philisophy',
    catchPhrase: 'Dasein!',
    gradClassName: 'Nietzsche02',
    favInstructor: 'Nietzsche'
})

const Aristotle = new Student ({
    name: 'Aristotle',
    location: 'Northern Greece',
    age: '62',
    gender: 'male',
    previousBackground: 'Politics',
    className: 'Socrates02',
    favSubjects: 'ethics'
})

const Beaufret = new Student ({
    name: 'Beaufret',
    location: 'France',
    age: '75',
    gender: 'male',
    previousBackground: 'Academia',
    className: 'Nietzsche03',
    favSubjects: 'existentialism'
})

console.log(Aristotle.name)
console.log(Plato.favInstructor)
console.log(Socrates.favLanguage)

console.log(Nietzsche.demo('The Rise of the Uberman'))
console.log(Beaufret.PRAssignment('Whatever it was that Zarathustra spoke '))
console.log(Heidegger.standUp('ExistentialChannel'))

