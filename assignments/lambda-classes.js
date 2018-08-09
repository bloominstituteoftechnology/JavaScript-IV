//base class

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  speak(){
    `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    }
    demo(subject){
      `Today we are learning about ${subject}`
    }
    grade(student, subject){
      `${student.name} receives a perfect score on{subject}`
    }
}

class Students extends Person {
  constructor(studentParams) {
    super(studentParams);
    this.previousBackground = studentParams.previousBackground;
    this.className = studentParams.className;
    this.favSubjects = studentParams.favSubjects;
  }

  listsSubjects(){
    return this.favSubjects.forEach(x=> console.log(x););
  }
  PRAssignment (subject) {
    `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject){
    `${student.name} has begun sprint challenge on ${subject}`
  }

}

class ProjectManager extends Instructor {
  constructor(pmParams) {
    super(pmParams);
    this.gradClassName = pmParams.gradClassName;
    this.favInstructor = pmParams.favInstructor;
  }

  standUp (channel) {
    `${this.name} announces to {channel}, @channel standy times!`
  }
  debugsCode(student){
    `${this.name} debugs ${student.name}'s code on ${subject}`
  }

}

const axl = new Instructor({
  name: 'Axl',
  location: 'Paradise City',
  age: 56,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Oh, won't you please take me home?`
});

const jimmy = new Student ({
  name: 'Jimmy',
  location: 'Heaven',
  age: 74,
  gender: 'male',
  'previousBackground': 'guitar player'
  'className': 'CS1968'
  'favSubjects': ['Houses of the Holy', 'Physical Graffiti', 'Presence', 'In Through the Out Door' ]
  catchPhrase: 'All that glitters is gold'
})

const angus = new ProjectManager({
  name: 'Angus',
  location: 'Hell',
  age: 63,
  gender: 'male',
  'gradClassName': 'CS1973',
  'favInstructor': 'Rosie'
  'catchPhrase': "I'm on my way to the promised land."
})
