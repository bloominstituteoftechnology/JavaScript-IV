// CODE here for your Lambda Classes

//Classes
class Person {
  constructor(base){
    this.name = base.name;
    this.age = base.age;
    this.location = base.location;
    this.gender = base.gender;
  };
  speak(){
    return `Hello, my name is ${this.name}, I am from ${this.location}.`
  };
};

class Instructor extends Person{
  constructor(instructorBase){
    super(instructorBase);
    this.specialty = instructorBase.specialty;
    this.favLanguage = instructorBase.favLanguage;
    this.catchPhrase = instructorBase.catchPhrase;
  };
  demo(subject){
    return `Today we are learning about ${subject}.`;
  };
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`
  };
};

class Student extends Person {
  constructor(studentBase){
    super(studentBase);
    this.previousBackground = studentBase.previousBackground;
    this.className = studentBase.className;
    this.favSubjects = studentBase.favSubjects;
  };
  listsSubjects(){
    this.favSubjects.forEach(function(i){
      return i;
    })
    // for (i = 0; i < this.favSubjects.length; i++) {
    //   return this.favSubjects[i];
    // };
  };
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`
  };
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}.`
  };
};

class ProjectManagers extends Instructor {
  constructor(pmBase) {
    super(pmBase);
    this.gradClassName = pmBase.gradClassName;
    this.favInstructor = pmBase.favInstructor;
  };
  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} standy times!`;
  };
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  };
};

//Objects

const bob = new Instructor({
  name: 'Bob',
  location: 'Charlotte',
  age: 54,
  gender: 'Male',
  favLanguage: 'Python',
  specialty: 'Data Science',
  catchPhrase: 'Just wait for the SQL',
});

const suzie = new Instructor({
  name: 'Suzie',
  location: 'Los Angeles',
  age: 32,
  gender: 'Female',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: 'Keep at it!',
});

const thomas = new Student({
  name: 'Thomas',
  location: 'Philadelphia',
  age: 26,
  gender: 'Male',
  previousBackground: 'Finance',
  className: 'CS-7',
  favSubjects: ['MongoDB', 'Python', 'Django'],
});

const ashley = new Student({
  name: 'Ashley',
  location: 'Vacaville',
  age: 23,
  gender: 'Female',
  previousBackground: 'Graphic Design',
  className: 'CS-9',
  favSubjects: ['HTML', 'CSS', 'Javascript', 'React'],
});

const david = new ProjectManagers({
  name: 'David',
  location: 'Hartford',
  age: 28,
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'It will all work out',
  gradClassName: 'CS-2',
  favInstructor: 'Josh Knell'
});

const mary = new ProjectManagers({
  name: 'Mary',
  location: 'Helena',
  age: 43,
  gender: 'Female',
  favLanguage: 'C++',
  specialty: 'Game Development',
  catchPhrase: 'Perfect practice makes perfect',
  gradClassName: 'CS-6',
  favInstructor: 'Beej Jorgensen'
});

//Instructors
console.log(suzie.name);
console.log(bob.specialty);
console.log(suzie.favLanguage);
console.log(bob.catchPhrase);
console.log(suzie.demo('Algorithms'));
console.log(bob.grade(ashley, 'Algorithms'));
console.log(bob.gender);

//Students
console.log(thomas.name);
console.log(thomas.previousBackground);
console.log(ashley.className);
console.log(thomas.favSubjects);
console.log(ashley.listsSubjects());
console.log(thomas.PRAssignment('Authentication'));
console.log(ashley.sprintChallenge('Authentication'));
console.log(ashley.location);

//Project Managers
console.log(david.age);
console.log(mary.gradClassName);
console.log(david.favInstructor);
console.log(mary.speak());
console.log(david.standUp('#CS_10'))
console.log(mary.debugsCode(thomas, 'JavaScript-III'))