// CODE here for your Lambda Classes

class Person {
    constructor(props){
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
      this.gender = props.gender;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
  };
  
  class Student extends Person {
    constructor(aboutStudent){
      super(aboutStudent)
      this.previousBackground = aboutStudent.previousBackground;
      this.className = aboutStudent.className;
      this.favSubjects = aboutStudent.favSubjects;
      this.grade = aboutStudent.grade; //stretch goal
    }
    listsSubjects(student){
      return `${student.favSubjects}`
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}`
    }
    //stretch goal
    graduate(){
      if(this.grade >= 70) {
        return `${this.name} has qualified to graduate from Lambda School!`
      } else {
        return `Need a higher score ${this.name}. Better luck next time!`
      }
    }
  };
  
  class Instructor extends Person {
    constructor(aboutInstructor){
      super(aboutInstructor)
      this.specialty = aboutInstructor.specialty;
      this.favLanguage = aboutInstructor.favLanguage;
      this.catchPhrase = aboutInstructor.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
      return `${student.name} recieves a perfect score on ${subject}.`
    }
    // stretch goal
    randomAddSubtract(student){
      return Math.round(Math.random(student.grade) * 100)
    }
  };
  
  class ProjectManager extends Instructor {
    constructor(pmGoals){
      super(pmGoals)
      this.gradClassName = pmGoals.gradClassName;
      this.favInstructor = pmGoals.favInstructor;
    }
    standUp(channel){
      return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
  };
  
  
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
  
  const chris = new Student ({
    name: 'Chris',
    age: 25,
    location: 'Minnesota',
    gender: 'male',
    previousBackground: 'Construction Manager',
    className: 'CSPT2',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 88, //stretch goal
  });
  
  const anthonyGuessed = new ProjectManager({
    name: 'Anthony',
    age: 35,
    location: 'Atlanta?',
    gender: 'male',
    gradClassName: 'CS2?',
    favInstructor: 'Dan?',
  });