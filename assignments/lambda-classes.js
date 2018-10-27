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
    constructor (props){
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`;
    }
    gradeStudent(stuGrade) {
        let min = Math.ceil(stuGrade.studentGrade.min);
        let max = Math.floor(stuGrade.studentGrade.max);
        let resultingGrade = Math.floor(Math.random() * (max - min)) + min;
        return (`Student ${stuGrade.name} received the grade of ${resultingGrade}% from ${this.name}.`);
    }
}

// Student

class Students extends Person {
    constructor (props) {
        super (props);
        this.previousBackground = props. previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.studentGrade = {
            min: 0,
            max: 100
        };
    }
    listSubjects(){
        return (`${this.name}'s favorite subjects are: ${this.favSubjects}.`);
    }
    PRassignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`);
    }

}

// Project Manager

class ProjectManagers extends Instructors {
    constructor (props) {
        super (props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChannel) {
        return (`${this.name} announces to ${slackChannel}, @channel standy time!`);
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}.`);
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
    favSubjects: ["math", "political science", "biology"],
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
  console.log(perry.gradeStudent(william)); //Stretch Goal
  console.log(jeff.catchPhrase);
  console.log(jeff.speak());
  console.log(jeff.grade(william, "Advanced CSS"));
  console.log(jeff.gradeStudent(william)); //Stretch Goal
  console.log(william.PRassignment("Advance Javascript"));
  console.log(william.sprintChallenge("Fundamental Javascript"));
  console.log(william.previousBackground);
