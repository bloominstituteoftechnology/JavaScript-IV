// CODE here for your Lambda Classes

//* Person Class
class Person {
  constructor (props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


//* Instructor Class <- Person
class Instructor extends Person {
  constructor (instructorProps) {
    super (instructorProps)
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo (subject) {
    return `Today we are learning about ${subject}`;
  }
  grade (student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  gradeStudent (student) {
    const addOrSubtract = Math.floor(Math.random() * Math.floor(10));
    const addOrSubtractAmount = Math.floor(Math.random() * Math.floor(21));
    if (addOrSubtract > 5) {
      student.classGrade += addOrSubtractAmount;
    } else if (addOrSubtract <= 5) {
      student.classGrade -= addOrSubtractAmount;
    }
  }
}


//* Student Class <- Person
class Student extends Person {
  constructor (studentProps) {
    super (studentProps)
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
    this.classGrade = studentProps.classGrade;
  }
  listsSubjects () {
    return this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun spring challenge on ${subject}`
  }
  graduateChecker () {
    if (this.classGrade > 70) {
      return `Congrats ${this.name}, you have graduated!`
    } else if (this.classGrade > 100) {
      return `WOW! ${this.name} you have graduated with honers, CONGRATS!!`
    } else if (this.classGrade < 70) {
      return `Still need some work, ${this.name}, contact your PM!`
    }
  }
}


//* Project Manager <- Instructor
class ProjectManager extends Instructor {
  constructor(pmProps) {
    super (pmProps)
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
    this.standUp = pmProps.standUp;
  }
  debugsCode (student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}


const instructor1 = new Instructor ({
  name: 'Mike',
  location: 'LA',
  specialty: 'JS',
  className: 'test',
  otherTest: 'hello',
})

const student1 = new Student ({
  name: 'James',
  location: 'LA',
  favLanguage: 'Greek',
  favSubjects: ['stuff', 'other stuff', 'more stuff'],
  classGrade: 90,
})

const pm1 = new ProjectManager ({
  name: 'Neal',
  location: 'LA',
  favLanguage: 'Chinese',
  favInstructor: 'Mike',
  favSubjects: ['some stuff', 'more stuff', 'more more stuff'],
})


console.log(instructor1.demo('Math'));
console.log(instructor1.grade(student1, 'Math'));


console.log(student1.classGrade);
instructor1.gradeStudent(student1);
pm1.gradeStudent(student1);
console.log(student1.classGrade);

console.log(student1.graduateChecker());


console.log(student1.speak());
console.log(student1.listsSubjects());
console.log(student1.PRAssignment('Math'));
console.log(student1.sprintChallenge('Math'));

console.log(pm1.debugsCode(student1, 'Math'));

// Sibling lost connection example
// console.log(pm1.PRAssignment('Subject'));




