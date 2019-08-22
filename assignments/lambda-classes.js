// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${location}.`)
    }
}

class Instructor extends Person {
    constructor(instructAttrs){
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
    }
    //need a demo function? set demo to a value?
    demo(subject){
        console.log(`Today we are learning about ${this.subject}!`)
    }
    //need a grade function? set grade to a value?
    grade(student){
        console.log(`${this.student} recieves a perfect score on ${this.subject}!`)
    }
}

class Student extends Person {
    constructor(studentAtters){
        super(studentAtters);
        this.previousBackground = studentAtters.previousBackground;
        this.className = studentAtters.className;
        this.favSubject = studentAtters.favSubject[l1, l2, l3]; // an array here
    }
    listsSubjects() //method that logs out array [l1, l2, l3]
    PRAssignment() //method that receives a subject as an argument and console.logs out: `student.name has submitted a PR for {subject}`
    sprintChallenge() // similar to PRAssignment (accepts subject as a parameter, check) but logs out `student.name has begun sprint challenge on {subject}`

}


//Project Manager
//this.gradClassName = studentAtters.gradClassName;
// this.favInstructor = studentAtters.favInstructor;
// this.standUp = studentAtters.standUp;
// this.debugsCode = studentAtters.debugsCode;