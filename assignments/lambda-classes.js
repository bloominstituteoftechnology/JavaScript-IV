// CODE here for your Lambda Classes

class Person {
    constructor(quals) {
        this.name = quals.name;
        this.age = quals.age;
        this.location = quals.location;
        this.gender = quals.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}

class Instructor extends Person {
    constructor(quals) {
        super(quals);
        this.specialty = quals.specialty;
        this.favLanguage = quals.favLanguage;
        this.catchPhrase = quals.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

}

class Student extends Person {
    constructor(quals) {
        super(quals);
        this.previousBackground = quals.previousBackground;
        this.className = quals.className;
        this.favSubjects = quals.favSubjects;
    }

    listSubjects() {
        console.log(this.favSubjects);
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(quals) {
        super(quals);
        this.gradClassName = quals.gradClassName;
        this.favInstructor = quals.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }

}


const igor = new Instructor({
    name: 'Igor',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const ilya = new Instructor({
    name: 'Ilya',
    location: 'Springfield',
    age: 24,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `wocka wocka wocka`
});

const sam = new Student({
    name: 'Sam',
    location: 'Connecticut',
    age: 27,
    gender: 'male',
    previousBackground: 'power',
    className: 'CSPT3',
    favSubjects: ['CS101', 'Lunch', 'recess']
});

const susan = new Student({
    name: 'Susan',
    location: 'New York',
    age: 25,
    gender: 'female',
    previousBackground: 'fashion',
    className: 'CSFT3',
    favSubjects: ['fashion', 'drama', 'gossip']
});

const peter = new ProjectManager({
    name: 'Peter',
    location: 'New York',
    age: 25,
    gender: 'male',
    gradClassName: 'CSPT3',
    favInstructor: 'Ilya'
});

const priya = new ProjectManager({
    name: 'Priya',
    location: 'Cali',
    age: 25,
    gender: 'male',
    gradClassName: 'CSPT3',
    favInstructor: 'Igor'
});


console.log(priya.speak());
console.log(igor.demo("math"));
console.log(ilya.grade(sam, "english"));
sam.listSubjects();
console.log(sam.PRAssignment("tennis"));
console.log(susan.sprintChallenge("coin base"));
console.log(peter.standUp("investor-relations"));
console.log(priya.debugsCode(susan, "engineering"));