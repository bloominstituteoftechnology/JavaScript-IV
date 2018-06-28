// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age; 
        this.location = props.location; 
        this.gender = props.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, and I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.CatchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className; 
        this.favSubjects = props.favSubjects;
    }
    listsSubjects(){
        console.log("My favorite subjects are:")
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignments(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassNames = props.gradClassNames;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, "@channel Stand up time!"`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Person({
    name: "Fred",
    age: 22,
    location: "Los Angelos",
    gender: "M"
})

// console.log(fred);
// fred.speak();

const josh = new Instructor({
    name: "Josh",
    age: 33,
    location: "San Francisco",
    gender: 'M',
    specialty: "HTML, CSS, Javascript",
    favLanguage: "CSS"
})

// console.log(josh);
// josh.demo("CSS");

const katia = new Student({
    name: "Katia",
    age: 20, 
    location: "Fort Collins Colorado", 
    gender: "F",
    className: "CS12", 
    previousBackground: "FreeCodeCamp",
    favSubjects: ["Javascript", "React", "Node"]
})

// console.log(katia);
// katia.listsSubjects();
// katia.PRAssignments("Javascript IV");
// katia.sprintChallenge("Javascrtipt Fundamentals")

const dani = new ProjectManager({
    name: "Dani", 
    age: 25, 
    location: "New York",
    gender: "F", 
    gradClassNames: "CS7",
    favInstructor: "Josh"
})

// console.log(dani);
// dani.standUp("CS12");
// dani.debugsCode(katia, "Javascript");