class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }

    speak(name, location) {
       return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
      return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }

    updateGradebook(student) {
        const assignmentGrade = Math.floor(Math.random() * 11 - 10);
        let newGrade = student.grade + assignmentGrade;
        return `${student.name}'s assignment has been graded. ${student.name}'s new grade is ${newGrade}`; 
    }
}

const Joe = new Instructor({name: "Joe Schmoe", age: 36, location: "Spokane, WA", gender: "M", specialty: "redux", favLanguage: "Javascript", catchPhrase: "That's all folks!"});
const Margaret = new Instructor({name: "Margaret Jackson", age: 32, location: "Miami, FL", gender: "F", specialty: "LESS", favLanguage: "CSS", catchPhrase: "It's all good."});

class Student extends Person {
    constructor(studentInfo, grade) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        grade = Math.floor(Math.random() * 81 + 10);
        this.grade = grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(favorite) {
            console.log(favorite);
        })
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun the sprint challenge on ${subject}.`
    }

    graduate(instructor) {
        if (this.grade > 70) {
            return `${this.name}'s grade is ${this.grade}%. ${this.name} is ready to graduate from Lambda School!`
      }
        else {
            this.grade = instructor.updateGradebook(this);
            return `${this.name}'s grade is ${this.grade}. ${this.name} is not ready to graduate yet.`
      }
    }

}

const Sira = new Student({name: "Sira Martinez", age: 23, location: "Austin, TX", gender: "F", previousBackground: "Substitute Teacher", className: "CSPT2", favSubjects: ["HTML", "LESS", "React"],});
const Leanne = new Student({name: "Leanne Williams", age: 18, location: "Indiannapolis, IN", gender: "F", previousBackground: "Cashier", className: "CSPT1", favSubjects: ["React, Redux, jQuery"],});

class ProjectManager extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standup time!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const Sarah = new ProjectManager({name: "Sarah Leeks", age: 26, location: "Honolulu, HI", gender: "F", specialty: "Javascript", favLanguage: "Javascript", catchPhrase: "I am the greatest!"});
const Ricky = new ProjectManager({name: "Ricky Welk", age: 30, location: "Asheville, NC", gender: "M", specialty: "LESS", favLanguage: "CSS", catchPhrase: "Gotcha!"});