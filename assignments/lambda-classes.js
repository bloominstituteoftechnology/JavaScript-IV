// CODE here for your Lambda Classes

class Person {
    constructor(stuff){
        this.name = stuff.name;
        this.age = stuff.age;
        this.location = stuff.location;
        this.gender = stuff.gender;
    }
    greeting() {
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
        return `Today we are learning about ${this.subject}.`; 
    }
    grade(student, subject) {
       return `${this.Student.name} receives a perfect score on ${this.subject}`;
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
        //logout all of the student's favSubjects one by one.
    }
    prAssignment(subject){
       return `${this.Student.name} has submitted a PR for ${this.subject}.`;
    }
    sprintChallenge(subject){
        return `${this.Student.name} has begun sprint challenge on ${this.subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(data){
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(slackChannel){
        `${this.ProjectManager.name} announces to ${this.slackChannel}, @channel stand up times!`;
    }
    debugsCode(subject){
        `${this.ProjectManager.name} debugs ${this.Student.name}'s code on ${this.subject}`;
    }
}

// Instructors =============================================================
const michael = new Instructor ({
    name = 'Michael Scott',
    age = 45,
    location = 'Scranton',
    gender = 'M',
    specialty = 'Telling Jokes',
    favLanguage = 'Pig Latin',
    catchPhrase = `THATS WHAT SHE SAID!`
});

const leslie = new Instructor ({
    name = 'Leslie Knope',
    age = 35,
    location = 'Pawnee',
    gender = 'F',
    specialty = 'Making life better for Pawneeians',
    favLanguage = 'French',
    catchPhrase = `Oh Anne, you're so beautiful.`
});

//Students =============================================================
const paulie = new Student ({
    name = 'Paulie Walnuts',
    age = 65,
    location = 'New Jersey',
    gender = 'M',
    previousBackground = 'Mafia',
    className = 'cs10',
    favSubjects = 'History'
})

const chris = new Student ({
    name = 'Christopher Moltisanti',
    age = 30,
    location = 'New Jersey',
    gender = 'M',
    previousBackground = 'Mafia',
    className = 'cs10',
    favSubjects = 'Film'
});

const carm = new Student ({
    name = 'Carmella Soprano',
    age = 50,
    location = 'New Jersey',
    gender = 'F',
    previousBackground = 'Housewife',
    className = 'cs10',
    favSubjects = 'Cooking'
});

//Project Managers =============================================================
const tommy = new ProjectManager ({
    name = 'Tommy Wiseu',
    age = null,
    location = 'Los Angeles',
    gender = 'M',
    gradClassName = 'cs1',
    favInstructor = 'James Dean',
});

const greg = new ProjectManager ({
    name = 'Greg Sistero',
    age = 29,
    location = 'Los Angeles',
    gender = 'M',
    gradClassName = 'cs1',
    favInstructor = 'Tommy Wiseu',
});