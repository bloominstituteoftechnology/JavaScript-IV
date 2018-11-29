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
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        //Returns a grammatically string of the student saying their favorite subjects.
        let favSubjectsString = '';
        if(this.favSubjects.length === 1) {
            console.log(`${this.name}'s favorite subject is ${this.favSubjects[0]}.`);
        } else {
            this.favSubjects.forEach((sub, i) => {
                if(i === 0) {
                    favSubjectsString = `${sub}`;
                }
                else if(i === (this.favSubjects.length - 1)){
                    favSubjectsString = `${favSubjectsString}, and ${sub}`;
                } else {
                    favSubjectsString = `${favSubjectsString}, ${sub}`;
                }
            });
            console.log(`${this.name}'s favorite subjects are ${favSubjectsString}.`);
        }
        //Logs students favorite subjects one by one as directed in readme.
        // this.favSubjects.forEach(sub => {
        //     console.log(sub);
        // })
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
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

//Testing

console.warn('Student Class Testing');
//Student Class Testing
const Bobby = new Student({
    name: 'Bobby',
    location: 'Earth',
    age: 22,
    gender: 'male',
    previousBackground: 'Secret Shopper',
    className: 'CS1',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

Bobby.speak();
Bobby.listsSubjects();
Bobby.PRAssignment('JavaScript IV');
Bobby.sprintChallenge('React');

console.warn('Instructor Class Testing');
//Instructor Class Testing
const Joe = new Instructor({
    name: 'Joe',
    location: 'Mars',
    age: 28,
    gender: 'male',
    specialty: 'React, Redux, GraphQL',
    favLanguage: 'JavaScript',
    catchPhrase: 'Today we are going to be working on stuff'
});

Joe.speak();
Joe.demo('GraphQL, and Apollo Client');
Joe.grade(Bobby, 'Redux');

console.warn('ProjectManager Class Testing');
//ProjectManager Class Testing
const Delilah = new ProjectManager({
    name: 'Delilah',
    location: 'Earth',
    age: 30,
    gender: 'female',
    gradClassName: 'CS8',
    favInstructor: 'Joe',
    specialty: 'Django',
    favLanguage: 'Python',
    catchPhrase: 'Catch Phrase'
});

Delilah.speak();
Delilah.standUp('CS13');
Delilah.debugsCode(Bobby, 'JavaScript');
Delilah.demo('Advanced CSS 2');
Delilah.grade(Bobby, 'Advanced CSS 1');

//End Testing