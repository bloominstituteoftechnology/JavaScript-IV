// CODE here for your Lambda Classes


class Person {
    constructor(people) {
        this.name = people.name;
        this.age = people.age;
        this.location = people.location;
    }

    phrase() {
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
        console.log(`Today we are learning about ${this.specialty}.`);
    }
    grade(student,subject) {
        console.log(`${this.name} receives a perfect score on ${this.favSubjects}`);
    }

}


class Student extends Person {
    constructor(learner){
        super(learner);
        this.previousBackground = learner.previousBackground;
        this.className = learner.className;
        this.favSubjects = learner.favSubjects;
    }
   listsSubjects(Student)['Html', 'CSS', 'JavaScript'] {
        console.log(listsSubjects);
    }
    prAassignmen(subject) {
        console.log(`${this.className} has submitted a PR for ${this.favSubjects}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.className} has begun the sprint challenge on ${this.favSubjects}`);
    }
}


class Team Lead extends Instructor {
    constructor(tl) {
    super(tl);
    this.gradClassName = tl.gradClassName;
    this.favInstructor = tl.favInstructor;
    }
    standUp = function('slack channel') {
        console.log(`${this.favInstructor} announces to ${this.gradClassName}, @channel standy times!`);
    }
    debugsCode = function(student, subject) {
        console.log(`${this.favInstructor} debugs ${this.name} code on ${this.favSubjects}`)
    }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});