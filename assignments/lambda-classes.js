// CODE here for your Lambda Classes

class Person{
    constructor(props){
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
      this.gender = props.gender;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  
  
  class Instructor extends Person{
    constructor(InstructorProps){
      super(InstructorProps);
      this.specialty = InstructorProps.specialty;
      this.favLanguage = InstructorProps.favLanguage;
      this.catchPhrase = InstructorProps.catchPhrase;
    }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
      return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeChange(student){
      return `${student.name}'s grade is now ${(student.grade) + (Math.random() * (10-(-10)) + (-10))}`;
    }
  }
  
  class Student extends Person{
    constructor(StuProps){
      super(StuProps);
      this.previousBackground = StuProps.previousBackground;
      this.className = StuProps.className;
      this.favSubjects = StuProps.favSubjects;
      this.grade = StuProps.grade;
    }
    listsSubjects() {
      this.favSubjects.forEach(function(sub){
        console.log(sub)
      });
      
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
      return `${this.name} has begun spring challenge on ${subject}`;
    }
    
  }
  
  
  class ProjectManager extends Instructor{
    constructor(PMProps){
      super(PMProps);
      this.gradClassName = PMProps.gradClassName;
      this.favInstructor = PMProps.favInstructor;
    }
    standUp(channel){
      return `${this.name} announces to ${channel}, "@channel standup time!"`;
    }
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }
  
  
  
  const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Don't forget the homies"
  });
  
  const Steve = new ProjectManager({
    name: 'Steve',
    location: 'New York',
    age: 34,
    gender: 'male', 
    favLanguage: 'Python', 
    specialty: 'Back-end',
    catchPhrase: "Bollocks",
    gradClassName: "CS1",
    favInstructor: "Sean"
  });
  
  const Arthur = new Student({
    name: 'Arthur',
    location: 'Wisconsin',
    age: 41,
    gender: 'male',
    grade: 90,
    previousBackground: 'Biker gang',
    className: 'CS123',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });
  