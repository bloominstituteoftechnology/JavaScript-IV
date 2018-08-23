class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person {
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    };
}

class Student extends Person {
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects(){
        return obj.favSubjects.forEach(function(element) {
            console.log(element);
        });
    };
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    };
}

class ProjectManager extends Instructor {
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standy times`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}