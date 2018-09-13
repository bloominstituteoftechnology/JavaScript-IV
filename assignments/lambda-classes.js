// CODE here for your Lambda Classes
class Person {
    constructor(details) {
        this.name = details.name;
        this.location = details.location;
        this.age = details.age;
        this.gender = details.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, i am from ${this.location}!`);
    }
}

class Instructor extends Person {
    constructor(instDetails) {
        super(instDetails);
        this.specialty = instDetails.specialty;
        this.favLanguage = instDetails.favLanguage;
        this.catchPhrase = instDetails.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }

    sinkOrSwim(student) {
        student.grade += Math.floor(Math.random() * 201) - 100;
    }

    sinkOrSwim(student) {
        const factor = Math.floor(Math.random() * 201) - 100;
        let grade = student.grade + factor;

        if (grade < 0) {
            grade = 0
        } else if ( grade > 100) {
            grade = 100;
        }

        student.grade = grade;
        console.log(`\n${student.name} was graded by ${this.name}\nHis new grade: ${student.grade}`)
    }

}

class Student extends Person {
    constructor(studentDetails) {
        super(studentDetails);
        this.previousBackground = studentDetails.previousBackground;
        this.className = studentDetails.className;
        this.favSubjects = studentDetails.favSubjects;
        this.grade = studentDetails.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }

    graduate(){
        if(this.grade > 70) {
            console.log(`${this.name} is ready to graduate from Lambda School with a grade of ${this.grade}!!!!!`);
        } else {
            console.log(`${this.name} is not ready to graduate from Lambda with a grade of ${this.grade}`);
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(pmDetails) {
        super(pmDetails);
        this.gradClassName = pmDetails.gradClassName;
        this.favInstructor = pmDetails.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const chris = new Student({
    name: 'Chris',
    location: 'Queens NY',
    age: 23,
    gender: 'male',
    previousBackground: 'Freelance Websites',
    className: 'FSW 14',
    favSubjects: ['CSS / LESS', 'Javascript', 'Node.JS', 'Python'],
    grade: 100
})

const bill = new ProjectManagers({
    name: 'William',
    location: 'City of a State',
    age: 23,
    gender: 'male',
    gradClassName: 'FSW 14',
    favInstructor: 'Batman Josh',
});

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 29,
    gender: 'male',
    favLanguage: 'Flash',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

chris.speak();
chris.listsSubjects();
chris.PRAssignment('Javascript');
chris.sprintChallenge('React');

bill.speak();
bill.standUp('fsw14_bill');
bill.debugsCode(chris, 'Javascript');

josh.speak();
josh.demo('Javascript');
josh.grade(chris, 'Javascript');


josh.sinkOrSwim(chris);
josh.sinkOrSwim(chris);
bill.sinkOrSwim(chris);
bill.sinkOrSwim(chris);

chris.graduate();