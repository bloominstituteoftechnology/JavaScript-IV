// CODE here for your Lambda Classes

// Base - class

class Person {
  // Create new constructor
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location
    this.gender = attrs.gender;

  }
  speak() {
    console.log(`Hello my name is ${this.name} and im from ${this.location}`);
  }
}


class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}




class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;

  }
  listsSubjects() {
    for (let i = 0;i < this.favSubjects.length; i++) {
      console.log(`${this.name} favorite subject is ${this.favSubjects[i]}`)
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectMananger extends Instructor {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}





// Instructors:

const josh = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const dan = new Instructor({
  name: 'Dan',
  location: 'Arizona',
  age: 33,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'back-end',
  catchPhrase: `Dodgerblue`
});

const cameron = new Instructor({
  name: 'Cameron',
  location: "Nevada",
  age: 30,
  gender: 'male',
  favLanguage: 'C',
  specialty: 'Full-stacks',
  catchPhrase: `Yabbadabadooo!`
});



// Students:
const bao = new Student({
  name: 'Bao',
  location: 'Minnesota',
  age: 25,
  gender: 'male',
  previousBackground: 'Healtchare Claim Specialist',
  className: 'FSWPT3',
  favSubjects:['Java', 'JavaScript', 'Algorithm']
});

const brett = new Student({
  name: 'Brett',
  location: 'Oregon',
  age: 45,
  gender: 'male',
  previousBackground: 'Data analyst',
  className: 'FSWPT3',
  favSubjects:['JavaScript', 'C', 'C#']
});


// Project Managers
const alpha = new ProjectMananger ({
  name: 'Alpha',
  location: 'Texas',
  age: 31,
  gender: 'male',
  gradClassName: 'CS13',
  favLanguage: 'JavaScript',
  specialty: 'back-end',
  catchPhrase: `Love Javascript!`,
  favInstructor: 'Cam',
});

const omega = new ProjectMananger ({
  name: 'Omega',
  location: 'California',
  age: 27,
  gender: 'male',
  gradClassName: 'CS11',
  favLanguage: 'C',
  specialty: 'SQL',
  catchPhrase: 'fascinating about Big data',
  favInstructor: 'Josh'
});

josh.speak();
josh.demo('Prototypes');
josh.grade(bao, 'classes');

cameron.speak();
cameron.demo('React');
cameron.grade(bao, 'css');

alpha.speak();
alpha.demo('Prototypes');
alpha.grade(bao, 'Cabllbacks');
alpha.debugsCode(brett, 'React');
alpha.standUp('#FSWPT3')

bao.speak();
bao.listsSubjects();
bao.PRAssignment("Classes")
bao.sprintChallenge("JavaScript Fundamentals")

brett.speak();
brett.listsSubjects();
brett.PRAssignment("Closures")
brett.sprintChallenge("React")
