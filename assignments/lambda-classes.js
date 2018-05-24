// CODE here for your Lambda Classes


//---------------------------------------------------------------
// CLASS PERSON 
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


//---------------------------------------------------------------
// CLASS INSTRUCTOR 

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    // unique props
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

  graduateStudent(studentOBJ) {
    return `Congratulations, ${ studentOBJ.name }, you are now ready to graduate!`;
  }

  gradeStudent(studentOBJ) {
    let newGrade = 0;

    while (newGrade <= 70) {
      newGrade = Math.floor(Math.random() * Math.floor(100)) + studentOBJ.grade;
      
      if (newGrade > 70) return this.graduateStudent(studentOBJ);
    }
  }
}


//---------------------------------------------------------------
// CLASS STUDENT 

class Student extends Person {
  constructor(attr) {
    super(attr);
    // unique props
    this.previousBackground = attr.previousBackground;
    this.className          = attr.className;
    this.favSubjects        = attr.favSubjects;
    this.grade              = attr.grade;
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
    return `${ this.name } has begun sprintChallenge challenge on ${ sprintSTR }`;
  }
}

//---------------------------------------------------------------
// CLASS PROJECTMANAGER 

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    // unique props
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


//===============================================================
// INSTANTIATE INSTRUCTOR 

// Josh Knell
const joshKnell = new Instructor({
  name        : 'Josh Knell',
  age         : 34,
  location    : 'SCreen',
  gender      : 'Male',
  specialty   : 'Front End Web',
  favLanguage : 'JavaScript',
  catchPhrase : 'Don\'t cheat!  you\'re only cheating yourself!',
});

// Diandra
const diandra = new Instructor({
  name        : 'Diandra',
  age         : 26,
  location    : 'Bisbee, AZ',
  gender      : 'Female',
  specialty   : 'specialty',
  favLanguage : 'Python',
  catchPhrase : 'Hello Mini-Bootcamp!',
});


//===============================================================
// INSTANTIATE STUDENT 

// Sam Khaled
const SamK = new Student({
  name               : 'Sam Khaled',
  age                : 57,
  location           : 'GA',
  gender             : 'Male',
  previousBackground : 'IT Project Manager',
  className          : 'CS11',
  favSubjects        : ['UI/UX', 'Data Modeling', 'ITIL'],
  grade              :  Math.floor(Math.random() * Math.floor(100)),
});

// Joseph Stanfield
const JosephS = new Student({
  name               : 'Joseph Stanfield',
  age                : 28,
  location           : 'TX',
  gender             : 'Male',
  previousBackground : 'Line Cook',
  className          : 'CS11',
  favSubjects        : ['JavaScript', 'CSS', 'HTML'],
  grade              :  Math.floor(Math.random() * Math.floor(100)),
});

// Sean Chavez
const SeanC = new Student({
  name               : 'Sean Chavez',
  age                : 35,
  location           : 'CA',
  gender             : 'Male',
  previousBackground : 'Comedian',
  className          : 'CS10',
  favSubjects        : ['HTML', 'CSS', 'JavaScript'],
  grade              :  Math.floor(Math.random() * Math.floor(100)),
});


//===============================================================
// INSTANTIATE PROJECT MANAGER 

// Johnathan Justinn
const JohnathanJ = new ProjectManager({
  name          : 'Johnathan Justinn',
  age           : 25,
  location      : 'Macon-GA',
  gender        : 'Male',
  specialty     : 'Software',
  favLanguage   : 'C/C++',
  catchPhrase   : 'It\'s all good!',
  gradClassName : 'CS1',
  favInstructor : 'favInstructor',
});

// Brian Durbin
const BrianD = new ProjectManager({
  name          : 'Brian Durbin',
  age           : 21,
  location      : 'NY',
  gender        : 'Male',
  specialty     : 'Front End Web',
  favLanguage   : 'JavaScript',
  catchPhrase   : 'Get \'em tiger!',
  gradClassName : 'gradClassName',
  favInstructor : 'favInstructor',
});

//===============================================================
// INSTRUCTOR TEST 
console.log('\n=========================================');
console.log('testing instructor');
console.log('=========================================');
// Josh
console.log(joshKnell);
console.log(joshKnell.demo('CS11 Instruction'));
console.log(joshKnell.grade(SamK, 'everything!'));
console.log('\n')
// Diandra
console.log(diandra);
console.log(diandra.demo('Monthly mini-Bootcamp'));
console.log(diandra.grade(JosephS, 'nothing!'));


//..............................................................
// STUDENTS TEST 
console.log('\n\n\n=========================================');
console.log('testing student');
console.log('=========================================');
// SamK
console.log(SamK);
SamK.listsSubjects();
console.log(SamK.PRAssignment('JavaScript-IV'));
console.log(SamK.sprintChallenge('JavaScript-IV'));SamK
console.log('\n')
// JosephS
console.log(JosephS);
JosephS.listsSubjects();
console.log(JosephS.PRAssignment('JavaScript-IV'));
console.log(JosephS.sprintChallenge('JavaScript-IV'));
console.log('\n')
// SeanC
console.log(SeanC);
SeanC.listsSubjects();
console.log(SeanC.PRAssignment('JavaScript-IV'));
console.log(SeanC.sprintChallenge('JavaScript-IV'));
console.log('\n')
//..............................................................
// PROJECT MANAGER TEST 
console.log('\n\n\n=========================================');
console.log('testing project manager');
console.log('=========================================');
// JohnathanJ
console.log(JohnathanJ);
console.log(JohnathanJ.standUp('@SamK'));
console.log(JohnathanJ.debugsCode(SamK, 'JavaScript'));
console.log(JohnathanJ.gradeStudent(SamK));
console.log('\n')
// BrianD
console.log(BrianD);
console.log(BrianD.standUp('@JackV'));
console.log(BrianD.debugsCode(SeanC, 'nothing, he\'s doing great!'));
console.log(BrianD.gradeStudent(JosephS));