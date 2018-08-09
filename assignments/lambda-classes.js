// Create classes
class Person  {
  constructor(info) {
    this.name = info.name;
    this.location = info.location;
    this.age = info.age;
    this.gender = info.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorInfo) {
    super(instructorInfo);
    this.specialty = instructorInfo.specialty;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
  }
  demo(subject)  {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  changeGrade(student)  {
    let gradePoints = null;
    const oldGrade = student.grade;
    if (Math.random() < .5) {
      gradePoints = 1 * (Math.floor(Math.random() * 10));
    } else {
      gradePoints = -1 * (Math.floor(Math.random() * 10));
    }

    student.grade = student.grade + gradePoints;
    
    if (student.grade > 100) {
      student.grade = 100;
    } else if  (student.grade < 0)  {
      student.grade = 0;
    }
    return `${this.name} changed ${student.name}'s grade from ${oldGrade} to ${student.grade}`;
  }
}

class Student extends Person  {
  constructor(studentInfo)  {
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
    this.grade = studentInfo.grade;
  }
  listsSubjects() {
    return this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject)  {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate()  {
    if  (this.grade > 70)  {
      return `Congratulations ${this.name}! You pass!`
    } else  {
      return `Keep working to increase your grade, ${this.name}`
    }
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerInfo) {
    super(projectManagerInfo);
    this.gradClassName = projectManagerInfo.gradClassName;
    this.favInstructor = projectManagerInfo.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`
  }
  debugsCode(student, subject)  {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}


// Create objects
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const caleb = new Student({
  name: 'Caleb',
  location: 'Hometown',
  age: 24,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Goodness gracious! Gee wilikers`,
  previousBackground: 'Pizza Hut General Manager',
  className: 'CS13',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  grade: 70
});

const bob = new ProjectManager({
  name: 'Bob',
  location: 'Utopia',
  age: 29,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Hello world!`,
  gradClassName: 'CS3',
  favInstructor: 'Josh'
});

// console.logs to test
console.log(fred.name);
console.log(fred.speak());
console.log(fred.demo('math'));
console.log(caleb.age);
caleb.listsSubjects();
console.log(caleb.PRAssignment('JavaScript'));
console.log(caleb.sprintChallenge('HTML'));
console.log(fred.grade(caleb, 'math'));
console.log(bob.gradClassName);
console.log(bob.debugsCode(caleb, 'HTML'));
console.log(bob.standUp('My_Channel'));
console.log(bob.grade(caleb, 'CSS'));
console.log(fred.changeGrade(caleb));
console.log(fred.changeGrade(caleb));
console.log(fred.changeGrade(caleb));
console.log(caleb.grade);
console.log(caleb.graduate());