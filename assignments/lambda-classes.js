// CODE here for your Lambda Classes
class Person {
    constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}//Person class

class Instructor extends Person{
    constructor(InstructorOptions) {
    super(InstructorOptions);
    this.specialty = InstructorOptions.specialty;
    this.favLanguage = InstructorOptions.favLanguage;
    this.catchPhrase = InstructorOptions.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}//Instructor class

class Student extends Person {
    constructor(StudentOptions) {
    super(StudentOptions);
    this.previousBackground = StudentOptions.previousBackground;
    this.className = StudentOptions.className;
    this.favSubjects = StudentOptions.favSubjects;
    }
    listsSubjects(favSubjects1, favSubjects2, favSubjects3) {
        return `${favSubjects1} ${favSubjects2} ${favSubjects3}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}//Student class

class ProjectManager extends Instructor {
    constructor(PMOptions) {
    super(PMOptions);
    this.gradClassName = PMOptions.gradClassName;
    this.favInstructor = PMOptions.favInstructor;
    this.superPower = PMOptions.superPower;
    }
    standUP(channel) {
        return `${this.name} announces to ${channel}, @channel standy time!`;
    }
    debugsCode(student, subject) {
       return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const josh = new Instructor ({
    'name': 'Josh',
    'location': 'Utah',
    'age': '35',
    'gender': 'M',
    'specialty': 'UI',
    'favLanguage': 'CSS',
    'catchPhrase': 'hue hue'
});

const kaitlyn = new ProjectManager ({
    'name': 'Kaitlyn',
    'location': 'Texas',
    'age': '29',
    'gender': 'F',
    'gradClassName': 'CS9',
    'favInstructor': 'Beej',
    'superPower': 'x-ray code vision',
});

const clint = new Student ({
    'name': 'Clint',
    'location': 'Idaho',
    'age': '27',
    'gender': 'M',
    'previousBackground': 'Sourcing',
    'className': 'CS 13',
    'favSubjects': ['HTML', 'CSS', 'JavaScript']
});

console.log(josh.speak());
console.log(kaitlyn.speak());
console.log(clint.speak());
console.log(josh.demo('the Banjo'));
console.log(josh.grade(clint, "the Banjo"));
console.log(clint.listsSubjects.call(clint, ...clint.favSubjects));
console.log(clint.PRAssignment('the Banjo'));
console.log(clint.sprintChallenge('the Banjo'));
console.log(kaitlyn.standUP('CS13-help'));
console.log(kaitlyn.debugsCode(clint, 'js'));
console.log(kaitlyn.superPower);