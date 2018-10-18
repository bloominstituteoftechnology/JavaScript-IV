// CODE here for your Lambda Classes
class Person {
    constructor(attribute){
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
 }
 
 class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeAssignment(student) {
        let points = (20 - Math.floor((Math.random() * 30)));
        let score = student.grade + points;
        student.grade = score;
        return `${student.name}'s grade of ${student.grade} changed by ${points} amount of points and now has a total of ${score};`
    }
 }
 
 class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    listsSubjects(){
        return `${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(grader) {
        if (this.grade >= 70) {
            return `Congrats ${this.name}! You have just graduated Lambda School!`;
        } 
        while (this.grade < 70) {
            console.log(`Sorry ${this.name}. You only have a ${this.grade} and that is not enough to graduate. Please keep on trying until you pass.`);
            grader.gradeAssignment(this);
        }
        return `Congrats ${this.name}! You have a score of ${this.grade} and that's enough to graduate Lambda School!`;
    }
}

 class ProjectManager extends Instructor{
    constructor(instructorAttr){
        super(instructorAttr);
        this.gradClassName = instructorAttr.gradClassName;
        this.favInstructor = instructorAttr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
 }


// Intructors

const josh = new Instructor({
    name: 'Josh Knell',
    age: 42,
    location: 'Utah',
    gender: 'M',
    specialty: 'Flex-Box Master',
    favLanguage: 'CSS',
    catchPhrase: 'Flexin aint eazy!'
});

const amy = new Instructor({
    name: 'Amy Lee',
    age: 38,
    location: 'California',
    gender: 'F',
    specialty: 'Blockchain',
    favLanguage: 'JS',
    catchPhrase: 'Objects, strings and arrays I can do it all day!'
});


// Students

const tommy = new Student({
    name: 'Tommy Huynh',
    age: 32,
    location: 'California',
    gender: 'M',
    previousBackground: 'Operations',
    className: 'FSW15',
    favSubjects: ['Blockchain', 'FSW15', 'Math'],
    grade: 100
});

const ben = new Student({
    name: 'Ben Tsao',
    age: 24,
    location: 'Texas',
    gender: 'M',
    previousBackground: 'Mathematics',
    className: 'FSW15',
    favSubjects: ['AI', 'Math', 'Machine Learning'],
    grade: 89
});

const andy = new Student({
    name: 'Andy Lee',
    age: 38,
    location: 'New York',
    gender: 'M',
    previousBackground: 'Business Administration',
    className: 'FSW15',
    favSubjects: ['Art', 'Philosiphy', 'Economics'],
    grade: 40
});

// Project Managers

const kamal = new ProjectManager({
    name: 'Kamal Mukkamala',
    age: 23,
    location: 'India',
    gender: 'M',
    specialty: 'Education',
    favLanguage: 'JS',
    catchPhrase: 'Javascript is too easy!',
    gradClassName: 'CS12',
    favInstructor: 'Josh'
});

const ash = new ProjectManager({
    name: 'Ashwind',
    age: 25,
    location: 'India',
    gender: 'M',
    specialty: 'World Domination',
    favLanguage: 'Chinese',
    catchPhrase: 'TIME TO SHOW ME YOUR EMOJI OF THE DAY!',
    gradClassName: 'CS11',
    favInstructor: 'Sean'
});


// // Instructors

// console.log(`----------- Instructors -----------`);
// console.log('');
// console.log(josh);
// console.log('');
// console.log(josh.demo('JavaScript'));
// console.log('');
// console.log(amy);
// console.log('');
// console.log(amy.grade(tommy, 'Math'));
// console.log('');

// // Students

// console.log(`----------- Students -----------`);
// console.log('');
// console.log(tommy);
// console.log('');
// console.log(tommy.listsSubjects());
// console.log('');
// console.log(ben);
// console.log('');
// console.log(ben.PRAssignment('JS Art'));
// console.log('');
// console.log(andy);
// console.log('');
// console.log(andy.sprintChallenge('Economics'));
// console.log('');

// // Project Managers

// console.log(`----------- Project Managers -----------`);
// console.log('');
// console.log(kamal);
// console.log('');
// console.log(kamal.standUp('#fsw15_kamal'));
// console.log('');
// console.log(ash);
// console.log('');
// console.log(ash.debugsCode(ben, 'Javascript'));
// console.log('');

// Stretch Goals
console.log(kamal.gradeAssignment(andy));
console.log(andy);
console.log(andy.graduate(josh));