

//== Class Definitions =========================================================

class Person {
    constructor (personalInfo) {
        this.name = personalInfo.name;
        this.age = personalInfo.age;
        this.location = personalInfo.location;
        this.gender = personalInfo.gender;
    }
    speak (){
        console.log(`Hello my name is ${this.name} from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor (instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (targetStudent, subject) {
        console.log(`${targetStudent.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects () {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        })
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor (PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }
    standup (channel) {
        console.log(`${this.name} accounces to ${channel}, @channel standy times!`);
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


