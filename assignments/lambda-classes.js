// CODE here for your Lambda Classes

class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.gender = person.gender;
        this.subject = person.subject;
        this.location = person.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}.`;
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${this.subject}.`
    }
}

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    listsSubjects() {
        return `My favorite subject is ${this.favSubjects}.`;
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.favSubjects}.`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.favSubjects}.`
    }
}

class ProjectManager extends Person {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
        this.channel = pm.channel;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!`;
    }
    debugsCode(student) {
        return `${this.name} debugs ${student.name}'s code on ${student.favSubjects}.`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'javascript'
});

const josh = new Instructor({
    name: 'Josh',
    location: 'Lambda',
    age: 30,
    gender: 'male',
    favLanguage: 'Javascript',
    specialty: 'Teaching Front-end',
    catchPhrase: 'Want to hear my banjo?',
    subject: 'javascript',
});

const steve = new Instructor({
    name: 'Steve',
    location: 'Lambda',
    age: 25,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: 'I am Steve.',
    subject: 'html'
});

const kanek = new Student({
    name: 'Kanek',
    age: '20',
    gender: 'male',
    previousBackground: 'U.S. Army, Kinesiology University Student',
    className: 'FSW16',
    favSubjects: 'CSS',
});

const benny = new Student({
    name: 'Benny',
    age: '20',
    gender: 'male',
    previousBackground: 'Computer Science college student',
    className: 'FSW15',
    favSubjects: 'Python',
});

const david = new Student({
    name: 'David',
    age: '20',
    gender: 'male',
    previousBackground: 'Computer Science college student',
    className: 'FSW15',
    favSubjects: 'Back-end',
});

const ray = new ProjectManager({
    name: 'Ray',
    age: '28',
    gender: 'male',
    gradClassName: 'FSW10',
    favInstructor: 'Josh Knell',
    channel: 'FSW16-Ray'
});

const lisa = new ProjectManager({
    name: 'Lisa',
    age: '25',
    gender: 'female',
    gradClassName: 'FSW10',
    favInstructor: 'Josh Knell',
    channel: 'FSW16-Lisa'
});

const jan = new ProjectManager({
    name: 'Jan',
    age: '30',
    gender: 'female',
    gradClassName: 'FSW10',
    favInstructor: 'Josh Knell',
    channel: 'FSW16-Jan'
});

console.log(josh.specialty);
console.log(josh.speak())
console.log(steve.demo());
console.log(fred.grade(david));
console.log(josh.catchPhrase);
console.log(benny.listsSubjects());
console.log(david.PRAssignment(steve));
console.log(kanek.sprintChallenge());
console.log(lisa.favInstructor);
console.log(ray.gradClassName);
console.log(jan.standUp());
console.log(jan.debugsCode(benny));