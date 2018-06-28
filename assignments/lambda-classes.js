// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age; 
        this.location = props.location; 
        this.gender = props.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}`
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
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`
    }
    gradeChange(student){
        let randomNumber = Math.random();
        if (randomNumber > 0.5){
        student.grade += Math.ceil(Math.random() * 10 );
        }else if(randomNumber < 0.5){
        student.grade = student.grade - Math.ceil(Math.random() * 10);
        }
        return `Grade Change! ${student.name} grade now is ${student.grade}`
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className; 
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }
    listsSubjects(){
        // console.log("My favorite subjects are:")
        this.favSubjects.forEach(function(subject){console.log(subject)});
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate(instructor){
        if(this.grade > 70){
            console.log(`Congratulations ${this.name}! You have successfully finished Lambda School. Good Luck on your job search!!!!`)
        }else {
            instructor.gradeChange(this);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassNames = props.gradClassNames;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, "@channel Stand up time!"`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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
    grade: 65,
    className: "CS12", 
    previousBackground: "FreeCodeCamp",
    favSubjects: ["Javascript", "React", "Node"]
})

// console.log(katia);
// katia.listsSubjects();
// katia.PRAssignments("Javascript IV");
// katia.sprintChallenge("Javascrtipt Fundamentals")
// console.log(katia.grade);
// josh.gradeChange(katia);
// josh.gradeChange(katia);
// josh.gradeChange(katia);
// josh.gradeChange(katia);
// josh.gradeChange(katia);
// josh.gradeChange(katia);
// katia.graduate(josh);

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

katia.listsSubjects();