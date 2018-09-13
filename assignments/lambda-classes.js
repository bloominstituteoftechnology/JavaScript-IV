// CODE here for your Lambda Classes
class Person {
    constructor(personInfo){
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }// methods go here:
        speak(){
    returns `Hello, my name is ${this.name}, I am from ${this.location}`;
}
} // End Person class

class Instructor extends Person {
    construction (instructorInfo){
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }// Methods go here:
        demo(subject){
            return `Today we are learning about ${subject}`;
        };

        grade(student, subject){
            return `${student.name} receives a perfect score on ${subject}`;
        }
}// End Instructor Class

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.listsSubjects = studentInfo.listsSubjects;
    }// Methods go here:
        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`;
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
}// End Student Class

class ProjectManagers extends Instructor{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }// Methods go here:
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode()
}// End ProjectManagers Class