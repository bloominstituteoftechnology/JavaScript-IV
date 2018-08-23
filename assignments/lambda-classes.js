// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.age;
        this.gender = personAttr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    // `demo` receives a `subject` string as an argument and logs out the phrase 
    // 'Today we are learning about {subject}' where subject is the param passed in.
    // TODO: make sure this is the right way to use subject
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    // `grade` receives a `student` object and a `subject` string as arguments and 
    // logs out '{student.name} receives a perfect score on {subject}'
    // TODO: make sure this is the right way to use student and subject
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    // `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    // TODO: return each subject, maybe using map?
    listsSubjects() {
        let subjects = this.favSubjects;
        subjects.forEach(element => {console.log(`${element}`)}) 
    }

    // `PRAssignment` a method that receives a subject as an argument and logs out that the 
    // `student.name has submitted a PR for {subject}`
    // TODO: make sure this is the right way to use student and subject
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    // `sprintChallenge` similar to PRAssignment but logs out 
    // `student.name has begun sprint challenge on {subject}`
    // TODO: make sure this is the right way to use student and subject
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    // `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, 
    // @channel standy times!​​​​​
    // TODO: make sure this is the right way to use channel
    standUp(channel) {
        return `${this.name} announces to ${channel}: @${channel} standy times!​​​​​`;
    }

    // `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs 
    // {student.name}'s code on {subject}`
    // TODO: make sure this is the right way to use student and subject    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

