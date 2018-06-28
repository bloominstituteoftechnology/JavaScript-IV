// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender; 
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(cprops){
        super(cprops);
        this.speciality = cprops.speciality;
        this.favLanguage = cprops.favLanguage;
        this.catchPhrase = cprops.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }
    grade (student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(cprops){
        super(cprops);
        this.previousBackground = cprops.previousBackground;
        this.className = cprops.className;
        this.favSubjects = cprops.favSubjects; 
    }
    listSubjects () {
        return this.favSubjects.join(', '); 
    }
    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun spring challege on ${subject}`;
    }
}
class ProjectManager extends Instructor {
    constructor(gcprops){
        super(gcprops);
        this.gradClassName = gcprops.gradClassName;
        this.favInstructor = gcprops.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const jonathan = new Student ({
    name: "Jonathan", 
    age: 32, 
    location: "MidWest", 
    gender: "Male", 
    previousBackground: "Quality Assurance", 
    className: "JavaScript Fundamentals",
    favSubjects: ["Programming", "Creative Writing", "Finance"]
  })
const holloway = new Student ({
    name: "Holloway", 
    age: 32, 
    location: "MidWest", 
    gender: "Male", 
    previousBackground: "Quality Assurance", 
    className: "JavaScript Fundamentals",
    favSubjects: ["Programming", "Creative Writing", "Finance"]
  })

const josh = new Instructor ({
    name: "Josh", 
    age: "unknown",
    location: "Somewhere", 
    gender: "Male", 
    speciality: "Full Stack",
    catchPhrase: "Let's be back in 5 mins"
})
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });