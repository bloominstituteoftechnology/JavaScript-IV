// CODE here for your Lambda Classes
class Person {
  constructor(object){
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
    this.gender = object.gender;
  }

  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(Person){
    super(Person);
    this.specialty = Person.specialty;
    this.favLanguage = Person.favLanguage;
    this.catchPhrase = Person.catchPhrase;
  }

  demo(subject){
    console.log(`Today we are learning about ${this.subject}`);
  }

  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(Person){
    super(Person);
    this.previousBackground = Person.previousBackground;
    this.className = Person.className;
    this.favSubjects = Person.favSubjects;
  }

  listsSubjects(){
    console.log(this.favSubjects);
  }

  PRAssignment(subject){
      `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(Student, subject){
    console.log(`${Student.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor{
  constructor(Instructor){
  super(Instructor);
  this.gradClassName = Instructor.gradClassName;
  this.favInstructor = Instructor.favInstructor;
  }

  standUp(channel){
    console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
  }

  debugsCode(Student, subject){
    console.log(`${this.name} debugs ${Student.name}'s code on ${subject}'`)
  }
}

//class examples following

const melody = new Person({
  name: 'Melody',
  location: 'Tulsa',
  age: 44,
  gender: 'female',
  favLanguage: 'English',
  specialty: 'None',
  catchPhrase: `Hi, I'm Paul's sister, Melody.`
});

melody.speak();

const paul = new Student({
  name: 'Paul',
  location: 'Tulsa',
  age: 48,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Undecided',
  catchPhrase: `Wubba-lubba-dub-dub!`,
  previousBackground: 'IT Help Desk Technician',
  className: 'CSPT2',
  favSubjects: ['JavaScript', 'HTML', 'Python']
})

paul.speak();
paul.listsSubjects();

const kia = new ProjectManager({
  name: 'Kia',
});

kia.debugsCode(paul, 'HTML');

const dan = new Instructor({
  name: 'Dan',
});

dan.grade(paul, 'JavaScript');
