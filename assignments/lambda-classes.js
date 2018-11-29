// CODE here for your Lambda Classes
 
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak () {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(InstructorAttrs) {
    super(InstructorAttrs);
    this.specialty = InstructorAttrs.specialty;
    this.favLanguage = InstructorAttrs.favLanguage;
    this.catchPhrase = InstructorAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade (student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  reviewedGrade(Student, subject) {
    return `After review, it looks like your grade in ${subject} is ${Student.grade}%`
  }
}

class Student extends Person {
  constructor(StudentAttrs) {
    super(StudentAttrs);
    this.previousBackground = StudentAttrs.previousBackground;
    this.className = StudentAttrs.className;
    this.favSubjects = StudentAttrs.favSubjects;
    this.grade = StudentAttrs.grade;
  }
  listsSubjects () {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
  graduate (Student) {
    
    if (Student.grade >= 70) {
      return `Congratulations ${Student.name}, you're ready to graduate!`;
    } else {
      return `Sorry ${Student.name}, please study some more and try again!`;
    }
  }
}

  class ProjectManager extends Instructor {
    constructor(ProjectManagerAttrs) {
      super(ProjectManagerAttrs);
      this.gradClassName = ProjectManagerAttrs.gradClassName;
      this.favInstructor = ProjectManagerAttrs.favInstructor;
    }
    standup(channel) {
      return `${this.name} announces to ${channel}, @channel stand up time!`;
    }
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const scott = new Student ({
  name: 'Scott',
  location: 'Seattle',
  age: 25,
  gender: 'male',
  previousBackground: 'Sales and Operations',
  className: "FSW16",
  favSubjects: "JavaScript",
  grade: Math.floor(Math.random()*100),
})

const marious = new ProjectManager ({
  name: 'Marious',
  location: 'Alabama',
  age: 28,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Web stores',
  catchPhrase: "Roll Tide",
  gradClassName: "CS10",
  favInstructor: "Josh Knell",
})



console.log(fred.name);
console.log(fred.demo("CSS"));
console.log(fred.grade(scott, "HTML"));
console.log(scott.name);
console.log(scott.listsSubjects());
console.log(scott.PRAssignment("JS IV"));
console.log(scott.sprintChallenge("JavaScript"));
console.log(marious.favInstructor);
console.log(marious.catchPhrase);
console.log(marious.standup("FSW16 Marious"));
console.log(marious.debugsCode(scott, "Javascript"));
console.log(fred.reviewedGrade(scott, "HTML 101"));
console.log(scott.graduate(scott));