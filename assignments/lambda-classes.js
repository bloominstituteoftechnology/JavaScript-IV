// CODE here for your Lambda Classes
class Person {
    constructor (personOptions){
        this.name = personOptions.name
        this.age = personOptions.age
        this.location = personOptions.location
        this.gender = personOptions.gender
    }

    speak(){
        console.log(`Hi my name is ${this.name}, I'm from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (instructorOptions){
        super(instructorOptions)
        this.specialty = instructorOptions.specialty
        this.favLanguage = instructorOptions.favLanguage
        this.catchPhrase = instructorOptions.catchPhrase
    }

    demo (subject) {
        console.log(`Today we are learnin about ${subject}`)
    }

    grade (student, subject){
        console.log(`${student} recives a perfect score on ${subject}`)
    }

    grade (student){
        student.grade = Math.random(100)
    }
}

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions)
        this.previousBackground = studentOptions.previousBackground
        this.className = studentOptions.className
        this.favSubject = studentOptions.favSubject
        this.grade = studentOptions.grade
    }

    listsSubjects() {
        this.favSubject.forEach(subject => console.log(subject))
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted PR for ${subject}`)
    }

    sprintChallange(subject) {
        console.log(`${this.name} has started sprint challange on ${subject}`)
    }

    graduate (){
        if (this.grade > 70)
            console.log(`You have graduated!`)
        else
            console.log(`You need more better grade graduate go back to  your assignments`)
    }
}

class ProjectManager extends  Instructor {
    constructor (projectManagerOptions){
        super(Instructor)
        this.gradClassName = projectManagerOptions.gradClassName
        this.favInstructor = projectManagerOptions.favInstructor
    }

    standUp (channel){
        console.log(`${this.name} announces to ${channel}, @channel standy time`)
    }

    debugsCode (student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Person class examples

const p1 = new Person({
    name: 'Person1',
    age: 20,
    location: 'Hyderabad, IND',
    gender: 'M'
})

p1.speak();

const p2 = new Person({
    name: 'Person2',
    age: 40,
    location: 'London, UK',
    gender: 'F'
})

p2.speak()

// Instructor class examples

const Josh = new Instructor({
    name: 'Josh Knell',
    age: 35,
    location: 'US',
    gender: 'M',
    specialty: 'Front-end web development',
    catchPhrase: ''
})

Josh.speak()
Josh.demo('User Interface Desing')

const Russell = new Instructor({
    name: 'Russell Kennington',
    age: 25,
    location: 'US',
    gender: 'M',
    specialty: '',
    catchPhrase: ''
})

Russell.speak()
Russell.demo('JS')



// Student class examples

const Kamal = new Student ({
    name: 'Kamal Mukkamala',
    age: 20,
    location: 'Hyderabad, IND',
    previousBackground: 'Android, Chat-bots and Web-API\'s',
    className: 'CS12',
    favSubject: ['JS', 'Algo\'s', 'DS']
})

Josh.grade(Kamal, 'HTML & CSS')
Josh.grade(Kamal)
Russell.grade(Kamal, 'JS')
Russell.grade()
Kamal.speak()
Kamal.listsSubjects()
Kamal.PRAssignment('JS')
Kamal.sprintChallange('JS')

const Erik = new Student({
    name: 'Erik Kimsey',
    age: 35,
    gender: 'M',
    location: 'Virgina, USA',
    className: 'CS12',
    favSubjects: []
})

Josh.grade(Erik, 'HTML & CSS')
Russell.grade(Erik, 'JS')
Russell.grade()
Erik.speak()
Erik.PRAssignment('JS')
Erik.sprintChallange('JS')

// Project Manager class Examples

const Nathan = new ProjectManager({
    name: 'Nathan Daniel',
    age: 38,
    location: 'USA',
    specialty: 'Everything on web :wink:',
    catchPhrase: '',
    gradClassName: 'CS10',
    favInstructor: ['Luis']
})

Nathan.speak();
Nathan.demo('JS')
Nathan.grade(Kamal, 'JS')
Nathan.standUp('#Nathan')
Nathan.debugsCode(Kamal, 'JS')

const Calumn = new ProjectManager({
    name: 'Calum Groover',
    age: 28,
    location: 'USA',
    specialty: '',
    catchPhrase: '',
    gradClassName: 'CS10',
    favInstructor: []
})

Calumn.speak();
Calumn.demo('HTML & CSS')
Calumn.grade(Kamal, 'HTML & CSS')
Calumn.standUp('#Calumn')
Nathan.debugsCode(Kamal, 'HTML & CSS')



