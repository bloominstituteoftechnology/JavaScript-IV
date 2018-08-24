// CODE here for your Lambda Classes
//PERSON -> INSTRUCTOR  -> PROJECT MANAGER
//PERSON -> STUDENT

class Person {
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }

    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorProps){
        super(instructorProps)
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }

    demo(subject){
        return `Today, we are learning about ${subject}`;
    }

    grade(studentObj, subject){
        return `${studentObj.name} receives a perfect score on ${subject}`;
    }

    changeStudentGrade(studentObj){
        //change grade either by adding 2 or subtracting 2
        studentObj.grade += (Math.round(Math.random()) * 4 - 2);
        return `${studentObj.name}'s new grade is ${studentObj.grade}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }

    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }

    debugsCode(studentObj, subject){
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    }
}



class Student extends Person {
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;

    }

    listSubjects(){
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun the sprint challenge on ${subject}`;
    }
}

//************PERSON OBJECT************** */
console.log('**************** PERSON OBJECT *********************************\n\n');
let myPerson = new Person({name: 'Steve', age: 22, location: 'California', gender: 'Male'});
console.log('Person object properties: ');
for(k in myPerson){
    console.log(k, ': ', myPerson[k]);
}
console.log(myPerson.speak(), '\n');

console.log('***************** STUDENT *******************************\n\n');

let myStudent = new Student({ name: 'Christopher', age: 45, location: 'Tennessee', gender: 'Male', previousBackground: 'Accounting', className: 'Javascript-IV', favSubjects: ['JS Prototypes', 'JS classes', 'CSS mixins'], grade: 92 });
console.log('Student object properties: ');
for (k in myStudent) {
    console.log(k, ': ', myStudent[k]);
}
console.log(myStudent.listSubjects());
console.log(myStudent.PRAssignment('Objects in JS'));
console.log(myStudent.sprintChallenge('Closures in JS'), '\n');


console.log('**************** INSTRUCTOR OBJECT *********************************\n\n');

let myInstructor = new Instructor({ name: 'Jerry', age: 53, location: 'New York', gender: 'Male', specialty: 'REACT', favLanguage: 'Javascript', catchPhrase: 'Kiss my grits.'});
console.log('Instructor object properties: ');
for (k in myInstructor) {
    console.log(k, ': ', myInstructor[k]);
}
console.log(myInstructor.demo('JS Classes'));
console.log(myInstructor.grade(myStudent, 'CSS'));
console.log(myInstructor.changeStudentGrade(myStudent));
console.log('\n');

console.log('****************** PROJECT MANAGER *****************************\n\n');

let myProjectManager = new ProjectManager({ name: 'Renee', age: 34, location: 'Utah', gender: 'Female', specialty: 'JS Prototypes', favLanguage: 'Javascript', catchPhrase: 'Nip it in the bud.', gradClassName: 'CSII', favInstructor: 'Kyle Simpson' });
console.log('Project Mgr object properties: ');
for (k in myProjectManager) {
    console.log(k, ': ', myProjectManager[k]);
}
console.log(myProjectManager.standUp('cspt2-help'));
console.log(myProjectManager.debugsCode(myStudent), 'JS callbacks');
console.log(myProjectManager.changeStudentGrade(myStudent));




