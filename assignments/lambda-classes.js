// CODE here for your Lambda Classes
class Person{
  constructor(obj){
  this.name = obj.name;
  this.age = obj.age;
  this.location = obj.location;
  this.gender = obj.gender;
  }
  speak (){
    return `Hello my name is ${this.name } , I am from ${this.location}.`
  }
}
class Instructor extends Person{
  constructor(teacher){
  super(teacher)
  this.specialty = teacher.specialty;
  this.favLanguage = teacher.favLanguage;
  this.catchPhrase = teacher.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`
  }
  grade(student, subject){
    return `${student} receives a perfect score on ${subject}`
  }
}
class Student extends Instructor{
  constructor(studentobj){
  super(studentobj)
  this.previousBackground = studentobj.previousBackground;
  this.className = studentobj.className;
  this.favSubjects = studentobj.favSubjects;
  }
  listsSubjects(subject){
    return `${this.name}'s subjects are ${this.favSubjects.join(', ')}`
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject){
    return `${this.name} has submitted a PR for ${subject}`
  }
}
class projectManager extends Instructor{
  constructor(pm){
    super(pm)
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  }
  standUp(channel){
  return `${this.name} announces to {channel}, @channel standy times!`
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student}'s code on ${subject}`
  }
}


//Instructor
const Dan = new Instructor({
  name: 'Dan',
  location: 'SLC',
  age: 32,
  gender:'Male',
  favLanguage: 'javaScript',
  specialty: 'web development',
  catchPhrase: 'You can do this!'
});
const Joe = new Instructor({
  name: 'Joe',
  location: 'Herriman',
  age: 27,
  gender: 'Male',
  favLanguage: 'Swift',
  specialty: 'App development',
  catchPhrase: 'I think you are over thinking it',
});
// Student
const Griffin = new Student ({
  name: 'Griffin',
  location: 'Tooele',
  age: 27,
  gender: 'Male',
  previousBackground: 'sales',
  className: 'CSPT2',
  favSubjects: ['javaScript', 'IOS', 'React']
});
const Austin = new Student ({
  name: 'Austin',
  location: 'Kaysville',
  age: 28,
  gender: 'Male',
  previousBackground: 'sales',
  className: 'CSPT5',
  favSubjects: ['java', 'CSS', 'HTML']
});
// Project Managers
const Raymond = new projectManager ({
  name: 'Raymond',
  location: 'Houston',
  age: 26,
  gender: 'Male',
  gradClassName: 'CS10',
  favInstructor: 'Dan'
});
const Moises = new projectManager ({
  name: 'Moises',
  location: 'Orlando',
  age: 25,
  gender: 'Male',
  gradClassName: 'CS8',
  favInstructor: 'Joe',
});

console.log(Griffin.speak('Griffin','Tooele'));
console.log(Joe.demo('IOS'));
console.log(Dan.grade('Austin', 'HTML'));
console.log(Austin.listsSubjects(', '));
console.log(Griffin.PRAssignment( 'javaScript'));
console.log(Austin.sprintChallenge('CSS'));
console.log(Raymond.standUp('Raymond'));
console.log(Moises.debugsCode('Griffin', 'IOS'));