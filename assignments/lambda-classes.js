// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender; 
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location};`
    }
} // end of Person

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo (subject) {
        // console.log(`Today we are learing about ` + subject);
        return `Today we are learning about ` + subject;
    }
    grade (student, subject) {
        // console.log(student + ` recieves a perfect score on ` + subject);
        return student + ` receives a perfect score on ` + subject;
    }
}

class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    litsSubjects () {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ` + subject);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challnge on ` +subject);
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradeClassName = pmProps.gradeClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ` + channel + `, @channel standy times!`);
    }
    debugsCode (x, subject) {
        console.log(`${this.name} debugs  ` + x + `'s code on ` + subject);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.name);
  console.log(fred.location);