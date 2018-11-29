// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {console.log(`Hello, my name is ${this.name}, and I am from ${this.location}`)};
};

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {console.log(`Today, we are learning ${subject}!`)};
    grade (student, subject) {console.log(`${student.name} recieves a perfect score in ${subject}`)};
    pointAdjust (student) {
        if (Math.random()*100 >= 50) {student.grade = student.grade - Math.random()*50};
        if (Math.random()*100 < 50) {student.grade = student.grade + Math.random()*100};
        if (student.grade <= 0) {student.grade === 0};
        return student.grade;
    }
};

class Student extends Person {
    constructor(studAttributes) {
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
        this.grade = 1; // starts at 1 so that pointAdjust will add points
        // student will graduate when points >= 70.
    }
    listsSubjects() {console.log(this.favSubjects)};
    PRassignment(subject) {console.log(`${this.name} has submitted a PR for ${subject}`)};
    sprintChallenge(subject) {console.log(`${this.name} has begun sprint challenge on ${subject}`)};
    graduate() {
        if (this.grade >= 70) {console.log(`my grade is ${this.grade}, which is above 70%. I can graduate!`)}
        else {console.log(`My grade is ${this.grade}, which is below 70%. I have some tome to go before I can graduate.`)}
    }
};

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {console.log(`${this.name} announces to ${channel}, @channel standy times!`)};
    debugsCode (student, subject) {console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`)};
;}


let jack = new Student ({
    name: 'Jack',
    age: 30,
    location: 'Phoenix',
    gender: 'M',
    className: 'FSW17',
    favSubjects: ['Front end', 'CSS']
});

jack.speak();
jack.listsSubjects();
jack.PRassignment('Javascript');


const jill = new Instructor ({
    name: 'Jill',
    age: 37,
    location: 'Ohio',
    gender: 'F',
    specialty: 'Back-end Dev',
    favLanguage: 'Python'
});

jill.speak();
jill.demo('Javascript');
jill.grade(jack, 'Javascript');
jill.pointAdjust(jack);

const abdul = new ProjectManager ({
    name: 'Abdul',
    location: 'EST',
    gender: 'M',
    favInstructor: 'Josh Knell'
});

abdul.standUp('FSW16_abdul')
abdul.debugsCode(jack, 'Javascript IV')

jack.graduate();