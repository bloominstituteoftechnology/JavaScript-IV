// #### Person

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}
// #### Instructor
class Instructor extends Person {
    constructor (instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    randomGradeDeduction(student){
        let pointsDeducted = Math.floor((Math.random() * 10) + 1);
        student.grade = (student.grade - pointsDeducted); //when you ise the curly braces here, the computer won't solve the expression
        return `${pointsDeducted} points will be deducted from ${student.name}'s grade. Their grade now is ${student.grade}`
    }
}

// #### Student

class Student extends Person{
    constructor (studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects(){
        return `${this.name}'s favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate(student){
        console.log (this.grade);
        if (this.grade >= 70){
            return `Look out world! ${this.name} is ready to graduate from Lambda School!`;
        }
        return `Not to worry. ${this.name} needs a little more time to ready the material. Hit the books and try again soon!`
    }
}
  
// #### Project Mananger
class ProjectManager extends Instructor {
    constructor (projectManagerAttributes){
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel}'s standup times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//==============================================================================================================
//##Objects
const leo = new Instructor({
    name: 'Leo',
    location: 'Seattle, WA',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Whaddup?!?!`
  });

const sarah = new Instructor({
    name: 'Sarah',
    location: 'Mountain View, CA',
    age: 36,
    gender: 'female',
    favLanguage: "Lua",
    specialty: 'Embedded Software',
    catchPhrase: 'oh....you know....'
});

const greg = new Instructor ({
    name: 'Greg',
    location: 'New York City, NY',
    age: 48,
    gender: 'male',
    favLanguage: "Python",
    specialty: 'Back-end',
    catchPhrase: 'Did I do that?'
});

const misty = new Student ({
    name: 'Misty',
    location: 'St. Louis, MO',
    age: 41,
    gender: 'female',
    previousBackground: "College Student - MA in Math",
    className: "CS13",
    favSubjects: ["Mathematics", "Spelling", "Music", "Computer Science", "Pop Culture"],
    grade: 88

});
  
const george = new Student ({
    name: 'George',
    location: 'Portland, OR',
    age: 57,
    gender: 'male',
    previousBackground: "Developer looking to learn new skills",
    className: "CS13",
    favSubjects: ["Mathematics", "Computer Science", "Politics", "Basketball"],
    grade: 93

});

const gennifer = new Student ({
    name: 'Gennifer',
    location: 'Santa Barbara, CA',
    age: 26,
    gender: 'female',
    previousBackground: "Some college",
    className: "CS13",
    favSubjects: ["Puzzles", "Dogs", "Hockey"],
    grade: 55

});

const dylan = new Student ({
    name: 'Dylan',
    location: 'Austin, TX',
    age: 22,
    gender: 'prefer not to say',
    previousBackground: "Some college",
    className: "CS13",
    favSubjects: ["Trivia", "Cats", "Mathematics", "Computer Science"],
    grade: 84
    
});

const pat = new ProjectManager ({
    name: 'Pat',
    location: 'Las Vegas, NV',
    age: 48,
    gender: 'male',
    favLanguage: "Python",
    specialty: 'Front-end',
    catchPhrase: 'Did I do that?',
    gradClassName: "CS2",
    favInstructor: "Leo"
});


const dreSean = new ProjectManager ({
    name: 'Dre\'Sean',
    location: 'Raleigh, NC',
    age: 27,
    gender: 'male',
    favLanguage: "Javascript",
    specialty: 'Embedded Systems',
    catchPhrase: 'Did I do that?',
    gradClassName: "CS5",
    favInstructor: "Sarah"
});


const amy = new ProjectManager ({
    name: 'Amy',
    location: 'Minneapolis, MN',
    age: 33,
    gender: 'female',
    favLanguage: "C++",
    specialty: 'Back-end',
    catchPhrase: 'You got it, dude...dudette...whichever...',
    gradClassName: "CS3",
    favInstructor: "Greg"
});

console.log (george);
console.log(dreSean);
console.log(greg);
console.log(sarah.speak());
console.log(misty.speak());
console.log(dreSean.standUp("Coding Ninjas"));
console.log(pat.debugsCode(gennifer,"Python"));
console.log(leo.randomGradeDeduction(george));
console.log(amy.demo("Classes"));
console.log(dylan.graduate());
console.log(gennifer.graduate());
console.log(dreSean.grade(misty, "JavaScript Array Methods"));