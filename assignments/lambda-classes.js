// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        console.log(`${student.name} receives a perfect score on ${subject}`);
    } 
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.fabSubjects = props.className;
    }

    listsSubjects() {
        //Returns a grammatically string of the student saying their favorite subjects.
        // let favSubjectsString = '';
        // this.favSubjects.forEach((sub, i) => {
        //     if(i === (this.fabSubjects.length - 1)){
        //         favSubjectsString = `${favSubjectsString}, and ${sub}`;
        //     } else {
        //         favSubjectsString = `${favSubjectsString}, ${sub}`;
        //     }
        //     console.log(`${this.name}'s favorite subjects are ${favSubjectsString}.`);
        // });
        //Logs students favorite subjects one by one as directed in readme.
        this.fabSubjects.forEach(sub => {
            console.log(sub);
        })
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Insstructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}