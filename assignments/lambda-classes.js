// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.gender = props.gender;
        this.location = props.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorProps) {
        super(instructorProps);
        this.speciality = instructorProps.speciality;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        return `Today we will be learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${this.favSubjects[i]}`);
        };
    };
      
    prAssingment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge for ${subject}`;
    };
}

class ProjectManager extends Instructor{
    constructor(pmProps) {
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp(channel) {
        return  `${this.name} announces to ${channel}, @channel standy times!`
    }
     debugsCode(studentName, subject) {
        return `${this.name} debugs ${studentName}'s code on ${subject}`
    }
}



// student objects

const sam = new Student ({
    gender: 'M',
    age: 31,
    name: "Sam",
    location: "Cape Cod",
    previousBackground: "none",
    className: "CS10",
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const jeb = new Student ({
    gender: 'M',
    age: 93,
    name: "Jeb",
    location: "Canada",
    previousBackground: "HTML and CSS",
    className: "CS8",
    favSubjects: ['HTML', 'CSS']
});


// end students

// Instructors

const josh = new Instructor({
    gender: 'M',
    age: 38,
    name: "Josh",
    location: "Utah",
    speciality: "CSS",
    favLanguage: "HTML, CSS, Javascript",
    catchPhrase: "Don't forget the homies"
});    

const patty = new Instructor ({
    gender: 'F',
    age: 29,
    name: "Patty",
    location: "Oregon",
    speciality: "Redux",
    favLanguage: "Redux, React",
    catchPhrase: "Inheritance is the key!"
});

//end Instructors

// Project Managers

const dreSean = new ProjectManager ({
    gender: 'M',
    age: 32,
    name: "Dre'Sean",
    location: "North Carolina",
    gradClassName: "CS4",
    favInstructor: "Patty"
});

const duke = new ProjectManager ({
    gender: 'M',
    age: 59,
    name: "Duke",
    location: "Indiana",
    gradClassName: "CS3",
    favInstructor: "Josh"
});



console.log(duke.location);
console.log(sam.favSubjects);
console.log(josh.catchPhrase);
console.log(dreSean.favInstructor);
console.log(dreSean.age);
console.log(duke.gender);
console.log(sam.prAssingment("CSS"))
console.log(dreSean.standUp("CS10 Dre'Sean's Ninjas"))
console.log(sam.listsSubjects());
console.log(dreSean.debugsCode("sam", "css"));