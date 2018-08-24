// CODE here for your Lambda Classes

class Person {
    constructor (info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor (info) {
        super (info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade (student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor (info) {
        super (info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
    }

    listSubjects () {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor (info) {
        super (info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }

    standUp (channel) {
        console.log(`${this.name} announces to ${channel}: "@channel standy times!"`);
    }
     
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


// objects
    // people
const fred = new Person ({
    'name': 'Fred',
    'age': 37,
    'location': 'Bedrock',
    'gender': 'male',
});

const wilma = new Person ({
    'name': 'Wilma',
    'age': 35,
    'location': 'Bedrock',
    'gender': 'female',
});

    // instructors
const dan = new Instructor ({
    'name': 'Dan',
    'location': 'SLC',
    'age': 44,
    'gender': 'male',
    'specialty': 'Front-end',
    'favLanguage': 'JavaScript',
    'catchPhrase': `Don't forget the homies`
});

const fran = new Instructor ({
    'name': 'Fran',
    'location': 'Philadelphia',
    'age': 32,
    'gender': 'female',
    'specialty': 'Back-end',
    'favLanguage': 'Python',
    'catchPhrase': `Always forget the homies`
});

    // students
const phil = new Student ({
    'name': 'Phil',
    'location': 'San Francisco',
    'age': 22,
    'gender': 'male',
    'previousBackground': 'Walmart',
    'className': 'CS13',
    'favSubjects': ['Html', 'CSS', 'JavaScript']
});

const phyllis = new Student ({
    'name': 'Phyllis',
    'location': 'Seattle',
    'age': 23,
    'gender': 'female',
    'previousBackground': 'Desktop Support',
    'className': 'CSPT2',
    'favSubjects': ['Python', 'R', 'SQL']
});

    // project managers
const aaron = new ProjectManager ({
    'name': 'Aaron',
    'location': 'Ontario',
    'age': 33,
    'gender': 'male',
    'favLanguage': 'CSS',
    'specialty': 'Debugging',
    'catchPhrase': `Wait...what?`,
    'gradClassName': 'CS4',
    'favInstructor': dan.name
});

const erin = new ProjectManager ({
    'name': 'Erin',
    'location': 'Phoenix',
    'age': 39,
    'gender': 'female',
    'favLanguage': 'HTML',
    'specialty': 'HTML',
    'catchPhrase': `Always never forget`,
    'gradClassName': 'CS5',
    'favInstructor': fran.name
});