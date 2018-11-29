// CODE here for your Lambda Classes


//==================================== Constructors


//==================================== Person Object

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

//==================================== Instructor Object

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
        return `${this.name}: ${student.name} receives a perfect score on ${subject}!`;
    }

    giveGrade(student) {
        let currentGrade = student.grade;
        let adjust = Math.floor(Math.random() * 15) + 1;
        let plusorMinus = Math.random() < 0.5 ? -1 : 1;
        adjust = adjust * plusorMinus;
        let res = student.grade += adjust;
        return `${this.name} adjust ${student.name}'s grade of ${currentGrade} by ${adjust} points, they now have a ${res}.`;
    }
}

//==================================== Student Object

class Student extends Person{
    constructor(studentdAttr){
        super(studentdAttr);
        this.previousBackground = studentdAttr.previousBackground;
        this.className = studentdAttr.className;
        this.favSubjects = studentdAttr.favSubjects;
        this.grade = studentdAttr.grade;
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

    graduate(){
        if ( this.grade> 70){
            return `congratulations you have graduated this Class!`;
        } 
        return `Looks like you still need some more time, your current grade is ${this.grade}. Go back and do some more Assignments!`;
    }
}

//==================================== Project Manager Object

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

//==================================== Student Objects

const ben = new Student({
    name: "Ben",
    age: 22,
    location: "Colorado",
    gender: "Male",
    previousBackground: "IT",
    className: "Machine Learning",
    favSubjects: ["Python", "c++", "React"],
    grade: Math.floor(Math.random() * 100) +1
});

const becky = new Student({
    name: "Becky",
    age: 27,
    location: "Cali",
    gender: "Female",
    previousBackground: "Customer Service",
    className: "Fullstack Web-development",
    favSubjects: ["JS", "c#", "Node"],
    grade: Math.floor(Math.random() * 100) +1
});

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
//==================================== Person test cases

console.log(billy.speak());
console.log(jimmy.name);

//==================================== Instructor test cases

console.log(billyBob.demo("Node"));
console.log(jimmyBob.catchPhrase);
console.log(billyBob.favLanguage);
console.log(jimmyBob.specialty);
console.log(billyBob.grade(becky, "Node"));
console.log(jimmyBob.giveGrade(ben));

//==================================== Student test cases

console.log(ben.listsSubjects());
console.log(ben.PRAssignment("JS-II"));
console.log(ben.sprintChallenge("JS-II"));
console.log(ben.previousBackground);
console.log(becky.listsSubjects());
console.log(becky.PRAssignment("Python-I"));
console.log(becky.sprintChallenge("Python-I"));
console.log(becky.className);
console.log(`${becky.name} has a grade of ${becky.grade}`);
console.log(`${ben.name} has a grade of ${ben.grade}`);
//==================================== Project Manager test cases

console.log(george.standUp("fsw25"));
console.log(sam.debugsCode(ben, "JS"));
console.log(george.gradClassName);
console.log(sam.favInstructor);
console.log(george.giveGrade(becky));


console.log(becky.graduate());