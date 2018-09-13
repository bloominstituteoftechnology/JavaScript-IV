// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (instructoroptions){
        this.specialty = instructoroptions.specialty;
        this.favLanguage = instructoroptions.favLanguage;
        this.catchPhrase = instructoroptions.catchPhrase;
    }

    demo() {
        return `Today we are learning about {subject}`;
    }

    grade() {
        return `${this.name} receives a perfect score on {subject}`;
    }
}

class Student extends Person {
    constructor (studentoptions){
        this.previousBackground = studentoptions.previousBackground;
        this.className = studentoptions.className;
        this.favSubjects = studentoptions.favSubjects;
    }

    listsSubjects() {
        return `list of favSubjects`;
    }

    PRAssignment() {
        return `${this.name} has submitted a PR for {subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor (projectmanagersoptions){
        this.gradClassName = projectmanagersoptions.gradClassName;
        this.favInstructor = projectmanagersoptions.favInstructor;
    }

    standUp() {
        return `${this.name} announces to {channel}, @channel standby times!`;
    }

    debugsCode() {
        return `${this.name} debugs {student.name}'s code on {subject}.`;
    }
}

// const josh = new Person({
//     name: Josh,
//     age: 30,
//     location: Utah,
//     gender: male,
// });

// josh(speak);
