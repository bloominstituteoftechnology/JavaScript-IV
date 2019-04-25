// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}
class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects; // array of fav subjects.
    }
    // listSubjects() {
    // }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}
class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect socre on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standey times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

/**
 * Person object Test
 */
const human = new Person({
    name: 'Bob',
    age: 5,
    location: 'Earth',
    gender: 'something',
});


/**
 * Instructor objects
 */
const jordan = new Instructor({
    name: 'Jordan',
    age: 27,
    location: 'Orlando',
    gender: 'Male',
    specialty: 'JavaScript',
    favLanguage: 'Elm',
    catchPhrase: 'That is how the news goes!',
});

/**
 * Student objects
 */
const janet = new Student({
    name: 'Janet',
    age: 32,
    location: 'Houston',
    gender: 'Female',
    previousBackground: 'Computer Science',
    className: 'React',
    favSubjects: ['Html', 'Less', 'JavaScript'],

});

const zippy = new ProjectManagers({
    name: 'Zippy mcGee',
    age: 22,
    location: 'outer space',
    gender: 'zorb',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Blah Blah Blahh!',
    gradClassName: 'CS1',
    favInstructor: 'Josh',

});

//human.speak();
//jordan.demo('Javascript Objects');
//janet.PRAssignment('JS-IV');

//zippy.standup('webpt6_zippy');
//zippy.debugsCode(janet, 'JS 4');