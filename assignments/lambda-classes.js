
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
        return `Today we are learning about ` + subject;
    }
    grade(student, subject) {
        return student + ` receives a perfect score on ` + subject;
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
        return `${this.name} has submitted a PR for ` + subject;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ` + subject;
    }
}

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm)
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ` + channel + ` @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ` + student + `'s code on ` + subject;
    }
}

const josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Utah',
    gender: 'male',
    specialty: 'All things',
    favLanguage: 'CSS',
    catchPhrase: `Waka Waka`
});

const barack = new Instructor({
    name: 'Barack',
    age: 59,
    location: 'Washington',
    gender: 'male',
    specialty: 'politics',
    favLanguage: 'html',
    catchPhrase: `yes we can`
});

const haywood = new ProjectManager({
    name: 'Haywood',
    age: 28,
    location: 'Texas',
    gender: 'male',
    specialty: 'Managing Projects',
    favLanguage: 'JavaScript',
    catchPhrase: `let me know if youn need help`,
    gradClassName: 'cs9',
    favInstructor: 'Arnold'
});

const oldGregg = new ProjectManager({
    name: 'Gregg',
    age: 40,
    location: 'His Waters',
    gender: 'female',
    specialty: 'water colors',
    favLanguage: 'love',
    catchPhrase: 'Im old gregggg!',
    gradClassName: 'cs1',
    favInstructor: 'Sylvester'
});

const jacob = new Student({
    name: 'Jacob',
    age: 29,
    location: 'Oregon',
    gender: 'male',
    previousBackground: 'wind turbines',
    className: 'cs11',
    favSubjects: ['html', 'CSS', "JavaScript"]
});

const oprah = new Student({
    name: 'Oprah',
    age: 62,
    location: 'Los Angeles',
    gender: 'female',
    previousBackground: 'talk shows',
    className: 'cs1234',
    favSubjects: ['books', 'celebs', "giveaways"]
});

console.log(josh.specialty);
console.log(barack.age)
console.log(haywood.gradClassName)
console.log(oldGregg.specialty)
console.log(jacob.location)
console.log(oprah.previousBackground)
console.log(josh.speak())
console.log(barack.demo("stuff"))
console.log(josh.grade(jacob.name, "JavaScript"))
console.log(jacob.listsSubjects())
console.log(oprah.prAssignmant("politics"))
console.log(jacob.sprintChallenge("JavaScript"))
console.log(haywood.standUp("cs11.haywood"))
console.log(oldGregg.debugsCode(oprah.name, "water colors"))