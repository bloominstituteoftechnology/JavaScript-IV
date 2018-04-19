// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}​​​​​`);
  }

}




class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchphrase = attributes.catchphrase;
  }

  demo(subject) {
    console.log("Today we are learning about ${subject}");
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }

}



class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun a sprint challenge on ${subject}`);
  }

}






class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

let Billy = new ProjectManager({
  'name': 'Billy',
  'age': 1000,
  'location': 'The Universe',
  'gender': 'All',
  'specialty': 'none',
  'favLanguage': 'Orcish',
  'catchphrase': `Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn`,
  'gradClassName': 'CS100',
  'favInstructor': 'Billy',
});

testStudent = new Student({
  'name': 'Sally',
  'age': 3,
  'location': 'The Universe',
  'gender': 'f',
  'previousBackground': 'none',
  'className': 'CSsqrt(-1)',
  'favSubjects': ['stuff', 'things', 'doings'],
});

Billy.speak();

Billy.demo("doing things");

Billy.grade(Billy, "doing stuff");



testStudent.listsSubjects();

testStudent.PRAssignment("argh");

testStudent.sprintChallenge("blargh");


Billy.debugsCode(testStudent, "things");

Billy.standup("Billy's Channel");
