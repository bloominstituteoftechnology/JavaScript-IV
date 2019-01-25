// CODE here for your Lambda Classes

// Base class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
         return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Instructor class
class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    addPoints(student) {
        return `${student.name} gets points of ${Math.floor(Math.random() * 6) + student.score}`;
    }
    subtractPoints(student) {
        return `${student.name} gets points of ${student.score - Math.floor(Math.random() * 6)}`;
    }
}

// Student class
class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
        this.score = stuAttributes.score;
    }
    listsSubjects() {
        return `Favorite subjects are: ${this.favSubjects.join(' --')}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }    
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
    doesStudentGraduate() {
        if(this.score > 70) {
            return `${this.name} is ready to graduate from Lambda School`;
        } else {
            return `${this.name} should keep doing assignments to increase ${this.name}'s score`;
        }
    }   
}

// Project Manager class
class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const richard = new Instructor({
    name: 'Richard Beldin',
    age: 35,
    location: 'San Francisco',
    gender: 'Male',
    specialty: 'Data Visualization Development',
    favLanguage: "Python",
    catchPhrase: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
});

const screech = new Student({
    name: 'Screech Powers',
    age: 17,
    location: 'Silicon Valley',
    gender: 'Male',
    previousBackground: 'Physics',
    className: 'FSW 8',
    favSubjects: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
    score: 100,
});

const zack = new ProjectManagers({
    name: 'Zack Morris',
    age: 18,
    location: 'Silicon Valley',
    gender: 'Male',
    gradClassName: 'FSW 4',
    favInstructor: 'Richard',
});


console.log(richard.name);
console.log(richard.specialty);
console.log(richard.favLanguage);
console.log(richard.catchPhrase);
console.log(richard.demo('Express'));
console.log(richard.grade(screech, 'Redux'));

console.log(screech.age);
console.log(screech.name);
console.log(screech.listsSubjects());
console.log(screech.PRAssignment('django'));
console.log(screech.sprintChallenge('GraphQL'));


console.log(zack.location);
console.log(zack.gradClassName);
console.log(zack.favInstructor);
console.log(zack.standUp('zack_FSW8'));
console.log(zack.debugsCode(screech, 'Express'));

console.log(screech.score);

console.log(richard.addPoints(screech));
console.log(zack.subtractPoints(screech));
richard.subtractPoints(screech);
zack.addPoints(screech);
zack.addPoints(screech);
zack.subtractPoints(screech);
console.log(screech.doesStudentGraduate());

