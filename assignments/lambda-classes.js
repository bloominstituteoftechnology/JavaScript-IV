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
    console.log (`Today we are learning about ${subject}`);
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
  for (let i=0; i < this.favSubjects.length; i++){
console.log(`My fave subjects ${this.favSubjects}`);
}
}

PRAssignment (subject) {
console.log (`${this.name} has submitted a PR for ${subject}`)
}
sprintChallenge (subject) {
console.log(`${this.name} begins working hard on ${subject}`);
}
}

class Project_Manager extends Instructor{
  constructor(pmAttr) {
    super(pmAttr)
    this.gradClassName = pmAttr.favInstructor;
    this.favInstructor = pmAttr.favInstructor;
  }

  standUp (channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode (student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }

}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
  

});

const sean = new Student({
  name: 'Sean',
  location: 'New Bedrock',
  age: 22,
  gender: 'male',
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
  favLanguage: 'C++',
  specialty: 'Front-end',
  favSubjects: ['CSS','HtML', 'Javascript'],
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


john.greet();
sean.greet();
fred.greet();
fred.demo('Python'); 
joan.listsSubjects();
fred.grade('bob','PreProcessors');
joan.PRAssignment(joan.favSubjects);
john.standUp('#CH12');
sean.sprintChallenge('User Interface'); 