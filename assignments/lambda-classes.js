// CODE here for your Lambda Classes

class Person {
    constructor (parameter) {
        this.name = parameter.name;
        this.age = parameter.age;
        this.location = parameter.location;
        this.gender = parameter.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructors extends Person{
    constructor (Instructorparam) {
        super(Instructorparam);
        this.specialty = Instructorparam.specialty;
        this.favLanguage = Instructorparam.favLanguage;
        this.catchPhrase = Instructorparam.catchPhrase; 
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(Students, subject) {
        return `${Students.name} receives a perfect score on ${subject}`;
    };
}

class Students extends Person{
    constructor (Studentparam) {
        super (Studentparam);
        this.previousBackground = Studentparam.previousBackground;
        this.className = Studentparam.className;
        this.favSubjects = Studentparam.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    };
}

class ProjectManagers extends Instructors {
    constructor (pmparam) {
        super (pmparam);
        this.gradClassName = pmparam.gradClassName;
        this.favInstructor = pmparam.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    };
    debugsCode (Students, subject) {
        return `${this.name} debugs ${Students.name}s code on ${subject}`;
    };
}
//students
const Anne = new Students({
    name: 'Anne',
    age: 23,
    location: 'Nashville',
    gender: 'Female',
    previousBackground: 'Stylist',
    className: 'CS10',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const Jordan = new Students({
    name: 'Jordan',
    age: 25,
    location: 'LA',
    gender: 'Male',
    previousBackground: 'Photographer',
    className: 'CS10',
    favSubjects: ['Html', 'JavaScript']
});
const Sara = new Students({
    name: 'Sara',
    age: 31,
    location: 'New York City',
    gender: 'Female',
    previousBackground: 'Hair Stylist',
    className: 'CS10',
    favSubjects: ['JavaScript']
});

//Instructors
const Ryan = new Instructors({
    name: 'Ryan',
    age: 30,
    location: 'Nashville',
    gender: 'Male',
    specialty: 'Redux',
    favLanguage: 'JS',
    catchPhrase: 'HAYO!'
});
const Matt = new Instructors({
    name: 'Matt',
    age: 35,
    location: 'Detroit',
    gender: 'Male',
    specialty: 'React',
    favLanguage: 'HTML',
    catchPhrase: 'Whatsuppp'
});

//project managers

const Cole = new ProjectManagers({
    name: 'Cole',
    age: 18,
    location: 'In the Pineapple Under the Sea',
    gender: 'Female',
    specialty: 'Karate',
    favLanguage: 'Morse Code',
    catchPhrase: 'Always Commit Often!',
    gradClassName: 'CS5',
    favInstructor: 'Ryan'
});

const Mary = new ProjectManagers({
    name: 'Mary',
    age: 43,
    location: 'Detroit',
    gender: 'Female',
    specialty: 'Node',
    favLanguage: 'JavaScript',
    catchPhrase: 'Booyaa',
    gradClassName: 'CS4',
    favInstructor: 'Josh'
});



console.log(Mary.age);
console.log(Anne);
console.log(Mary);
console.log(Cole);
console.log(Jordan.gender);
console.log(Anne.speak());
console.log(Mary.speak());