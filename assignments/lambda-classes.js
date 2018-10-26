// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    gradeRandom(student){
        student.grade = student.grade - (Math.random() * 100);
        if(student.grade < 0){
            student.grade = 0;
        }
        console.log(`${student.name} got a score of ${student.grade}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(function (subject) {
            console.log(subject);
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(){
        if(this.grade >= 70){
            console.log(`Congratulaions ${this.name}, you graduated!`)
        }else{
            console.log(`You can not graduate, time to work harder!`)
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const fran = new Instructor({
    name: 'Fran',
    location: 'Bedrock',
    age: 37,
    gender: 'Female',
    favLanguage: 'JavaScript',
    specialty: 'Full-stack',
    catchPhrase: `Wazzzzzuppppppp!!!!`
});

const joe = new Student({
    name: 'Joe',
    location: 'Somewhere',
    age: 20,
    gender: 'male',
    favSubjects: ['classes','prototype','objects'],
    previousBackground: "Surfer",
    className: "CSPT3",
    grade: 90
});

const bob = new ProjectManager({
    name: 'Bob',
    location: 'Neptune',
    age: 25,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Yehawwwwww!!!!!`,
    gradClassName: "CS1",
    favInstructor: "Josh"
});

bob.gradeRandom(joe);
joe.graduate();