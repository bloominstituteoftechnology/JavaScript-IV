// CODE here for your Lambda Classes

//  Base class
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }

    speak(){
        console.log(`Hello my name is ${this.name}. I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instructorAtt){
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(studentAtt){
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
    }

    listsSubjects(){
        console.log('Student\'s favorite subjects: ');
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        })
    }
    
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

}

class ProjectManagers extends Instructor {
    constructor(pmAtt){
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }

    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`);
    }
}

const personJorge = new Person({
    name: 'Jorge Bravo',
    location: 'Brooklyn',
    age: 25,
    gender: 'male',
})

const instructorKnell = new Instructor({
    name: 'Josh Knell',
    location: 'Utah',
    age: 32,
    gender: 'male',
    specialty: 'Redux',
    favLanguage: 'JS',
    catchPhrase: 'Don\'t forget the homies',
    subject: 'JS Fundamentals',
    student: {
        name : 'Karla',
    },
});

const studentKarla = new Student({
    name: 'Karla Parraga',
    location: 'NYC',
    age: 28,
    gender: 'female',
    previousBackground:  'Electrical Engineering',
    className: 'CSPT13',
    favSubjects: ['Math', 'Computer Science', 'Law'],
});

const pmAustin = new ProjectManagers({
    name: 'Austin Pendergrast',
    location: 'Texas',
    age: 25,
    gender: 'male',
    gradClassName: 'CS13',
    favInstructor: 'Knell',
})

console.log(personJorge);
console.log(instructorKnell);
console.log(studentKarla);
console.log(pmAustin);
personJorge.speak();
instructorKnell.demo('CS');
instructorKnell.grade({name: 'Karla'}, 'FSWD');
console.log('Instructor\'s catchy phrase: '+ instructorKnell.catchPhrase);
studentKarla.listsSubjects();
studentKarla.PRAssignment('JavaScript');
studentKarla.sprintChallenge('JavaScript');
console.log('Student\'s previous background: '+ studentKarla.previousBackground);
pmAustin.standUp('fswpt3_austin');
pmAustin.debugsCode({name: 'Karla'}, 'JavaScript');
console.log('PM\'s favorite instructor: '+ pmAustin.favInstructor);