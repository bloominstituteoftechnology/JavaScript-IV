// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    };
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
    grade(student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
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
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${this.name} loves ${this.favSubjects[i]}`);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} submitted a PR for ${subject}`);
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
       console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


  const josh = new Instructor({
    name: 'Josh',
    location: 'Pheonix',
    age: 34,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Isn't that awesome guys?`
  });

  const dustin = new Instructor({
    name: 'Dustin',
    location: 'San Diego',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `It's in the training kit`
  });

  const megan = new Student({
    name: 'Megan',
    location: 'Austin',
    age: 32,
    gender: 'female',
    previousBackground: 'Vape Industry',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const sam = new Student({
    name: 'Sam',
    location: 'Colorado Springs',
    age: 37,
    gender: 'male',
    previousBackground: 'Medical',
    className: 'FSW16',
    favSubjects: ['CSS', 'HTML']
  });

  const norman = new Student({
    name: 'Norman',
    location: 'White Pine Bay',
    age: 22,
    gender: 'male',
    previousBackground: 'Motel business',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const david = new ProjectManager({
    name: 'David',
    location: 'Denver',
    age: 34,
    gender: 'male',
    gradClassName: 'CS9',
    favInstructor: 'Dustin',
  });

  const fred = new ProjectManager({
    name: 'Fred',
    location: 'New York',
    age: 37,
    gender: 'male',
    gradClassName: 'CS6',
    favInstructor: 'Josh',
  });

josh.speak();
dustin.demo('variables');
josh.grade(megan, 'JavaScript');

norman.speak();
sam.listsSubjects();
norman.PRAssignment('Redux');
console.log(megan.sprintChallenge('Pre-proccessing'));

david.speak();
fred.demo('Redux');
david.grade(norman, 'const vs let');
fred.debugsCode(sam, 'JavaScript');
david.standUp('#Code-Masters');


