// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const barney = new Person({
    name: 'Barney',
    location: 'Bedrock',
    age: 37,
    gender: 'male'
});

console.log(barney);
console.log();
for(let key in barney) {
  console.log(barney[key]);
}
console.log();

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }

    randomGrade(object) {
      const option = Math.round(Math.random());
      if(option === 1) {
        object.grade += Math.round(Math.random());
      } else if(option === 0 && option.grade > 0)
      object.grade -= Math.round(Math.random());
      return object;
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

console.log(fred);
console.log();
for(let key in fred) {
  console.log(fred[key]);
}
console.log();

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = Math.round(Math.random() * 100);
  }

  listsSubjects() {
    return this.favSubjects;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}.`;
  }

  graduate(cb) {
    while(this.grade < 70) {
      console.log(this.grade);
      console.log(`You still have some work to do!`);
      cb(this);
    }
    return `Congratulations, you're ready to graduate from Lambda School!`;
  }
}

const bammBamm = new Student({
  name: 'Bamm-Bamm',
  location: 'Bedrock',
  age: 5,
  gender: 'male',
  previousBackground: 'previousBackground',
  className: 'className',
  favSubjects: ['favSubjects']
});

console.log(bammBamm);
console.log();
for(let key in bammBamm) {
  console.log(bammBamm[key]);
}
console.log();

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const wilma = new ProjectManager({
  name: 'Wilma',
  location: 'Bedrock',
  age: 35,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the ladies`,
  gradClassName: 'gradClassName',
  favInstructor: 'favInstructor'
});

console.log(wilma);
console.log();
for(let key in wilma) {
  console.log(wilma[key]);
}
console.log();

bammBamm.graduate(wilma.randomGrade);