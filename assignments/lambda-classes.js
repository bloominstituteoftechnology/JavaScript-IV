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
  }
  
  class Student extends Person  {
    constructor(studentInfo)  {
      super(studentInfo);
      this.previousBackground = studentInfo.previousBackground;
      this.className = studentInfo.className;
      this.favSubjects = studentInfo.favSubjects;
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
  

  //create objects
  const dan = new Instructor({
    name: 'Dan',
    location: 'California',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Honesty is the best policy`
  });
  
  const robin = new Student({
    name: 'Robin',
    location: 'Hometown',
    age: 45,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Nothing never works`,
    previousBackground: 'Technician',
    className: 'CSPT2',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const camila = new ProjectManager({
    name: 'Camila',
    location: '',
    age: 23,
    gender: 'female',
    favLanguage: 'javascript',
    specialty: 'Back-end',
    catchPhrase: `Shoot for the moon. Even if you miss, you'll land among the stars`,
    gradClassName: 'CS6',
    favInstructor: 'Ben'
  });
  
  // console.logs to test
  console.log(dan.name);
  console.log(dan.speak());
  console.log(dan.demo('math'));
  console.log(robin.age);
  robin.listsSubjects();
  console.log(robin.PRAssignment('JavaScript'));
  console.log(robin.sprintChallenge('HTML'))
  console.log(dan.grade(robin, 'math'));
  console.log(camila.gradClassName);
  console.log(camila.debugsCode(robin, 'HTML'));
  console.log(camila.standUp('My_Channel'));
  console.log(camila.grade(robin, 'CSS'));
