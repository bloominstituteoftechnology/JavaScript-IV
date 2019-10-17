class Person {
    constructor(name, age, location){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const eoin = new Person ({
    name: 'Eoin',
    age: 24,
    location: 'Ireland'
});

class Instructor extends Person {
    constructor (name, age, location){
        super (name, age, location);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
        this.subject = attributes.subject;
        this.student = attributes.student;
    }

    demo (subject){
        return `Today we are learning about ${this.subject}`;
    }
    grade (student, subject) {
        return `${this.student.name} receives a perfect score on ${this.subject}`;
    } 
}

const polar = new Instructor ({ //passing methods into an object. 
    name: 'Polar',
    age: 7,
    location: 'Ireland',
    speciality: 'JavaScript',
    favLanguage: 'CSS',
    catchPhrase: 'I am actually a dog.'
});

class Student extends Person {
    constructor (){
        super ();
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = [];
        this.grade = grade;
    }

    listsSubject (){
        return `${this.favSubjects}`;
    }

    PRAssignment () {
        return `${this.student.name} has submitted a PR for ${this.subject}`;
    }

    sprintChallenge () {
        return `${this.student.name} has begun spring challenge on ${this.subject}`;
    }

    graduate (grade) {
        if (grade > 70){
            return `You are ready to graduate!`;
        } else {
            return `You must study more.`;
        }
    }
}

const ozzy = new Student ({
    name: 'Ozzy',
    age: 1,
    location: 'Ireland',
    previousBackground: 'Is a dog',
    className: 'Class for dogs',
    favSubjects: 'Chewing Things.',
    catchPhrase: 'I ate my homework'
});

class ProjectManager extends Instructor {
    constructor (){
        super ();
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    };

    standUp (){
        return `${this.name} announces to ${this.channel}, @channel standby times!`; 
    }

    debugsCode () {
        return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`;
    }
}

const skip = new ProjectManager ({
    name: 'Eoin',
    age: 10,
    location: 'Ireland',
    previousBackground: 'A dog',
    className: 'Class 247',
    favSubjects: 'Nutriton for Dogs',
    catchPhrase: 'Hey maan I am Dog!'
});

console.log(polar.grade(ozzy, 'maths'));