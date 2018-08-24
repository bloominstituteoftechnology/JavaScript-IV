// CODE here for your Lambda Classes
class Person {
    constructor (person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}!`)
    }
}
class Instructor extends Person {
    constructor (instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
}
class Student extends Person {
    constructor (student) {
        super(student);
        this.previousBackground=student.previousBackground;
        this.className=student.className;
        this.favSubjects=student.favSubjects;
    }
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
class ProjectManager extends Instructor {
    constructor (pm) {
        super(pm);
        this.gradClassName=pm.gradClassName;
        this.favInstructor=pm.gradClassName;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}: @${channel} standy times! `);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}
var JaneD = new Person ({
    name:"Jane Doe", age:25, location:"USA", gender:"Female"
});
JaneD.speak();
var JonathanB = new Student ({
    name: "Jonathan Brock", age:36, location: "Tennessee", gender:"Male", previousBackground: "Tech Support", className: "CSPT2", favSubjects: ["C++", "Javascript", "Web Developement"]
});
JonathanB.listSubjects();
JonathanB.PRAssignment("C++");
JonathanB.sprintChallenge("C++");
var Dan = new Instructor ({
    name:"Dan Frehner", age: 30, location:"SLC", gender:"Male", specialty:"Teaching", favLanguage: "JS", catchPhrase: "unknown"
});
Dan.demo("C++");
Dan.grade(JonathanB, "C++");
Dan.speak();
var MykealK = new ProjectManager ({
    name:"Mykeal Kenny", age: 25, location:"Florida", gender:"Male", specialty:"Javascript", favLanguage: "Powershell", catchPhrase: "unknown", gradClassName: null, favInstructor: "Dan"
});
MykealK.standUp("CSPT2_Myke");
MykealK.debugsCode(JonathanB, "C++");