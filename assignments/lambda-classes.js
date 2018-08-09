// CODE here for your Lambda Classes
class Person {
  constructor(personAttr){
    this.name = personAttr.name
    this.age = personAttr.age
    this.location = personAttr.location
    this.gender = personAttr.name
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(instructorAttr){
    super(instructorAttr)
    this.specialty = instructorAttr.specialty
    this.favLanguage = instructorAttr.favLanguage
    this.catchPhrase = instructorAttr.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`
  }
  grading(prop){
    prop += Math.floor(Math.random()*100)
  }
}

class Student extends Person {
  constructor(studentAttr){
    super(studentAttr)
    this.previousBackground = studentAttr.previousBackground
    this.className = studentAttr.className
    this.favSubjects = studentAttr.favSubjects
    this.grade = 94;
  }
  listSubjects() {
    return this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
  graduate() {
    if (this.grade >= 70) {
      return `Student can graduate`
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(pmAttr) {
    super(pmAttr)
    this.gradClassName = pmAttr.gradClassName
    this.favInstructor = pmAttr.favInstructor
  }
  standUp(channel) {
    return `${ProjectManagers.name} announces to ${channel}, @${channel} standy times!`
  }
  debugsCode(student, subject) {
    return `${ProjectManagers.name} debugs ${student.name}'s code on ${subject}`
  }
}

//////////////////
// New Instructors
//////////////////
const salvador = new Instructor ({
  'name':'Salvador',
  'location': 'Cuenca',
  'age': 38,
  'gender': 'Male',
  'specialty': 'Back-End',
  'catchPhrase': 'Want more?',
})

const amalia = new Instructor ({
  'name':'Amalia',
  'location': 'Cuenca',
  'age': 34,
  'gender': 'Female',
  'specialty': 'Front-End',
  'catchPhrase': 'The bells chimes for you',
})
// salvador.speak();
// amalia.speak();
// salvador.demo('React');
// salvador.grade('Alan', 'NodeJS');

///////////////
// New Students
///////////////
const olga = new Student ({
  'name': 'Olga',
  'location': 'London',
  'age': 28,
  'gender': 'Female',
	'previousBackground': 'Designer',
	'className': 'CS14',
	'favSubjects': ['HTML', 'CSS', 'Javascript']
})

const ken = new Student ({
  'name': 'Ken',
  'location': 'Whistler',
  'age': 27,
  'gender': 'Male',
	'previousBackground': 'Guide',
	'className': 'CS14',
	'favSubjects': ['HTML', 'CSS', 'Python']
})
// olga.speak();
// ken.speak();
// olga.listSubjects();
// olga.PRAssignment('prototype inheritance');
// ken.sprintChallenge('javascript IV');