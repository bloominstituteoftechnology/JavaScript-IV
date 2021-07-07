// CODE here for your Lambda Classes
class Person {
    constructor(flaw) {
        this.name = flaw.name;
        this.age = flaw.age;
        this.location = flaw.location;
        this.gender = flaw.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, and I'm an alcoholic from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(cam) {
        super(cam);
        this.specialty = cam.specialty;
        this.favLanguage = cam.favLanguage;
        this.catchPhrase = cam.catchPhrase;
    }
    demo(subject) {
        console.log(`Today you are watching a movie about ${subject} while I eat a sandwich in the bathroom.`);
    }
    grade(student, subject) {
        console.log(`${student.name} bought me a coke and it's the only reason they're passing ${subject}.`);
    }
}

class Student extends Person {
    constructor(collegeDropout) {
        super(collegeDropout);
        this.previousBackround = collegeDropout.previousBackround;
        this.className = collegeDropout.className;
        this.favSubjects = collegeDropout.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subsandwich => {console.log(subsandwich);});
    }
    PRAssignment(subject) {
        console.log(`${this.name} still hasn't submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} tried to spring but pulled a hamstring.`);
    }
}

class ProjectManager extends Person {
    constructor(readingThisRightNow) {
        super(readingThisRightNow);
        this.gradClassName = readingThisRightNow.gradClassName;
        this.favInstructor = readingThisRightNow.favInstructor;
    }
    standUp(channelSurfer) {
        console.log(`${this.name} announces to ${channelSurfer} he likes pizza rolls.`);
    }
    debugsCode(collegeDropout, subSandwich) {
        console.log(`${this.name} tried to help ${collegeDropout.name} with ${subSandwich} but ate pizza rolls instead`);
    }
}

// STRETCH
// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Student.prototype.grade = 42;
// Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
Person.prototype.gradeStudent  = function(student) {
    if(this instanceof Instructor || this instanceof ProgressEvent) {
        console.log(student.grade);
        student.grade += 100 - Math.floor(Math.random() * Math.floor(200));
        if(student.grade <= 0) student.grade = 0;
        else if(student.grade >= 100) student.grade = 100;
    }
}
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
Student.prototype.graduate = function() {
    return this.grade > 70;
}
