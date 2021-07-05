// CODE here for your Lambda Classes
// CODE here for your Lambda Classes
class Person {
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructProps){
        super(instructProps);
        this.specialty = instructProps.specialty;
        this.favLanguage = instructProps.favLanguage;
        this.catchPhrase = instructProps.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    gradeWork(student){
        let plusOrMinus = Math.random();
        if (plusOrMinus >= .5){
            student.gradeVal += parseInt((Math.random() * 100).toFixed(2)); 
        }
        else {
            student.gradeVal += parseInt((Math.random() * (-100)).toFixed(2));
        }
        console.log(`${this.name} grades ${student.name}'s work, which brings ${student.name}'s class grade to ${student.gradeVal}`);
        student.gradCheck();
        // student.farts();
    }
}

class Student extends Person {
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.gradeVal = studentProps.gradeVal;
    }
    listSubjects(){
        console.log(this.favSubjects);
    }
    pRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`);
    }
    gradCheck(){
        if (this.gradeVal >= 70){
            console.log(`${this.name} has graduated from Lambda School!`);
        }
        else if (this.gradeVal < 0){
            console.log(`${this.name} is in some real trouble...`)
        }        
    }
    // farts(){
    //     console.log(`${this.name} farts.`)
    // }
}

class ProjectManager extends Instructor {
    constructor(pMProps){
        super(pMProps);
        this.gradClassName = pMProps.gradClassName;
        this.favInstructor = pMProps.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const barry = new Instructor({
    name: 'Barry',
    age: 75,
    location: 'New Jack City',
    gender: 'M',
    favLanguage: 'C',
    specialty: 'Old things',
    catchPhrase: `Is my microphone on`
});

barry.demo('Internet');

const larry = new Student({
    name: 'Larry',
    age: 8,
    location: 'Partytown',
    gender: 'M',
    gradeVal: 35,
    previousBackground: 'Child',
    className: 'FSW22',
    favSubjects: [
        'CSS',
        'Javascript',
        'Nap time',
    ]
    
});

larry.listSubjects();
larry.sprintChallenge('Javascript classes');
barry.grade(larry, 'Javascript classes');

const garry = new ProjectManager({
    name: 'Garry',
    age: '???',
    location: 'Parts Unknown',
    gender: 'M',
    favLanguage: 'Machine Code',
    specialty: 'Back end',
    catchPhrase: '[feral noises]',
    gradClassName: 'FSW0',
    favInstructor: 'Not Barry'
});

garry.standUp('The Endless Void');
garry.debugsCode(larry, 'Javascript classes');
console.log(larry.gradeVal);
garry.gradeWork(larry);
barry.gradeWork(larry);
garry.gradeWork(larry);
