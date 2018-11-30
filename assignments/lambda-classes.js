// CODE here for your Lambda Classes


// Create parent 'person' class
class Person {  //==================================================== PARENT CLASS =====>
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};

class Instructor extends Person {  //=================================== INSTRUCTOR CLASS =====>
    constructor (insAttributes) {
        super(insAttributes);
        this.specialty = insAttributes.specialty; //"redux",
        this.favLanguage = insAttributes.favLanguage; //"JavaScript, Python, Elm",
        this.catchPhrase = insAttributes.catchPhrase //"Don't forget the homies"
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
};

class Student extends Person {  //=================================== STUDENT CLASS =====>
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className; // "CS116"
        this.favSubjects = attributes.favSubjects; // ['Html', 'CSS', 'JavaScript']
        this.grade = attributes.grade;
    };
    listsSubjects () {
        return this.favSubjects;
    };
    PRAssignment (subject) {
        return `${student.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge (subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`
    };
    graduate () {
        if (this.grade >= 70) {
            return `${this.name}, you are ready to graduate. CONGRATLATIONS!`
        } else {
            return 
        }
    }
};

class ProjectManagers extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName; // "CS16",
        this.favInstructor = attributes.favInstructor; // "Josh",
    };
    standUp (channel) {
        return ` ${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
    };
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    };

};



// ========================================= Create Characters/persons ============>

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

//========================================= STUDENTS ================>
const tom = new Student({
    name: 'Tom',
    location: 'Los Angeles',
    age: 31,
    gender: 'male',
    favSubjects: ['Preprocessing', 'CSS', 'JavaScript'],
    className: 'FSW177',
    previousBackground: `Attorney`,
    grade: 70
});

const sam = new Student({
    name: 'Samantha',
    location: 'Korea',
    age: 28,
    gender: 'female',
    favSubjects: ['Html', 'JavaScript', 'CSS'],
    className: 'FSW107',
    previousBackground: `Architect`,
    grade: 79
});

const alexis = new Student({
    name: 'Alexis',
    location: 'Phili',
    age: 25,
    gender: 'female',
    favSubjects: ['Html', 'Flexbox', 'JavaScript'],
    className: 'FSW107',
    previousBackground: `Architect`,
    grade: 87
});

//===================================== PROJECT MANAGERS =================>
const bill = new Instructor({
    name: 'Bill',
    location: 'Hamrock',
    age: 47,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Josh',
});
const hancock = new Instructor({
    name: 'Hancock',
    location: 'Nowhere',
    age: 33,
    gender: 'male',
    gradClassName: 'CS12',
    favInstructor: 'Sean',
});

//=========================================== TEST =================>

console.log(fred);
console.log(tom);
console.log(sam.speak());
console.log(fred.grade(sam, 'javasript'));
console.log(fred.demo('Flexbox'));