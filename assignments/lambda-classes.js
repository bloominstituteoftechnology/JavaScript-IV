// Person class
class Person {
    constructor(personProps) {
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const alice = new Person({
    "name": "Alice",
    "age": 18,
    "location": "Alaska",
    "gender": "Female",
});

const bob = new Person({
    "name": "Bob",
    "age": 25,
    "location": "Bolivia",
    "gender": "Male",
});

console.log("TESTING PERSON CLASS.")
console.log(alice);
console.log(bob);
console.log(alice.speak());
console.log(bob.speak());


// Instructor class
class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    changeGrade(student) {
        const x = Math.round(Math.random());
        const y = Math.floor((Math.random() * 10) + 1);
        const oldStudentGrade = student.grade;
        if (x === 1) {
            student.grade += y;
            return `${this.name} has increased ${student.name}'s grade from ${oldStudentGrade} to ${student.grade}`;
        } else {
            student.grade -= y;
            return `${this.name} has decreased ${student.name}'s grade from ${oldStudentGrade} to ${student.grade}`;
        }
    }
}

const cindy = new Instructor({
    "name": "Cindy",
    "age": 38,
    "location": "California",
    "gender": "Female",
    "specialty": "Redux",
    "favLanguage": "JavaScript",
    "catchPhrase": "Don't forget the homies",
});

const david = new Instructor({
    "name": "David",
    "age": 40,
    "location": "Delaware",
    "gender": "Male",
    "specialty": "React",
    "favLanguage": "Python",
    "catchPhrase": "I forgot the homies",
});

console.log("\nTESTING INSTRUCTOR CLASS.")
console.log(cindy);
console.log(david);
console.log(cindy.demo("Classes"));
console.log(david.grade({ // made a student object here because student classes haven't been created yet
    "name": "Dave",
}, "Geography"));


// Student class
class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
        this.graduated = false;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            return console.log(subject);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade > 70 && this.graduated === false) {
            this.graduated = true;
            return `${this.name}'s grade is ${this.grade}! They are ready to graduate!!`;
        } else if (this.graduated === false) {
            return `${this.name}'s grade is ${this.grade}. They are not yet ready to graduate.`;
        } else if (this.graduated === true) {
            return `${this.name} has already graduated! Stop grading their papers already.`;
        }
    }
}

const erwin = new Student({
    "name": "Erwin",
    "age": 28,
    "location": "Estonia",
    "gender": "Male",
    "specialty": "React",
    "favLanguage": "Assembly",
    "catchPhrase": "Don't have a cow, man.",
    "previousBackground": "Secret Agent",
    "className": "CS13",
    "favSubjects": ["Html", "CSS", "JavaScript"],
    "grade": 60,
});

const fred = new Student({
    "name": "Fred",
    "age": 30,
    "location": "France",
    "gender": "Male",
    "specialty": "SQL",
    "favLanguage": "C++",
    "catchPhrase": "Ruh roh!",
    "previousBackground": "Astronaut",
    "className": "CS132",
    "favSubjects": ["LESS", "React", "SQL"],
    "grade": 90,
});

console.log("\nTESTING STUDENT CLASS.")
console.log(erwin);
console.log(fred);
erwin.listsSubjects();
console.log(fred.PRAssignment("HTML"));
console.log(erwin.sprintChallenge("CSS"));


// ProjectManager class
class ProjectManager extends Instructor {
    constructor(projectManagerProps) {
        super(projectManagerProps);
        this.gradClassname = projectManagerProps.gradClassname;
        this.favInstructor = projectManagerProps.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standup times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const gladis = new ProjectManager({
    "name": "Gladis",
    "age": 37,
    "location": "Germany",
    "gender": "Female",
    "specialty": "JavaScript",
    "favLanguage": "C#",
    "catchPhrase": "The cake was a lie.",
    "gradClassname": "CS1",
    "favInstructor": "Cindy",
});

const henry = new ProjectManager({
    "name": "Henry",
    "age": 32,
    "location": "Honduras",
    "gender": "Male",
    "specialty": "React",
    "favLanguage": "Python",
    "catchPhrase": "Omar coming!",
    "gradClassname": "CS2",
    "favInstructor": "David",
});

console.log("\nTESTING PROJECTMANAGER CLASS.")
console.log(gladis);
console.log(henry);
console.log(gladis.standUp("cs13_help"));
console.log(henry.debugsCode(erwin, "JavaScript"));

console.log("\nTESTING STRETCH TASKS.")
console.log(cindy.changeGrade(erwin));
console.log(erwin.graduate());
console.log(cindy.changeGrade(erwin));
console.log(erwin.graduate());
console.log(cindy.changeGrade(erwin));
console.log(erwin.graduate());
console.log(cindy.changeGrade(erwin));
console.log(erwin.graduate());

console.log(gladis.changeGrade(fred));
console.log(fred.graduate());
console.log(gladis.changeGrade(fred));
console.log(fred.graduate());
console.log(gladis.changeGrade(fred));
console.log(fred.graduate());
console.log(gladis.changeGrade(fred));
console.log(fred.graduate());
