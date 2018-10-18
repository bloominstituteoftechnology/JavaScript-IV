// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.name = studentAttr.name;
        this.age = studentAttr.age;
        this.location = studentAttr.location;
        this.gender = studentAttr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class ProjectManager extends Person{
    
    constructor(pmAttr){
        super(pmAttr);
        this.name = pmAttr.name;
        this.age = pmAttr.age;
        this.location = pmAttr.location;
        this.gender = pmAttr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}