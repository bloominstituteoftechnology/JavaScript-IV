// CODE here for your Lambda Classes

// Generic Person class

class Person {
    constructor(personData) {
        this.name = personData.name;
        this.age = personData.age;
        this.location = personData.location;
        this.gender = personData.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

/// Instructor class

class Instructor extends Person {
    constructor(instructorData) {
        super(instructorData);
        this.specialty = instructorData.specialty;
        this.favLanguage = instructorData.favLanguage;
        this.catchPhrase = instructorData.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(studentName, subject) {
        `${studentName} receives a perfect score on ${subject}`
    }
}

/// Student class

class Student extends Person {
    constructor(studentData) {
        super(studentData);
        this.previousBackground = studentData.previousBackground;
        this.className = studentData.className;
        this.favSubjects = [studentData.favSubjects];
        this.grade = Math.floor((Math.random() * 100) + 1);
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

/// Project Managers

class ProjectManager extends Instructor {
    constructor(projectManagerData) {
        super(projectManagerData);
        this.gradClassName = projectManagerData.gradClassName;
        this.favInstructor = projectManagerData.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel} @channel standy times!`)
    }
    debugsCode(studentHandle, subject) {
        console.log(`${this.name} debugs ${studentHandle.name}'s code on ${subject}`)
    }
}

/// Project Managers made manifest

const blade = new ProjectManager({
    'name': 'Wesley Snipes',
    'age': 56,
    'location': 'Japan',
    'gender': 'male',
    'specialty': 'vampire hunting',
    'favLanguage': 'Ruby',
    'catchPhrase': 'Taxation is theft.',
    'gradClassName': 'CS2',
    'favInstructor': 'Ray Kurzweil'
})

const clown = new ProjectManager({
    'name': 'Bozo',
    'age': 114,
    'location': 'Chicago',
    'gender': 'male',
    'specialty': 'tech support',
    'favLanguage': 'C++',
    'catchPhrase': 'Did you try rebooting?',
    'gradClassName': 'CS1',
    'favInstructor': 'Rob Robinson'
})




// Student body

const larry = new Student({
    'name': 'Larry Bird',
    'age': 61,
    'location': 'French Lick',
    'gender': 'male',
    'previousBackground': 'basketball hall-of-famer',
    'className': 'FSW14',
    'favSubjects': ['JavaScript', 'gym', 'electrical engineering'],
})

const lester = new Student({
    'name': 'Les Paul',
    'age': 99,
    'location': 'Manhattan',
    'gender': 'male',
    'previousBackground': 'audio engineer',
    'className': 'FSW14',
    'favSubjects': ['Circuits', 'Physics', 'Python'],
})

const madonna = new Student({
    'name': 'Material Girl',
    'age': 60,
    'location': 'Detroit',
    'gender': 'female',
    'previousBackground': 'Material Girl',
    'className': 'FSW14',
    'favSubjects': ['jazz dance', 'kabbalah', 'JavaScript'],
})
// Meet The Instructors

const rayKurzweil = new Instructor({
    'name': 'Ray Kurzweil',
    'age': 70,
    'location': 'San Mateo',
    'gender': 'male',
    'specialty': 'machine learning',
    'favLanguage': 'LISP',
    'catchPhrase': 'Inventing is a lot like surfing: you have to anticipate and catch the wave at just the right moment.'
})

const bob = new Instructor({
    'name': 'Rob Robinson',
    'age': 5,
    'location': 'Salton Sea',
    'gender': 'male',
    'specialty': 'card counting apps',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Blackjack is way easier if you use my card counting app.'
})

// Generic Person people

const undertaker = new Person({
    'name': 'The Undertaker',
    'age': 99,
    'location': 'Death Valley',
    'gender': 'male',
})
const hotrod = new Person({
    'name': 'Rowdy Roddy Piper',
    'age': 60,
    'location': 'Oregon',
    'gender': 'male',
})

hotrod.speak();
blade.standUp('FSW14')
larry.listsSubjects()
lester.PRAssignment('Robotics')
lester.listsSubjects()
madonna.sprintChallenge('jazz dance')
bob.demo("card-counting with JavaScript")
console.log(rayKurzweil['catchPhrase'])
rayKurzweil.grade('Material Girl', 'jazz dance')
undertaker.speak();
clown.debugsCode(larry, 'Pascal')
console.log(larry.grade)
console.log(madonna.grade)
