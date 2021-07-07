// CODE here for your Lambda Classes
class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;        
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(skills){
        super(skills);
        this.specialty = skills.specialty;
        this.favLanguage = skills.favLanguage;
        this.catchPhrase = skills.catchPhrase;
        this.subject = skills.subject;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
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
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
       return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}!`;
    }
}

class ProjectManager extends Instructor {
    constructor(helper){
        super(helper);
        this.gradClassName = helper.gradClassName;
        this.favInstructor = helper.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.`;
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
    name: 'Daenerys Targaryen',
    location: 'Iron Throne',
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

console.log(eleanor.speak());
console.log(alfred.demo('JavaScript'));
console.log(bruce.grade(danny.name, 'CSS'));
console.log(sabrina.listsSubjects());
console.log(danny.PRAssignment('Dragons'));
console.log(danny.sprintChallenge('Keeping the Iron Throne'));
console.log(eleanor.standUp('Slack Channel'));
console.log(anne.debugsCode(sabrina.name, 'Sword Fighting'));

