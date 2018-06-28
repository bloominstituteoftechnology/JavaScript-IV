// CODE here for your Lambda Classes
class people {
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
class instructor {
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
class student {
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
class Project 
