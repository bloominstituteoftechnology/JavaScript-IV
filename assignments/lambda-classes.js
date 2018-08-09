//base class

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
    this.catchPhrase = props.catchPhrase;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    }
    demo(subject){
    return  `Today we are learning about ${subject}`
    }
    grade(student, subject){
      return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
  constructor(studentParams) {
    super(studentParams);
    this.previousBackground = studentParams.previousBackground;
    this.className = studentParams.className;
    this.favSubjects = studentParams.favSubjects;
  }

  listsSubjects(skill1, skill2, skill3){
    return `${skill1}, \n${skill2}, \n${skill3} `;
  }
  PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`
  }

}

class ProjectManager extends Instructor {
  constructor(pmParams) {
    super(pmParams);
    this.gradClassName = pmParams.gradClassName;
    this.favInstructor = pmParams.favInstructor;
  }

  standUp () {
  return  `${this.name} announces to ${this.gradClassName}, @channel standy times!`
  }
  debugsCode(student){
  return  `${this.name} debugs ${student.name}'s code on ${student.favSubjects[0]}`
  }

}

const axl = new Instructor({
  'name': 'Axl',
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
  'previousBackground': 'guitar player',
  'className': 'CS1968',
  'favSubjects': ['Houses of the Holy', 'Physical Graffiti', 'Presence', 'In Through the Out Door' ],
  catchPhrase: 'All that glitters is gold'
})

const angus = new ProjectManager({
  name: 'Angus',
  location: 'Hell',
  age: 63,
  gender: 'male',
  'gradClassName': 'CS1973',
  'favInstructor': 'Rosie',
  'catchPhrase': "I'm on my way to the promised land."
})

const people = [axl, jimmy, angus]

people.forEach(item =>{

  console.log(`My name is ${item.name}, I'm ${item.age} and I currently live in ${item.location}. `);
  console.log('Hear me out:', item.catchPhrase);
  console.log(item.speak());
}
)


console.log(axl.speak());
console.log(axl.demo('html'));
console.log(axl.grade(jimmy, ...jimmy.favSubjects));
console.log(jimmy.listsSubjects(...jimmy.favSubjects));
console.log(jimmy.PRAssignment('friendly'));
console.log(jimmy.sprintChallenge());
console.log(angus.standUp());
console.log(angus.debugsCode(jimmy));
