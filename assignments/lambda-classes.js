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