// CODE here for your Lambda Classes
// CODE here for your Lambda Classes
// ======CLASSES======
class Person {
    constructor(personAtt) {
        this.name = personAtt.name;
        this.age = personAtt.age;
        this.location = personAtt.location;
        this.gender = personAtt.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
} // Person


// NOT SURE ABOUT GRADE METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class Instructor extends Person {
    // Child.prototype = Object.create(Parent.prototype);
    constructor(instructorAtt) {
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
} // Instructor


// NOT SURE ABOUT listsSubjects METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class Student extends Instructor {
    constructor(studentAtt) {
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
    }
    listsSubjects() {
        // listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
        let listsSubjects = this.favSubjects.forEach(item => console.log(item));
        return listsSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}


class ProjectManager extends Student {
    constructor(pmAtt) {
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

// ========PERSON========
const lebron = new Person({
    "name": "LeBron James",
    "age": 33,
    "location": "Los Angeles",
    "gender": "male"
})

const klay = new Person({
    "name": "Klay Thompson",
    "age": 28,
    "location": "Oakland",
    "gender": "male"
})

const kawhi = new Person({
    "name": "Kawhi Leonard",
    "age": 27,
    "location": "Toronto",
    "gender": "male"
})



// ========INSTRUCTOR========
const josh = new Instructor({
    "name": "Josh Knell",
    "age": 40,
    "location": "Provo",
    "gender": "male",
    "specialty": "Instructor",
    "favLanguage": "JavaScript",
    "catchPhrase": "Isn't that awesome? That's soooo awesome!"
})

const snape = new Instructor({
    "name": "Severus Snape",
    "age": 45,
    "location": "Hogwarts",
    "gender": "male",
    "specialty": "Defence Against the Dark Arts",
    "favLanguage": "Potions",
    "catchPhrase": "AVADA KEDAVRA!"
})



// ========STUDENT========
const yusuf = new Student({
    "name": "Yusuf Nafey",
    "age": 22,
    "location": "San Francisco",
    "gender": "male",
    "previousBackground": "HTML",
    "className": "FSW14",
    "favSubjects": ["HTML", "CSS", "JavaScript"]
})

const michael = new Student({
    "name": "Michael Checo",
    "age": 21,
    "location": "New York",
    "gender": "male",
    "previousBackground": "JavaScript",
    "className": "FSW14",
    "favSubjects": ["JavaScript", "Python", "Angular"]
})



// ========PROJECT MANAGER========
const kevin = new ProjectManager({
    "name": "Kevin Brack",
    "age": 26,
    "location": "Chicago",
    "gender": "male",
    "specialty": "Audio",
    "favLanguage": "JavaScript",
    "catchPhrase": "I hate to be that guy, but do your standups or else...",
    "gradClassName": "CS4",
    "favInstructor": "Josh Knell"
})

const kamry = new ProjectManager({
    "name": "Kamry Bowman",
    "age": 28,
    "location": "Denver",
    "gender": "male",
    "specialty": "React",
    "favLanguage": "CSS",
    "catchPhrase": "Who needs some help in the help channel?",
    "gradClassName": "CS6",
    "favInstructor": "Severus Snape"
})