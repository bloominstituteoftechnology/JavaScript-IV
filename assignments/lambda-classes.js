// CODE here for your Lambda Classes

class Person {
    constructor(personalData) {
        this.name = personalData.name;
        this.age = personalData.age;
        this.location = personalData.location;
        this.gender = personalData.gender;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person {
    constructor(instructorQualities) {
        super(instructorQualities);
        this.specialty = instructorQualities.specialty;
        this.favLanguage = instructorQualities.favLanguage;
        this.catchPhrase = instructorQualities.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    };
    listsSubjects(subjects) {
        subjects.forEach(subject => console.log(subject));
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
};

class Project_Manager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    };
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`;
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}

const fred = new Instructor({
    name: 'Fred',
    location: 'California',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const bob = new Instructor({
    name: "Bob",
    location: "Arizona",
    age: 87,
    gender: "male",
    favLanguage: "HTML",
    specialty: "Front-end",
    catchPhrase: `Did I do that?`
});

const laura = new Instructor({
    name: "Laura",
    location: "Oregon",
    age: 28,
    gender: "female",
    favLanguage: "CSS",
    specialty: "Front-end",
    catchPhrase: `Where's The Beef`
});

const jake = new Student({
  name: "jake",
  age: 20,
  location: "Nevada",
  gender: "male",
  previousBackground: ["FreeCodeCamp"],
  className: "FSW 15",
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const fran = new Student({
    name: "Fran",
    age: 42,
    location: "Colorado",
    gender: "female",
    previousBackground: ["Corporate CEO"],
    className: "FSW 15",
    favSubjects: ['CSS', 'JavaScript']
});

const amber = new Student({
  name: "Amber",
  age: 19,
  location: "New York",
  gender: "female",
  previousBackground: ["HTML"],
  className: "FSW 15",
  favSubjects: ['HTML']
});

const todd = new Project_Manager({
    name: 'Todd',
    age: 34,
    location: 'Texas',
    gender: 'male',
    specialty: 'Back-end',
    favLanguage: 'Python',
    catchPhrase: 'You can do it!',
    gradClassName: 'FSW 5',
    favInstructor: 'Fred'
});

const leslie = new Project_Manager({
    name: 'Leslie',
    age: 22,
    location: 'Ohio',
    gender: 'female',
    specialty: 'Back-end',
    favLanguage: 'Ruby',
    catchPhrase: 'Ill get you my pretties',
    gradClassName: 'FSW 13',
    favInstructor: 'Laura'
});

const susan = new Project_Manager({
    name: 'Susan',
    age: 47,
    location: 'Mississippi',
    gender: 'female',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Id rather give you my...',
    gradClassName: 'FSW 8',
    favInstructor: 'Bob'
});

// checking all objects creations
/*
// ============ instructors
console.dir(fred);
console.dir(bob);
console.dir(laura);

// ============ students
console.dir(jake);
console.dir(fran);
console.dir(amber);

// ============ project managers
console.dir(leslie);
console.dir(todd);
console.dir(susan);
*/

// checking all speak methods
/*

console.log(fred.speak());
console.log(laura.speak());
console.log(bob.speak());

console.log(jake.speak());
console.log(fran.speak());
console.log(amber.speak());

console.log(leslie.speak());
console.log(todd.speak());
console.log(susan.speak());
*/

// ============ instructors
console.log(fred.demo('Javascript'));
console.log(bob.demo('HTML'));
console.log(laura.demo('CSS'));

// ============ project managers
console.log(leslie.demo('Ruby'));
console.log(todd.demo('Python'));
console.log(susan.demo('Javascript'));

// person - speak;
// instructor - demo(subject), grade(student, subject);
// student - listsSubjects(subjects),
//   PRAssignment(subject),
//   sprintChallenge(subject);
// pm - standup(channel), debugsCode(student, subject);

// students - jake, fran, amber
// instrctors - fred, bob, laura
// pm - todd, leslie, susan

