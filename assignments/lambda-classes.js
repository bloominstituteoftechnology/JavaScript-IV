// CODE here for your Lambda Classes

class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak(){
        return `Hello! My name is ${this.name}. I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(obj){
        super(obj)
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(obj){
        super(obj)
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}.`
    }
}

const Julie = new Student({
    name: 'Julie',
    age: '25',
    location: 'Houston',
    gender: 'Female',
    previousBackground: 'Event planner',
    className: 'cspt2',
    favSubjects: ['English', 'World Geography', 'CSS',],
})

console.log(Julie.PRAssignment('HTML'));

class ProjectManager extends Instructor {
    constructor(obj){
        super(obj)
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, "@channel standup time!"`
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`
    }
}

const Raymond = new ProjectManager ({
    name: 'Raymond',
    age: 'Wise',
    location: 'Texas',
    gender: 'Male',
    specialty: 'Helping students',
    favLanguage: 'Javascript',
    catchPhrase: '@here Get in here!',
    gradClassName: 'cs11',
    favInstructor: 'Dan',
})

console.log(Raymond.debugsCode(Julie, 'HTML'))

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  