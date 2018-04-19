// CODE here for your Lambda Classes

class Person {
    constructor(stuff){
        this.name = stuff.name;
        this.age = stuff.age;
        this.location = stuff.location;
        this.gender = stuff.gender;
    }
    speak() {
      return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(things){
        super(things);
        this.specialty = things.specialty;
        this.favLanguage = things.favLanguage;
        this.catchPhrase = things.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`; 
    }
    grade(student, subject) {
       return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    prAssignment(subject){
       return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(data){
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel stand up times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Instructors =============================================================
const michael = new Instructor ({
    name : 'Michael Scott',
    age : 45,
    location : 'Scranton',
    gender : 'M',
    specialty : 'Telling Jokes',
    favLanguage : 'Pig Latin',
    catchPhrase : `THATS WHAT SHE SAID!`
});

const leslie = new Instructor ({
    name : 'Leslie Knope',
    age : 35,
    location : 'Pawnee',
    gender : 'F',
    specialty : 'Making life better for Pawneeians',
    favLanguage :'French',
    catchPhrase : `Oh Anne, you're so beautiful.`
});

//Students =============================================================
const paulie = new Student ({
    name : 'Paulie Walnuts',
    age : 65,
    location : 'New Jersey',
    gender : 'M',
    previousBackground : 'Mafia',
    className : 'cs10',
    favSubjects : ['History', 'Breaking Legs', 'Gambling']
})

const chris = new Student ({
    name : 'Christopher Moltisanti',
    age : 30,
    location : 'New Jersey',
    gender : 'M',
    previousBackground : 'Mafia',
    className : 'cs10',
    favSubjects : 'Film'
});

const carm = new Student ({
    name : 'Carmella Soprano',
    age : 50,
    location : 'New Jersey',
    gender : 'F',
    previousBackground : 'Housewife',
    className : 'cs10',
    favSubjects : 'Cooking'
});

//Project Managers =============================================================
const tommy = new ProjectManager ({
    name : 'Tommy Wiseu',
    age : null,
    location : 'Los Angeles',
    gender : 'M',
    gradClassName : 'cs1',
    favInstructor : 'James Dean',
});

const greg = new ProjectManager ({
    name : 'Greg Sistero',
    age : 29,
    location : 'Los Angeles',
    gender : 'M',
    gradClassName : 'cs1',
    favInstructor : 'Tommy Wiseu',
});

console.log(greg.speak());
console.log(paulie.speak()); 
console.log(leslie.demo('Js-III')); 
console.log(michael.grade(chris, 'Js-III')); 
console.log(chris.prAssignment('Bootstrap')); 
console.log(tommy.debugsCode(carm, 'Bootstrap')); 
console.log(paulie.listsSubjects());