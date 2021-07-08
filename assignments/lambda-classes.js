// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
        `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr)

        const fixedGrade = Math.floor(Math.random()*100)+1;


        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubject = studentAttr.favSubject;
        this.grade = fixedGrade;
    }

    graduate(){
        if(this.grade >= 70){
            return `Congratualations ${this.name} you've successfully completed the Lambda School course!`
        }
        return `Unfortunately you didn't graduate, let's try and review a few assignments?`
    }
    listsSubject(){
        return `${this.favSubject}`
    }
    prAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallange(subject){
        return `${student.name} has sprint challenge on ${subject}`
    }
}

class ProjectMaster extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const alando = new Student({
    name:"alando",
    age: 23,
    location:"california",
    gender:"male"
})

console.log(alando.graduate());