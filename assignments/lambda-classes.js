// CODE here for your Lambda Classes

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (iAttributes) {
        super (iAttributes);
        this.specialty = iAttributes.specialty;
        this.favLanguage = iAttributes.favLanguage;
        this.catchPhrase = iAttributes.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
    points (student) {
        student.grade + (Math.random() * 20).toFixed(2);
        student.grade - (Math.random() * 10).toFixed(2);
        return `${student.name}'s grade has been changed to ${student.grade}.`;
    }
}

class Student extends Person {
    constructor (sAttributes) {
        super(sAttributes);
        this.previousBackground = sAttributes.previousBackground; //Job? School?
        this.className = sAttributes.className; //FSW 16
        this.favSubjects = sAttributes.favSubjects; //CSS, HTML, etc.
        this.grade = (Math.random() * (100-40) + 40).toFixed(2);
    }
    listsSubjects () {
        return `${this.favSubjects}`;
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun the sprint challenge on ${subject}.`;
    }
    graduate () {
        if (this.grade > 70) {
            return `${this.name} has graduated Lambda School!`;
        } else {
            return `Ask your PM to give you a new grade!`;
        }
    }
}

class PM extends Instructor {
    constructor (pmAttributes) {
        super (pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor; 
        this.channel = pmAttributes.channel;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standup times!`
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}



const harry = new Person ({
    name: "Harry",
    age: 29,
    location: "Hogwarts",
    gender: "Male"
});

const ron = new Person({
    name: "Ron",
    age: 29,
    location: "Hogwarts",
    gender: "Male"
});

const josh = new Instructor({
    name: "Josh",
    age: 29,
    location: "Provo",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Big Boss"
});

const josh2 = new Instructor({
    name: "Josh 2.0",
    age: 29,
    location: "Provo",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Isn't that so cool?"
});

const christian = new Student({
    name: "Christian",
    age: 24,
    location: "Mapleton",
    gender: "Male",
    previousBackground: "Schooling in China",
    className: "FSW 16",
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const austin = new Student({
    name: "Austin",
    age: 27,
    location: "Tokyo",
    gender: "Male",
    previousBackground: "Actuary",
    className: "FSW 20",
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const jordan = new PM({
    name: "Jordan",
    age: 24,
    location: "USA",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Y'all are doing great",
    gradClassName: "FSW 13",
    favInstructor: "Josh Knell",
});

const michael = new PM({
    name: "Michael",
    age: 27,
    location: "USA",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Good work",
    gradClassName: "FSW 11",
    favInstructor: "Josh Knell",
});


// PERSON CLASS EXAMPLES
console.log(harry.speak());
console.log(ron.speak());

// INSTRUCTOR CLASS EXAMPLES
console.log(josh.demo('Javascript'));
console.log(josh.grade(christian, 'Redux'));
console.log(josh.catchPhrase);

// STUDENT CLASS EXAMPLES
console.log(christian);
console.log(austin);
console.log(christian.listsSubjects());
console.log(austin.PRAssignment('React'));
console.log(christian.sprintChallenge('Python'));


// PR CLASS EXAMPLES
console.log(jordan.standUp('FSW 16 Jordan'));
console.log(michael.debugsCode(austin, 'Javascript'));
console.log(jordan.points(christian));
console.log(jordan.points(austin));
console.log(christian.graduate());
console.log(austin.graduate());

