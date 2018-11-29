// CODE here for your Lambda Classes


//==================================== Constructors

class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
    }
}

class Instructor extends Person{
    constructor(insAttr){
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }

    demo(subject){
        return `Instructor ${this.name} says: Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}!`;
    }
}

class Student extends Person{
    constructor(studentdAttr){
        super(studentdAttr);
        this.previousBackground = studentdAttr.previousBackground;
        this.className = studentdAttr.className;
        this.favSubjects = studentdAttr.favSubjects;
    }

    listsSubjects() {
        const subjects = this.favSubjects.map(function(currentvalue){
            return currentvalue;
        });
        return subjects.toString();
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun Sprint Challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(PMattr){
        super(PMattr);
        this.gradClassName = PMattr.gradClassName;
        this.favInstructor = PMattr.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//==================================== Objects


//==================================== Person Objects
const billy = new Person({
    name: "Billy",
    age: 30,
    location: "Texas",
    gender: "Male"
});

const jimmy = new Person({
    name: "Jimmy",
    age: 20,
    location: "New York",
    gender: "Male"
});

console.log(billy.speak());
console.log(jimmy.name);

//==================================== Instructor Objects

const billyBob = new Instructor({
    name: "Billy Bob",
    age: 30,
    location: "Texas",
    gender: "Male",
    specialty: "closers",
    favLanguage: "JS",
    catchPhrase: "Don't forget your semi-colons!"
});

const jimmyBob = new Instructor({
    name: "Jimmy Bob",
    age: 20,
    location: "New York",
    gender: "Male",
    specialty: "This Keyword",
    favLanguage: "c++",
    catchPhrase: "If it ain't C im not writting it."
});

console.log(billyBob.demo("Node"));
console.log(jimmyBob.catchPhrase);
console.log(billyBob.favLanguage);
console.log(jimmyBob.specialty);

//==================================== Student Objects

const ben = new Student({
    name: "Ben",
    age: 22,
    location: "Colorado",
    gender: "Male",
    previousBackground: "IT",
    className: "Machine Learning",
    favSubjects: ["Python", "c++", "React"]
});

const becky = new Student({
    name: "Becky",
    age: 27,
    location: "Cali",
    gender: "Female",
    previousBackground: "Customer Service",
    className: "Fullstack Web-development",
    favSubjects: ["JS", "c#", "Node"]
});

console.log(ben.listsSubjects());
console.log(ben.PRAssignment("JS-II"));
console.log(ben.sprintChallenge("JS-II"));
console.log(ben.previousBackground);
console.log(becky.listsSubjects());
console.log(becky.PRAssignment("Python-I"));
console.log(becky.sprintChallenge("Python-I"));
console.log(becky.className);

//==================================== Project Manager Objects

const george = new ProjectManager({
    name: "George",
    age: 32,
    location: "Washington",
    gender: "Male",
    specialty: "Bug testing",
    favLanguage: "c++",
    catchPhrase: "Commit every 30 mins!",
    gradClassName: "Machine Learning",
    favInstructor: "Billy Bob"
});

const sam = new ProjectManager({
    name: "Sam",
    age: 28,
    location: "New Jersey",
    gender: "Female",
    specialty: "React",
    favLanguage: "Python",
    catchPhrase: "Don't @ me!",
    gradClassName: "Fullstack Web-development",
    favInstructor: "Jimmy Bob"
});

console.log(george.standUp("fsw25"));
console.log(sam.debugsCode(ben, "JS"));
console.log(george.gradClassName);
console.log(sam.favInstructor);