class Person {
  constructor(options){
    this.name = options.name;
    this.age = options.age;
    this.location = options.location;
    this.gender = options.gender;
  }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructors extends Person {
  constructor(instructorOptions){
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(subject) {
    console.log(`${this.name} recieves a perfect score on ${subject}`);
  }

}


class Students extends Instructors {
  constructor(studentOptions){
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
  }
  listsSubjects(){
    console.log(`${this.favSubjects}`)

  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }

}


class ProjectManagers extends Students {
  constructor(PMOptions){
    super(PMOptions);
    this.gradClassName = PMOptions.gradClassName;
    this.favInstructor = PMOptions.favInstructor;
  }
  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`)
  }
  debugsCode(subject, students){
    console.log(`${this.name} debugs ${students.name}'s code on ${subject}`)
  }
}

const ty = new Person({
  name: 'Ty',
  age:21,
  location:'Rexburg',
  gender: 'Male'
})

const william = new Person({
  name: 'William',
  age:21,
  location:'Rexburg',
  gender: 'Male'
})



const josh = new Instructors({
  name: 'Josh',
  location: 'Provo',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Learn to fish, catcha fish!`
});

const rhett = new Instructors({
  name: 'PJ',
  location: 'San Jose',
  age: 28,
  gender: 'male',
  favLanguage: 'HTML/CSS',
  specialty: 'Front-end',
  catchPhrase: `Remember, this is the best day of your life!`
});

const jake = new Students({
  name: 'Jake',
  location: 'Des Moines',
  age: 27,
  gender: 'male',
  favLanguage: 'HTML/CSS',
  specialty: 'Front-end',
  catchPhrase: `What the!?!`,
  previousBackground: 'Traveled until the $$ was gone',
  className: 'FSW14',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const phil = new Students({
  name: 'Phil',
  location: 'Denver',
  age: 24,
  gender: 'male',
  favLanguage: 'HTML/CSS',
  specialty: 'Front-end',
  catchPhrase: `"hand on face" emoji`,
  previousBackground: 'Work on the railroad',
  className: 'FSW14',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const lexie = new ProjectManagers({
  name: 'Lexie',
  location: 'Phoenix',
  age: 34,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `I'm here for you :)`,
  previousBackground: 'Work on the railroad',
  className: 'FSW14',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  gradClassName: 'FSW12',
  favInstructor: 'Josh'
});

const tiffany = new ProjectManagers({
  name: 'Tiffany',
  location: 'Houstin',
  age: 31,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `Figure it out!`,
  previousBackground: 'Yoga instructor',
  className: 'FSW14',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  gradClassName: 'FSW11',
  favInstructor: 'Rhett'
});


ty.speak();
rhett.demo('javaScript');
rhett.grade(jake, 'javaScript')
jake.listsSubjects();
jake.PRAssignment();
jake.sprintChallenge('Python');
tiffany.standUp('FSW14');
tiffany.debugsCode('HTML', jake);
