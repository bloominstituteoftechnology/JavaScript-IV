
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(education) {
        super(education);
        this.specialty = education.specialty;
        this.favLanguage = education.favLanguage;
        this.catchPhrase = education.Catchphrase;
    }
    demo(subject) {
        return `Today we are learning about` + subject;
    }
    grade(student, subject) {
        return student + `receives a perfect score on` + subject;
    }
}

class Student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    prAssignmant(subject) {
        return student.name + `has submitted a PR for ` + subject;
    }
    sprintChallenge(subject) {
        return student.name + `has begun sprint challenge on ` + subject;
    }
}

class ProjectManagers extends Instructors {
    constructor(pm) {
        super(ta)
        this.gradClassName = ta.gradClassName;
        this.favInstructor = ta.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to` + channel + `@channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs` + student + `'s code on` + subject;
    }
}

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Utah',
    gender: 'male',
    specialty: 'All things',
    favLanguage: 'JavaScript',
    catchPhrase: `Waka Waka`
});

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Utah',
    gender: 'male',
    specialty: 'All things',
    favLanguage: 'JavaScript',
    catchPhrase: `Waka Waka`
});