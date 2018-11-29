// CODE here for your Lambda Classes

// === CLASSES === 

// === Person Class === (base-class)
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
};

// === Instructor Class === 
class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        return (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}.`);
    }
};

// === Student Class === 
class Student extends Person {
    constructor (props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects(subject1, subject2, subject3) {
        return (`${this.name}'s favorite subjects are ${subject1}, ${subject2}, and ${subject3}`)
    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`)
    }
};

// === Project Manager Class === 
class ProjectManager extends Instructor {
    constructor (props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugdsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


// === CHARACTERS === 

// === Persons ===
const firstMuggle = new Person({
    name: 'Abby Rhodes',
    age: 27,
    location: 'London',
    gender: 'female',
});

const secondMuggle = new Person({
    name: 'Bobbie Boi',
    age: 32,
    location: 'Liverpool',
    gender: 'male',
});

const thirdMuggle = new Person({
    name: 'Charles Manns',
    age: 48,
    location: 'Manchester',
    gender: 'male',
});

/*testers*/
// console.log(firstMuggle);
// console.log(thirdMuggle.speak()); 

// === Instructors ===

const headMaster = new Instructor({
    name: 'Albus Dumbledore',
    age: 115,
    location: 'Mould-on-the-Wold, Wizarding Village',
    gender: 'male',
    specialty: 'Spells',
    favLanguage: 'Proper English',
    catchPhrase: 'Happiness can be found in the darkest of times, if one only remembers to turn on the light.',
});

const professorPotions = new Instructor({
    name: 'Severus Snape',
    age: 38,
    location: 'Cokeworth, England',
    gender: 'male',
    specialty: 'Potions',
    favLanguage: 'Proper English',
    catchPhrase: 'Always.',
});

const professorTransfiguration = new Instructor({
    name: 'Minerva McGonagall',
    age: 72,
    location: 'Caithness, Scottish Highlands',
    gender: 'female',
    specialty: 'Transfiguration',
    favLanguage: 'Scottish',
    catchPhrase: 'I\'ve always wanted to use that spell.',
});

/*testers*/
// console.log(professorTransfiguration);
// console.log(professorTransfiguration.speak()); 
// console.log(professorTransfiguration.demo('Transfiguration')); 
// console.log(professorTransfiguration.grade('Harry', 'Transfiguration')); 

// === Students ===

const firstStudent = new Student({
    name: 'Harry Potter',
    age: 18,
    location: 'Little Whinging, England',
    gender: 'male',
    previousBackground: 'Half-Blood',
    className: 'Class of 1999',
    favSubjects: [
        'Flying',
        'Defence Against the Dark Arts', 
        'Potions'
    ],
});

/*testers*/
console.log(firstStudent);
console.log(firstStudent.speak()); 



// const headMaster = new Instructor({
//     name: 'Albus Dumbledore',
//     age: 115,
//     location: 'Mould-on-the-Wold, Wizarding Village',
//     gender: 'male',
//     specialty: 'Spells',
//     favLanguage: 'Proper English',
//     catchPhrase: 'Happiness can be found in the darkest of times, if one only remembers to turn on the light.',
// });
