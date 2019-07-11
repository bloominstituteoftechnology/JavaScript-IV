// CODE here for your Lambda Classes
class Person { //creates a class for Persons, this will be the core of every entity.
    constructor(Attrs) { //asigning properties of each person.
        this.name = Attrs.name;
        this.age = Attrs.age;
        this.location = Attrs.location;
    }

    speak() {
        return `Hello, my name is ${this.name}, and I am from ${this.location}!`;
    }
}

class Instructor extends Person {
    constructor(Attrs) {
        super(Attrs);
        this.specialty = Attrs.specialty;
        this.favLanguage = Attrs.favLanguage;
        this.catchPhrase = Attrs.catchPhrase;
    }

    demo(subject) {
        console.log('Today we are learning about ' + subject);
    }

    grade(studentObj, subject) {
        console.log(studentObj.name + ' recieves a perfect score on ' + subject + '!');
    }
}


class Student extends Person {
    constructor(Attrs) {
        super(Attrs);
        this.previousBackground = Attrs.previousBackground;
        this.className = Attrs.className;
        this.favSubjects = Attrs.favSubjects;
    }

    listsSubjects() {
        return `${this.name} likes ${this.favSubjects}.`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    springChallenge(subject) {
        return `${this.name} has begun Sprint Challenge on ${subject}!`;
    }
}

class ProjectManager extends Instructor {
    constructor(Attrs) {
        super(Attrs);
        this.gradClassName = Attrs.gradClassName;
        this.favInstructor = Attrs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const fred = new Person({
    name: 'Freddy',
    location: 'Bedrock',
    age: 37
})

const cole = new Student ({
    name: 'Cole',
    location: 'Baton Rouge',
    age: 25,
    previousBackground: 'Udemy',
    className: 'Full-Stack Web',
    favSubjects: ['React', 'Back-End']
})

const kieran = new Instructor({
    name: 'kieran',
    location: 'New York',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: 'You got this!'
})

const larry = new ProjectManager({
    name: 'Larry',
    location: 'Kansas',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: 'Let me get back to you on that!',
    gradClassName: 'FSW',
    favInstructor:'Kieran'
})