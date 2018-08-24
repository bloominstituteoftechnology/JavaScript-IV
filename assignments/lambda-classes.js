// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.name=person.name;
        this.age=person.age;
        this.location=person.location;
        this.gender=person.gender;
    }
    speak(){return `Hello my name is ${this.name}, 
    I am from ${this.location}.`}
}
class Instructor extends Person{
    constructor(title){
        super(title);
        this.specialty=title.specialty;
        this.favLanguage=title.favLanguage;
        this.catchPhrase=title.catchPhrase;
    }
    demo(subject)
    {return `Today we are learning about ${this.subject}`}
    grade(student,subject)
    {return '${this.student} receives a perfect score on ${this.subject}'}
}
class Student extends Person{
    constructor(student){
        super(student);
        this.perviousBackground=student.perviousBackground;
        this.className=student.className;
        this.favSubjects=student.favSubjects;
    }
    listsSubjects(favSubjects){
        return this.favSubjects
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun a sprint challenge on ${this.subject}`
    }
}
class ProjectManager extends Instructor{
    constructor(PM){
        super(PM);
        this.gradClassName=PM.gradClassName;
        this.favInstructor=PM.favInstructor;
    }
    standup(channel) {
    return `${this.name} announces to ${this.channel},
     @channel standy times!​​`
    }​​​
    debugsCode(student,subject){
        return `${this.name} debugs ${this.student}'s code on ${this.subject}`
    }
}