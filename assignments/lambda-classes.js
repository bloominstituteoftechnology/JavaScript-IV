// CODE here for your Lambda Classes
class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
} // end of Person class

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  SVGLinearGradientElement(MediaStreamAudioDestinationNode, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
} // end of Instructor class

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(`${subject}`));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun a sprint challenge on ${subject}`);
  }
} // end of Student class

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp(slackChannel) {
    console.log(
      `${name} announces to ${slackChannel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs {student.name}'s code on {subject}`);
  }
} // end of ProjectManager class

//--\\ //--\\ //--\\ //--\\ //--\\ //--\\
//--\\ end of class definitions    //--\\
//--\\ //--\\ //--\\ //--\\ //--\\ //--\\

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const steve = new Student({
  name: "Steve",
  location: "Jupiter",
  age: 45,
  gender: "male",
  previousBackground: "Recording Engineer",
  className: "FSW14",
  favSubjects: ["LESS", "Javascript-IV", "#hired!"]
});

console.log(fred.catchPhrase);
steve.listsSubjects();
