// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}// Person

const jack = new Person ({
  name: 'Jack Sparrow',
  age: 'unknown',
  location: 'the Caribbean',
  gender: 'M'
});

const frank = new Person ({
  name: 'Frank Gallagher',
  age: 58,
  location: 'South Side, Chicago',
  gender: 'M'
});// Person examples


  
class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
  changeGrade(student) {
    if(Math.random() >= 0.5) {
      student.grade += Math.round(Math.random() * 10);
    } else {
      student.grade -= Math.round(Math.random() * 10);
    }
    if(student.grade >= 100) {
      student.grade = 100;
    }
    console.log(student.grade);
  }
}// Instructor



const will = new Instructor ({
  name: 'Will Turner',
  age: 45,
  location: 'The Flying Dutchman',
  gender: 'M',
  specialty: 'Back-End',
  favLanguage: 'Python',
  catchPhrase: 'I\'m not a pirate!'
});

const elizabeth = new Instructor ({
  name: 'Elizabeth Swann',
  age: 42,
  location: 'the Caribbean',
  gender: 'F',
  specialty: 'Front-End',
  favLanguage: 'HTML',
  catchPhrase: 'Where\'s Will?'
});// Instructor examples



class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
    this.grade = studentProps.grade;
  }
  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are:`);
    this.favSubjects.forEach(function(element) {
      console.log(`- ${element}`);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}// Student

const leonardo = new Student ({
  name: 'Leonardo',
  age: 'teenage',
  location: 'the New York sewers',
  gender: 'M',
  previousBackground: 'pet shop display piece',
  className: 'CS16',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
  grade: 90
});

const donatello = new Student ({
  name: 'Donatello',
  age: 'teenage',
  location: 'the New York sewers',
  gender: 'M',
  previousBackground: 'pet shop display piece',
  className: 'CS15',
  favSubjects: ['Java', 'Python'],
  grade: 82
});

const michelangelo = new Student ({
  name: 'Michelangelo',
  age: 'teenage',
  location: 'the New York sewers',
  gender: 'M',
  previousBackground: 'pet shop display piece',
  className: 'CS14',
  favSubjects: ['Ruby', 'C#', 'C++', 'React'],
  grade: 98
});

const raphael = new Student ({
  name: 'Raphael',
  age: 'teenage',
  location: 'the New York sewers',
  gender: 'M',
  previousBackground: 'pet shop display piece',
  className: 'CS13',
  favSubjects: ['Rust'],
  grade: 60
});// Student examples



class ProjectManager extends Instructor {
  constructor(prjMgrProps) {
    super(prjMgrProps);
    this.gradClassName = prjMgrProps.gradClassName;
    this.favInstructor = prjMgrProps.favInstructor;
  }
  standUp(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}// Project Manager

const diana = new ProjectManager ({
  name: 'Princess Diana of Themyscira',
  age: 5000,
  location: 'Mount Olympus',
  gender: 'F',
  specialty: 'Full Stack',
  favLanguage: 'React',
  catchPhrase: 'Merciful Minerva!',
  gradClassName: 'CS1',
  favInstructor: "Elizabeth"
});

const jean = new ProjectManager ({
  name: 'Jean Grey',
  age: 37,
  location: 'X-Men Mansion',
  gender: 'F',
  specialty: 'Full Stack',
  favLanguage: 'java',
  catchPhrase: 'X-Men, Go!',
  gradClassName: 'CS8',
  favInstructor: 'Will'
});

const natalia = new ProjectManager ({
  name: 'Natalia Alianovna Romanova',
  age: 33,
  location: 'Avengers secret hideout',
  gender: 'F',
  specialty: 'Back-End',
  favLanguage: 'Ruby',
  catchPhrase: 'Hey there, big guy.',
  gradClassName: 'CS9',
  favInstructor: 'Elizabeth'
});// Project Manager examples