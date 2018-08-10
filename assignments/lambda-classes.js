// CODE here for your Lambda Classes
class Person {
    constructor(personOptions) {
        this.name = personOptions.name;
        this.age = personOptions.age;
        this.location = personOptions.location;
        this.gender = personOptions.gender;
    }
    speak() {
        return `Hello my ${this.name} is Fred, I am from ${location}.`;
    }
}

class Instructor extends Person {
    constructor (instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;//e.g., an array of subjects
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            return subject;
        })
    }
}

const Cameron = new Student ({
    name: 'Cameron',
    age: '26',
    location: "Mountain View",
    gender: "M",

    favSubjects: ["JS, HTML, CSS"],

});

console.log(Cameron.listsSubjects())