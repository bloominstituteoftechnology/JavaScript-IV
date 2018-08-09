// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
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

  grade() {
    return `${this.name} receives a perfect score on ${this.subject}`;
  };

}//end of Instructor Class

class Student extends Person {
  constructor(stAttr) {
    super(stsAttr);
    this.previousBackground = stAttr.previousBackground;
    this.className = stAttr.className;
    this.favSubjects = stAttr.favSubjects;
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




const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const Michelle = new Student({
  name: 'Michelle',
  location: 'SoCal',
  age: 39,
  gender: 'Female',
  favLanguage: 'Still thinking about it',
  specialty: 'none yet',
  catchPhrase: `Let's do this`,
  previousBackground :'none',
  className : 'CS13',
  favSubjects : ['Html', 'CSS', 'JavaScript']
});


console.log(fred.speak())