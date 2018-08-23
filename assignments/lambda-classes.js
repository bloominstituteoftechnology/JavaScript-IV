// CODE here for your Lambda Classes
class Person {
    constructor(info){
        this.name = info.name;
        this.city = info.city;
        this.age = info.age;
        this.gender = info.gender;
    }
    speak(){ return `Hello, my name is ${this.name}, and I am from ${this.city}`; }
}

class Instructor extends Person {
    constructor(instructorInfo){
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject){ return `Today we are learning about ${subject}!`; }
    grade(student, subject){ return `${student.name} recieves a perfect score on ${subject}`; }
}

class Student extends Instructor {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listSubjects(){ 
        const listFavSubjects = []; 
        return listFavSubjects.forEach(subject => subject.push());    
    }
    PRAssignment(subject){ return `${student.name} has submitted a PR for ${subject}`; }
    sprintChallenge(subject){ return `${student.name} has begun sprint challenge on ${subject}`; }
}

class ProjectManager extends Instructor {
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(channel){ return `${this.name} announces to ${channel}, @channel standy time!`; }
    debugsCode(student, subject){ return `${this.name} debugs ${student.name}'s code on ${subject}`; }
}