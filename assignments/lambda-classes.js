// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
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
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        console.log(`${this.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
          });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
     
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Instructors
const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`
  });

  const wilma = new Instructor({
    name: 'Wilma',
    age: 35,
    location: 'Bedrock',
    gender: 'female',
    specialty: 'back-end',
    favLanguage: 'Ruby',
    catchPhrase: `Anything but callback hell!`
  });

  const barney = new Student({
    name: 'Barney',
    age: 28,
    location: 'Bedrock',
    gender: 'male',
    previousBackground: 'Digger',
    className: 'CSPT3',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });

  const shleprock = new Student({
    name: 'Shleprock',
    age: 30,
    location: 'Bedrock',
    gender: 'male',
    previousBackground: 'Thinker',
    className: 'CSPT3',
    favSubjects: ['Ruby', 'Kotlin', 'JavaScript'],
  });
  
console.log(fred);
console.log(fred.speak());
console.log(wilma);
console.log(wilma.demo('HTML'));

console.log(barney);
console.log(barney.PRAssignment('HTML'));
console.log(barney.sprintChallenge('JavaScript'));
console.log(barney.listsSubjects());

console.log(shleprock);
console.log(shleprock.PRAssignment('Ruby'));
console.log(shleprock.sprintChallenge('HTML'));
shleprock.listsSubjects();