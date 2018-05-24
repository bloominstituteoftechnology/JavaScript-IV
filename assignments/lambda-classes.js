// CODE here for your Lambda Classes
class Person{
  constructor(options){
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }

  speak() {
    return 'Hello my name is ' + this.name + ', I am from ' + this.location;
  }

}//End of Person

//Instructor
class Instructor extends Person {
  constructor(instructOptions) {
    super(instructOptions);
    this.specialty = instructOptions.specialty;
    this.favLanguage = instructOptions.favLanguage;
    this.catchPhrase = instructOptions.catchPhrase;
  }

  demo(subject){
    return 'Today we are learning about ' + subject + '.';
  }

  grade(subject){
    return this.name + ' receives a perfect score on ' + subject + '.';
  }
}//End of Instructor

//Student
class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
  }

  listsSubjects(){
    return this.favSubjects.forEach(function(subjects){
      console.log(subjects);
    });
  }

  PRAssignment(subject){
    return this.name + ' has submitted a PR for ' + subject;
  }

  sprintChallenge(subject){
    return this.name + ' has begun sprint challenge on ' + subject;
  }
}//End of Student

//ProjectManger
class ProjectManager extends Instructor {
  constructor(pmOptions) {
    super(pmOptions);
    this.gradClassName = pmOptions.gradClassName;
    this.favInstructor = pmOptions.favInstructor;
  }

  standUp(slackchannel){
    return this.name + ' announces to ' + slackchannel + ',' + ' @' + slackchannel + ' standup times!';
  }

  debugsCode(student, subject){
    return this.name + ' debugs ' + student.name + '\'s code on ' + subject;
  }
}//End of ProjectManager

const Fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock',
  gender: 'male',
});

const Willma = new Person({
  name: 'Willma',
  age: 35,
  location: 'Bedrock',
  gender: 'female'
});

const Josh = new Instructor({
  name: 'Josh',
  age: '36',
  location: 'at home',
  gender: 'male',
  specialty: 'frontend',
  favLanguage: 'HTML, CSS, JS',
  catchPhrase: 'Sword of Omens, give me sight BEYOND sight.'
});

const Patrick = new Instructor({
  name: 'Patrick',
  age: '34',
  location: 'patio',
  gender: 'male',
  speciality: 'frontend',
  favLanguage: 'javascript',
  catchPhrase: 'time\'s up, submit and hop onto zoom for the answer.'
});

const Tai = new Student({
  name: 'Tai',
  age: 30,
  location: 'Alabama',
  gender: 'male',
  previousBackGround: 'self-study',
  className: 'CS11',
  favSubjects: ['HTML', 'CSS', 'Javascript']
});

const Thor = new Student({
  name: 'Thor',
  age: 'immortal',
  location: 'Asgard',
  gender: 'Male',
  previousBackGround: 'king',
  className: 'CS11',
  favSubjects: ['war', 'beer', 'glory']
});

const ironMan = new Student({
  name: 'Tony',
  age: 40,
  location: 'New York',
  gender: 'Male',
  previousBackGround: 'CEO',
  className: 'CS11',
  favSubjects: ['technology', 'money', 'women']
});

const John = new ProjectManager ({
  name: 'John',
  age: 'unknown',
  location: 'Georgia',
  gender: 'male',
  specialty: 'frontend',
  favLanguage: 'HTML, CSS, JS',
  catchPhrase: 'Time for the daily stand up',
  gradClassName: 'CS5',
  favInstructor: 'Josh'
});

const Calum = new ProjectManager ({
  name: 'Calum',
  age: 'unknown',
  location: 'Murica',
  gender: 'male',
  specialty: 'frontend',
  favLanguage: 'JS',
  catchPhrase: 'check the CS11 help channel',
  gradClassName: 'CS6',
  favInstructor: 'Patrick'
});

//Testing Person methods
console.log(Fred.speak());
console.log(Willma.speak());
//Testing Instructor methods
console.log(Josh.demo('Javascript'));
console.log(Patrick.grade('Javascript'));
//Testing Student methods
console.log(Tai.listsSubjects());
console.log(Thor.PRAssignment('Javascript'));
console.log(ironMan.sprintChallenge('JavaScript'));
//Testing Project Manager
console.log(John.standUp('CS11-John'));
console.log(Calum.debugsCode(Tai, 'Javascript'));
