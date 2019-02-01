// CODE here for your Lambda Classes

//Person Parent Class

class Person {
    constructor(perAttr) {
      this.name = perAttr.name;
      this.age = perAttr.age;
      this.location = perAttr.location;
      this.gender = perAttr.gender;  
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
};

//Instructor Child Class

class Instructor extends Person {
    constructor(InsAttr) {
        super(InsAttr);
        this.speciality = InsAttr.speciality;
        this.favLanguage = InsAttr.favLanguage;
        this.catchPhrase = InsAttr.catchPhrase;
    }
    demo() {
        console.log(`Today we are learning about ${this.subject}.`);
    }    
    grade() {
        console.log(`${this.student} receives a  perfect score on ${this.subject}.`);
    }
};

//Student Child Class

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground. stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment() {
        console.log(`${this.student} has submitted a PR for ${this.subject}.`);
    }
    sprintChallenge() {
        console.log(`${this.student} has begun sprint challenge on ${this.subject}.`);
    }
};

//Project Manager Grandchild Class

class ProjectManager extends Instructor {
    constructor(proAttr) {
        super(proAttr);
        this.gradClassName = proAttr.gradClassName;
        this.favInstructor = proAttr.favInstructor;
    }
    standUp() {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
    }
    debugsCode() {
        console.log(`${this.name} debugs ${this.student}'s code on ${this.subject}.`);
    }
};


