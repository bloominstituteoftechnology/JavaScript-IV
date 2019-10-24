class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.gender
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

class Instructor extends Person {
    constructor(instDetails) {
        super(instDetails)
        this.specialty = instDetails.specialty;
        this.favLanguage = instDetails.favLanguage;
        this.catchPhrase = instDetails.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject} `
    };
};

class Student extends Person {
    constructor(studentDetails) {
        super(studentDetails)
        this.previousBackground = studentDetails.previousBackground;
        this.className = studentDetails.className;
        this.favSubjects = studentDetails.favSubjects;
    };

    listsSubjects() {
        return `${this.favSubjects}`;
    }

    PRAssignment (student, subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge (student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
};

class ProjectManagers extends Instructor {
    constructor(pmDetails) {
        super(pmDetails)
        this.gradClassName = pmDetails.gradClassName;
        this.favInstructor = pmDetails.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to @${channel}, standby times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}



// Three Person Class Examples:

const personOne = new Person({
    name: 'Bob',
    age: 30,
    location: 'Denver, CO',
    gender: 'M'

});

const personTwo = new Person({
    name: 'Jan',
    age: 35,
    location: 'Los Angeles, CA',
    gender: 'F'

});

const personThree = new Person({
    name: 'Will',
    age: 24,
    location: 'Tallahassee, FL',
    gender: 'M'

});



// Two Instructor Class Examples:

const InstructorOne = new Instructor({
    name: 'Dan',
    age: 42,
    location: 'Seattle, WA',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lorum Ipsum Dan'

});

const InstructorTwo = new Instructor({
    name: 'Judy',
    age: 29,
    location: 'Chicago, IL',
    gender: 'F',
    specialty: 'CSS',
    favLanguage: 'PHP',
    catchPhrase: 'Lorum Ipsum Judy'

});

// Two Student Examples:

const StudentOne = new Student({
    name: 'Sarah',
    age: 54,
    location: 'Chicago, IL',
    gender: 'F',
    previousBackground: 'Clerk at Store',
    className: "CS12",
    favSubjects: "HTML"

});

const StudentTwo = new Student({
    name: 'Edward',
    age: 22,
    location: 'Atlanta, GA',
    gender: 'M',
    previousBackground: 'Waiter',
    className: "CS16",
    favSubjects: "JavaScript"

});

// Two Project Manager Examples:

const projectManagerOne = new ProjectManagers ( {
    name: 'Marge',
    age: 60,
    location: 'Denver, CO',
    gender: 'F',
    specialty: 'Node.JS',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lorum Ipsum Marge',
    gradClassName: 'CS8',
    favInstructor: 'Dan'
});

const projectManagerTwo = new ProjectManagers ( {
    name: 'Terry',
    age: 46,
    location: 'Phoenix, AZ',
    gender: 'M',
    specialty: 'SQL',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lorum Ipsum Terry',
    gradClassName: 'CS9',
    favInstructor: 'Judy'
});



// Console.log Verification of Code:

console.log(personOne.speak());
console.log(personTwo.speak());
console.log(personThree.speak());
console.log(InstructorOne.speak());
console.log(InstructorOne.demo('CSS'));
console.log(InstructorOne.grade(StudentOne, 'LESS'));
console.log(InstructorTwo.speak());
console.log(InstructorTwo.demo('LESS'));
console.log(InstructorTwo.grade(personTwo, 'HTML'));
console.log(StudentOne.speak());
console.log(StudentOne.listsSubjects());
console.log(StudentOne.PRAssignment(StudentOne, 'JavaScript'));
console.log(StudentOne.sprintChallenge(StudentOne, 'HTML'));
console.log(StudentTwo.speak());
console.log(StudentTwo.listsSubjects());
console.log(StudentTwo.PRAssignment(StudentTwo, 'Node.JS'));
console.log(StudentTwo.sprintChallenge(StudentTwo, 'React'));
console.log(projectManagerOne.speak());
console.log(projectManagerOne.demo('LESS'));
console.log(projectManagerOne.grade(projectManagerOne, 'Node.JS'));
console.log(projectManagerOne.standUp('CS16'));
console.log(projectManagerOne.debugsCode(StudentOne, 'React'));
console.log(projectManagerTwo.speak());
console.log(projectManagerTwo.demo('SQlite'));
console.log(projectManagerTwo.grade(projectManagerTwo, 'SQL'));
console.log(projectManagerTwo.standUp('CS17'));
console.log(projectManagerTwo.debugsCode(StudentTwo, 'SQL'));

