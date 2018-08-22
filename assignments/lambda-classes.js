// CODE here for your Lambda Classes
class Person {//Class of person with name, age, location , and gender as attributes. speak() as method.
    constructor (person) {
        this.name=person.name;
        this.age=person.age;
        this.location=person.location;
        this.gender=person.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}!`)
    }
}

class Instructor extends Person {//instructors with specialty, favLanguage, catchPhrase as attributes. demo() and grade(student, subject) as methods.
    constructor (instructor) {
        super(instructor);
        this.specialty=instructor.specialty;
        this.favLanguage=instructor.favLanguage;
        this.catchPhrase=instructor.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
}

class Student extends Person {//students with previousBackground, className, favSubjects as attributes.
    constructor (student) {
        super(student);
        this.previousBackground=student.previousBackground;
        this.className=student.className;
        this.favSubjects=student.favSubjects;
    }//listsSubjects(), PRAssignment(subject), sprintChallenge() as methods.
    listSubjects() {
        var x=this.favSubjects; 
        x.forEach(element => {console.log(`${element}`)});
    }
    PRAssignment(subject) { 
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {//project managers with gradClassName and favInstructor as attributes.
    constructor (pm) {
        super(pm);
        this.gradClassName=pm.gradClassName;
        this.favInstructor=pm.gradClassName;
    }//standUp(name, channel), debugsCode(student, subject) as methods.
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}: @${channel} standy times! `);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

var KarenZ = new Person ({
    name:"Karen Zachary", age:null, location:"USA", gender:"Female"
});

KarenZ.speak();

var Jerrard = new Student ({
    name: "Jerrard", age:22, location: "Virginia", gender:"Male", previousBackground: "Construction", className: "CSPT2", favSubjects: ["C++", "Android", "Web Developement"]
});

Jerrard.listSubjects();
Jerrard.PRAssignment("C++");
Jerrard.sprintChallenge("C++");

var Daniel = new Instructor ({
    name:"Daniel", age: null, location:"somewhere", gender:"Male", specialty:"Everything. I know most everything.", favLanguage: "Python", catchPhrase: "Wadagadadooga!?!"
});

Daniel.demo("C++");
Daniel.grade(Jerrard, "C++");
Daniel.speak();

var Anthony = new ProjectManager ({
    name:"Anthony", age: null, location:"East Coast", gender:"Male", specialty:"Javascript", favLanguage: "Python", catchPhrase: "What it do, girl?", gradClassName: null, favInstructor: "Daniel"
});

Anthony.standUp("CSPT2_Anthony");
Anthony.debugsCode(Jerrard, "C++");