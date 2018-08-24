class Person {
    constructor(peopleStuff) {
        this.name = peopleStuff.name;
        this.age = peopleStuff.age;
        this.location = peopleStuff.location;
        this.gender = peopleStuff.gender;
    };
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);

    };
};

class Instructor extends Person {
    constructor(instructorStuff) {
        super(instructorStuff);
        this.specialty = instructorStuff.specialty;
        this.favLanguage = instructorStuff.favLanguage;
        this.catchPhrase = instructorStuff.catchPhrase;

    };
    demo(subject) {
        console.log(`TOday we are learning about ${subject}.`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    };
    gradeTest(student) {
        student.grade = student.grade + (Math.floor(Math.random() * 200) - 100);
        if (student.grade > -1 && student.grade < 101) {
            console.log(`${student.name}'s grade is now ${student.grade}.`);
        } else this.gradeTest(student);
    };
};

class Student extends Person {
    constructor(studentStuff) {
        super(studentStuff);
        this.previousBackground = studentStuff.previousBackground;
        this.favSubjects = studentStuff.favSubjects;
        this.grade = 100;
    };
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        };
    };
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    };
    graduate() {
        if (this.grade > 69) {
            console.log(`Congrats ${this.name}! You graduated!`);
        } else console.log(`You can do it ${this.name}! Study harder!`);
    };
};

class ProjectManager extends Instructor {
    constructor(PMStuff) {
        super(PMStuff);
        this.gradClassName = PMStuff.gradClassName;
        this.favInstructor = PMStuff.favInstructor;

    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    };
};

const Jess = new Student({
    name: 'Jess',
    age: 35,
    location: 'New Hampshire',
    gender: 'Female',
    previousBackground: 'Free Code Camp',
    className: 'CSPT2',
    favSubjects: ['CSS', 'JavaScript', 'Python'],
});

console.log(Jess);

const Dan = new Instructor({
    name: 'Dan',
    age: 29,
    location: 'Lambda School',
    gender: 'Male',
    specialty: 'JavaScript torture',
    favLanguage: 'All of them',
    catchPhrase: 'Something about swag'
})

console.log(Dan);

const Clara = new ProjectManager({
    name: 'Clara',
    age: 29,
    location: 'Lambda School',
    gender: 'Female',
    specialty: 'debugging with patience',
    favLanguage: 'All of them',
    catchPhrase: 'Jess has no imagination with this stuff.',
    gradClassName: 'CS#',
    favInstructor: 'Dan'
})
console.log(Clara);
Jess.speak();
Dan.speak();
Clara.speak();
Jess.listsSubjects();
console.log(Jess.grade);
Dan.demo('JavascriptIV');
Jess.PRAssignment('JavascriptIV');
Clara.debugsCode(Jess, 'Javascript IV');
Clara.standup(`cspt2_clara`);
Jess.sprintChallenge('JavascriptIV');
Clara.grade(Jess, `JavascriptIV`);
Clara.gradeTest(Jess);
Dan.gradeTest(Jess);
Dan.gradeTest(Jess);
Clara.gradeTest(Jess);
Dan.gradeTest(Jess);
Clara.gradeTest(Jess);
Dan.gradeTest(Jess);
Clara.gradeTest(Jess);
Dan.gradeTest(Jess);
Clara.gradeTest(Jess);
Dan.gradeTest(Jess);
Clara.gradeTest(Jess);
Dan.gradeTest(Jess);
Jess.graduate();