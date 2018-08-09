// CODE here for your Lambda Classes
class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
        this.gender = atts.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}

class Instructor extends Person {
  constructor(instrAtts) {
      super(instrAtts);
      this.specialty = instrAtts.specialty;
      this.favLanguage = instrAtts.favLanguage;
      this.catchPhrase = instrAtts.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  changeGrade(student) {
      let ranNum = Math.floor(Math.random() * 51 - 25);
      if (ranNum === 0) {
        console.log(`${student.name}'s grade remains the same`)
      } else if (ranNum > 0) {
          console.log(`${student.name} did great! Their grade increased by ${ranNum}%!`);
          return student.grade = student.grade + ranNum;
      }
      else {
          console.log(`${student.name} did poorly and their grade decreased by ${ranNum}%!`)
          return student.grade = student.grade + ranNum;
      }
  }
}

class Student extends Person {
    constructor(studAtts) {
      super(studAtts);
        this.previousBackground = studAtts.previousBackground;
        this.className = studAtts.className;
        this.favSubjects = studAtts.favSubjects;
        this.grade = studAtts.grade;
    }
    listSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    readyToGrad() {
        if (this.grade > 70) {
            console.log(`Congratulations! You are ready to graduate!`);
        } else {
            console.log(`Chirp, chirp`)
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PRAtts) {
        super(PRAtts);
        this.gradClassName = PRAtts.gradClassName;
        this.favInstructor = PRAtts.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const travis = new Student ({
    name: 'Travis',
    age: 29,
    location: 'Washington, D.C.',
    gender: 'M',
    previousBackground: `Marketing/Business`,
    className: 'CS13',
    favSubjects: 'JavaScript',
    grade: 95
});

const melanie = new Instructor ({
    name: 'Melanie',
    age: 'Not telling',
    location: 'Classroom....always',
    gender: 'F',
    speciality: 'JS',
    favLanguage: 'JS',
    catchPhrase: 'GO GET \'EM'
})

const jack = new ProjectManager ({
    name: 'Jack',
    age: 35,
    location: 'Kentucky',
    gender: 'M',
    gradClassName: 'CS1',
    favInstructor: 'Josh'
})

console.log(travis.name);
console.log(travis.PRAssignments('JavaScript'));
console.log(melanie.catchPhrase);
console.log(melanie.demo('JS'));
console.log(jack.name);
console.log(jack.debugsCode(travis, 'JavaScript'))
jack.changeGrade(travis);
travis.readyToGrad();
