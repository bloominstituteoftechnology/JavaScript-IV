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
  console.log(dan.name);
  console.log(dan.speak());
  console.log(dan.demo('math'));
  console.log(robin.age);
  robin.listsSubjects();
  console.log(robin.PRAssignment('JavaScript'));
  console.log(robin.sprintChallenge('HTML'))
