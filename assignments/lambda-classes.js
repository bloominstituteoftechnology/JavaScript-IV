// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`
    }
    doGrading(student) {
        if (Math.random() > 0.2) {
            let amount = Math.floor(Math.random() * 10);
            student.grade += amount;
            return `${student}'s grades went up by ${amount} after grading! Now their grade is ${student.grade}.`
        } else {
            let amount = Math.floor(Math.random() * 10);
            student.grade -= amount;
            return `${student.name}'s grades went down by ${amount} after grading. Now their grade is ${student.grade}. :(`
        }
        
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listsSubjects() {
        return this.favSubjects.join(', ');
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge for ${subject}`;
    }
    graduate() {
        if (this.grade > 70) {
            return `${this.name} has graduated! Hurray!`
        }
        else {
            return `${this.name} still needs to complete more assignments to get above 70%.`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const clint = new ProjectManager({
    name: 'Clint',
    location: 'Idaho',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Great job everyone!`
});

const studacious = new Student({
    name: 'Hard Worker',
    location: 'Jupiter',
    age: 40,
    gender: 'female',
    previousBackground: 'Space Engineering',
    className: 'FSW16',
    favSubjects: ['Programming','Steel','Rockets'],
    grade: 69,
    
})
console.log(fred.speak());
console.log(clint.debugsCode(studacious, 'History'));
console.log(clint.demo('Apples'));
console.log(clint.standUp('FSW16-supercool'));
console.log(studacious.listsSubjects());
console.log(studacious.PRAssignment('Javascript IV'));
console.log(studacious.sprintChallenge('Ultra Spiffy Stuff'));
console.log(clint.doGrading(studacious));
console.log(studacious.graduate());