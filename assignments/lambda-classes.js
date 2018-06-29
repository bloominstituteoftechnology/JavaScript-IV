// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name= info.name;
        this.age= info.age;
        this.location=info.location;
        this.gender=info.gender;
    }
    greet () {
        return `Hello my name is ${this.name} , I am from ${this.location}`
    }
}
class Instructor extends Person{
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty=instructorInfo.specialty;
        this.favLanguage= instructorInfo.favLanguage;
        this.catchPhrase= instructorInfo.catchPhrase;
    }
    demo (this.subject) {
        return `Today we are learning about ${subject[1]} where the subject is the param passed in`;
    }
    grade () {

    }
}
class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects () {
        console.log(this.favSubjects);

    }
    PRAssignment (subject) {
       console.log( `${student.name} has begun spring challenge on ${subject}`)
    }
    sprintChallenge
}
class projectManager extends Instructor {
    constructor(projectmanagerInfo) {
        super(projectmanagerInfo);
        this.gradClassName = projectmanagerInfo.gradClassName;
        this.favInstructor= projectmanagerInfo.favInstructor;
    }
    standUp() {
        `${this.name} announces to ${this.channel} , @channel standy times!`
    }
    debugCode() {
        `${this.name} debugs ${student.name}'s code on ${favSubjects[2]}`
    }
}



const John = new Instructor({
    name: 'Fred',
    location: 'SF',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript, Python, Java, C++',
    specialty: 'Front-end',
    catchPhrase: `Say it like you mean it!`
});

const Sally = new Instructor({
    name: 'Sally',
    location: 'Boston',
    age: 27,
    gender: 'Female',
    favLanguage: 'Go, Ruby, Java,',
    specialty: 'Full-Stack',
    catchPhrase: `Full Stack Rocks my socks!`
});



const Steph = new Student ({
    name: 'Steph',
    location: 'DFW',
    age: 29,
    gender: 'female',
    favSubjects: ['Javascript, Ruby on Rails, Webdesign, UI/UX'],
    specialty: 'Front-End',
    previousBackground: 'The Arts & Sciences'
    className: 'CS12'
    
});

const Ian = new Student ({
    name: 'Ian',
    location: 'Miami',
    age: 23,
    gender: 'male',
    favSubjects:[ 'Java', 'Python', 'Angular'],
    specialty: 'Back-end',
    previousBackground: 'Math'
    className: 'CS12'
    
});

const Joanne = new projectManager ({
    name: 'Joanne',
    location: 'Austin',
    age: 30,
    gender: 'female',
    favSubjects: 'Javascript',
    gradClassName: 'CS3',
    favInstructor: 'John',
    
});

const Jeff = new projectManager ({
    name: 'Jeff',
    location: 'NY',
    age: 35,
    gender: 'male',
    favSubjects: 'Java',
    gradClassName: 'CS5',
    favInstructor: 'Andy',
    
});

const subject=['HTML', 'CSS','React', 'DOM'];

Joanne.standUp();