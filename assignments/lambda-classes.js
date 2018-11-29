// CODE here for your Lambda Classes

class Person {
    constructor(personAttribs){
        this.name = personAttribs.name;
        this.age = personAttribs.age;
        this.location = personAttribs.location;
        this.gender = personAttribs.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructors extends Person {
    constructor(instAttribs){
        super(instAttribs);
        this.specialty = instAttribs.specialty;
        this.favLanguage = instAttribs.favLanguage;
        this.catchPhrase = instAttribs.catchPhrase;        
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}.`
    }
    grade(student,subject) {
        return `${student.name} receive a perfect score on ${this.subject}.` // this needed?
    }
}

class Students extends Person {
    constructor(studAttribs){
        super(studAttribs);
        this.previousBackground = studAttribs.previousBackground;
        this.className = studAttribs.className;
        this.favSubjects = studAttribs.favSubjects;     
        
    }
    listsSubjects() {
        return `Favorite subjects are: ${this.favSubjects}.`
    }
    PRAssignments(subject) {
        return `${student.name} has submitted a Pull Request for ${this.subject}.` // this needed?
    }
    sprintChallenge(subject) {
        return `${student.name} has begun the Sprint Challenge on ${this.subject}.` // this needed?
    }
}

class ProjectManagers extends Instructors {
    constructor(pmAttribs){
        super(pmAttribs);
        this.gradClassName = pmAttribs.gradClassName;
        this.favInstructor = pmAttribs.favInstructor;
        
    }
    standUp(channel) {
        return `${this.name} announces to channel: @channel standy times!`;
    }
    PRAssignments(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}.` // this needed?
    }
    
}

// Instructors

const bigJosh = new Instructors({
    name: 'Josh Knell',
    location: 'Utah',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front End Dev',
    catchPhrase: 'Guys, this is so powerful!'
});

const mrSmith = new Instructors({
    name: 'John Smith',
    location: 'Washington',
    age: 41,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Statistics',
    catchPhrase: "It's a wonderful life"
});

const mrsJones = new Instructors({
    name: 'Martha Jones',
    location: 'San Francisco',
    age: 28,
    gender: 'female',
    favLanguage: 'C++',
    specialty: 'Operating Systems',
    catchPhrase: 'Mash that return key!'
});

// Students

const jamie = new Students({
    name: 'Jamie Hall',
    location: 'Tampa, Florida',
    age: 56,
    gender: 'male',
    previousBackground: 'finance',
    className: 'FSW16',
    favSubjects:['JavaScript', 'Python', 'APIs']
    });

const chrissy = new Students({
    name: 'Chris Evert',
    location: 'St. Clair Shores, MI',
    age: 22,
    gender: 'female',
    previousBackground: 'Tennis Player',
    className: 'FSW16',
    favSubjects:['JavaScript', 'HTML', 'CSS'],
});

const fred = new Students({
    name: 'Freddy Lima',
    location: 'Pemmsylvania',
    age: 34,
    gender: 'male',
    previousBackground: 'roofing',
    className: 'FSW16',
    favSubjects:['React', 'Redux', 'Node.js'],
});

//Project Managers

const bonnie = new ProjectManagers({
    name: 'Bonnie Parker',
    location: 'Texas',
    age: 24,
    gender: 'female',
    gradClassName: 'FSW15',
    favInstructor: 'bigJosh'
});

const clyde = new ProjectManager({
    name: 'Clyde Barrow',
    location: 'Texas',
    age: 25,
    gender: 'male',
    gradClassName: 'FSW14',
    favInstructor: 'Mrs. Jones'
});
