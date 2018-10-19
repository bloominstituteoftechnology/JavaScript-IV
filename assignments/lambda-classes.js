// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instruct) {
        super(instruct);
        this.specialty = instruct.specialty;
        this.favLanguage = instruct.favLanguage;
        this.catchPhrase = instruct.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
    newGrade(student) {
        let score = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= score;
            return `${score} points will be subtracted from ${student}'s grade.`;
        } else {
            student.grade += score;
            return `${score} points will be added to ${student.name}'s grade.`;
        }
    }
}
class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
        this.subject = student.subject;
        this.grade = student.grade;
    }
    listsSubjects(favSubjects) {
        return `These are ${this.name}'s favorite subjects  ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated with a final grade of ${this.grade}!`;
        } else {
            let sub = 70 - this.grade;
            this.grade += sub;
            return `After more grading, ${sub} points were earned and ${this.name} has graduated with a final grade of ${this.grade}!`;
        }
    }
}


class ProjectManagers extends Instructor {
    constructor(pmanager) {
        super(pmanager);
        this.gradClassName = pmanager.gradClassName;
        this.favInstructor = pmanager.favInstructor;
    }
    standUp(channel) {
        return `${this.name}, hey @channel ${channel} standby time!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}



const john = new Instructor({
    name: 'John',
    location: 'Wisconsin',
    age: 27,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
});

const sarah = new Instructor({
    name: 'Sarah',
    location: 'Florida',
    age: 22,
    gender: 'female',
    favLanguage: 'REACT',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the ladies`
});

const michael = new Instructor({
    name: 'Michael',
    location: 'South Carolina',
    age: 47,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const thomas = new Student({
    name: 'Thomas',
    location: 'Wyoming',
    age: 19,
    gender: 'male',
    previousBackground: 'Retail',
    className: 'CS15',
    favSubjects: ['HTML ', 'REACT ', 'JavaScript'],
    grade: 60
});

const keysha = new Student({
    name: 'Keysha',
    location: 'New York',
    age: 26,
    gender: 'female',
    previousBackground: 'Receptionist',
    className: 'CS09',
    favSubjects: ['SASS ', 'iOS ', 'UX/UI'],
    grade: 60
});

const mark = new Student({
    name: 'Mark',
    location: 'South Carolina',
    age: 47,
    gender: 'male',
    previousBackground: 'Retired Veteran',
    className: 'Data Structures',
    favSubjects: ['Alogorithms', ' Python'],
    grade: 85
});

const nicole = new ProjectManagers({
    name: 'Nicole',
    location: 'Massachusetts',
    age: 33,
    gender: 'female',
    gradClassName: 'CS09',
    favInstructor: 'Sarah',
});

const pablo = new ProjectManagers({
    name: 'Pablo',
    location: 'California',
    age: 29,
    gender: 'male',
    gradClassName: 'Python',
    favInstructor: 'John',
});

const peter = new ProjectManagers({
    name: 'Peter',
    location: 'San Francisco',
    age: 29,
    gender: 'male',
    gradClassName: 'REACT',
    favInstructor: 'Michael',
});



console.log(michael.demo('python')); // Instructor Michael's 'demo
console.log(mark.listsSubjects()); // Student Mark's fav subjects
console.log(mark.PRAssignment('HTML')); // Mark's PRAssignment's
console.log(mark.sprintChallenge('REACT')); // Mark's sprint challenge
console.log(mark.className); // Mark's class name
console.log(peter.standUp('FSW15')); // Project Manager Peter's stand-up message
console.log(pablo.debugsCode('Keysha', 'JavaScript')); // Project Manager Pablo's debug message
console.log(keysha.previousBackground); // Student Keysha's previous background
console.log(thomas.className); // Student Thomas's class name
console.log(michael.grade('Thomas', 'CSS')); // Student receives perfect score
console.log(sarah.grade('keysha', 'Python'));
console.log(sarah.newGrade(keysha));
console.log(thomas.graduate(john));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();