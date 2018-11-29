// CODE here for your Lambda Classes


//=========== Base class

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}


//=========== Instructor class

class Instructor extends Person {
    constructor(instructAttribs) {
        super(instructAttribs);
        this.specialty = instructAttribs.specialty;
        this.favLanguage = instructAttribs.favLanguage;
        this.catchPhrase = instructAttribs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
    gradeWork(student) {
        let points = Math.ceil(Math.random()*20-7);
        return student.grade += points
    }
}


//=========== Student class

class Student extends Person {
    constructor(studentAttribs) {
        super(studentAttribs);
        this.previousBackground = studentAttribs.previousBackground;
        this.className = studentAttribs.className;
        this.favSubjects = studentAttribs.favSubjects;
        this.grade = studentAttribs.grade;

    }
    listsSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade >= 100) {
            console.log(`Hooray ${this.name}! You're graduating!`)
        }
        else {
            console.log(`${this.name}, you're getting close... you only need ${(100 - this.grade)} points to graduate.`)
        }
    }
}


//=========== Project Manager class

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel time for standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

//=========== Objects

const Beth = new Instructor({
    'name': 'Beth',
    'location': 'Tempe, Arizona',
    age: 34,
    'gender': 'female',
    'favLanguage': 'C',
    'specialty': 'back-end',
    'catchPhrase': 'Mind your manners.'
})

const Paul = new Instructor({
    'name': 'Paul',
    'location': 'Cleveland, Ohio',
    age: 42,
    'gender': 'male',
    'favLanguage': 'JavaScript',
    'specialty': 'front-end',
    'catchPhrase': 'Guys, this is awesome!'
})

const Jack = new Instructor({
    'name': 'Jack',
    'location': 'Raleigh, North Carolina',
    age: 31,
    'gender': 'male',
    'favLanguage': 'Node',
    'specialty': 'Security',
    'catchPhrase': 'Keep you secrets close'
})

const Rachel = new Student({
    'name': 'Rachel',
    'location': 'Kalamazoo, Michigan',
    age: 34,
    'gender': 'female',
    'favLanguage': 'JavaScript',
    'specialty': 'front-end',
    'catchPhrase': 'Awesome!',
    'previousBackground' : 'Print and Graphic Design',
    'className': 'FSW16',
    'favSubjects': ['CSS', 'JavaScript', 'Database'],
    'grade': 40,
})

const Kurt = new Student({
    'name': 'Kurt',
    'location': 'Pasedena, California',
    age: 28,
    'gender': 'male',
    'favLanguage': 'React',
    'specialty': 'front-end',
    'catchPhrase': 'What?!?!',
    'previousBackground' : 'Bartender',
    'className': 'FSW16',
    'favSubjects': ['JavaScript', 'HTML', 'React'],
    'grade': 75,
})

const Pearl = new Student({
    'name': 'Pearl',
    'location': 'Washington, DC',
    age: 37,
    'gender': 'female',
    'favLanguage': 'HTML',
    'specialty': 'front-end',
    'catchPhrase': 'Come on guys!',
    'previousBackground' : 'Social Worker',
    'className': 'FSW16',
    'favSubjects': ['CSS', 'HTML', 'Less'],
    'grade': 80,
})

const Raul = new ProjectManager({
    'name': 'Raul',
    'location': 'Houston, Texas',
    age: 31,
    'gender': 'male',
    'favLanguage': 'C',
    'specialty': 'back-end',
    'catchPhrase': 'Fall in!',
    'gradClassName': 'CS2',
    'favInstructor': 'Beth'
})

const Jessica = new ProjectManager({
    'name': 'Jessica',
    'location': 'San Francisco',
    age: 28,
    'gender': 'female',
    'favLanguage': 'JavaScript',
    'specialty': 'front-end',
    'catchPhrase': 'Cool, huh?',
    'gradClassName': 'CS10',
    'favInstructor': 'Jack'
})

const Zeke = new ProjectManager({
    'name': 'Zeke',
    'location': 'Colorado Springs',
    age: 34,
    'gender': 'male',
    'favLanguage': 'CSS',
    'specialty': 'front-end',
    'catchPhrase': 'Dude, guys, this is great!',
    'gradClassName': 'CS5',
    'favInstructor': 'Paul'
})




// Beth.speak();
// console.log(Jack);

// Kurt.listsSubjects();
// Pearl.sprintChallenge('JS');
// Rachel.PRAssignment('JavaScript IV');
// Pearl.speak();
// console.log(Kurt.grade);

// console.log(Zeke);
// Zeke.standUp('fsw16');
// Raul.debugsCode('Rachel', 'JavaScript');
// Jessica.speak();

Beth.gradeWork(Pearl);
Jack.gradeWork(Pearl);
Paul.gradeWork(Pearl);
Pearl.graduate();
Beth.gradeWork(Pearl);
Zeke.gradeWork(Pearl);
Jessica.gradeWork(Pearl);
Pearl.graduate();