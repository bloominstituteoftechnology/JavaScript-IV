// CODE here for your Lambda Classes

class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender
    }
    speak() {
        return `Hello my name is ${this.name} and I'm from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(options) {
        super(options);
        this.specialty = options.specialty;
        this.favLanguage = options.favLanguage;
        this.catchPhrase = options.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(options) {
        super(options);
        this.previousBackground = options.previousBackground;
        this.className = options.className;
        this.favSubjects = options.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(options) {
        super(options);
        this.gradClassName = options.gradClassName;
        this.favIntructor = options.favIntructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


// Instructor

const jackee = new Instructor({
    name: 'Jackee',
    location: 'North Dakota',
    age: 26,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I beileve in you!!!`
});

const josh = new Instructor({
    name: 'Josh',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
});


// Students

const max = new Student({
    name: 'Max',
    location: 'Chicago',
    age: 27,
    gender: 'male',
    className: 'CS10',
    previousBackground: 'Super Hero',
    favSubjects: ["History", "Math", "Science", "French"]
});

const kayce = new Student({
    name: 'Kayce',
    location: 'Austin',
    age: 24,
    gender: 'female',
    className: 'CS10',
    previousBackground: 'Pro Wrestler',
    favSubjects: ["Phys Ed", "English", "Science", "Spanish"]
});

//PM

const cole = new ProjectManager({
    name: 'Cole',
    location: 'Atlanta',
    age: 30,
    gender: 'female',
    favLanguage: 'C',
    specialty: 'Back-end',
    catchPhrase: `Google it!`
});

const patrick = new ProjectManager({
    name: 'Patrick',
    location: 'California',
    age: 37,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Algorithms',
    catchPhrase: `Im here to help!`
});

//Checking Things Out

console.log(josh)
console.log(jackee)
console.log(josh.catchPhrase)
console.log(josh.demo("React"));

console.log(max)
console.log(max.previousBackground)

console.log(patrick)