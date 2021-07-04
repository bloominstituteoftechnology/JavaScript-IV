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
    tutor(student, min, max) {
        min = Math.ceil(0);
        max = Math.floor(100)
        return Math.floor(Math.random() * (100 - 0)) + 0 + student.grade();
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
    grade(min, max) {
        min = Math.ceil(0);
        max = Math.floor(100)
        return Math.floor(Math.random() * (100 - 0)) + 0;
    }
    graduate(min, max) {
        let amount = Math.random() * 101;
        if (amount > 70) {
            return `${this.name} graduated!!`;
        } else {
            return `${this.name} did not graduate. We'll get 'em next time.`;
        }
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
    tutor(student, min, max) {
        min = Math.ceil(0);
        max = Math.floor(100)
        return Math.floor(Math.random() * (100 - 0)) + 0 + student.grade();
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
    subject: 'javascript'
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

/* Stretch */
/*
Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
*/

console.log(kanek.grade());
console.log(josh.tutor(kanek));
console.log(ray.tutor(kanek));
console.log(kanek.graduate());