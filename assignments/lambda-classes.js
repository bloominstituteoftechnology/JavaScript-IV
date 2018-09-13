// CODE here for your Lambda Classes

class Person {
  constructor(options){
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}//end Person

class Instructor extends Person {
  constructor(instructorOptions){
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
  }
  demo(subject){
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
  gradeStudent(student){
    let score = (Math.floor((Math.random()*10)+1))
    let addOrSubtract = Math.random() < 0.5 ? -1 : 1;
    score = score * addOrSubtract;
    student.grade += score;
    console.log(`${student.name} now has a grade of ${student.grade}`);
  }
}//end Instructor


class Student extends Person {
  constructor(studentOptions){
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
    this.grade = studentOptions.grade;
    this.status = studentOptions.status;
  }
  listsSubjects(){
    this.favSubjects.forEach(function(subject) {
      console.log(`${subject}`);
    });
  };
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
  };
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  };
  graduate(){
    if (this.grade >= 70){
      this.status = 'Graduate';
      console.log(`Congratulations, ${this.name}! You are now a graduate!`);
    }
    if (this.grade < 70){
      console.log( `Really dive into your studies, ${this.name}. I know you can do it!`);
    }
  }
}//end Student

class ProjectManager extends Instructor {
  constructor(projectManagerOptions){
    super(projectManagerOptions);
    this.gradClassName = projectManagerOptions.gradClassName;
    this.favInstructor = projectManagerOptions. favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to #${channel}, @channel standy times!`);
  }
  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
};//end ProjectManagers

const scully = new Instructor ({
  name: 'Dana Scully',
  location: 'Alexandria',
  age: 53,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Autopsies',
  catchPrase: 'Sure. Fine. Whatever.',
});

const frohike = new Instructor ({
  name: 'Melvin Frohike',
  location: 'Anacostia',
  age: 57,
  gender: 'male',
  favLanguage: 'LOLCODE',
  specialty: 'Tango',
  catchPrase: 'They\'re always listening',
});

const skinner = new ProjectManager({
  name: 'Walter Skinner',
  location: 'Washington D.C.',
  age: 65,
  gender: 'male',
  favLanguage: 'Fortran',
  specialty: 'Being a wet blanket',
  catchPhrase: 'What did Mulder do now?',
  favInstructor: 'Scully',
  gradClassName: 'Quantico\'s Most Rule Abiding',
});

const krychek = new ProjectManager({
  name: 'Alex Krychek',
  location: 'St. Petersburg',
  age: 39,
  gender: 'male',
  favLanguage: 'Malbolge',
  specialty: 'Secretely working for the Cigarette Smoking Man',
  catchPhrase: 'I do what I want',
  favInstructor: 'The Cigarette Smoking Man',
  gradClassName: 'The Russian Syndicate',
});

const mulder = new Student({
  name: 'Fox Mulder',
  location: 'Manassas',
  age: 56,
  gender: 'male',
  favSubjects: [
    'aliens',
    'Melvin Frohike',
    'spontaneous human combustion',
    'the occult',
],
  className: 'Abduction Believers',
  previousBackground: 'Knowing the Lone Gunmen',
  grade: 65,
  status: 'Student',
});

const langly = new Student({
  name: 'Ringo Langly',
  location: 'Saltville',
  age: 57,
  gender: 'male',
  favSubjects: [
    'hacking',
    'illegal wiretaps',
    'government mind control experiments',
],
  className: 'Paranoid Hackers',
  previousBackground: 'Started programming at age 5',
  grade: 90,
  status: 'Student',
});

// instructors: scully, frohike
// project managers: skinner, krycheck
// students: mulder, langly
//
// person methods: speak()
// instructor methods: demo(subject string), grade(student object, subject string), gradeStudent(student object) [+ person]
// pm methods: standUp(channel string), debugsCode(student object, subject string) [+ instructor]
// student methods: listsSubjects() lists out favSubjects one by one, PRAssignment(subject string), sprintChallenge(subject string)

// scully.grade(mulder, 'trying to kill us both');
// frohike.grade(langly, 'paranoia');
// scully.demo('autopsies');
// frohike.demo('best practices in foil hat construction');
// skinner.standUp('Directors');
// krychek.standUp('The Syndicate')
// skinner.grade(mulder, 'embarrasing the FBI. Again.');
// krychek.demo('how to double cross everyone you know');
// mulder.PRAssignment('meeting strangers in dark alleys');
// langly.PRAssignment('tapping your calls');
// mulder.sprintChallenge('weird theories');
// langly.sprintChallenge('tapping the government\'s calls');
// mulder.listsSubjects();
// langly.listsSubjects();
// scully.gradeStudent(mulder);
// krychek.gradeStudent(langly);
// mulder.graduate();
// console.log(mulder.status);
// langly.graduate();
// console.log(langly.status);
