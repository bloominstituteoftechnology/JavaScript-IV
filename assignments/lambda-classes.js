// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.newObjectName = attributes.name;
        this.newObjectAge = attributes.age;
        this.newObjectLocation = attributes.location;
        this.newObjectGender = attributes.gender;     
    }
    speak() {
        return `Hello my name is ${this.newObjectName}, and I am from ${this.newObjectLocation}.`;
    }
}// Person

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes)
        this.newObjectSpecialty = instructorAttributes.specialty;
        this.newObjectFavLanguage = instructorAttributes.favLanguage;
        this.newObjectCatchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.newObjectName} receives a perfect score on ${subject}!`;
    }
}// Child

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.newObjectPreviousBackground = studentAttributes.previousBackground;
        this.newObjectClassName = studentAttributes.className;
        this.newObjectFavSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.newObjectFavSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.newObjectName} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.newObjectName} has begun sprint challenge on ${subject}.`;
    }
}// Child

class ProjectManager extends Instructor {
    constructor(prAttributes) {
        super(prAttributes)
        this.newObjectGradClassName = prAttributes.gradClassName;
        this.newObjectFavInstructor = prAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.newObjectName} announces to ${channel}@channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.newObjectName} debugs ${student.newObjectName}'s code on ${subject}.`;
    }
}// Grand Child

const ted = new Instructor({
    name: 'Ted',
    location: 'San Dimas',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Party on dudes!`,
});

const bill = new Instructor({
    name: 'Bill',
    location: 'San Dimas',
    age: 29,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `Be excellent to each other!`,
});

const billy = new Student({
    name: 'Billy',
    location: 'Wild West',
    age: 34,
    gender: 'male',
    className: 'Web18',
    favSubjects: 'HTML',
});

const napoleon = new Student({
    name: 'Napoleon',
    location: 'France',
    age: 40,
    gender: 'male',
    className: 'Web18',
    favSubjects: 'JavaScript',
});

const sigmund = new ProjectManager({
    name: 'Sigmund',
    location: 'Austria',
    age: 52,
    gender: 'male',
    gradClassName: 'Web12',
    favInstructor: 'Bill',
    catchPhrase: `What's a Geek?`,
});

const genghis = new ProjectManager({
    name: 'Genghis',
    location: 'Mongolia',
    age: 29,
    gender: 'male',
    gradClassName: 'Web12',
    favInstructor: 'Tedd',
});


console.log(ted.demo('JavaScript'));
console.log(bill.grade(napoleon, 'HTML'));
console.log(billy.listsSubjects());
console.log(billy.PRAssignment('HTML'));
console.log(napoleon.sprintChallenge('Javascript'));
console.log(sigmund.standUp('help'));
console.log(genghis.debugsCode(napoleon, 'CSS'));
console.log(napoleon.speak());