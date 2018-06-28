class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    adjustGrade(student) {
        student.grade += Math.round(Math.random()) * 2 - 1;
        console.log(`${student.name}'s grade has been adjusted to ${student.grade}`)
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} has graduated!`);
        } else {
            console.log(`Sorry, ${this.name} still has work to do before they can graduate.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

  const josh = new Instructor({
    name: 'Josh',
    location: 'Provo',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `DRY`
  });

  const nathan = new ProjectManager({
    name: 'Nathan',
    location: 'SomeTown',
    age: 25,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Awesome job today`,
    gradClassName: 'CS4',
    favInstructor: 'josh'
  });

  const kate = new ProjectManager({
    name: 'Kate',
    location: 'NYC',
    age: 26,
    gender: 'female',
    favLanguage: 'Javascript',
    specialty: 'UI',
    catchPhrase: `Don't repeat yourself!`,
    gradClassName: 'CS3',
    favInstructor: 'josh'
  });

  const lauren = new Student({
    name: 'Lauren',
    location: 'Seattle',
    age: 24,
    gender: 'female',
    previousbackground: 'Java and swift',
    className: 'CS12',
    favSubjects: ['JavaScript', 'CSS', 'BootStrap'],
    grade: 90
  });

  const percy = new Student({
    name: 'Percy',
    location: `Lauren's house`,
    age: 3,
    gender: 'male',
    previousbackground: 'being a cat',
    className: 'CS12',
    favSubjects: ['meowing', 'purring', 'cuddling'],
    grade: 100
  });

  fred.speak();
  nathan.speak();
  lauren.speak();

  fred.demo('BootStrap');
  josh.grade(lauren, 'JavaScript');

  percy.listsSubjects();
  lauren.PRAssignment('BootStrap');
  lauren.sprintChallenge('JavaScript');
  lauren.graduate();

  kate.standUp('CS_12');
  nathan.debugsCode(lauren, 'UI');
  nathan.adjustGrade(lauren);
