// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr);
        this.specialty = insAttr.specialty;
        this.favLanguage = insAttr.favLanguage;
        this.catchPhrase = insAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    grade(student) {
        return `${student.name}\'s grade is now ${student.grade-=((Math.random()*10) - (Math.random()*10))}`
    }
}

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
    }
    listsSubjects(favSubjects) {
        favSubjects.forEach(sub => console.log(sub));
    }
    PRassignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate() {
        if (this.grade > 70){
            return `${this.name} is ready to graduate`
        } else {
            return `regrading assignments`
        }
    }
}

class ProjectManager extends Person {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
    grade(student) {
        return `${student.name}\'s grade is now ${student.grade-=((Math.random()*10) - (Math.random()*10))}`
    }
}
//Student 

const fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    previousBackground: 'Quarry' ,
    className: 'CS12',
    favSubjects: 'HTML',
    grade: 91,
  });
const tony = new Student({
    name: 'Tony',
    location: 'Miami',
    age: 33,
    gender: 'male',
    previousBackground: 'Odd Jobs' ,
    className: 'CS12',
    favSubjects: 'CSS' ,
    grade: 88,
});
    
const will = new Student({
    name: 'Will',
    location: 'Bel-Air',
    age: 22,
    gender: 'male',
    previousBackground: 'Basketball Team Captain',
    className: 'CS12',
    favSubjects: ['Chasing Girls', 'Basketball'],
    grade: 76,
});

//Instructors 
const quigon = new Instructor({
    name: 'Qui-Gon',
    location: 'Coruscant',
    age: 48,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Recruiting',
    catchPhrase: `He will bring balance to the Force`
  }); 
  const paimai = new Instructor({
    name: 'Pai Mai',
    location: 'Unknown Temple in China',
    age: 1002,
    gender: 'male',
    favLanguage: 'Not English',
    specialty: 'Five-Point-Exploding-Heart-Technique',
    catchPhrase: `It's my arm now, I'll do what I want with it.`
  });
  const john = new Instructor({
    name: 'John Keating',
    location: 'New England',
    age: 41,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Poetry',
    catchPhrase: `Seize the day Boys. Make life extraordinary`,
  });

// Project Managers 
const obiwan = new ProjectManager({
    name: 'Obi-Wan',
    location: 'Tattooine',
    age: 29,
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'Yoda',
});
const kiddo = new ProjectManager({
    name: 'Beatrice',
    location: 'California',
    age: 32,
    gender: 'female',
    gradClassName: 'CS3',
    favInstructor: 'Bill',
});
const todd = new ProjectManager({
    name: 'Todd Anderson',
    location: 'New England',
    age: 15,
    gender: 'male',
    gradClassName: 'CS6',
    favInstructor: 'John Keating',
});

//person method
console.log(quigon.speak());
//Instructor Methods
console.log(paimai.demo(paimai.specialty));
console.log(john.grade(todd, john.specialty));
//Student Methods
console.log(will.listsSubjects(will.favSubjects));
console.log(tony.PRassignment(tony.favSubjects));
console.log(fred.sprintChallenge('HTML'));
//Project Manager Methods
console.log(todd.standUp(`@cs12-todd`));
console.log(kiddo.debugsCode(tony, 'CSS'));
// Stretch Methods 
console.log(paimai.grade(will));
console.log(kiddo.grade(will));
console.log(will.grade);
console.log(will.graduate());