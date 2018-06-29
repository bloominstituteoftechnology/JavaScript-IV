// CODE here for your Lambda Classes
class Person {
  constructor(personAttr){
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }
  greet () {
    console.log( `Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
constructor(instructorAttr) {
  super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;

}
  demo (subject) {
    console.log (`Today we are learning about ${this.favLanguage}`);
  }

  grade (student,subject){
console.log(`${student} receives a perfect score on ${subject}`)
  }

}

class Student extends Person {
constructor(studentAttr) {
super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
}
listsSubjects () {
console.log(`My fave subjects ${this.favSubject}`);
}
PRAssignment (subject) {
console.log (`${this.name}.name has submitted a PR for ${subject}`)
}
sprintChallenge () {

}
}

class Project_Manager extends Instructor{
  constructor(pmAttr) {
    super(pmAttr)
    this.gradClassName = pmAttr.favInstructor;
    this.favInstructor = pmAttr.favInstructor;
  }

  standUp () {

  }

  debugsCode (){}

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

const sean = new Student({
  name: 'sprintChallenge',
  location: 'New Bedrock',
  age: 22,
  gender: 'male',
  favLanguage: ['CSS','HtML', 'Javascript'],
  specialty: 'Front-end',
  favSubjects:'HTML',
  className: 'CS132',
  previousBackground: 'Salesman',
})

const joan = new Student({
  name: 'Joan',
  location: 'New Bedrock',
  age: 30,
  gender: 'female',
  favLanguage: ['CSS','HtML', 'Javascript'],
  specialty: 'Front-end',
  favSubjects:'Bootstrap 4',
})

const john = new Project_Manager({
  name: 'John',
  location: 'New Bedrock',
  age: 40,
  gender: 'male',
  gradClassName: 'CS1',
  favInstructor: 'Sean',
  specialty: 'Front-end',
  })
console.log(fred.demo()); 
console.log(fred.greet(fred.favlanguage));
console.log(joan.favSubjects);
console.log(fred.grade(bob.name,bob.favSubjects));
console.log(joan.PRAssignment(joan.favSubjects)) 
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from
// the game.