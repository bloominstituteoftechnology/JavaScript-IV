// CODE here for your Lambda Classes



//===== Person class =====

class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//===== Instructor class =====

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    adjustGrade(student) {
        let newGrade = (student.grade) + (Math.floor(Math.random() * (25 - -25 + 1) ) + -25);
        student.grade = newGrade;
        return newGrade;
    }
}

//===== Student class =====

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    listsSubjects() {
        return `${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}`;  //-----check this line later!!!----
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        
    }
}

//===== ProjectManager class =====

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes){
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//------------Instructors--------------

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 34,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `Forget the homies`
});

//------------Students--------------

const chuck = new Student({
    name: 'Chuck',
    location: 'Anywhere',
    age: 27,
    gender: 'male',
    previousBackground: 'race car driver',
    className: 'JS101',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 85
});

const janet = new Student({
    name: 'Janet',
    location: 'Somewhere',
    age: 24,
    gender: 'female',
    previousBackground: 'MMA fighter',
    className: 'CSS101',
    favSubjects: ['Python', 'CSS', 'PHP'],
    grade: 87
});

//------------ProjectManagers--------------

const joe = new ProjectManager({
    name: 'Joe',
    location: 'Eastside',
    age: 30,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `just do it`,
    gradClassName: 'CS10',
    favInstructor: `Sean`
});

const nancy = new ProjectManager({
    name: 'Nancy',
    location: 'Westside',
    age: 29,
    gender: 'female',
    favLanguage: 'Html',
    specialty: 'Back-end',
    catchPhrase: `get it done`,
    gradClassName: 'CS11',
    favInstructor: `Tony`
});

console.log(fred.catchPhrase); // Don't forget the homies
console.log(fred.grade(chuck, 'CSS')); // Chuck receives a perfect score on CSS

console.log(janet.className); // CSS101
console.log(janet.listsSubjects()); // Python, CSS, PHP

console.log(joe.favInstructor); // Sean
console.log(joe.debugsCode(janet, 'JavaScript')); // Joe debugs Janet's code on JavaScript

console.log(joe.adjustGrade(janet)); // 
console.log(janet.grade);
