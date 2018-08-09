// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    this.subject = attributes.subject;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  };
} //end of Person Class



class Instructor extends Person {
  constructor(insAttr) {
    super(insAttr);
    this.specialty = insAttr.specialty;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
  }

  demo() {
    return `Today we are learning about ${this.subject}`;

  };

  
  grade(student) {
    
    return `student receives a perfect score on ${this.subject}`;
  };

}//end of Instructor Class

class Student extends Person {
  constructor(stAttr) {
    super(stAttr);
    this.previousBackground = stAttr.previousBackground;
    this.className = stAttr.className;
    this.favSubjects = stAttr.favSubjects;
    //this.studentName = stAttr.studentName;
  }

  listsSubjects() {
    return `${this.favSubjects}`;
  };

  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.subject}`;
  };

  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.subject}`;
  };

}//end of Student Class


class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
    this.channel = pmAttr.channel;
  }
  standUp() {
    return `${this.name} announces to ${this.channel}, @channel standy times!`
  }

  debugsCode() {
    return `${this.name} debugs ${this.name}'s code on ${this.subject}`
  }

}//end of ProjectManager Class 



const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  subject : 'JavaScript Classes '
});

const michelle = new Student({
  name : 'Michelle',
  location: 'SoCal',
  age: 39,
  gender: 'female',
  favLanguage: 'Still thinking about it',
  specialty: 'TBD',
  catchPhrase: `Let's do this`,
  subject : 'JavaScript Classes',
  //studentName : 'Michelle',
  previousBackground :'none',
  className : 'CS13',
  favSubjects : ['Html', 'CSS', 'JavaScript']
});

const char = new ProjectManager({
  name: 'Char',
  location: 'Boston',
  age: 35,
  gender: 'female',
  favLanguage: 'Redux',
  specialty: 'Back-end',
  catchPhrase: `You can do it because I say so`,
  gradClassName : 'CS8',
  favInstructor: 'Josh Knell',
  subject : 'CSS-LESS',
  channel : 'CS13_TheCoolOnes'
});


console.log(char.speak())
console.log(fred.speak())

console.log(fred.name)
// console.log(fred.gender)
// console.log(fred.favLanguage)
// console.log(fred.specialty)
// console.log(fred.catchPhrase)
console.log(fred.demo()) 
console.log(fred.grade()) // need student name to reflect
console.log(michelle.name)
console.log(michelle.className)
console.log(michelle.listsSubjects())
console.log(michelle.PRAssignment())
console.log(michelle.sprintChallenge())
console.log(char.catchPhrase)
console.log(char.favInstructor)
console.log(char.standUp())
console.log(char.debugsCode()) //needs to reference student's name 





