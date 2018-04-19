// CODE here for your Lambda Classes

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



const OboAttr = {
    "name": "Obo",
    "grade": studentScore,
    "age": "A positive integer",
    "location": "San Francisco",
    "gender": "Male",
    "previousBackground": "Animator",
    "className": "CS10",
    "favSubjects": ["JavaScript", "HTML", "CSS", "Computer Science"],
}

const Obo = new Student(OboAttr)

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



// console.log(Obo.className);
// console.log(csaba.catchPhrase);
// console.log(Obo.graduate())
// console.log(Obo.grade);

grading(Obo, csaba);