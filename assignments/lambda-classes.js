// CODE here for your Lambda Classes
//
function biasGrade(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person {
  constructor(personProps) {
    this.name = personProps.name;
    this.age = personProps.age;
    this.location = personProps.location;
    this.gender = personProps.gender;
  }

  speak() {
    return console.log(
      `Hello my name is ${this.name}, I am from ${this.location}.`,
    );
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
    return console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    return console.log(
      `${student.name} receives a perfect score on ${subject}`,
    );
  }

  biasGrading(student, callback) {
    let grade = student.grade;
    while (grade < 70) {
      grade += biasGrade(-20, 50);
      callback(grade);
    }
    console.log(grade);
  }

  graduate(grade) {
    if (grade < 70) {
      console.log(
        `I'm sorry, there must be an error with my grading. I show you made a ${grade} Let me go check.`,
      );
    } else {
      console.log(`Congradulations, your grade is ${grade}. You graduate`);
    }
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
    this.grade = 50;
  }

  listsSubjects() {
    return this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const conner = new Student({
  name: 'Conner',
  age: 27,
  location: 'Dallas, Tx',
  gender: 'M',
  previousBackground: `Supervisor of a contruction crew for 15 years`,
  className: 'FTWB55',
  favSubjects: ['science', 'math', 'biology', 'chemestry', 'ext'],
});

// conner.speak();
// conner.listsSubjects();
// conner.PRAssignment('JavaScript IIIII');
// conner.sprintChallenge('JavScript IIIII');

class ProjectManager extends Instructor {
  constructor(prProps) {
    super(prProps);
    this.gradClassName = prProps.gradClassName;
    this.favInstructor = prProps.favInstructor;
  }

  standUp(channel) {
    return console.log(
      `${this.name} announces to ${channel}, @${channel} standup times!`,
    );
  }

  debugsCode(student, subject) {
    return console.log(
      `${this.name} debugs ${conner.name}'s code on ${subject}`,
    );
  }
}

const matthews = new ProjectManager({
  name: 'Matthews',
  age: 55,
  location: 'Nevada',
  gender: 'F',
  specialty: 'Python',
  favLanguage: 'Ruby',
  catchPhrase: "If it isn't broken do not fix it",
  gradClassName: 'Lambda 101',
  favInstructor: 'Davis',
});

matthews.biasGrading(conner, matthews.graduate);

// console.log(matthews);
// matthews.standUp('FWSSS');
// matthews.debugsCode(conner, 'science');
//
