// CODE here for your Lambda Classes
class People {
  constructor (peopleAttributes){
    this.name = peopleAttributes.name;
    this.name = peopleAttributes.name;
    this.name = peopleAttributes.name;
    this.age = peopleAttributes.age;
    this.location = peopleAttributes.location;
    this.gender = peopleAttributes.gender;
  }
  speak () {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}
class Instructor {
  constructor (instructorAttributes){
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo (subject){
    console.log(`Today we are learning about ${this.subject}.`);
  }
  grade (student) {
    console.log(`${this.student} receives a perfect score on ${this.subject}.`)
  }
}
class Student {
  constructor (studentAttributes){
    super(studentAttributes);
    this.previousBackground = instructorAttributes.previousBackground;
    this.className = instructorAttributes.className;
    this.favSubjects = instructorAttributes.favSubjects;
  }
  listsSubjects () {
    console.log(`${this.name}'s Favorite Subjects: ${this.favSubjects}.'`)
  }
  PRAssingment (subject) {
    console.lot(`${this.name} has submitted a PR for ${this.subject}.`)
  }
}
class ProjectMananger extends Instructor {
  constructor (projectManagerAttributes){
    super(projectManagerAttributes);
    this.gradClassName = instructorAttributes.gradClassName;
    this.favInstructor = instructorAttributes.favInstructor;
  }
  standUp (slackChannel) {
    console.log(`${this.name} announces to ${this.slackChannel}: @channel Time for standup!`)
  }
  debugsCode (student.name, subject ) {
    console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}.`);
  }
}

const Josh = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const Mike = new Student ({
  name: 'Mike',
  location: 'New Mexico',
  age: 94,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `I'm here to code.`
})


const Dani = new ProjectMananger ({
  name: 'Dani',
  location: 'Minnesota',
  age: 22,
  gender: 'female',
  favLanguage: 'All the languages',
  specialty: 'Front-end',
  catchPhrase: `Hi`
})

 dani.standUp()
