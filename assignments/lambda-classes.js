
//Person: Base class
class Person {
  constructor(personAttributes) {
    this.name     = personAttributes.name;
    this.age      = personAttributes.age;
    this.location = personAttributes.location;
    this.gender   = personAttributes.gender;
  }
  speak() {
    const phrase = `Hello my name is ${this.name}, I am from ${this.location}.`;
    console.log(phrase);
    return phrase;
  }
}

// Instructor: Inherits from Person
class Instructor extends Person {
  constructor(instructorProperties) {
    super(instructorProperties);
    this.specialty   = instructorProperties.specialty;
    this.favLanguage = instructorProperties.favLanguage;
    this.catchPhrase = instructorProperties.catchPhrase;
  }
  demo(subject) {
    const phrase = `Today we are learning about ${subject}.`;
    console.log(phrase);
    return phrase;
  }
  grade(student, subject) {
    const phrase = `${student.name} receives a perfect score on ${subject}.`;
    console.log(phrase);
    return phrase;
  }
  ChangeGrade(student, subject, addOrSub) {
    let newGrade = 0;
    let phrase = '';
    if(addOrSub === 'add') {
      //If grade already a 100, can't add more
      if (student.grade === 100) {
        phrase = `Student ${student.name} has a grade of 100 in subject ${subject}. Can not add to grade.`;
        console.log(phrase);
        return phrase;
     }
      newGrade = student.grade + Math.floor(Math.random() * 100);
    } else {
      //If grade already a 0, can't make it lower
      if(student.grade === 0) {
        phrase = `Student ${student.name} has a grade of 0 in subject ${subject}. Can not lower grade.`;
        console.log(phrase);
        return phrase;
      }
      newGrade = student.grade - Math.floor(Math.random() * 100);
    }
    //Make sure new grade is between 0 and 100 
    if(newGrade < 0) {
      newGrade = 0;
    }
    if(newGrade > 100) {
      newGrade = 100;
    }
    phrase = `Student ${student.name}'s grade in subject ${subject} went from ${student.grade} to ${newGrade}.`;
    console.log(phrase);
    student.grade = newGrade;
    return newGrade;
  }
}

//Student: Inherits from Person
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className          = studentAttributes.className;
    this.favSubjects        = studentAttributes.favSubjects;
    this.grade              = Math.floor(Math.random() * 100);
  }
  listsSubjects() {
    let phrase = this.name + "'s favorite Subjects: ";
    this.favSubjects.forEach(subject => phrase += subject + " ");
    console.log(phrase);
    return phrase;
  }
  PRAssignment(subject) {
    const phrase = `${this.name} has submitted a PR for ${subject}.`;
    console.log(phrase);
    return phrase;
  }
  sprintChallenge(subject) {
    const phrase = `${this.name} has begun sprint challenge on ${subject}.`
    console.log(phrase);
    return phrase;
  }
}

//Project manager: Inherits from Instructor
class Manager extends Instructor {
  constructor (managerProperties) {
    super(managerProperties);
    this.gradeClassName = managerProperties.gradeClassName;
    this.favInstructor  = managerProperties.favInstructor;
  }
  standUp(slackChannel) {
    const phrase = `${this.name} announces to ${slackChannel}, @channel standy times!`;
    console.log(phrase);
    return phrase;
  }
  debugsCode(student, subject) {
    const phrase = `${this.name} debugs ${student.name}'s code on ${subject}.`;
    console.log(phrase);
    return phrase;
  }
}

//Create examples of Instructor, Student, and Manager to test the classes and methods
const instructor1 = new Instructor({
  name       : 'Chris',
  age        : 28,
  location   : 'California',
  gender     : 'Male',
  specialty  : 'React',
  favLanguage: 'Javascript',
  catchPhrase: 'Use debugger to find bugs'
});

const student1 = new Student({
  name              : 'Leila',
  age               : 44,
  location          : 'Houston',
  gender            : 'Female',
  previousBackground: 'Computer Science',
  className         : 'FSWPT3',
  favSubjects       : ['HTML', 'CSS', 'JavaScript']
});

const manager1 = new Manager ({
  name          : 'Daniel',
  age           : 30,
  location      : 'Austin',
  gender        : 'Female',
  gradeClassName: 'CSPT4',
  favInstructor : 'Dan',
  specialty     : 'Back-end',
  favLanguage   : 'JavaScript',
  catchPhrase   : 'HELLOOOOOO!!!!'
});

const instructor2 = new Instructor({
  name       : 'Ben',
  age        : 26,
  location   : 'San Antonio',
  gender     : 'Male',
  specialty  : 'Front-end',
  favLanguage: 'Python',
  catchPhrase: 'Remember TRBL'
});

const student2 = new Student({
  name              : 'Anissa',
  age               : 18,
  location          : 'Sugar Land',
  gender            : 'Female',
  previousBackground: 'High School',
  className         : 'FSWPT10',
  favSubjects       : ['HTML', 'CSS']
});

const manager2 = new Manager({
  name          : 'Aida',
  age           : 20,
  location      : 'Dallas',
  gender        : 'Female',
  gradeClassName: 'CS15',
  favInstructor : 'Chris',
  specialty     : 'CSS',
  favLanguage   : 'HTML',
  catchPhrase   : 'Love Bootstrap!!!'
});

console.log('************ Method outputs ************');
instructor1.speak();
instructor2.speak();
student1.speak();
student2.speak();
manager1.speak();
manager2.speak();

instructor1.demo('Flexbox');
instructor2.demo('LESS');
student1.listsSubjects();
student2.listsSubjects();
manager1.standUp('FSWPT3');
manager2.standUp('CSPT3');

instructor1.grade(student1, 'Flexbox');
instructor2.grade(student2, 'LESS');
student1.PRAssignment('User Interface II');
student2.sprintChallenge('JavaScript Fundamentals');
manager1.debugsCode(student1, 'User Interface');
manager2.debugsCode(student2, 'JavaScript Fundamentals');
manager1.demo('Callbacks');
manager2.demo('Array functions');
manager1.grade(student2, 'Callbacks');
manager2.grade(student1, 'array functions');

//Testing the change grade method
instructor1.ChangeGrade(student1, 'JavaScript', 'add');
instructor2.ChangeGrade(student2, 'JavaScript', 'sub');

