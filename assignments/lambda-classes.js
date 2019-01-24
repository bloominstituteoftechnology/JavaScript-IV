// CODE here for your Lambda Classes

//base class
class Person {
    constructor(name) {
        this.name = name.name;
        this.age = name.age;
        this.location = name.location;
        this.gender = name.gender;
    }

    speak () {
        return(`Hello my name is${this.name}, and I\'m from ${this.location}`);
    }
}

class Instructors extends Person {
    constructor(name){
        super(name);
        this.specialty = name.specialty;
        this.favLanguage = name.favLanguage;
        this.catchPhrase = name.catchPhrase;
        this.subject = subject;
    }

    demo (subject) {
        return(`Today we are learning about ${this.subject}`);        
    }

    grade (student, subject) {
        return(`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Students extends Person {
    constructor(name){
        super(name);
        this.previousBackground = name.previousBackground;
        this.className = name.className;
        this.favSubjects = name.favSubjects;
    }

    listsSubjects () {
        for (i = 0; i < favSubjects.length; i++){
            console.log(favSubjects[i]);
        }
    }

    PRAssingment (subject) {
        return(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge (subject) {
        return(`${this.name} has begun a sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructors {
    constructor(name){
        super name;
        this.gradClassName = name.gradClassName;
        this.favInstructor = name.favInstructor;
    }

    standUp (channel) {
        return(`${this.name} announces to ${channel}, @channel standup time starts soon`);
    }

    debugsCode (student, subject) {
        return(`${this.name} debugs ${student.name}\'s code on ${subject}`);
    }

}