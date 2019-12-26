// CODE here for your Lambda Classes

class Person {
    constructor (human) {
        this.name = human.name;
        this.age = human.age;
        this.gender = human.gender;
        this.location = human.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (teacher) {
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }
  
    demo (subject) {
        console.log (`Today we are learning about ${subject}`)
    }
    grade (student,subject) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
} 


class Student extends Person {
    constructor(learners) {
        super(learners);
        this.previousBackground = learners.previousBackground;
        this.className = learners.className;
        this.favSubjects = [learners.favSubjects]
    }

    listsSubjects(favSubjects) {
      console.log(`${favSubjects}`)};

    PRAssignment(subject) {
        console.log (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log (`${this.name} has begun sprint challenge on ${subject}`);
    }
}



class ProjectManagers extends Instructor {
    constructor(PM) {
        super(PM);
        this.gradClassName = PM.gradClassName;
        this.favInstructor = PM.favInstrutor;
    }
    standUP (channel) {
        console.log (`${this.name} announces to ${channel}, @channel study times!`);
    }
    debugsCode (student,subject) {
        console.log (`${this.name} debugs ${student}'s code on ${subject}`)
    }
}

const John = new Instructor({
    name :'John',
    gender : 'Male',
    location : 'California',
    age : '34',
    specialty : 'JavaScript',
    favLanguage : 'Front-End',
    catchPhrase : 'Are You Ready?'
})

const Brittany = new Instructor({
    name :'Brittany',
    gender : 'Female',
    location : 'Nevada',
    age : '25',
    specialty : 'React',
    favLanguage : 'Back-End',
    catchPhrase : 'Lets Dive In'
})

console.log(John.location);
John.demo('CSS');
Brittany.grade('Nigel','CSS');
console.log(Brittany.specialty);




const Julie = new Student({
    name: 'Julie',
    gender: 'Female',
    age: '24',
    location: 'New York',
    previousBackground: 'Nursing',
    className: 'FSW16',
    favSubjects: [
        'CSS',
        'JS',
        'HTML'
    ]
})

const Nigel = new Student({
    name: 'Nigel',
    gender: 'Male',
    age: '27',
    location: 'New Jersey',
    previousBackground: 'Cooking',
    className: 'FSW15',
    favSubjects: [
        'CSS',
        'UI',
        'JS'
    ]
})

Julie.listsSubjects([Julie.favSubjects]);
Julie.PRAssignment('HTML');
Nigel.sprintChallenge('CSS');
console.log(Nigel.previousBackground)

const Keke = new ProjectManagers ({
    name: 'Keke',
    gender: 'Female',
    age: '29',
    location: 'Colorado',
    gradClassName: 'FSW12',
    favInstructor: 'Josh',
})

const Ash = new ProjectManagers ({
    name: 'Ash',
    gender: 'Male',
    age: '34',
    location: 'Texas',
    gradClassName: 'FSW12',
    favInstructor: 'Sean',
})

Keke.standUP('FSW15');
Ash.debugsCode('Kiana', 'prototypes');
console.log(Ash.age);