// CODE here for your Lambda Classes
//Base class
class Person {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.gender = info.gender;
    this.location = info.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

//Instructor Class
class Instructor extends Person{
  constructor(iInfo){
    super(iInfo);
    this.specialty = iInfo.specialty;
    this.favLanguage = iInfo.favLanguage;
    this.catchPhrase = iInfo.catchPhrase;
  }
  demo(subject){
    return `Today, we are learning about ${subject}`;
  }
  grade(student, subject){
    return  `${student.name} receives a perfect score on ${subject}`;
  }
  gradeChange(student){
    student.grade = student.grade - (student.grade* Math.random().toFixed(2));
    return `${student.name}'s grade has been changed to ${student.grade}%`
  }
}

//Student Class
class Student extends Person{
  constructor(sInfo){
    super(sInfo);
    this.previousBackground = sInfo.previousBackground;
    this.className = sInfo.className;
    this.favSubjects = sInfo.favSubjects;
    this.grade = sInfo.grade;
  }
  listsSubjects(){
    return `${this.favSubjects[0]} \n${this.favSubjects[1]}\n${this.favSubjects[2]}\n${this.favSubjects[3]}`;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate(){
    if(this.grade >= 70){
      return `Congratulations, you've graduated!`
    }else{
      return `Keep at it! You will graduate soon!`
    }
  }
}

//Project Manager class
class PM extends Instructor {
  constructor(pmInfo) {
    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;
  }
  standUp(channel){
  return  `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`
  }
  debugsCode(student, subject){
  return  `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

//Instructors
const yoda = new Instructor({
  name: 'Master Yoda',
  age: 420,
  gender: 'male',
  location: 'Dagobah',
  specialty: 'ForceScript',
  favLanguage: 'JediQuery',
  catchPhrase: 'The ForceScript be with you, it will!'
});

//Project Managers
const obiwan = new PM({
  name: 'Obiwan Kenobi',
  age: 31,
  gender: 'male',
  location: 'Jedi Temple',
  specialty: 'Regret++',
  favLanguage: 'LightSaber Mark-up Language',
  catchPhrase: 'Only a Sithlord deals in prototypes',
  gradClassName: 'Jedi Council',
  favInstructor: 'Quigon Jinn'
});

//Students
const anakin = new Student({
  name: 'Anakin Skywalker',
  age: 17,
  gender: 'male',
  location: 'Jedi Temple',
  previousBackground: 'mechanic, engineer, pilot',
  className: 'FSW15',
  favSubjects: [
    'LightSaber Mark-up Language',
    'Darkside Styling Sheets',
    'drama',
    'JediQuery'
  ],
  grade: 100
});

const luke = new Student({
  name: 'Luke Skywalker',
  age: 8,
  gender: 'male',
  location: 'Jedi Temple',
  previousBackground: 'scraps specialist, engineer',
  className: 'FSW15',
  favSubjects: [
    'LightSaber Mark-up Language',
    'Jedi Styling Sheets',
    'Taboo Relationships',
    'Overcoming Abandonment'
  ],
  grade: 100
});

console.log(yoda.age);//test inheritance to Person inheritance
console.log(obiwan.speak());//test 2 level inheritance from Person speak method
console.log(obiwan.catchPhrase);//Instructor unique props inheritance
console.log(obiwan.demo('The Force'));//instructor demo method inheritance
console.log(yoda.grade(anakin, 'Darkside Studies'));//instructor grade method inheritance
console.log(luke.favSubjects);//test student unique props
console.log(anakin.listsSubjects());//test student listsSubjects
console.log(luke.PRAssignment('Taboo Relationships'));//test student PRAssignment
console.log(anakin.sprintChallenge('JediQuery'));//test sprintChallenge
console.log(obiwan.favInstructor);//test pm unique props
console.log(obiwan.standUp('fsw15_obiwan'));//test pm standUp
console.log(obiwan.debugsCode(luke, 'Taboo Relationships'));//test pm debugsCode
console.log(obiwan.gradeChange(luke));
console.log(luke.graduate());
console.log(obiwan.gradeChange(anakin));
console.log(anakin.graduate());
