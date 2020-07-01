// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.location = attrs.location;
        this.age = attrs.age;
    }
    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attrs){
        super(attrs) 
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects[favSubjects.length]}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class TeamLead extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

// class Person {
//     constructor(attrs) {
//         this.name = attrs.name;
//         this.location = attrs.location;
//         this.age = attrs.age;
//     }

const instructor_one = new Instructor({
    name: 'Charles',
    location: 'Wisconsin',
    age: 35,
    specialty:  'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Remember the classes!'
})

const student_one = new Student({
    name: 'Brenda',
    location: 'Florida',
    age: 22,
    previousBackground: 'Retail',
    className: 'WEBPT11',
    favSubjects: ['Math', 'Graphic Design', 'HTML', 'CSS'],
})

const student_two = new Student({
    name: 'Linda',
    location: 'Colorado',
    age: 24,
    previousBackground: 'Customer Service Representative',
    className: 'WEB22',
    favSubjects: ['Creative Writing', 'Drawing101', 'Javascript', 'Music Theory']
})

const student_three = new Student({
    name: 'Bob',
    location: 'Kentucky',
    age: 50,
    previousBackground: 'Cashier',
    className: 'WEBPT8',
    favSubjects: ['Calculus', 'Science', 'Python', 'Drama']
})

const team_lead = new TeamLead({
    name: 'Leo',
    location: 'California',
    age: 27,
    specialty:  'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Don\'t throw me under the bus!',
    gradClassName: 'WEB22',
    favInstructor: 'Pace'
})

console.log(student_one.name);
console.log(instructor_one.favLanguage);
console.log(instructor_one.demo('Math'));
console.log(instructor_one.grade(student_two.name, 'Drama'));
console.log(team_lead.name);
console.log(team_lead.catchPhrase);
console.log(student_three.favSubjects);
console.log(team_lead.debugsCode(student_three.name, student_three.favSubjects[1]));
console.log(team_lead.standUp('webpt11'));
console.log(team_lead.speak());
console.log(instructor_one.speak());