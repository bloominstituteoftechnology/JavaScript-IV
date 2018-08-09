// CODE here for your Lambda Classes
//Class: Person
class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//Class:Instructor
class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    addGrade(student){
        let isAdding = Math.random() >= .5;
        if (isAdding){
            let randomGrade = Math.floor(Math.random()*(100-student.grade));
            student.grade += randomGrade;
            console.log(`${this.name} adds ${randomGrade} to ${student.name}'s grade`);
        } else {
            let randomGrade = Math.floor(Math.random()*student.grade);
            student.grade -= randomGrade;
            console.log(`${this.name} subtracts ${randomGrade} to ${student.name}'s grade`);
        }
    }
}

//Student Class
class Student extends Person{
    constructor(studentProps){
        super(studentProps);
        this.previousBackground =studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
    }
    listsSubjects (){
        this.favSubjects.forEach(function (currentSubject){
            console.log(currentSubject);
        });
    }
    PRAssignment (subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(){
        if (this.grade>70){
            return true;
        } else {
            return false;
        }
    }
}

//Class: Project Manager
class ProjectManager extends Instructor{
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp (slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }
    debugsCode (student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homie`
  });
const tsai = new Student({
    name: 'Tsai',
    location: 'San Diego',
    age: 37,
    gender: 'male',
    previousBackground: 'homemaker',
    className: `CS13`,
    favSubjects: [`this`,`class`],
    grade: 100
});
const jeremy = new ProjectManager({
    name: 'Jeremy',
    location: 'Boulder',
    age: 40,
    gender: 'male',
    specialty: `CSS`,
    favLanguage: `Javascript`,
    catchPhrase: `Yeah...`,
    gradClassName: `CS08`,
    favInstructor: `Josh Knell`
});


//fred.speak();
//console.log(jeremy.favInstructor);
// fred.addGrade(tsai);
// console.log(tsai.grade);
// console.log(`${tsai.name} is ready to graduate = ${tsai.graduate()}`);