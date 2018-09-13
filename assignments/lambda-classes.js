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
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  } 
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  } 
}

class Project_Manager extends Instructor {
  constructor(PM_Attributes) {
    super(PM_Attributes);
    this.gradClassName = PM_Attributes.gradClassName;
    this.favInstructor = PM_Attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const sam = new Student({
  name: 'Sam',
  location: 'Montana',
  age: 27,
  previousBackground: 'Cook',
  className: 'CS14',
  favSubjects: ['Javascript', '3D', 'VR'],
  gender: 'female',
  favLanguage: 'C++',
  specialty: 'Back-end',
  catchPhrase: `Don't have a cow`
});

const ralph = new Project_Manager({
  name: 'Ralph',
  location: 'Seattle',
  age: 30,
  gender: 'male',
  gradClassName: 'CS11',
  favInstructor: 'Josh Knell',
  favLanguage: 'Javascript',
  specialty: 'Front-end',
  catchPhrase: `Now that's a bug`
});


console.log(fred.demo('css'))
console.log(fred.grade(sam, 'html'))
console.log(sam.listsSubjects())
console.log(sam.sprintChallenge('React'))
console.log(sam.PRAssignment('Redux'))
console.log(ralph.standUp('fsw14_ralph'))
console.log(ralph.debugsCode(sam, 'html'))
console.log(ralph.speak())