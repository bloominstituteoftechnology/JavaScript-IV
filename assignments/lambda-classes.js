// CODE here for your Lambda Classes

class Person {
    constructor(generalInfo) {
        this.name = generalInfo.name;
        this.age = generalInfo.age;
        this.location = generalInfo.location;
        this.gender = generalInfo.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name} and I am from ${this.location}.`); 
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousbackground = studentInfo.previousbackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }

    PRassignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenege on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerInfo) {
        super(projectManagerInfo);
        this.gradClassName = projectManagerInfo.gradClassName;
        this.favInstructor = projectManagerInfo.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }

    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
    }
}




// Students

const wonjae = new Student({
    'name': 'Wonjae',
    'age': 24,
    'location': 'Red Bluff, Ca',
    'gender': 'M',
    'previousbackground': 'Waiter',
    'className': 'CS13',
    'favSubjects': ['HTML', 'CSS', 'Javascript'],
});

const emily = new Student({
        'name': 'Emily',
        'age': 34,
        'location': 'New York, Ny',
        'gender': 'F',
        'previousbackground': 'Teacher',
        'className': 'CS13',
        'favSubjects': ['Less', 'Node', 'HTML'],
    });


// Instructors 

const bobby = new Instructor({
        'name': 'Bobby',
        'age': 40,
        'location': 'Killeen, Tx',
        'gender': 'M',
        'previousbackground': 'Janitor',
        'favSubjects': ['Less', 'Node', 'HTML'],
        'specialty': 'Architecture',
        'favLanguage': 'Javascript',
        'catchPhrase': 'Howdy yall'
    });

const roman = new Instructor({
        'name': 'Roman',
        'age': 29,
        'location': 'New York, Ny',
        'gender': 'M',
        'previousbackground': 'Teacher',
        'favSubjects': ['Less', 'Node', 'HTML', 'CSS', 'Javascript'],
        'specialty': 'Typing',
        'favLanguage': 'HTML',
        'catchPhrase': 'Rome was not built in a day'
    });


// Project Managers

const berry = new ProjectManager({
        'name': 'Berry',
        'age': 29,
        'location': 'Denver, Co',
        'gender': 'M',
        'previousbackground': 'Marathon Runner',
        'favSubjects': ['Less', 'Node', 'HTML', 'CSS', 'Javascript'],
        'specialty': 'Typing',
        'favLanguage': 'C++',
        'catchPhrase': 'The early bird catches the worm',
        'gradClassName': 'CS10',
        'favInstructor': 'Roman'
    });

const lee = new ProjectManager({
        'name': 'Lee',
        'age': 26,
        'location': 'Los Angeles, Ca',
        'gender': 'M',
        'previousbackground': 'Window Cleaner',
        'favSubjects': ['Less', 'Node', 'HTML', 'CSS', 'Javascript'],
        'specialty': 'Communication',
        'favLanguage': 'CSS',
        'catchPhrase': 'Holy Smokes!!!',
        'gradClassName': 'CS4',
        'favInstructor': 'Bobby'
    });

// Testing 

wonjae.speak();  
wonjae.PRassignment('Javascript');

emily.listsSubjects();
emily.sprintChallenge('HTML');
console.log(emily.age);
console.log(emily.location);
console.log(emily.favSubjects);


roman.speak();
roman.demo('PHP');
roman.grade(wonjae, 'Less');

bobby.speak();
bobby.grade(emily, 'Node.js');


berry.speak();
console.log(berry.gradClassName);
console.log(berry.catchPhrase);
console.log(berry.favLanguage);
berry.standUp('after-hours');
berry.debugsCode(emily, 'Java');

lee.speak();
console.log(lee.gradClassName);
lee.debugsCode(roman, 'Python');