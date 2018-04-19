// CODE here for your Lambda Classes
class Person {
  constructor(personAttributes){
  this.name = personAttributes.name;
  this.age = personAttributes.age;
  this.location = personAttributes.location;
  this.gender = personAttributes.gender;
  }
 speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(intructorAttributes) {
  super(intructorAttributes);
  this.specialty = intructorAttributes.specialty;
  this.favLanguage = intructorAttributes.favLanguage;
  this.catchPhrase = intructorAttributes.catchPhrase;
  }
  demo(subject) {
  	return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
  	return `${student.name} recieves a perfect score on ${subject}`;
  }
}

class Student extends Instructor {
  constructor(studentAttributes) {
  super(studentAttributes);
  this.previousBackground = studentAttributes.previousBackground;
  this.className = studentAttributes.className;
  this.favSubject = studentAttributes.favSubject;
  }
  listsSubject() {
    let allFavSubjects = [];
    this.forEach((element) => {
    allFavSubjects.push(`${element.favSubject}`);
});
}
  PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Student {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standby times!`;
  }

  debugsCode(subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}



const instructor1 = new Instructor({
  name: 'John',
  location: 'Texas',
  age: 36,
  gender: 'male',
  specialty: 'redux',
  catchPhrase: 'Howdy, partner!',
  favLanguage: 'python'
});

const student1 = new Student({
  name: 'Mary',
  location: 'Ohio',
  age: 19,
  gender: 'female',
  previousBackground: 'Highschool Student',
  className: 'cs14',
  favSubjects: 'Javascript'
});

const projectmanager1 = new ProjectManager({
  name: 'Phil',
  location: 'Pennsylvania',
  age: 28,
  gender: 'male',
  gradClassName: 'cs2',
  favInstructor: 'Herbert'
});


console.log(instructor1.name);
console.log(instructor1.favLanguage);
console.log(student1.sprintChallenge('dataStructures'));
console.log(projectmanager1.standUp('codeforcecole'));
console.log(instructor1.favLanguage);