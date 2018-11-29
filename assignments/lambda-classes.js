// CODE here for your Lambda Classes

// parent Person
class Person {
    constructor(attributes){
      this.name = attributes.name; 
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }   
    speak() {
      return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
  }
  // child Instructor of Person

  class Instructor extends Person {
    constructor(instrAttributes) {
      super(instrAttributes);
      this.specialty = instrAttributes.specialty;
      this.favLanguage = instrAttributes.favLanguage;
      this.catchPhrase = instrAttributes.catchPhrase;
    }
    demo(subject) {
      return (`Today we are learning about ${(subject)}.`);
    }
    grade(Student, subject) {
       return `${Student.name} receives a perfect score on ${(subject)}`;
    }
    giveGrade(Student) {
        return `${Student.name}'s grade is: ${(Student.grade += Math.random()*(5- - 5)+5)}`;
    }
  }
  
  
// child Student of Person

class Student extends Person {
    constructor(studentAttributes) {
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
      this.grade = studentAttributes.grade;
    }
    listsSubjects() {
      console.log(`My favorite subjects are: ${this.favSubjects}`);
    }
    PRAssignment(subject) {
       return `${this.name} has submitted a PR for ${(subject)}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${(subject)}`;
    }
    graduateCheck() {

    }
  }
 /// child of Instructor
  class ProjectManager extends Instructor {
    constructor(ProjManAttributes) {
      super(ProjManAttributes);
      this.gradClassName = ProjManAttributes.gradClassName;
      this.favInstructor = ProjManAttributes.favInstructor;
    }

    standUp(channel) {
       console.log(`${this.name} announces to ${(channel)}, @channel standy times!`);
    }
    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${(subject)}`);
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

  const george = new Instructor({
    name: 'George',
    location: 'Atlanta',
    age: 47,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Yeah, that's the ticket!`
  });

  const elaine = new Student ({
    name: 'Elaine',
    location: 'New York',
    age: 27,
    gender: 'female',
    previousBackground: 'Book Editor',
    className: 'FSW22',
    favSubjects: ['HTML', 'CSS', 'React'],
    grade : 99
  });

  const kramer = new Student ({
    name: 'Kramer',
    location: 'Denver',
    age: 24,
    gender: 'male',
    previousBackground: 'Doctor',
    className: 'FSW24',
    favSubjects: ['HTML', 'Python', 'React'],
    grade: 87
  });

  const katie = new Student ({
    name: 'Katie',
    location: 'Detroit',
    age: 34,
    gender: 'female',
    previousBackground: 'Artist',
    className: 'FSW21',
    favSubjects: ['CSS', 'Python', 'React'],
    grade: 95
  });

  const brendan = new ProjectManager({
    name: 'Brendan',
    location: 'Phoenix',
    age: 27,
    gender: 'male',
    gradClassName: 'CS3',
    favInstructor: 'Josh'
  });

  const tyler = new ProjectManager({
    name: 'Tyler',
    location: 'Los Angeles',
    age: 31,
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'Josh'  
  });

  const ryan = new ProjectManager({
    name: 'Ryan',
    location: 'Orlando',
    age: 39,
    gender: 'male',
    gradClassName: 'CS6',
    favInstructor: 'Josh'  
  });

console.log(ryan.speak());
console.log(ryan.standUp("FSW16"));
kramer.listsSubjects()
console.log(tyler.debugsCode(katie,"JavaScript"));
console.log(george.grade(elaine, "CSS"));
console.log(kramer.PRAssignment("JavaScript 3"));
console.log(fred.giveGrade(katie))
console.log(fred.giveGrade(kramer))
console.log(fred.giveGrade(elaine))