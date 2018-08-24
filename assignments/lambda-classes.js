// CODE here for your Lambda Classes
class Person {
  constructor(personDetails) {
    this.name = personDetails.name;
    this.age = personDetails.age;
    this.location = personDetails.location;
    this.gender = personDetails.gender;
  }
   speak (name, location) {
     return `Hello my name is ${this.name}, I am from ${this.location}.`
   }
}

class Instructor extends Person {
  constructor(instructorDetails) {
    super(instructorDetails);
    this.specialty = instructorDetails.speciality;
    this.favLanguage = instructorDetails.favLanguage;
    this.catchPhrase = instructorDetails.catchPhrase;

  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

   grade(student, subject) {
     return `${student.name} receives a perfect score on ${subject}.`;
   }
}

class Student extends Person {
  constructor(studentDetails){
    super(studentDetails){
    this.previousBackground = studentDetails.previousBackground;
    this.className = studentDetails.className;
    this.favSubjects = studentDetails.favSubjects;

    }
    listsSubjects(){
      return this.favSubjects;
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
      return `${this.name} has begun the spring challenge on ${subject}.`
    }
}
const Willis = new Student({
  name: 'Willis',
  age: 40,
  location: 'Mars',
  gender: 'Non-conforming',
  previousBackground: 'expert sleeper',
  className: 'CSPT2',
  favSubjects: ['JavaScript', 'CSS'],
})

const Phil = new Student({
  name: 'Phillip',
  age: 12,
  location: 'Montanta',
  gender: 'Male',
  previousBackground: 'ballerina',
  className: 'CSPT2',
  favSubjects: ['JavaScript', 'CSS'],
})

console.log(Willis.PRAssignment('CSS'));
console.log(Willis.speak());
console.log(Phil.sprintChallenge('Ruby'));

class ProjectManager extends Instructor{
  constructor(pmDetails){
    super(pmDetails);
    this.gradClassName = pmDetails.gradClassName;
    this.favInstructor = pmDetails.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugCode(student, subject){
    return `${this.name} debugs ${Student.name}'s code on ${subject}.`
  }
}
const Ron = new ProjectManager({
  name: "Ronald Weasley",
  age: 22,
  location: 'Hogwarts',
  gender: 'Male',
  speciality: 'Wizardry',
  favLanguage: 'React',
  catchPhrase: 'Wingardium Leviosa',
  gradClassName: "Hogwarts '99",
  favInstructor: 'Flitwick',
})

const Jamm = new ProjectManager({
  name: "Jeremy Jamm",
  age: 40,
  location: 'Pawnee',
  gender: 'Male',
  speciality: 'Less',
  favLanguage: 'React',
  catchPhrase: 'You got Jammed!',
  gradClassName: "CS2",
  favInstructor: 'Dan the man',
})

console.log(Ron.standUp('channel 2'));
console.log(Jamm.debugCode(Willis, 'Less'));
