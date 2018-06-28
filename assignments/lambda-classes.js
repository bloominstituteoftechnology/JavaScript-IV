class Person {
    constructor (attributes) { 
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
      }
      speak () {
        return `Hello my name is ${this.name}, I'm from ${this.location}.`;
      } 
    }
}

class Instructor extends Person {
    constructor (instAttributes) { 
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
      }
      demo (subject) {
        return `Today we are learning about ${subject}`;
      } 
      grade (studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
      } 
    }
}

class Student extends Person {
    constructor (studentAttributes) { 
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
      }
    listsSubjects () {
        return this.favSubjects;
    } 
    PRAssignment (subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    } 
    sprintChallenge (subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    } 
}

class ProjectManagers extends Instructor {
    constructor (pmAttributes) { 
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
      }
    standUp (name, channel) {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    } 
    debugsCode (studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    } 
}