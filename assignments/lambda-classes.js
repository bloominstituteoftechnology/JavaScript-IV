// CODE here for your Lambda Classes
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }// End of Person Constructor
    // Person Methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}// End of Person Class

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }// End of Instructor Constructor
    // Instructor Methods
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}// End of Instructor Class

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubject = studentAttrs.favSubject;
    }// End of Student Constructor
    // Student Methods
    listsSubject(subjects) {
        return ``;
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}// End of Student Class

class ProjectManagers extends Instructor {
    constructor(projectManagersAttrs) {
        super(projectManagersAttrs);
        this.gradClassName = projectManagersAttrs.gradClassName;
        this.favInstructor = projectManagersAttrs.favInstructor;
    }// End of ProjectManagers Constructor
    // ProjectManagers Methods
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}// End of ProjectManagers Class