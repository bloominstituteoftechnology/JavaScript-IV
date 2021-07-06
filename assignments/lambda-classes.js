// CODE here for your Lambda Classes

class People {
    constructor(pplAttrib) {
        this.name = pplAttrib.name;
        this.location = pplAttrib.location;
        this.age = pplAttrib.age;
        this.gender = pplAttrib.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}
// ================= People Class Above

class Instructor extends People {
    constructor(instAttrib) {
        super(instAttrib);
        this.favLanguage = instAttrib.favLanguage;
        this.specialty = instAttrib.specialty;
        this.catchPhrase = instAttrib.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    gradeStudent(student) {
        let rand = parseInt(Math.random() * 10);
        // console.log(`random score is ${rand}`);
        if(rand % 2 === 0) {
            // console.log(`we are adding`);
            student.grade += rand;
            if(student.grade > 100) {
                student.grade = 100;
            }
        }
        if (rand % 2 === 1) {
            // console.log(`we are subtracting`);
            student.grade -= (rand * 1.5);
        }

        return `${student.grade}`;
    }
}
// =============== Instructor Class Above

class Student extends People {
    constructor(studAtrib) {
        super(studAtrib);
        this.previousBackground = studAtrib.previousBackground;
        this.className = studAtrib.className;
        this.favSubjects = studAtrib.favSubjects;
        this.grade = studAtrib.grade;
    }
    listSubjects() {
        this.favSubjects.forEach(function(elem) {console.log(elem)});
    }
    PRAssignment (subject) {
        return `${this.name} has submited a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
        if(this.grade > 70) {
            return `${this.name} has a score of ${this.grade} and is ready to graduate.`;
        }
        else {
            return `${this.name}'s grade is ${this.grade} and is not ready to graduate.`;
        }
    }
}
// ================= Student Class Above

class PM extends Instructor {
    constructor(pmAttrib) {
        super(pmAttrib);
        this.gradClassName = pmAttrib.gradClassName;
        this.favInstructor = pmAttrib.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}
// ================= PM Class Above

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jamie = new Instructor({
    name: 'Jamie',
    location: 'Sofarock',
    age: 32,
    gender: 'female',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Rub a dub dub`
});


const billy = new Student({
    name: 'Billy',
    location: 'Springfield',
    age: 21,
    gender: 'male',
    previousBackground: 'Laugh Factory janitor',
    className: 'FSW 31',
    favSubjects: ['CSS', 'Java', 'C#'],
    grade: 90,
});

const jane = new Student({
    name: 'Jane',
    location: 'Bouncefield',
    age: 25,
    gender: 'female',
    previousBackground: 'Pre-K teacher assistant',
    className: 'FSW 29',
    favSubjects: ['JS', 'CSS', 'C++', 'HTML', 'TypeScript'],
    grade: 93,
});

const sam = new PM({
    name: 'Sam',
    location: 'Miami',
    age: 21,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

const barb = new PM({
    name: 'Barbara',
    location: 'Kissimmee',
    age: 29,
    gender: 'female',
    gradClassName: 'CS5',
    favInstructor: 'Trevor'
});


console.log(fred);
console.log(jamie.speak());
console.log(fred.grade(billy, 'Javascript'));
console.log(jamie.demo('CSS'));
console.log(jamie.catchPhrase);
console.log(sam.standUp('FSW_Help'));
console.log(barb.debugCode(jane, 'CS'));
console.log(jane.favSubjects);
console.log(jane.listSubjects());
console.log(billy.PRAssignment(billy.favSubjects[1]));
console.log(billy.sprintChallenge(billy.favSubjects[0]));
console.log(jane.speak());
console.log(billy.grade);
console.log(jane.grade);
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(barb.gradeStudent(billy));
console.log(billy.graduate());
console.log(fred.gradeStudent(billy));
console.log(fred.gradeStudent(billy));
console.log(fred.gradeStudent(billy));
console.log(fred.gradeStudent(billy));
console.log(fred.gradeStudent(billy));
console.log(fred.gradeStudent(billy));
console.log(billy.graduate());