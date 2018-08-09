class Person {
  constructor(stats) {
    this.first_name = stats.first_name;
    this.last_name = stats.last_name
    this.location = stats.location;
    this.gender = stats.gender
    this.dob = stats.dob
  }
  speak() {
    console.log(`Helly, my name is ${this.name}`)
  }
}

class Instructor extends Person {
  constructor (instruct) {
    super(instruct);
    this.specialty = instruct.specialty;
    this.favLanguage = instruct.favLanguage;
    this.catchPhrase = instruct.catchPhrase;
  }
  demo() {
    console.log(`Today we are learning about ${this.subject}`)
  }
}

class Student extends Instructor {
  constructor(study) {
    super(study);
    this.previousBackground = study.previousBackground;
    this.className = study.className;
    this.favSubjects = study.favSubjects;
  }
  listsSubjects() {
    console.log(this.favSubjects);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subhject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun to spring challenge on ${subject}`
  }
}

class ProjectManagers {
  constructor(manager) {
    super(manager);
    this.gradClassName = manager.gradClassName;
    this.favInstructor = manager.favInstructor;
  }
  standup(slack) {
    console.log( `${this.name} announces to ${slack}, @channel study times!`)
  }
  debugsCode(name) {
    console.log(`${name} debus ${this.name}'s code on ${this.subject}`)
  }
}


const person1 = new Person ({
{
"first_name": "Dan",
"last_name": "Smith",
"location": "Oklahoma",
"gender": "Male",
"dob": 1992
});

const person2 = new Person ({
"first_name": "Cathie",
"last_name": "Agron",
"location": "Minnesota",
"gender": "Female",
"dob": 2001
});


const steve = new Student({
  'first_name': 'Steve',
  'last_name': 'Cowen',
  'location': 'Alabama',
  'gender': 'male',
  'dob':  1985;
  'previousBackground': 'Researcher',
  'className': 'CS13',
  'favSubjects': ['History', 'CSS', 'javaScript'],
});

const person3 = new Instructor({
  "first_name": "Chrisy",
  "last_name": "Santen",
  "location": "West Virginia",
  "gender": "Male",
  "dob": 1990,
  "specialty": "Python",
  "favLanguage": "javaScript",
  });

const frank = new ProjectManager({
    'first_name': 'Frank',
    'last_name': 'Smith'
    'location': 'Dallas',
    'gender': 'male',
    'dob': 1994,
    'gradClassName': 'CS13',
    'favInstructor': 'Jeremy',
});
