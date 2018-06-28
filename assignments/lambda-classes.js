// CODE here for your Lambda Classes

class Person {
  constructor(options){
    this.name = options.name;
    this.location = options.locations;
    this.age = options.age;
    this.gender = options.gender;
  }
  speak (){
    return `My name is ${this.name} and I'm from ${this.location}`;
  }
}

// End of Person


class Instructor extends Person {
  constructor(teachOptions) {
    super(teachOptions);
    this.favLanguage = teachOptions.favLanguage;
    this.specialty = teachOptions.specialty;
    this.catchPhrase = teachOptions.catchPhrase;
  }
  demo(subject) {
  return `Today we are learning about ${subject}`;
  }
  grade (subject){
    return `${this.name} receives a perfect score on ${subject}`;
  }
}

// End of Instructor


class Student extends Person {
  constructor(wowOptions){
    super(wowOptions);
    this.favLanguage = wowOptions.favLanguage;
    this.specialty = wowOptions.specialty;
    this.catchPhrase = wowOptions.catchPhrase;
    this.previousBackground = wowOptions.previousBackground;
    this.className = wowOptions.className;
  }
  listsSubjects(){
    return `My favorite subjects is , ${this.favSubjects}`;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subjects){
    return  `${this.name} has begun spring challenge on ${subject}`;
  }
}
// End Student

class ProjectManager extends Instructor{
  constructor(concludeOptions){
    super(concludeOptions);
    this.favLanguage = concludeOptions.favLanguage;
    this.specialty = concludeOptions.specialty;
    this.catchPhrase = concludeOptions.catchPhrase;

  }
   standUp (channel){
    return ` ${this.name}announces to ${channel}, @channel standup times!​​​​​`;
  }
  debugsCode(studentsName,subject){
return `${this.name} debugs ${this.name}'s code on ${subject}`;
  }
}

// End of Project Manager




//Objects

const skeet = new Instructor({
  name: 'Skeet',
  location: 'Magee',
  age: 40,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `What's happening coders?`
});


const misty = new Student({
  name: 'Misty',
  location: 'Chavelle',
  age: 23,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Oh that's right!`,
  previousBackground: 'Barista',
  className: 'CS12',
  favSubjects: ['Html','Css','JavaScript'];
});


const ginger = new ProjectManager({
  name: 'Ginger',
  location: 'Snap',
  age: 37,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `First there's sour then there's sweet.`,
  gradClassName: 'CS1',
  favInstructor: 'Joan'
});




/// console log

console.log(ginger.catchPhrase);
console.log(misty.catchPhrase);
