// CODE here for your Lambda Classes
/*****************
** CLASS PERSON **
*****************/
class Person {
  constructor(attr) {
    this.name     = attr.name;
    this.age      = attr.age;
    this.location = attr.location;
    this.gender   = attr.gender;
  }

  speak() {
    return `Hello my name is ${ this.name }, I am from ${ this.location }`;
  }
}

/*********************
** CLASS INSTRUCTOR **
*********************/
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(studentOBJ, subjectSTR) {
    return `${ studentOBJ.name } receives a perfect score on ${ subjectSTR }`;
  }
}

/******************
** CLASS STUDENT **
******************/
class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className          = attr.className;
    this.favSubjects        = attr.favSubjects;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subjectSTR) {
    return `${ this.name } has submitted a PR for ${ subjectSTR }`;
  }

  sprintChallenge(sprintSTR) {
    return `${ this.name } has begun spring challenge on ${ sprintSTR }`;
  }
}

/*************************
** CLASS PROJECTMANAGER **
*************************/
class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(chanSTR) {
    return `${ this.name } announces to ${ chanSTR }, @channel stand-up time!`;
  }

  debugsCode(studentOBJ, subjectSTR) {
    return `${ this.name } debugs ${ studentOBJ.name }'s code on ${ subjectSTR }`;
  }
}

/***************************
** INSTANTIATE INSTRUCTOR **
***************************/
// Josh Knell
const joshKnell = new Instructor({
  name        : 'Josh Knell',
  age         : 21,
  location    : 'Zoom',
  gender      : 'Male',
  specialty   : 'Front End Web',
  favLanguage : 'JavaScript',
  catchPhrase : 'I will break you, and then build you up stronger!',
});

// Diandra
const diandra = new Instructor({
  name        : 'Diandra',
  age         : 21,
  location    : 'Hidden',
  gender      : 'Female',
  specialty   : 'specialty',
  favLanguage : 'favLanguage',
  catchPhrase : 'catchPhrase',
});

/************************
** INSTANTIATE STUDENT **
************************/
// brandon
const brandon = new Student({
  name               : 'Brandon Benefield',
  age                : 28,
  location           : 'FL',
  gender             : 'Male',
  previousBackground : 'Contractor',
  className          : 'CS10',
  favSubjects        : ['Algorithms', 'Backend', 'Databases'],
});

// thuy
const thuy = new Student({
  name               : 'Thuy Pham',
  age                : 21,
  location           : '???',
  gender             : 'Female',
  previousBackground : 'previousBackground',
  className          : 'CS10',
  favSubjects        : ['Algorithms', 'Backend', 'Databases'],
});

// alex
const alex = new Student({
  name               : 'Alex Dykas',
  age                : 21,
  location           : '???',
  gender             : 'Male',
  previousBackground : 'previousBackground',
  className          : 'CS10',
  favSubjects        : ['Algorithms', 'Backend', 'Databases'],
});

/********************************
** INSTANTIATE PROJECT MANAGER **
********************************/
// jeff
const schock = new ProjectManager({
  name          : 'Jeff Schock',
  age           : 21,
  location      : '???',
  gender        : 'Male',
  specialty     : 'Software',
  favLanguage   : 'Python',
  catchPhrase   : 'Sagar, mute!',
  gradClassName : 'CSX',
  favInstructor : 'favInstructor',
});

// patrick
const patrick = new ProjectManager({
  name          : 'Patrick Kennedy',
  age           : 21,
  location      : '???',
  gender        : 'Male',
  specialty     : 'Front End Web',
  favLanguage   : 'JavaScript',
  catchPhrase   : 'Yabba zabba, you my only friend!',
  gradClassName : 'gradClassName',
  favInstructor : 'favInstructor',
});

/********************
** INSTRUCTOR TEST **
********************/
// Josh
console.log(joshKnell);
console.log(joshKnell.demo('ES6 Classes'));
console.log(joshKnell.grade(brandon, 'everything!'));

// Diandra
console.log(diandra);
console.log(diandra.demo('ES6 Classes'));
console.log(diandra.grade(thuy, 'nothing!'));

/******************
** STUDENTS TEST **
******************/
// brandon
console.log(brandon);
brandon.listsSubjects();
console.log(brandon.PRAssignment('JavaScript-IV'));
console.log(brandon.sprintChallenge('JavaScript-IV'));

// thuy
console.log(thuy);
thuy.listsSubjects();
console.log(thuy.PRAssignment('JavaScript-IV'));
console.log(thuy.sprintChallenge('JavaScript-IV'));

// alex
console.log(alex);
alex.listsSubjects();
console.log(alex.PRAssignment('JavaScript-IV'));
console.log(alex.sprintChallenge('JavaScript-IV'));

/*************************
** PROJECT MANAGER TEST **
*************************/
// schock
console.log(schock);
console.log(schock.standUp('#cs10_Jeff'));
console.log(schock.debugsCode(brandon, 'JavaScript'));

// patrick
console.log(patrick);
console.log(patrick.standUp('#cs10_Patrick'));
console.log(patrick.debugsCode(alex, 'nothing, he\'s doing great!'));