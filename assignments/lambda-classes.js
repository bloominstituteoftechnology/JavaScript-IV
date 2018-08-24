// CODE here for your Lambda Classes

//creating constructor functions
class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(details) {
        super(details);
        this.specialty = details.specialty;
        this.favLanguage = details.favLanguage;
        this.catchPhrase = details.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }

    randomGrade(student) {
        let points = Math.ceil(Math.random() * (60 - 1));
        if (student.grade >= 100) {
            return student.grade -= points;
        }
        return student.grade += points;
    }
}

class Student extends Person {
    constructor(details) {
        super(details);
        this.previousBackground = details.previousBackground;
        this.className = details.className;
        this.favSubjects = details.favSubjects;
        this.grade = details.grade;
    }

    listSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallange(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate() {
        if (this.grade > 70) {
            return `${this.name} can graduate!`;
        } return `Sorry, you need to get your grades up`
    }
}

class ProjectManagers extends Instructor {
    constructor(details) {
        super(details);
        this.gradClassName = details.gradClassName;
        this.favInstructor = details.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    };

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//creating new objects from those the constructor function

//instructor objects

const rick = new Instructor({
    name : 'Rick',
    age : 30,
    gender : 'Male',
    location : 'Earth',
    specialty : 'front-end',
    favLanguage : 'Javascript',
    catchPhrase : 'You got it, dude!'
})
const tom = new Instructor({
    name : 'Tom',
    age : 23,
    gender : 'Male',
    location : 'Earth',
    specialty : 'back-end',
    favLanguage : 'Javascript, Go, C++',
    catchPhrase : 'Rock on!'
})
const vanessa = new Instructor({
    name : 'Vanessa',
    age : 21,
    gender : 'Female',
    location : 'Earth',
    specialty : 'Fullstack',
    favLanguage : 'Javascript',
    catchPhrase : 'I got this!'
})

//Student objects

const sam = new Student({
    name : 'Sam',
    age : 38,
    gender : 'Female',
    location : 'Earth',
    previousBackground : 'Teacher',
    className : 'CSPT2',
    favSubjects : ['Node.js', 'Database', 'React'],
    grade : 100,
})
const brian = new Student({
    name : 'Brian',
    age : 53,
    gender : 'Male',
    location : 'Earth',
    previousBackground : 'Lawyer',
    className : 'CSPT2',
    favSubjects : ['Node.js', 'Database', 'React'],
    grade : 100,
})
const linda = new Student({
    name : 'Linda',
    age : 25,
    gender : 'Female',
    location : 'Earth',
    previousBackground : 'Server',
    className : 'CSPT2',
    favSubjects : ['Node.js', 'Database', 'React'],
    grade : 100,
})

//projectManagers objects

const vin = new ProjectManagers({
    name : 'Vin',
    age : 38,
    gender : 'Male',
    location : 'Earth',
    specialty : 'Python',
    favLanguage : 'Python',
    catchPhrase : 'Look at you!',
    gradClassName : 'CS9',
    favInstructor : 'Vanessa'
})
const harry = new ProjectManagers({
    name : 'Harry',
    age : 53,
    gender : 'Male',
    location : 'Earth',
    specialty : 'C++',
    favLanguage : 'C++',
    catchPhrase : 'Rock and Roll',
    gradClassName : 'CS9',
    favInstructor : 'Rick'
})
const corey = new ProjectManagers({
    name : 'Corey',
    age : 25,
    gender : 'Male',
    location : 'Earth',
    specialty : 'Database',
    favLanguage : 'Go',
    catchPhrase : 'It\'s time!',
    gradClassName : 'CS9',
    favInstructor : 'Tom'
})



//calling objects and methods for instructor
console.log(rick);
console.log(rick.speak())
console.log(rick.demo('front-end'));
console.log(rick.grade(linda, 'Front-End'))

console.log(tom);
console.log(tom.speak())
console.log(tom.demo('React'));
console.log(tom.grade(brian, 'Node'))

console.log(vanessa);
console.log(vanessa.speak())
console.log(vanessa.demo('Node'));
console.log(vanessa.grade(sam, 'React'))

//calling objects and methods for student ---------------------------------------------------------------------------------------
console.log(sam);
console.log(sam.speak());
console.log(sam.listSubjects());
console.log(sam.PRAssignment('React'));
console.log(sam.sprintChallange('React'));

console.log(brian);
console.log(brian.speak());
console.log(brian.listSubjects());
console.log(brian.PRAssignment('Node'));
console.log(brian.sprintChallange('Node'))

console.log(linda);
console.log(linda.speak());
console.log(linda.listSubjects());
console.log(linda.PRAssignment('Database'));
console.log(linda.sprintChallange('Database'));

//calling objects and methods for project managers  ---------------------------------------------------------------------------------
console.log(vin);
console.log(vin.speak());
console.log(vin.demo('front-end'));
console.log(vin.grade(linda, 'Front-End'));
console.log(vin.standUp('cspt2_vin'));
console.log(vin.debugsCode(linda, 'React'));

console.log(harry);
console.log(harry.speak());
console.log(harry.demo('back-end'));
console.log(harry.grade(brian, 'Back-End'));
console.log(harry.standUp('cspt2_harry'));
console.log(harry.debugsCode(brian, 'Back-End'));

console.log(corey);
console.log(corey.speak());
console.log(corey.demo('Database'));
console.log(corey.grade(sam, 'Database'));
console.log(corey.standUp('cspt2_harry'));
console.log(corey.debugsCode(sam, 'Database'));

//testing the stretch goals
console.log(corey.randomGrade(sam))

console.log(sam.grade)
console.log(sam.graduate())
