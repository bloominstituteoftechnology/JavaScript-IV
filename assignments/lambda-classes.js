// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;

    }
    speak() {
        //console.log(`Object was removed from the game.`);
        return `Hello my name is Fred, I am from Bedrock`;
    }
}


class Instructor extends Person {
    constructor(InstrucAttributes) {
        super(InstrucAttributes);
        this.specialty = InstrucAttributes.specialty;
        this.favLanguage = InstrucAttributes.favLanguage;
        this.catchPhrase = InstrucAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}`;
    }

}

class student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;

    }

    listsSubjects() {
        return this.favSubjects.forEach(favSubjects => {
            console.log(favSubjects);
        });
    }

    PRAssignment(subject) { `${student.name} has submitted a PR for ${subject}` }

    sprintChallenge(subject) { `${student.name} has begun sprint challenge on ${subject}` }
}

class ProjectManager extends Instructor {
    constructor(projectAttributes) {
        super(projectAttributes);
        this.gradClassName = projectAttributes.gradClassName;
        this.favInstructor = projectAttributes.favInstructor;

    }
    standUp(slack_channel) { `${ name } announces to ${ channel }, @channel standy times!​​​​​`; }

    debugsCode(student, subject) {
        `${ name } debugs ${ student.name }'s code on ${subject}`;
    }


}