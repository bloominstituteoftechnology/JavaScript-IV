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
        return `${student.name} receives a perfect score on ${subject}`;
    }

    studentGrade(student) {
        // const temp = student.grade - 5;
        // return `${temp}`       
        const min = -5;
        const max = 5;
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
        
        student.grade += getRandomInt(min, max);

        return `Student's new grade is: ${student.grade}`
    }

    bumpGrade(student, points) {
        student.grade += points;
        return `Student's new grade is: ${student.grade}`
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

    graduate() {
        if (this.grade > 70) {
            return `${this.name} qualifies for graduation!`;
        } else {
            return `${this.name} does not qualify for graduation yet.`;
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
        return `${this.name} announces to the #${channel} channel, @channel standup times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

  const slate = new ProjectManager ({
    name: 'Slate',
    age: 40,
    location: 'Bedrock',
    gender: 'male',
    specialty: 'front-end',
    favLanguage: 'Basic',
    catchPhrase: 'Don\'t let me catch you napping!',
    gradClassName: 'CSPT3',
    favInstructor: 'Cam Pope'
  });

  const dino = new ProjectManager ({
    name: 'Dino',
    age: 27,
    location: 'Bedrock',
    gender: 'male',
    specialty: 'full-stack',
    favLanguage: 'JavaScript',
    catchPhrase: 'I am smarter than Fred is!',
    gradClassName: 'CSPT3',
    favInstructor: 'Big Josh Knell'
  });

  const barney = new Student({
    name: 'Barney',
    age: 28,
    location: 'Bedrock',
    gender: 'male',
    previousBackground: 'Digger',
    className: 'CSPT3',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 90,
  });

  const shleprock = new Student({
    name: 'Shleprock',
    age: 30,
    location: 'Bedrock',
    gender: 'male',
    previousBackground: 'Thinker',
    className: 'CSPT3',
    favSubjects: ['Ruby', 'Kotlin', 'JavaScript'],
    grade: 62,
  });
  
console.log(fred);
console.log(fred.speak());
console.log(fred.demo('JavaScript'));
console.log(fred.grade(barney,'JavaScript'));
console.log(wilma);
console.log(wilma.demo('HTML'));
console.log(wilma.grade(shleprock,'Ruby'));

console.log(barney);
console.log(barney.PRAssignment('HTML'));
console.log(barney.sprintChallenge('JavaScript'));
barney.listsSubjects();

console.log(shleprock);
console.log(shleprock.PRAssignment('Ruby'));
console.log(shleprock.sprintChallenge('HTML'));
shleprock.listsSubjects();

console.log(slate);
console.log(slate.standUp('announcements'));
console.log(slate.debugsCode(shleprock, 'Javascript'));
console.log(slate.demo('CSS'));
console.log(slate.grade(barney,'HTML'));

console.log(dino);
console.log(dino.standUp('brownbag'));
console.log(dino.debugsCode(barney, 'CSS'));
console.log(dino.demo('Callbacks'));
console.log(dino.grade(shleprock, 'JavaScript'));

console.log(slate.studentGrade(shleprock));
console.log(dino.studentGrade(barney));
console.log(fred.studentGrade(barney));
console.log(wilma.studentGrade(shleprock));

console.log(barney.graduate());
console.log(shleprock.graduate());

console.log(fred.bumpGrade(shleprock,12));
console.log(shleprock.graduate());
