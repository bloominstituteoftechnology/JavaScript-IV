// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
      this.gender = attributes.gender;
      this.age = attributes.age;
      this.name = attributes.name;
      this.location = attributes.location;
    }
    speak() {
      return `Hello, my name is ${this.name},  I am from ${this.location}`;
    }
  }
  
  
  class Instructor extends Person {
    constructor(attributes) {
      super(attributes);
      this.specialty = attributes.specialty;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
  
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    changeGrade(student) {
    //removed var that was used to hold the new grade. this was causing the students grade to return to the original value every time the method was called
      let randomNum = Math.random();
    //   console.log(randomNum)
      if (randomNum > 0.5) {
        student.grade = student.grade + (Math.random() * 10);
        // console.log(student.grade) 
      }
      else {
        student.grade = student.grade - (Math.random() * 10);
      }
      if (student.grade > 100) {
        student.grade = 100;
      }
      else if (student.grade < 0) {
        student.grade = 0;
      }
      return Math.floor(student.grade)
    
    }
  }
  
  
  
  class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
  
    listsSubjects(){
        return this.favSubjects;        
    }
  
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
  
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    checkGraduate() {
      if (this.grade > 70) {
        return `Congratulations!! You are ready to graduate!`;
      }
      else {
        return `Do not pass go, do not collect $200, your worthless`;
      }
    }
  }
  
  class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
  
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
  
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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
  
  
  const joe = new Person({
    name: 'Joe',
    age: 37,
    location: 'Bedrock',
    gender: 'female'
  });  
  
  const studentA = new Student ({
    name: 'Joe',
    age: 37,
    location: 'Bedrock',
    gender: 'female',
    previousBackground: 'skydiver',
    className: 'CS0132',
    favSubjects: ['js', 'python', 'c', 'css'],
    grade: 68
  });
  
  const alice = new ProjectManagers ({
    name: 'Alice',
    location: 'San Jose',
    age: 31,
    gender: 'female',
    favLanguage: 'C++',
    specialty: 'Mobile Apps',
    catchPhrase: `Screw it, let's do it!!`,
    gradClassName: 'CS-11',
    favInstructor: 'Tony'
  });
  
  console.log(alice.standUp('Alices Channel'));
  
  console.log(joe);
  console.log(fred);
  
  console.log(studentA);
  console.log(alice);
  
  console.log(fred.changeGrade(studentA));
  console.log(fred.changeGrade(studentA));
  console.log(fred.changeGrade(studentA));
  console.log(fred.changeGrade(studentA));
  
  console.log(studentA.checkGraduate());