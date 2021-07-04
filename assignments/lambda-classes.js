// CODE here for your Lambda Classes

// Base Class Person
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

// Instructor Class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    changeGrade(student) {
        let gradeChangeAmt = Math.round((Math.random() * 20) - 10);
        student.grade = student.grade + gradeChangeAmt;
        return student.grade;
    }
}


// Student Class
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate(PM) {
        if (this.grade > 70) {
            console.log(`Congrats ${this.name}! You are ready for a super awesome web dev job!!!!!!!!`);
        } else {
            console.log(`Sorry, ${this.name}. You have failed and need to roll back to the next cohort. :( ...maybe you should ask ${PM.name} to change your grade ;)`);
            PM.changeGrade(this);
            console.log(`${PM.name}: I have updated your grade to: ${this.grade}`);
            this.graduate(PM);
        }
    }
}

// Project Manager Class
class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);   
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standup(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel} @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}


// Test Objects

// Instructor Test
const fred = new Instructor ({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
});

const josh = new Instructor ({
    name: 'Josh Knell',
    location: 'Utah',
    age: 38,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Full-stack',
    catchPhrase: `What's up FSW 15...how is everyone doing today?!`,
});

// Student Test
const daren = new Student ({
    name: 'Daren Larson',
    location: 'Minnesota',
    age: 31,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'FSW 15',
    favSubjects: ['Javascript', 'CSS', 'HTML'],
    grade: 69,
});

const mrRobot = new Student ({
    name: 'Elliot Alderson',
    location: 'New York City',
    age: 28,
    gender: 'male',
    previousBackground: 'Cyber Security',
    className: 'FSW 1',
    favSubjects: ['Hacking things', 'Computers', 'other stuff'],
    grade: 100,
});

// Project Manager Test
const trevor = new ProjectManager ({
    name: 'Trevor Noah',
    location: 'New York City',
    age: 25,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Mr. Rodgers',
    specialty: 'Back-end',
    favLanguage: 'C++',
    catchPhrase: 'It is what it is.',
});

const stewart = new ProjectManager ({
    name: 'Jon Stewart',
    location: 'New York City',
    age: 55,
    gender: 'male',
    gradClassName: 'CS0',
    favInstructor: 'John Kennedy',
    specialty: 'Web Design',
    favLanguage: 'Java',
    catchPhrase: 'Cool beans.',
});


// Object tests
console.log(fred);
console.log(josh);
console.log(daren);
console.log(mrRobot);
console.log(trevor);
console.log(stewart);

// console.log speak() tests
fred.speak();
josh.speak();
daren.speak();
mrRobot.speak();
trevor.speak();
stewart.speak();

// demo() tests
fred.demo('closures');
josh.demo('closures');
// daren.demo('closures'); // this doesn't work, which is correct

// grade() tests
fred.grade(trevor, 'callbacks');
josh.grade(daren, 'semantic HTML');

// listsSubjects tests
daren.listsSubjects();
mrRobot.listsSubjects();

// PRAssignment() tests
daren.PRAssignment('classes');
mrRobot.PRAssignment('HTML');

// sprintChallenge() tests
daren.sprintChallenge('Math');
mrRobot.sprintChallenge('Objects');

// standup() tests
trevor.standup('FSW15');
stewart.standup('FSW15_ashwin');

// debugsCode test
trevor.debugsCode(daren, 'CSS');
stewart.debugsCode(mrRobot, 'HTML');

// changeGrade() test
console.log(josh.changeGrade(mrRobot));

// graduate() test
mrRobot.graduate(trevor);
daren.graduate(trevor);

