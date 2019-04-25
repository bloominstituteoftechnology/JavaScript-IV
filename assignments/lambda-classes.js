// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I amd from ${this.location}.`);
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

// class Student extends Person {
//     constuctor(props) {
//         super(props);
//         this.previousBackground = props.previousBackground;
//         this.className = props.className;
//         this.favSubjects = props.favSubjects; // array of fav subjects.
//     }
//     // listSubjects() {
//     // }
//     PrAssignment(subject) {
//         console.log(`${this.name} has submitted a PR for ${subject}`);
//     }
//     sprintChallenge(subject) {
//         console.log(`${this.name} has begun sprint challenge on ${subject}`);
//     }
// }

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

const jordan = new Instructor({
    name: 'Jordan',
    age: 27,
    location: 'Orlando',
    gender: 'Male',
    specialty: 'JavaScript',
    favLanguage: 'Elm',
    catchPhrase: 'That is how the news goes!',
});

jordan.demo('Javascript Objects');