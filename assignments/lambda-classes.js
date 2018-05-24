class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.background;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        for (let subjIndex in this.favSubjects) {
            console.log(this.favSubjects[subjIndex]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const kam = new Student ({
    'name': 'Kamry Bowman',
    'age': 30,
    'location': 'Denver',
    'gender': 'M',
    'previousBackground': 'Loan Officer',
    'favSubjects': ['Javascript', 'CSS'],
    'grade': 50
});
kam.speak();
kam.listsSubjects();
kam.PRAssignment('HTML');
kam.sprintChallenge('Bootstrap');

const josh = new Instructor ({
    'name': 'Josh Knell',
    'age': 33,
    'location': 'San Francisco',
    'gender': 'M',
    'specialty': 'Front-end and Javascript',
    'favLanguage': 'Muong',
    'catchPhrase': 'Of course I know dank memes.'
});
josh.speak();
josh.demo('Bootstrap');
josh.grade(kam, 'touch typing');


const haywood = new ProjectManager ({
    'name': 'Haywood Johnshon',
    'age': 'Age is just a number',
    'location': 'Next concert venue',
    'gender': 'M',
    'specialty': 'React',
    'favLanguage': 'Python',
    'catchPhrase': 'That\'s what\'s up.',
    'gradClassName': 'CS11',
    'favInstructor': 'All of them equally'
})
haywood.speak();
haywood.demo('HTML');
haywood.grade(kam, 'etiquette');
haywood.standUp('CS11_Haywood');
haywood.debugsCode(kam, 'Sign Language');