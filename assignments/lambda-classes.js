// CODE here for your Lambda Classes
class Person    {
    constructor(personObject)   {
        this.name = personObject.name;
        this.age = personObject.age;
        this.location = personObject.location;
        this.gender = personObject.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorObject)   {
        super(instructorObject)
        this.specialty = instructorObject.specialty;
        this.favLanguage = instructorObject.favLanguage;
        this.catchPhrase = instructorObject.catchPhrase;
    }
    demo(subject)  {
        return console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    adjustGrade(student)    {
        let adjustAmount = Math.round(Math.random()*10)
        Math.floor(Math.random()*2) == 1 ? student.grade += adjustAmount : student.grade -= adjustAmount;
        if(student.grade > 100) {
            student.grade = 100;
        }
        return console.log(`${this.name} adjusts ${student.name}'s grade to ${student.grade}.`);
    }
}

class Student extends Person    {
    constructor(studentObject) {
        super(studentObject)
        this.previousBackground = studentObject.previousBackground;
        this.className = studentObject.className;
        this.favSubjects = studentObject.favSubjects;
        this.grade = studentObject.grade;
    }
    listsSubjects() {
        return this.favSubjects.forEach((val)   =>  {
            return console.log(val);
        });
    }
    PRAssignment(subject)   {
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject)   {
        return console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        return (this.grade >= 70) ? console.log(`${this.name} graduates from LambdaSchool!`) : console.log(`${this.name} needs to continue their time at Lambda.`)
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerObject)   {
        super(projectManagerObject);
        this.gradClassName = projectManagerObject.gradClassName;
        this.favInstructor = projectManagerObject.favInstructor;
    }
    standUp(channel)    {
        return console.log(`${this.name} announces to ${channel}, @${channel} standy times!​​​​​`);
    }
    debugsCode(student, subject)    {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
const Ryan = new Student({
    name: "Ryan",
    age: 23,
    location: "Atlanta",
    gender: "Boy",
    previousBackground: "Customer Service",
    className: "CSPT2",
    favSubjects: ["JavaScript", "React", "Node"],
    grade: Math.round((Math.random()*100)),
});

Ryan.listsSubjects();
Ryan.PRAssignment("JavaScript-IV");
Ryan.sprintChallenge("JavaScript-IV")

const Jacob = new ProjectManager({
    name: "Jacob",
    age: 24,
    location: "Delaware",
    gender: "Boy",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "The kid is at it again",
    gradClassName: "CS6",
    favInstructor: "Dan Frehner",
});
Jacob.standUp("cspt2_Jacob");
Jacob.debugsCode(Ryan, "React");
Jacob.demo("React");
Jacob.grade(Ryan, "React");
console.log(Ryan.grade);
const timeAtLambda = (student, projectManager)  =>  {
    let flunkOut = `${student.name} has flunked out of Lambda School`
    for(i = 0; i < 52; i++) {
        projectManager.adjustGrade(student);
        if(student.grade >= 70) {
            return student.graduate();
        }   else if(student.grade <= 0) {
                return console.log(flunkOut);
        }   else {
                student.graduate;
        }
    }
    return console.log(flunkOut);
}
timeAtLambda(Ryan, Jacob);
