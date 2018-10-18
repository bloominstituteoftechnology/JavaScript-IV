// CODE here for your Lambda Classes
class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;        
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(skills){
        super(skills);
        this.specialty = skills.specialty;
        this.favLanguage = skills.favLanguage;
        this.catchPhrase = skills.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }
    grade() {
        return `${this.name} receives a perfect score on ${this.subject}`
    }
}

class Student extends Person {
    constructor(edu){
        super(edu);
        this.previousBackground = edu.previousBackground;
        this.className = edu.className;
        this.favSubjects = edu.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(){
        `${this.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge(){
        `${this.name} has begun sprint challenge on ${this.subject}!`
    }
}

class ProjectManager extends Instructor {
    constructor(helper){
        super(helper);
        this.gradClassName = helper.gradClassName;
        this.favInstructor = helper.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!`
    }
    debugsCode() {
        `${this.name} debugs ${student.name}'s code on ${this.subject}.`
    }
}

const bruce = new Instructor({
    name: 'Bruce Wayne',
    location: 'Bat Cave',
    age: '34',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'I am Batman!'
});

const alfred = new Instructor({
    name: 'Alfred Thaddeus Crane Pennyworth',
    location: 'Gotham City',
    age: '57',
    gender: 'male',
    favLanguage: 'NodeJS',
    specialty: 'Back-end',
    catchPhrase: 'Why do we fall sir? So that we can learn to pick ourselves up.!'
})

const sabrina = new Student({
    name: 'Sabrina Spellman',
    location: 'Magic Realm',
    age: '17',
    gender: 'Female',
    previousBackground: 'High School Student',
    className: 'CS13',
    favSubjects: ['Psuedo Classical prototypal inheritance', 'CSS', 'JavaScript']
})

const danny = new Student({
    name: 'Daenerys targaryen',
    location: 'Dragonstone',
    age: '20',
    gender: 'Female',
    previousBackground: 'Dragon Queen',
    className: 'CS20',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const anne = new ProjectManager({
    name: 'Anne Bonny',
    location: 'Maroon Island',
    age: '27',
    gender: 'Female',
    gradClassName: 'CS1',
    favInstructor: 'Alfred'
    
})

const eleanor = new ProjectManager({
    name: 'Eleanor Guthrie',
    location: 'New Providence Island',
    age: '32',
    gender: 'Female',
    gradClassName: 'CS5',
    favInstructor: 'Alfred'

})