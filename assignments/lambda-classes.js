// // CODE here for your Lambda Classes

// class Person {
//     constructor(attributes) {
//         this.name = attributes.name;
//         this.age = attributes.age;
//         this.location = attributes.location;
//         this.gender = attributes.gender;
//     }
//     speak() {
//         return `Hello my name is ${this.name}, I am from ${this.location}`;
//     }
// }

// class Instructor extends Person {
//     constructor(attributes) {
//         super(attributes);
//         this.specialty = attributes.specialty;
//         this.favLanguage = attributes.favLanguage;
//         this.catchPhrase = attributes.catchPhrase;
//     }
//     demo(subject) {
//         return `Today we are learning about ${subject}`;
//     }
//     grade(student, subject) {
//         return `${student.name} receives a perfect score on ${subject}`
//     }
// }

// class Student extends Person {
//     constructor(attributes) {
//         super(attributes);
//         this.previousBackground = attributes.previousBackground;
//         this.className = attributes.className;
//         this.favSubjects = attributes.favSubjects; // array [JS, HTML, life]
//     }
//     listsSubjects() {
//         // let emptyArray = [];
//         this.favSubjects.forEach(function(element) {
//             console.log(element);
//             // emptyArray.push(element);
//         });
//     }
//     PRAssignment(subject) {
//         return `${this.name} has submitted a PR for ${subject}`;
//     }
//     sprintChallenge(subject) {
//         return `${this.name} has begun sprint challenge on ${subject}`;
//     }
// }

// class ProjectManager extends Instructor {
//     constructor(attributes) {
//         super(attributes);
//         this.gradClassName = attributes.gradClassName;
//         this.favInstructor = attributes.favInstructor;
//     }
//     standUp(channel) {
//         return `${this.name} announces to ${channel} @channel standy times!`;
//     }
//     debugsCode(student, subject) {
//         return `${this.name} debugs ${student.name}'s code on ${subject}`
//     }
// }

// /* ------ Exploratory Laboratory ------ */

// const davidAttr = {
//     "name": "David",
//     "age": 36,
//     "location": "Seattle",
//     "gender": "Male",
//     "previousBackground": "Engineering",
//     "className": "CS10",
//     "favSubjects": ["JavaScript", "HTML", "CSS", "Computer Science"],
// }

// const david = new Student(davidAttr);

// console.log(david);
// console.log(david.location);

// console.log(david.className);
// david.listsSubjects(); // logs to console like we expect
// console.log(david.PRAssignment('JavaScript'));

// const csabaAttr = {
//     "name": "Csaba",
//     "age": 34,
//     "location": "Fontana",
//     "gender": "male",
//     "specialty": "Being awesome",
//     "favLanguage": "JavaScript",
//     "catchPhrase": "\"Any blockers?\"",
//     "gradClassName": "CS5",
//     "favInstructor": "Josh Knell",
// }

// const csaba = new ProjectManager(csabaAttr);

// console.log(csaba);
// console.log(csaba.age);
// console.log(csaba.specialty);
// console.log(csaba.grade(david, 'JavaScript'));
// console.log(csaba.gradClassName);
// console.log(csaba.standUp("CS10_Csaba"));

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak(){
        return ` Hello my name is ${this.name}m I am from ${location}`
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr)
        this.speciality = attr.speciality;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    addGrade(student) {
        if(Math.random() < 0.7){
            student.grade += Math.floor(Math.random() * 10)
        }else{
            student.grade -= Math.floor(Math.random() * 10)
        }
        return "Student has been graded"   
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(){
        return `${student.name} recieves a perfect score on ${variables}`
    }
}

/////
let studentScore = 0;
function studentScoreGen() {
    return studentScore = Math.floor(Math.random() * 61) 
}
console.log(studentScoreGen())
/////
class Student extends Person{
    constructor(attr){
        super(attr)
        this.grade = studentScoreGen();
        this.previousBackground = attr.previousBackground
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    
    listsSubjects() {
        this.favSubjects.forEach(function(element){
            console.log(element)
        })
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on {subject}`
    }
    
    graduate() {
        if( this.grade >= 70){
            console.log("Yay we graduated")
            return true
        }else{
            return false
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr)
        this.gradClassname = attr.gradClassname;
        this.favInstructor = attr.favInstructor;
    }
    standUp(slackNum){
        return `${this.name} announces to ${slackNum}, @channel standby times`
    }
    debugsCode(){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const DavidAttr = {
    "name": "David",
    "grade": studentScore,
    "age": 36,
    "location": "Seattle",
    "gender": "Male",
    "previousBackground": "Engineering",
    "className": "CS10",
    "favSubjects": ["JavaScript", "HTML", "CSS", "Computer Science"],
}

const David = new Student(DavidAttr)

const csabaAttr = {
    "name": "Csaba",
    "age": 34,
    "location": "Fontana",
    "gender": "male",
    "specialty": "Being awesome",
    "favLanguage": "JavaScript",
    "catchPhrase": "\"Any blockers?\"",
    "gradClassName": "CS5",
    "favInstructor": "Josh Knell",
}

const csaba = new ProjectManager(csabaAttr);

function grading(student, instructor){
    while(student.grade <= 70){
        instructor.addGrade(student);
        console.log(student.grade)
    }
    console.log(student.graduate());
}


// console.log(David.className);
// console.log(csaba.catchPhrase);
// console.log(David.graduate())
// console.log(David.grade);

grading(David, csaba);




