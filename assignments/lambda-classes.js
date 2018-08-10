// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
} //end of Person Class



class Instructor extends Person {
  constructor(insAttr) {
    super(insAttr);
    this.specialty = insAttr.specialty;
    this.favLanguage = insAttr.favLanguage;
    this.catchPhrase = insAttr.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);

  }

  
  grade(student, subject) {
    
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

}//end of Instructor Class

class Student extends Person {
  constructor(stAttr) {
    super(stAttr);
    this.previousBackground = stAttr.previousBackground;
    this.className = stAttr.className;
    this.favSubjects = stAttr.favSubjects;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log (`${this.name} <3's ${this.favSubjects[i]}`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  };

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  };

}//end of Student Class


class ProjectManager extends Instructor {
  constructor(pmAttr) {
    super(pmAttr);
    this.gradClassName = pmAttr.gradClassName;
    this.favInstructor = pmAttr.favInstructor;
    
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }

}//end of ProjectManager Class 



const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
  
});
const jim = new Instructor({
  name: 'Jim',
  location: 'Atlanta',
  age: 40,
  gender: 'male',
  favLanguage: 'Redux',
  specialty: 'Back-end',
  catchPhrase: `Rome wasn't built in a day`
  
});

const michelle = new Student({
  name : 'Michelle',
  location: 'SoCal',
  age: 39,
  gender: 'female',
  className : 'CS13',
  favSubjects : ['Html', 'CSS', 'JavaScript']
});

const casey = new Student({
  name : 'Casey',
  location: 'Florida',
  age: 26,
  gender: 'female',
  className : 'CS10',
  favSubjects : ['Html', 'CSS']
});

const kevin = new Student({
  name : 'Kevin',
  location: 'Colorado',
  age: 36,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'whiteboarding',
  catchPhrase: `Show me the money!`,
  previousBackground :'HTML and CSS',
  className : 'CS11',
  favSubjects : ['CSS', 'JavaScript']
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
  favInstructor: 'Josh Knell'

});

const david = new ProjectManager({
  name: 'David',
  location: 'Salt Lake City',
  age: 42,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Slow and steady wins the race`,
  gradClassName : 'CS3',
  favInstructor: 'Bobby Flay'

});

fred.demo('JavaScript'); 
fred.grade(michelle, 'JavaScript');


jim.demo('CSS'); 
jim.grade(casey, 'CSS');


michelle.listsSubjects();
michelle.PRAssignment('CSS-LESS');
michelle.sprintChallenge('JS Classes');

casey.listsSubjects();
casey.PRAssignment('JS-III');
casey.sprintChallenge('JS-II');

kevin.listsSubjects();
kevin.PRAssignment('JS-I');
kevin.sprintChallenge('User Interface');


char.standUp('CS13_TheCoolOnes');
char.debugsCode(michelle, 'CSS-LESS');

david.standUp('CS13_RnR');
david.debugsCode(kevin, 'JS-IV');

