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
    console.log(`Hello! My name is ${this.name} and I am from ${this.location}`);
  }
}
class Instructor extends People {
  constructor (instructorAttributes){
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo (subject){
    console.log(`Today we are learning about ${subject}.`);
  }
  grade (student, subject) {
    console.log(`${student} receives a perfect score on ${subject}.`)
  }
}
class Student extends People {
  constructor (studentAttributes){
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listsSubjects () {
    console.log(`${this.name}'s Favorite Subjects: ${this.favSubjects}.'`)
  }
  PRAssingment (subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`)
  }
  sprintChallenge (subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }
}
class ProjectMananger extends Instructor {
  constructor (projectManagerAttributes){
    super(projectManagerAttributes);
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
  }
  standUp (slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}: @channel Time for standup!`)
  }
  debugsCode (name, subject ) {
    console.log(`${this.name} debugs ${name}'s code on ${subject}.`);
  }
}

const josh = new Instructor({
  name: 'Josh',
  location: 'Utah',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const mike = new Student ({
  name: 'Mike',
  location: 'New Mexico',
  age: 94,
  gender: 'male',
  previousBackground: 'Film',
  className: 'CS12',
  favSubjects: [' HTML', ' CSS', ' JavaScript']
})

const dani = new ProjectMananger ({
  name: 'Dani',
  location: 'Minnesota',
  age: 22,
  gender: 'female',
  favLanguage: 'All the languages',
  specialty: 'Front-end',
  catchPhrase: `Hi`,
  gradClassName: 'CS6?',
  favInstructor: 'josh'
})
//Project Manager --standUp(slackchannel), debugsCode(name,subject)
//student --listsSubjects(), PRAssignment(subject), sprintChallenge(subject)
//instructor -- demo(subject), grade(student)

dani.standUp('Mike');
dani.debugsCode('Mike', 'Javascript');
mike.listsSubjects()
mike.PRAssingment('Javasctipt');
mike.speak();
mike.sprintChallenge('Javascript');
josh.demo('less');
josh.grade('Mike', 'CSS');
