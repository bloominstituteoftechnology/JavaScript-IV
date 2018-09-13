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


const josh = new Person({
    "name": "Josh Knell",
    "age": 40,
    "location": "Salt Lake City",
    "gender": "male"
})

const kevin = new Instructor({
    "name": "Josh Knell",
    "age": 40,
    "location": "Salt Lake City",
    "gender": "male",
    "specialty": "JavaScript",
    "favLanguage": "Python",
    "catchPhrase": "Turn in your standup forms now!!!"
})

const yusuf = new Student({
    "name": "Yusuf Nafey",
    "age": 40,
    "location": "Salt Lake City",
    "gender": "male",
    "previousBackground": "Java",
    "className": "FSW14",
    "favSubjects": ["science", "math"]
})

// PM
const kamry = new ProjectManager({
    "name": "Kamry",
    "age": 40,
    "location": "Salt Lake City",
    "gender": "male",
    "specialty": "JavaScript",
    "favLanguage": "Python",
    "catchPhrase": "Turn in your standup forms now!!!",
    "gradClassName": "CS11",
    "favInstructor": "Josh Knell"
})



console.log(kamry.grade(yusuf, "math"));






// console.log(kamry.standUp("#FSW_14_kam"));
// console.log(kamry.debugsCode(yusuf, "arrays"));





// console.log(josh.age);
// console.log(kevin.catchPhrase);
// console.log(kevin.demo("JS"));
// console.log(kevin.grade(yusuf, "math"));
// console.log(yusuf.favSubjects);
// console.log(yusuf.PRAssignment("react"));
