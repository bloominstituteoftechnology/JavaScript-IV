// CODE here for your Lambda Classes
// Person Class
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}// Person 

// Instructor Class 
class instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(suject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject​​​​​}`
    }
}//Instructor 

// Student Class
class Student extends Person{
    constructor(studentAttributes){
        supper(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects.forEach((e) => console.log(e));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}`
    }

}// Student

// Project Manager Class 
class ProjectManager extends instructor{
    constructor(pmAttributes){
        super(PMattributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.instructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`
    }
    debugsCode(student,subject){
        return `${​​​​​this.name} debugs ${student.name}'s code on ${subject}`
    }
}//Project 
