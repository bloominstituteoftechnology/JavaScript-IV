// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorProps){
        super(instructorProps);
        this.speciality = instructorProps.speciality;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(){
        return `Today we are learning about ${this.subject}.`
    }
    grade(){
        return `${student.name} receives a perfect score on {subject}.`
    }
}

class Student extends Person {
    constructor(studentProps){
        super(studentprops);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favsubject = studentProps.favSubject;
    }
    listsSubjects(){
        return ``
    }
    PRAssignments(){
        return ``
    }
    sprintChallenge(){
        return ``
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

  fred.speak();