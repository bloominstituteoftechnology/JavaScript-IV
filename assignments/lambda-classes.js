// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorProps){
        super(instructorProps);
        this.speciality = instructorProps.speciality;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
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
        return `${this.favSubjects}`
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
            this.gradClassName = pmProps.gradClassName;
            this.favInstructor = pmProps.favInstructor;
        }
        standup(channel){
            return `${this.name} announces to ${channel} standby times!`
        }
        debugsCode(student, subject){
            return `${this.name} debugs ${student}'s code on ${subject}.`
        }
    }



const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Dont forget the homies',
    previousBackground: 'Transformer',
    className: 'CS13',
    favSubjects: ['Python', 'Java']

  });

  const jeff = new Student({
    name: 'Jeff',
    location: 'Bedrock',
    age: 45,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
    previousBackground: 'Transformer',
    className: 'CS13',
    favSubjects: ['Python', 'Java']
  });

  const frank = new Instructor({
    name: 'Frank',
    location: 'Towns',
    age: 88,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Rowdy`
  });

const frannie = new Instructor({
    name: 'Frannie',
    location: 'Aways',
    age: 65,
    gender: 'Female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Lets GO!'
    
})
