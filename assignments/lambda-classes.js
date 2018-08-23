// CODE here for your Lambda Classes
class Person {
    
    constructor(personProp){
        this.name = personProp.name;
        this.age = personProp.age;
        this.location = personProp.location;
        this.gender = personProp.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I aam from ${this.location}`;
    }
}

class Instructor extends Person {
    
    constructor(instrucProp) {
        super(personProp);
        this.specialty = instrucProp.specialty;
        this.favLanguage = instrucProp.favLanguage; //Array of objects in an object
        this.catchPhrase = instrucProp.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    //Remember this is for students only
    grade(this, subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    
    constructor(studentProp) {
        super(personProp);
        this.previousBackground = studentProp.previousBackground;
        this.className = studentProp.className;
        this.favSubjects = studentProp.favSubjects;     //Array of objects in an object
    }

    listsSubjects(){
        return this.favSubjects.forEach(item => item);
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

