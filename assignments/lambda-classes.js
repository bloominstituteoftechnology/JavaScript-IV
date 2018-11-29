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
    gradePoints(student, subject) {
        let randomGrade = Math.ceil((Math.random()-.5)*10);
        student.grade = student.grade + randomGrade;
        if (randomGrade > 0){
            return(`${student.name} did well on the ${subject} test. The score improved the student's average grade by ${randomGrade}. ${student.name}'s average grade is now ${student.grade}.`);
        }
        if (randomGrade < 0){
            return(`${student.name} did poorly on the ${subject} test. The score decreased the student's average grade by ${randomGrade}. ${student.name}'s average grade is now ${student.grade}.`);
        }
        else {
            return(`${student.name} did fine on the ${subject} test. The score did not affect the student's average grade. ${student.name}'s average grade is still ${student.grade}.`);
        }
    }
};

// === Student Class === 
class Student extends Person {
    constructor (props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    listsSubjects() {
        return (`${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`);
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
    age: 111,
    location: 'Mould-on-the-Wold, Wizarding Village',
    gender: 'male',
    specialty: 'Spells',
    favLanguage: 'Proper English',
    catchPhrase: 'Happiness can be found in the darkest of times, if one only remembers to turn on the light.',
});

const professorPotions = new Instructor({
    name: 'Severus Snape',
    age: 34,
    location: 'Cokeworth, England',
    gender: 'male',
    specialty: 'Potions',
    favLanguage: 'Proper English',
    catchPhrase: 'Always.',
});

const professorTransfiguration = new Instructor({
    name: 'Minerva McGonagall',
    age: 68,
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
    age: 14,
    location: 'Little Whinging, England',
    gender: 'male',
    previousBackground: 'Half-Blood',
    className: 'Class\'91',
    favSubjects: [
        'Flying',
        'Defence Against the Dark Arts', 
        'Potions'
    ],
    grade: 75,
});

const secondStudent = new Student({
    name: 'Ronald Weasley',
    age: 14,
    location: 'The Burrow, England',
    gender: 'male',
    previousBackground: 'Pure-Blood',
    className: 'Class\'91',
    favSubjects: [
        'Defence Against the Dark Arts', 
        'Flying',
        'Charms'
    ],
    grade: 55,
});

const thirdStudent = new Student({
    name: 'Hermoine Granger',
    age: 14,
    location: 'Hampstead, England',
    gender: 'female',
    previousBackground: 'Muggle-Born',
    className: 'Class\'91',
    favSubjects: [
        'Charms',
        'History of Magic', 
        'Potions'
    ],
    grade: 95,
});

/*testers*/
// console.log(thirdStudent);
// console.log(thirdStudent.speak()); 
// console.log(thirdStudent.listsSubjects()); 
// console.log(thirdStudent.PRAssignment('Potions')); 
// console.log(thirdStudent.sprintChallenge('Potions')); 
// console.log(thirdStudent.grade); 


// === Project Managers ===

const firstPM = new ProjectManager({
    name: 'Percy Weasley',
    age: 18,
    location: 'The Burrow, England',
    gender: 'male',
    specialty: 'Assisting Ministry of Magic',
    favLanguage: 'Common English',
    catchPhrase: 'I happen to be Head Boy.',
    gradClassName: 'Class\'94',
    favInstructor: 'Albus Dumbledore',
});

const secondPM = new ProjectManager({
    name: 'Alecto Carrow',
    age: 23,
    location: 'The British Isles',
    gender: 'female',
    specialty: 'Deputy Headmistress',
    favLanguage: 'Proper English',
    catchPhrase: 'Think your little jokes\'ll help you on your death bed, then?.',
    gradClassName: 'Class\'91',
    favInstructor: 'Severus Snape',
});

const thirdPM = new ProjectManager({
    name: 'Amycus Carrow',
    age: 21,
    location: 'The British Isles',
    gender: 'male',
    specialty: 'Deputy Headmaster',
    favLanguage: 'Proper English',
    catchPhrase: 'He\'s not long for this world anyway, if you ask me!',
    gradClassName: 'Class\'91',
    favInstructor: 'Severus Snape',
});

/*testers*/
// console.log(firstPM);
// console.log(firstPM.speak()); 
// console.log(firstPM.demo('Transfiguration')); 
// console.log(firstPM.grade(thirdStudent, 'Transfiguration')); 
// console.log(firstPM.standUp('Potions12')); 
// console.log(firstPM.debugdsCode(secondStudent, 'Charms')); 



//STRETCH TASK TESTERS
console.log(thirdStudent.listsSubjects()); 
console.log(thirdStudent.grade); 
console.log(headMaster.gradePoints(thirdStudent, 'Charms'))
console.log(thirdStudent.grade); 
