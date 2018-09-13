// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age; 
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

const Josh = new Person({
    name: 'Josh',
    age: 39,
    location: 'Utah',
    gender: 'M'
});



// -------------------------------------------

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subj) {
        console.log(`Today we are learning about ${subj}`);
    }

    grade(student, subj) {
        console.log(`${student.name} receives a perfect score on ${subj}`)
    }
}

const Dan = new Instructor({
    name: 'Dan',
    age: 37,
    location: 'The Wild Blue Yonder',
    gender: 'M',
    specialty: 'UX',
    favLanguage: 'HTML',
    catchPhrase: 'The present is all we have.'
});

Dan.speak();
Dan.demo('horses');



// // --------------------
class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    
    listsSubjects() {
        this.favSubjects.forEach((subj) => console.log(subj));
    }
    
    PRAssignment(subj) {
        console.log(`${this.name} has submitted a PR for ${subj}`)
    }
    
    sprintChallenge(subj) {
        console.log(`${this.name} has begun sprint challenge on ${subj}`)
    }
}

const Brandon = new Student({
    name: 'Brandon',
    age: 30,
    location: 'At the table',
    gender: 'M',
    previousBackground: 'alliteration',
    className: 'FSW14',
    favSubjects: ['water', 'science']
});

Dan.grade(Brandon, 'lullabies');
Brandon.speak();
Brandon.PRAssignment('quibbling');
Brandon.sprintChallenge('being a longshoreman');
Brandon.listsSubjects();



// // -------------
class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`);
    }

    debugsCode(student, subj) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subj}`);
    }
}

const Bill = new ProjectManager({
    name: 'Bill',
    age: 25,
    location: 'Northeast',
    gender: 'M',
    specialty: 'Fantasy Football',
    favLanguage: 'Slack',
    catchPhrase: 'Anybody? Anybody?',
    gradClassName: 'CS11',
    favInstructor: 'Josh'
});

console.log('--------- Bill ----------')
Bill.speak();
Bill.demo('horses');
Bill.standUp('FSW14');
Bill.debugsCode(Brandon, 'tartar sauce');