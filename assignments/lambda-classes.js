// CODE here for your Lambda Classes
// Start of my code //

// Creating our base-class, Person
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}// End of Parent

// Start of Instructor class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }
    grade (subject) {
        return `${spuds.name} receives a perfect score on ${subject}`;
    }
    doGrading (studentGrade) {
        return studentGrade.grade + (Math.random()*20);
    }
}// End of Instructor

// Start of Student class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects () {
        return this.favSubjects.join(", ")
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge () {
        return `${this.name} has begun sprint challenge on ${this.favSubjects}`;
    }
    graduate () {
        if (this.grade/100 >= .7) {
            
            return "Get out of here, you Graduate!"
        }
        else {
            return "Time to start from the beginning"
        }
    }
}// End of Student

// Start of Project Manager class
class ProjectManager extends Instructor {
    constructor(projectmanagerAttributes) {
        super(projectmanagerAttributes);
        this.gradClassName = projectmanagerAttributes.gradClassName;
        this.favInstructor = projectmanagerAttributes.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode () {
        return `${this.name} debugs ${steph.name}'s code on ${steph.favSubjects}`;
    }
}// End of Project Manager


// Objects 

// People Objects Bill, Fred, and Jess
const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
});
const bill = new Person({
    name: 'bill',
    location: 'LA',
    age: 33,
    gender: 'male',
});
const jess = new Person({
    name: 'Jessica',
    location: 'NY',
    age: 25,
    gender: 'female',
});

// Instructor Objects Josh, Ryan, and Dr.Fins
const josh = new Instructor({
    name: 'Josh',
    location: 'Mountains',
    age: 35,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `Don't forget the homies`,
});
const ryan = new Instructor({
    name: 'Ryan',
    location: 'Georgia',
    age: 42,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'UI',
    catchPhrase: `Alright, alright, alright.`,
});
const fins = new Instructor({
    name: 'Fins',
    location: 'Tank',
    age: 4,
    gender: 'male',
    favLanguage: 'FishScript',
    specialty: 'Swimming',
    catchPhrase: `blagh`,
});

// Student Objects Steph, Klay, and Spuds
const steph = new Student({
    name: 'Steph',
    location: 'SF',
    age: 31,
    gender: 'male',
    previousBackground: '3-pt',
    className: 'CS4',
    favSubjects: ['UI', 'C++', 'JavaScript'],
    grade: 72,
});
const klay = new Student({
    name: 'Klay',
    location: 'Cali',
    age: 28,
    gender: 'male',
    previousBackground: 'Baller',
    className: 'CS7',
    favSubjects: ['Python', 'Scratch', 'English'],
    grade: 85,
});
const spuds = new Student({
    name: 'Spuds',
    location: 'Underground',
    age: 1,
    gender: 'female',
    previousBackground: 'Teacher',
    className: 'CS10',
    favSubjects: ['Html', 'CSS', 'Color Theory'],
    grade: 88,
});

// Project Managers Objects Eric, Terri, and Dani
const eric = new ProjectManager({
    name: 'Eric',
    location: 'NC',
    age: 26,
    gender: 'male',
    gradClassName: 'CS12',
    favInstructor: 'Josh',
});
const terri = new ProjectManager({
    name: 'Terri',
    location: 'NV',
    age: 25,
    gender: 'female',
    gradClassName: 'CS12',
    favInstructor: 'Fins',
});
const dani = new ProjectManager({
    name: 'Dani',
    location: 'OH',
    age: 24,
    gender: 'female',
    gradClassName: 'CS11',
    favInstructor: 'Fins',
});


console.log(bill.name); 
console.log(fred.age); 
console.log(jess.gender); 
console.log(bill.location); 
console.log(josh.specialty); 
console.log(ryan.catchPhrase); 
console.log(fins.favLanguage); 
console.log(steph.className); 
console.log(klay.favSubjects); 
console.log(spuds.previousBackground);
console.log(eric.gradClassName);
console.log(terri.favInstructor);
console.log(dani.location);
console.log(bill.speak());
console.log(josh.demo('Web-Design'));
console.log(fins.grade('math'));
console.log(steph.listsSubjects());
console.log(klay.PRAssignment('JS-II'));
console.log(spuds.sprintChallenge());
console.log(eric.standUp('cryptotalk'));
console.log(terri.debugsCode());

console.log(josh.doGrading(steph));
console.log(steph.graduate())
console.log(steph.grade);