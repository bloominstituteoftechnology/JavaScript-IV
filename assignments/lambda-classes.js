//Worked by Maribel Cuales & Marco Guzman
// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favlanguage = instructorOptions.favlanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject​​​​​}`;

    }
}//Instructor

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects() {
        return`${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}//Student

class ProjectManager extends Instructor {
    constructor(PmOptions) {
        super(PmOptions);
        this.gradClassName = PmOptions.gradClassName;
        this.favInstructor = PmOptions.className;
    }
    standUp(channel) {
        return `${name} announces to @${channel} standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
}// PM

// OBJECTS
const evelyn = new Person({
    "name": 'Evelyn',
    "age": 31,
    "location": 'Guam',
});
const tim = new Person({
    "name": 'Tim',
    "age": 40,
    "location": 'New York',
});
const don = new Person({
    "name": 'Don',
    "age": 45,
    "location": 'Hawaii',
});

const josh = new Instructor({
    "name": 'Josh',
    "age": 48,
    "location": 'Utah',
    "specialty": 'Redux',
    "favLanguage": 'Python',
    "catchPhrase": 'Never Surrender!!',
});
const moises = new Instructor({
    "name": 'Moises',
    "age": 35,
    "location": 'Florida',
    "specialty": 'JavaScript',
    "favLanguage": 'French',
    "catchPhrase": 'Viva Cuba!!',
});
const jax = new Instructor({
    "name": 'Jackee',
    "age": 30,
    "location": 'North Dakota',
    "specialty": 'Zoom',
    "favLanguage": 'Spanish',
    "catchPhrase": 'Lets talk about it!!',
});

const lavell = new Student({
    "name": 'lavell',
    "age": 30,
    "location": 'San Francisco',
    "previousBackground": 'Teacher',
    "className": 'CS10',
    "favSubjects": 'Art',
});

const maribel = new Student({
    "name": 'Maribel',
    "age": 36,
    "location": 'Phillipines',
    "previousBackground": 'Wev Developer',
    "className": 'CS10',
    "favSubjects": 'Math',
});
const marco = new Student({
    "name": 'Marco',
    "age": 39,
    "location": 'San Diego',
    "previousBackground": 'Librarian',
    "className": 'CS10',
    "favSubjects": 'Coding',
});

const dresean = new ProjectManager({
    "specialty": 'Python tutor',
    "favLanguage": 'German',
    "catchPhrase": 'just do it!!',
    "gradClassName": 'CS5',
    "favInstructor": 'Josh Knell',
});
const patrick = new ProjectManager({
    "specialty": 'JS',
    "favLanguage": 'Italian',
    "catchPhrase": 'Finish your Repl.it!!',
    "gradClassName": 'CS1',
    "favInstructor": 'Patty Kennedy',
});
const dante = new ProjectManager({
    "specialty": 'Oracle',
    "favLanguage": 'Chinese',
    "catchPhrase": 'Never say Die!!',
    "gradClassName": 'CS10',
    "favInstructor": 'Dan Frehner',
});


console.log(evelyn.name); //?
console.log(maribel.listsSubjects()); //?
console.log(josh.speak());
console.log(josh.demo());
console.log(moises.grade()); //?
console.log(maribel.listsSubjects());
console.log(marco.PRAssignment()); //?