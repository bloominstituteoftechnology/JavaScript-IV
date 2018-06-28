// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }
}

// Instructor
// Instructor uses the same attributes that have been set up by Person
class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// Student
// Student uses the same attributes that have been set up by Person
class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }
    // how does this class have access to the student 
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
     PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// ProjectManagers are extensions of Instructors
class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// creating a new instructor named Fred
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

// creating a new student named Joe
const joe = new Student({
    name: 'Joe',
    location: 'Columbia',
    age: 22,
    previousBackground: 'Designer',
    favSubjects: ['css', 'js', 'react'],
    grade: 99,
  });

// Tests
  console.log(fred.favLanguage);
  console.log(fred.demo(joe, 'react'));
  console.log(joe.favSubjects, joe.speak(), joe.grade)