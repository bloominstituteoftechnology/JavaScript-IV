// CODE here for your Lambda Classes

class Person {
    constructor(innate) {
        this.name = innate.name;
        this.age = innate.age;
        this.location = innate.location;
        this.gender = innate.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo (subject) {
        return (`Today we are learning about ${subject}`);
    }
    grade (student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    }
    listsSubjects () {
        // return this.favSubjects.forEach(function(subs) {
        //     return subs;
        // });
        return this.favSubjects.join(', ');
    }
    PRAssignments (subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(manage) {
        super(manage);
        this.gradClassName = manage.gradClassName;
        this.favInstructor = manage.favInstructor;
    }
    standUp (channel) {
        return (`${this.name} announces to ${channel}, @channel standup time!​​​​​`);
    }
    debugsCode (student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
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

const sarah = new Instructor({
    name: 'Sarah',
    location: 'Rock Island',
    age: 34,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Don't panic!`
  });

const marco = new Student({
    name: 'Marco',
    location: 'Rockford',
    age: 39,
    gender: 'male',
    previousBackground: 'psychology',
    className: 'CS19',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

const natalia = new Student({
    name: 'Natalia',
    location: 'Moscow',
    age: 28,
    gender: 'female',
    previousBackground: 'ballerina',
    className: 'CS29',
    favSubjects: ['Ruby', 'Python', 'JavaScript']
  });

const jake = new ProjectManager({
    name: 'Jake',
    location: 'York',
    age: 31,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Back in my day ...`,
    gradClassName: 'CS7',
    favInstructor: 'Sean'
  });

const sasha = new ProjectManager({
    name: 'Sasha',
    location: 'Philadelphia',
    age: 32,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Computer says no`,
    gradClassName: 'CS5',
    favInstructor: 'Royce'
  });

console.log(fred.specialty);
console.log(sarah.catchPhrase);
console.log(marco.previousBackground);
console.log(fred.demo('Ruby'));
console.log(sarah.grade(marco, 'CSS'));
console.log(marco.listsSubjects());
console.log(natalia.PRAssignments('Ruby'));
console.log(natalia.sprintChallenge('React'));
console.log(jake.standUp('cs15_Jake'));
console.log(sasha.debugsCode(marco, 'Python'));