// CODE here for your Lambda Classes
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.




// Person parent class

class Person {
    constructor(props) {
        this.name=props.name;
        this.age=props.age;
        this.location=props.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
    };
}
// Instructor- child of Person

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty= props.specialty;
        this.favLanguage= props.favLanguage;
        this.catchPhrase= props.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
// Student is a child of Person

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground= props.previousBackground;
        this.className= props.className;
        this.favSubjects= props.favSubjects;
    }
    listsSubjects(){
        console.log(`students favorite subjects: ` + this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// Project Manager is a child of Instructors

class ProjectManagers extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName= props.gradClassName;
        this.favInstructor= props.favInstructor;            
    }
    standup(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred.speak();

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 29,
    favLanguage: 'C++',
    specialty: 'Functional Programming',
    catchPhrase: 'why are we here?'
});

wilma.speak();