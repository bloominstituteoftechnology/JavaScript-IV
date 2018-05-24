// CODE here for your Lambda Classes
class Person {     // This is our base class.
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        return (`Hello my name is ${this.name}, and I am from ${this.location}`)
    }
}

class Instructor extends Person { // Inheriting from the Person class
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person { // Inheriting from Person, not from Instructor. 
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssigment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun spring challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor { // Inheriting from Instructor this time, not Person
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(slack) {
        return (`${this.name} announces to ${slack}, @${slack} standy times!`);
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
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

const tina = new Instructor({
    name: 'Tina',
    location: 'Slack',
    age: 26,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Hi there!`
  });

const tim = new Student ({
    name: 'Tim',
    previousBackground: 'None',
    location: 'Slack',
    className: 'CS11',
    favSubjects: ['math', 'science', 'computer science'],
    age: 23,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Hi there!`
  });  

  const hannah = new Student ({
    name: 'Hannah',
    previousBackground: 'None',
    location: 'Phoenix',
    className: 'CS10',
    favSubjects: ['science', 'computer science'],
    age: 21,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Hi there!`
  });  

  const ted = new ProjectManager ({
    name: 'Ted',
    previousBackground: 'Full',
    location: 'Dallas',
    gradClassName: 'CS8',
    favInstructor: 'Josh Knell',
    favSubjects: ['history', 'computer science'],
    age: 29,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Howdy!`
  });  



console.log(fred.speak())
console.log(tina.demo('math'))
console.log(tim.favSubjects);
console.log(hannah.listSubjects())
console.log(hannah.PRAssigment('English'))
console.log(tim.sprintChallenge('History'))
console.log(ted.favInstructor)
console.log(ted.gradClassName)
console.log(ted.standUp('#general'))
console.log(ted.debugsCode(hannah, 'math'))