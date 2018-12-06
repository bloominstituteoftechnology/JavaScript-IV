// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = "Jason";
        this.age = 33;
        this.location = "Chicago";
        this.gender = "Male";
        this.student = "FSW16 Grad!";
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} `);
    }
}
const personnel = new Person("Jason");
personnel.speak();

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = "redux";
        this.favLanguage = "Python";
        this.cathPhrase = "coding is life";

    }
    demo() {
        console.log(`Today we are learning about ${this.subject}`);

    }
    grade() {
        console.log(`${this.name} receives a perfect scoe on ${this.subject}`);
    }
}
const staff = new Instructor("Josh");
staff.demo();
staff.grade();

class Student extends Instructor {
    constructor(props) {
        super(props);
        this.previousBackground = "Construction and home renovations";
        this.className = "FSW16";
        this.favSubjects = "CSS, Html, JavaScript";
        this.subject = "CSS";
        this.studentName= 'Josh';

    }
    listsSubjects() {
        console.log(this.favSubjects);
            
            
    }
    PRassignment() {
        console.log(`${this.studentName} has submitted a PR for ${this.subject}`);

    }
    sprintchallenge() {
        console.log(`${this.studentName} has begun sprint challenge on ${this.subject}`);
    }
}
const pupil = new Student ("James");
pupil.listsSubjects();
pupil.PRassignment();
pupil.sprintchallenge();

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
        this.channel = "FS16_Async";
        this.name = "Brad;";

    }
    standUp() {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);

    }
    dbugsCode() {
        console.log(`${this.name} debugs ${this.studentName}'s code on ${this.subject}`);
    }


}

const admin = new ProjectManager ("Emily");
admin.standUp();
admin.dbugsCode();
