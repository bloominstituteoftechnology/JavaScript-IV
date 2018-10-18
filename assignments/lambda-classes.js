// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello, my name is ${this.name} I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.specialty = childAttributes.specialty;
        this.favLanguage = childAttributes.favLanguage;
        this.catchPhrase = childAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.` ;
    };
}

class Student extends Person {
    constructor(childAttributes) {
        super(childAttributes);
        this.previousBackground = childAttributes.previousBackground;
        this.className = childAttributes.className;
        this.favSubjects = childAttributes.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    prAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(grandAttributes) {
        super(grandAttributes);
        this.gradClassName = grandAttributes.gradClassName;
        this.favInstructor = this.grandAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


//people

//instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const bill = new Instructor({
    name: 'Bill',
    location: 'San Diego',
    age: 29,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `ripppppppp`
});

// students
const jarrad = new Student({
    name: 'Jarrad',
    location: 'Hong Kong',
    age: 19,
    gender: 'male',
    previousBackground: 'Pizza Maker',
    className: 'FSW15'
});

const allen = new Student({
    name: 'Allen',
    location: 'Utah',
    age: 33,
    gender: 'Male',
    previousBackground: 'Camera Specialist',
    className: 'IOS3'
});

//Project Manager
const gabe = new Instructor({
    name: 'Gabe',
    location: 'Eugene',
    age: 26,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Josh'
});

const miranda = new Instructor({
    name: 'Miranda',
    location: 'Nashville',
    age: 44,
    gender: 'female',
    gradClassName: 'FSW7',
    favInstructor: 'Bill'
});