// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hellow my ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAtrr){
        super(studentAtrr);
        this.previousBackground = studentAtrr.previousBackground;
        this.className = studentAtrr.className;
        this.favSubjects = studentAtrr.favSubjects;
    }
    listSubjects(){
        //logs out all of the student's favoriteSubjects one by one.
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

//Objects

