// CODE here for your Lambda Classes
class Person {
  constructor(personOptions) {
    this.name = personOptions.name;
    this.age = personOptions.age;
    this.location = personOptions.location;
    this.gender = personOptions.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
  }
  demo (subject){
    return `Today we are learning about ${subject}.`;
  }
  subject (student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = favSubjects.favSubjects;
  }
  listsSubjects(){
    return "listsSubjects";
  }
  PRAssignment(){
    return "PRAssignment";
  }
  sprintChallenge(){
    return "sprintChallenge";
  }
}
class ProjectManager extends Instructor{
  constructor(projectManagerOptions) {
    super(projectManagerOptions);
    this.gradClassName = projectManagerOptions.gradClassName;
    this.favInstructor = projectManagerOptions.favInstructor;
  }
  standUp(){
    return "standUp";
  }
  debugsCode(){
    return "debugsCode";
  }
}
var personTest = new Person ({
  name: "Raymond Garcia",
  age: "24",
  location: "Texas",
  gender: "Male"
});
var instructorTest = new Instructor({
  name: "Josh Knell",
  age: "34",
  location: "Utah",
  gender: "Male",
  specialty: "Front-end",
  favLanguage: "Perl",
  catchPhrase: "Wowzers!"
});
var studentTest = new Student ({
  name: "Raymond Garcia",
  age: "24",
  location: "Texas",
  gender: "Male",
  previousBackground: "College graduate",
  className: "CS11",
  favSubjects: "Game hacking"
});
var projectManagerTest = new ProjectManager({
  name: "Perry Ahern",
  age: "50",
  location: "New York",
  gender: "Male"
  specialty: "React",
  favLanguage: "C++",
  catchPhrase: "Pair programming is fun!",
  gradClassName: "CS7",
  favInstructor: "Dianndra Ryan-Mas"
});
