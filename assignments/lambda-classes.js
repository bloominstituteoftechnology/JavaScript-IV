// CODE here for your Lambda Classes

// Person

class Person {
    constructor (props) {
        this.name = props.name;
        this.age =  props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Instructor

class Instructors extends Person {
    construcr (props){
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}!`;
    }
}

// Student

class Students extends Person {
    constructor (props) {
        super (props);
        this.previousBackground = props. previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects; //This may need to be an array and not an object, but I feel like it is an array as an attribute of an object.
    }
    listSubjects(){
        console.log(`${this.name}'s favorite subjects are: ${this.favSubjects}.`);
    }
    PRassignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }    
}

// Project Manager

class ProjectManagers extends Instructors {
    construcr(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy time!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}


// Created Objects to test Person, Students, Instructors, and ProjectManager Ojbects

const jeff = new Instructors({
    name: 'Jeff',
    location: 'San Jose',
    age: 33,
    speciality: 'Digital Painting',
    gender: 'Zir',
    favLanguage: 'Javascript',
    catchPhrase: `Gotta catch 'em all`
});

const william = new Students({
    name: 'William',
    age: 20,
    location: 'L.A.',
    gender: 'Male',
    previousBackground: 'Dog Walker',
    className: 'fswpt3',
    favSubjects: ["math", "political science", "biology"] 
});

const perry = new ProjectManagers({
    name: 'Perry',
    age: 48,
    location: 'San Francisco',
    gender: 'Female',
    speciality: 'CSS',
    favLanguage: 'C#',
    catchPhrase: 'That was a piece of pi!',
    gradClassName: 'CS1',
    favInstructor: 'Batman'
})

  console.log(perry.demo("classes"));
  console.log(perry.debugsCode(william, "closures"));
  console.log(perry.favInstructor);
  console.log(jeff.catchPhrase);
  console.log(jeff.speak());
  console.log(jeff.grade(Jeff, "Advanced CSS"));
  console.log(william.listSubjects);
  console.log(william.sprintChallenge());
  console.log(william.previousBackground);
