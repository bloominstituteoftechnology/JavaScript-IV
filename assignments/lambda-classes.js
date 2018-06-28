class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.name = personAttr.name;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);

    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
  // [string] subject 
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  // [object] student
  // [string] subject 
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  grading(student) {
    const randomIntegerOne = Math.floor(Math.random() * 100);
    const randomIntegerTwo = Math.floor(Math.random() * 100);
    let finalScore = student.grade - randomIntegerOne + randomIntegerTwo;

    if (finalScore > 100) {
      finalScore = 100;
    }
    
    if (finalScore < 0) {
      finalScore = 0;
    }

    student.grade = finalScore;

    return finalScore;
  }
}

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);

    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(function(subject) {
      console.log(subject);
    })
  }
  // [string] subject 
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}`);
  }

  graduate() {
    if (this.grade > 70) {
      console.log(`Congrats ${this.name}! You are ready to graduate from Lambda School :)`)
    } else {
      console.log(`Take your time and work more on what you do not understand :)`)
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);

    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
  }
   // [string] channel
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, string) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }

  grading(student) {
    const randomIntegerOne = Math.floor(Math.random() * 100);
    const randomIntegerTwo = Math.floor(Math.random() * 100);
    let finalScore = student.grade - randomIntegerOne + randomIntegerTwo;

    if (finalScore > 100) {
      finalScore = 100;
    }
    
    if (finalScore < 0) {
      finalScore = 0;
    }

    student.grade = finalScore;

    return finalScore;
  }
}

// Fake data
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const steven = new Student({
  name: 'steven',
  location: '404',
  age: 100,
  gender: 'male',
  favLanguage: 'Korean',
  specialty: '404',
  grade: (function() {return Math.floor( Math.random() * 100) })()
});