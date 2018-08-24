// CODE here for your Lambda Classes
class Person {
    constructor(peopleStuff) {
        this.name = peopleStuff.name;
        this.age = peopleStuff.age;
        this.location = peopleStuff.location;
        this.gender = peopleStuff.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorStuff) {
        super(instructorStuff);
        this.specialty = instructorStuff.specialty;
        this.favLanguage = instructorStuff.favLanguage;
        this.catchPhrase = instructorStuff.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }

    changeGrade(student) {
        let beforeChange = student.grade;
        let gradeChange = '';
        const changeFormula = Math.floor(Math.random() * 15);
        const upOrDown = Math.floor(Math.random() * 100);
        if(upOrDown % 2 === 0) {
            gradeChange = 'increased';
            student.grade += changeFormula;
        }

        else {
            gradeChange = 'decreased';
            student.grade -= changeFormula;
        }

        let difference = Math.abs(beforeChange - student.grade);
        console.log(`${student.name}'s score ${gradeChange} by ${difference} to ${student.grade}.`);

        if(student.grade > 70) {
            student.graduate();
        }
    }
}

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.className = studentStuff.className;
        this.favSubjects = studentStuff.favSubjects;
        this.grade = studentStuff.grade; 
    }

    listsSubjects() {
        let list = this.favSubjects;
        list.forEach(element => {console.log(element)});
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`);
    }

    graduate() {
        if(this.grade > 70) {
            console.log(`Congrats, ${this.name} has graduated with a grade of ${this.grade}.`);
            return this.grade;
        }
    }
} 

class ProjectMananager extends Instructor {
    constructor(pMStuff) {
        super(pMStuff);
        this.gradClassName = pMStuff.gradClassName;
        this.favInstructor = pMStuff.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const abdiel = new Student({
    name: 'Abdiel Fernandez',
    age: 22,
    location: 'East Coast',
    gender: 'male',
    previousBackground: 'Java',
    className: 'CSPT2',
    favSubjects: ['Batman', 'Superman', 'Flash'],
    grade: 80,
})

const eric = new Student({
    name: 'Eric Whitcomb',
    age: 33,
    location: 'Mountain Time',
    gender: 'male',
    previousBackground: 'unknown',
    className: 'CSPT2',
    favSubjects: ['Helping others', 'Petting Dogs', 'Growing a Great Beard'],
    grade: 90,
})

const brendon = new Student({
    name: 'Brendon Kutz',
    age: 25,
    location: 'Central Time',
    gender: 'male',
    previousBackground: 'unknown',
    className: 'CSPT2',
    favSubjects: ['group', 'of', 'arrays'],
    grade: 55,
})

const chris = new ProjectMananager({
    name: 'Chris Atoki',
    age: 27,
    location: 'East Coast',
    gender: 'male',
    specialty: 'helping newbies',
    favLanguage: 'JS',
    catchPhrase: 'Please put your favorite emoji on this message.',
    gradClassName: 'CS3',
    favInstructor: 'Dan',
})

const moises = new ProjectMananager({
    name: 'Moises Dobarganes',
    age: 25,
    location: 'East Coast',
    gender: 'male',
    specialty: 'Getting hired by Google',
    favLanguage: 'JS',
    catchPhrase: 'Do a little dance',
    gradClassName: 'unknown',
    favInstructor: 'Dan',
})

const dan = new Instructor({
    name: 'Dan Frehner',
    age: 30,
    location: 'West Coast',
    gender: 'male',
    specialty: 'Growing a great beard',
    favLanguage: 'JS',
    catchPhrase: 'It is turtle time',
})
console.log(abdiel);
console.log(eric);
console.log(dan);
console.log(chris);
abdiel.listsSubjects();
dan.grade(abdiel, 'Javascript');
chris.demo('JavaScript');
moises.debugsCode(eric, 'Potato.pancake');
brendon.speak();
abdiel.PRAssignment('javascript');
eric.sprintChallenge('JS IV');
chris.standUp('Number 1');
eric.graduate();
dan.changeGrade(brendon);
chris.changeGrade(brendon);