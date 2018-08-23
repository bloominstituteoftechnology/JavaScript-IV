// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }

    gradeStudent(student) {
        let score = Math.round(Math.random() * (10 - -10) + -10);
        student.grade += score;
        console.log(`${this.name} gives ${student.name} a score of ${score}. ${student.name}'s grade is now ${student.grade}.`);
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach( element => {console.log( `${element}` )} );
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}.`);
    }

    graduate() {
        if( this.grade > 70 )
            console.log(`You did it!`);
        console.log(`Keep working on those assignments!`);
    }
        
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}


var studentAttrs = {
    name: 'Jen',
    age: 41,
    location: 'Pittsburgh',
    gender: 'F',
    previousBackground: 'SysAdmin',
    className: 'CSPT2',
    favSubjects: ['PHP', 'MySQL', 'LESS', 'HTML'],
    grade: 50,
};
const firstStudent = new Student(studentAttrs);

console.log(firstStudent);

var teacherAttrs = {
    name: 'Dan',
    age: '25',
    location: 'Computerland',
    gender: 'M',
    specialty: 'Teaching',
    favLanguage: 'JavaScript',
    catchPhrase: 'Cool',
};

const firstTeacher = new Instructor(teacherAttrs);

console.log(firstTeacher.grade(firstStudent,'JavaScript'));

var pmAttrs = {
    name: 'Kia',
    age: '21',
    location: 'Computerland',
    gender: 'F',
    gradClassName: 'CS1',
    favInstructor: 'Dan',
};

const firstPM = new ProjectManager(pmAttrs);

console.log(firstPM.debugsCode(firstStudent,'JavaScript IV'));
firstPM.gradeStudent(firstStudent);
firstPM.gradeStudent(firstStudent);
firstPM.gradeStudent(firstStudent);
firstPM.gradeStudent(firstStudent);
firstPM.gradeStudent(firstStudent);

firstStudent.graduate();