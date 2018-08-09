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
        console.log (`Today we are learning about ${subject}.`)
    }
    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects(){
        console.log (`${this.favSubjects}`);
    }
    PRAssignments(subject){
        console.log (`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
        console.log (`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
            this.gradClassName = pmProps.gradClassName;
            this.favInstructor = pmProps.favInstructor;
        }
        standup(channel){
            console.log (`${this.name} announces to ${channel}, @channel standby times!`)
        }
        debugsCode(student, subject){
            console.log (`${this.name} debugs ${student}'s code on ${subject}.`)
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

  const janette = new Student({
    name: 'Janette',
    location: 'Rock',
    age: 45,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    previousBackground: 'Transformer',
    className: 'CS13',
    favSubjects: ['Java', 'CSS']
  });

  const frank = new Instructor({
    name: 'Frank',
    location: 'Towns',
    age: 88,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: `Rowdy`
  });

const jiller = new Instructor({
    name: 'Jiller',
    location: 'Aways',
    age: 65,
    gender: 'Female',
    favLanguage: 'English',
    specialty: 'Front-end',
    catchPhrase: 'Lets GO!'
    
});

const fil = new ProjectManager({
    name: 'Fil',
    location: 'here',
    age: 92,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Front-end',
    catchPhrase: 'Lets GO!',
    gradClassName: 'preCS',
    favInstructor: 'Jillian'
});

const jill = new ProjectManager({
    name: 'Jill',
    location: 'faaar',
    age: 99,
    gender: 'Female',
    favLanguage: 'English',
    specialty: 'Front-end',
    catchPhrase: 'Lets GO!',
    gradClassName: 'preCS',
    favInstructor: 'phillup'
});

fred.PRAssignments('JavaScript');
fred.speak();
janette.listsSubjects();
janette.sprintChallenge('Python basics')
frank.demo('hacking');
jiller.grade(fred, 'basic html');
fil.standup('CS13');
jill.debugsCode('Janette', 'Java')


