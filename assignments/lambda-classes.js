// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.gender = attributes.gender;
        this.location = attributes.location;
    }

    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }

    demo (subject) {
        return `Today we are learning ${subject}.`;
    }

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }

    listsSubjects () {
        let subs= ``;
        for (let i = 0; i < this.favSubjects.length; i++) {
            subs += `${this.favSubjects[i]} `;
        }; return subs;
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const josh = new Instructor ({
    "name": "Josh",
    "age": 33,
    "gender": "Male",
    "location": "Utah",
    "specialty": "being super cool",
    "favLanguage": "JavaScript",
    "catchPhrase": "(mario noises and hand farts)",
})

const juniper = new Instructor ({
    "name": "Juniper",
    "age": 36,
    "gender": "Female",
    "location": "Oregon",
    "specialty": "Front-end",
    "favLanguage": "JavaScript",
    "catchPhrase": "You never know until you know",
})

const mark = new Student ({
    "name": "Mark",
    "age": 27,
    "gender": "Male",
    "location": "Texas",
    "previousBackground": "Customer Service",
    "className": "CS11",
    "favSubjects": ["LESS", "JavaScript"],
})

const dalilah = new Student ({
    "name": "Dalilah",
    "age": 23,
    "gender": "Female",
    "location": "Ohio",
    "previousBackground": "Farming",
    "className": "CS11",
    "favSubjects": ["Bootstrap", "JavaScript"],
})


const chris = new ProjectManager ({
    "name": "Chris",
    "age": 25,
    "gender": "Male",
    "location": "Connecticut",
    "specialty": "being awesome",
    "favLanguage": "JavaScript",
    "catchPhrase": "(anything philosophy related)",
    "gradClassName": "CS5",
    "favInstructor": "Josh",
})

const olivia = new ProjectManager ({
    "name": "Olivia",
    "age": 22,
    "gender": "Female",
    "location": "Arizona",
    "specialty": "Back-end",
    "favLanguage": "JavaScript",
    "catchPhrase": "All we know is that we know nothing at all",
    "gradClassName": "CS5",
    "favInstructor": "Josh",
})

console.log(josh.speak());
console.log(josh.demo("JavaScript"));
console.log(josh.grade(mark, "JavaScript"));
console.log(juniper.speak());
console.log(juniper.demo("JavaScript"));
console.log(juniper.grade(dalilah, "JavaScript"));
console.log(mark.listsSubjects());
console.log(mark.PRAssignment("JavaScript-IV"));
console.log(mark.sprintChallenge("JavaScript"));
console.log(dalilah.listsSubjects());
console.log(dalilah.PRAssignment("JavaScript-IV"));
console.log(dalilah.sprintChallenge("JavaScript"));
console.log(chris.standUp("cs11_schroeder"));
console.log(chris.debugsCode(dalilah, "JavaScript"));
console.log(olivia.standUp("cs11_olivia"));
console.log(olivia.debugsCode(dalilah, "JavaScript"));