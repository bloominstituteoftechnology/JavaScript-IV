// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    }

    PRAssignment(attribute){
        return `${this.name} has submitted a PR for ${attribute}`
    };
    listSubjects(){
        return this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
    }
    sprintChallenge(attribute){
        return `${this.name} has begun sprint challenge on ${attribute}`
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we wil be learning about ${subject}`
    };
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(attr){
        return `${this.name} announces to ${attr.channel}, @channel standy time!!!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const logan = new Student ({
    name: 'Logan Karnes',
    age: 20,
    location: 'Vancouver Wa',
    previousBackground: 'Foundations',
    className: 'WebPT7',
    favSubjects: ['Javascript', 'html', 'Css', 'Python'],

})
const dan = new Instructor ({
    name: 'Dan Frehner',
    age: 36,
    location: 'California',
    specialty: 'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Cult of Functionality'
})

const jeff = new ProjectManager ({
    name: 'Jeff Artrip',
    age: 24,
    location: 'New York',
    specialty: 'Javascript',
    favLanguage: 'python',
    catchPhrase: 'Hi Everyone!',
    gradClassName: 'Web12',
    favInstructor: 'Dan Frehner'
})
console.log(logan.sprintChallenge('Python'));
console.log(dan.grade(logan, 'Javascript'));
console.log(logan);
console.log(dan);
console.log(jeff);