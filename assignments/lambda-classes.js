// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;

    }
    speak() {
        //console.log(`Object was removed from the game.`);
        return `Hello my name is Fred, I am from Bedrock`;
    }
}


class Instructor extends Person {
    constructor(InstrucAttributes) {
        super(InstrucAttributes);
        this.specialty = InstrucAttributes.specialty;
        this.favLanguage = InstrucAttributes.favLanguage;
        this.catchPhrase = InstrucAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}`;
    }

}

class student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;

    }

    listsSubjects() {
        return this.favSubjects.forEach(favSubjects => {
            console.log(favSubjects);
        });
    }

    PRAssignment(subject) { `${student.name} has submitted a PR for ${subject}` }

    sprintChallenge(subject) { `${student.name} has begun sprint challenge on ${subject}` }
}

class ProjectManager extends Instructor {
    constructor(projectAttributes) {
        super(projectAttributes);
        this.gradClassName = projectAttributes.gradClassName;
        this.favInstructor = projectAttributes.favInstructor;

    }
    standUp(slack_channel) { `${ name } announces to ${ channel }, @channel standy times!​​​​​`; }

    debugsCode(student, subject) {
        `${ name } debugs ${ student.name }'s code on ${subject}`;
    }


}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const teacher = new Instructor({
    name: 'Prof_KnowItAll',
    location: 'Campus Facilities',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Automation',
    catchPhrase: `Wax on wax off`
});

const pM1 = new ProjectManager({
    name: 'pM1',
    location: 'internet',
    age: 26,
    gender: 'female',
    gradClassName: 'FSW11',
    favInstructor: teacher.name
});

const studentMe = new Student({
    name: 'Mr.MEtelus',
    location: 'New York',
    age: 34,
    gender: 'male',
    previousBackground: 'various',
    className: 'FSW15',
    favSubjects: ['JavaScript', 'Python', 'Algorithms', 'Data Structures'],
    assignments: [],
    grade: 0,
});


const assignment0 = new Assignment({
    name: `Group Introductions`,
    grade: 85
})