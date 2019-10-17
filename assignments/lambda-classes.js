// CODE here for your Lambda Classes


class Person {
    constructor(personAttr) {
        this.name = personAttr.name,
        this.age = personAttr.age,
        this.location = personAttr.location
    }
    speak() {
        return `Hello my name is Fred. I am from Bedrock where ${this.name} and ${this.location} are the object's own props.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty,
        this.favLanguage = instructorAttr.favLanguage,
        this.catchPhrase = instructorAttr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`
    }///this one needs fixing
}

class Student extends Person {
    constructor(stuAttr){
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground,
        this.className = stuAttr.className,
        this.favSubjects = stuAttr.favSubjects
    }
    listsSubjects(){

    }
    PRAssignment(name, subject){
        return `(name) has submitted a PR for (subject)`
    }
    sprintChallenge(){

    }
}

class ProjectManagers extends Instructors {
    constructor(pmAttr){
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName,
    this.favInstuctor = pmAttr.favInstuctor
    }
    standUp(){

    }
    debugscode(){

    }
}


console.log()