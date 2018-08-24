class Person {
    constructor(peopleInfo) {
        this.name = peopleInfo.name;
        this.age = peopleInfo.age;
        this.location = peopleInfo.location;
        this.gender = peopleInfo.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }

    listSubjects() {
        this.favSubjects.forEach(function (loop) {
            console.log(loop)
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(PMinfo) {
        super(PMinfo);
        this.gradClassName = PMinfo.gradClassName;
        this.favInstructor = PMinfo.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    gender: "Male"
});


const dan = new Instructor({
    name: 'Dan',
    age: 35,
    location: 'SLC',
    gender: 'Male',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'LESS is More'
});

const alex = new Student({
    name: 'Alex',
    age: 26,
    location: 'Virginia Beach',
    gender: 'Male',
    previousBackground: 'System Administrator',
    className: 'CSPT2',
    favSubjects: ['JavaScript', 'CSS', 'C']
});

const kia = new ProjectManager({
    name: 'Kia',
    age: 26,
    location: 'Arizona',
    gender: 'Female',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'It’s not a bug – it’s an undocumented feature'
});

console.log(fred.speak());
console.log(dan.demo('JavaScript'));
console.log(dan.grade(alex, 'JavaScript'));
alex.listSubjects();
console.log(alex.PRAssignment('JavaScript-IV'));
console.log(alex.sprintChallenge('Node'))
console.log(kia.standUp('cspt2_kia'));
console.log(kia.debugsCode(alex, 'Node'));
