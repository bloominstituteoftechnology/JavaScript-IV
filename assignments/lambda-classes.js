// CODE here for your Lambda Classes


class Person {
    constructor(people) {
        this.name = people.name;
        this.age = people.age;
        this.location = people.location;
    }

    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }
}


class Instructor extends Person {
    constructor(teacher) {
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 35,
    favLanguage: ['JavaScript', 'Python', 'Elm'],
    specialty: 'redux',
    catchPhrase: `Don't forget the homies`
});


class Student extends Person {
    constructor(learner){
        super(learner);
        this.previousBackground = learner.previousBackground;
        this.className = learner.className;
        this.favSubjects = learner.favSubjects;
    }
   listsSubjects() {
       for(let i = 0; i < this.favSubjects.length; i++) {
           console.log(`One of ${this.name}'s favorite subject is ${this.favSubjects[i]}.`);
       }
    }
    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}

const sara = new Student({
    name: 'Sara',
    location: 'Colorado',
    age: 40,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    previousBackground: 'Radiology Technologist',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});


class TeamLead extends Instructor {
    constructor(oldPMs) {
    super(oldPMs);
    this.gradClassName = oldPMs.gradClassName;
    this.favInstructor = oldPMs.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standup times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name} code on ${subject}`)
    }
}

const jimmyJohn = new TeamLead({
    name: 'Jimmy John',
    location: 'Bedrock',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

console.log(jimmyJohn.name);
jimmyJohn.standUp('webpt8_Billy');
jimmyJohn.debugsCode(sara, 'Html');
fred.demo('math');
fred.grade(sara, 'JavaScript');
sara.listsSubjects();
sara.prAssignment('redux');
sara.sprintChallenge('JavaScript');