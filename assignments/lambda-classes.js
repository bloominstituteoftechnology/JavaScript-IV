// CODE here for your Lambda Classes
class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I amd from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(props, specialty, favLanguage, catchPhrase) {
        super(props);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect socre on ${subject}`);
    }
}

class Student extends Person {
    constructor(props, previousBackground, className, favSubjects) {
        super(props);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects; // array of fav subjects.
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

// class ProjectManagers extends Instructor {
//     constructor(props) {
//         super(props);
//         this.gradClassName = props.gradClassName;
//         this.favInstructor = props.favInstructor;
//     }
//     standup(channel) {
//         console.log(`${this.name} announces to ${channel}, @channel standey times!`);
//     }
//     debugsCode(student, subject) {
//         console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
//     }
// }

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
    specialty: 'Less',
    favLanguage: 'Javascript',
    catchPhrase: 'Here we go again!',
});


jordan.demo('Javascript Objects');
janet.PRAssignment('JS-IV');