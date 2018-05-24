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
  grade (student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
  teach(student){
    if (student.grade >= 70){
      return `${student.name}'s grade is ${student.grade} so ${student.name} is now a Lambda School graduate!`
    }
    else {
      while (student.grade < 70){
        student.grade = Math.floor(Math.random() * 100) + 1;
        if (student.grade >= 70){
          return `${student.name}'s grade is ${student.grade} so ${student.name} is now a Lambda School graduate!`
        }
        console.log(`${student.name}'s new grade is ${student.grade}`)
      }
    }
  }
}
class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1;
  }
  listsSubjects(){
    for (var i = 1; i < 4; i++){
      return(this.favSubjects[`subject${i}`]);
    }
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}
class ProjectManager extends Instructor{
  constructor(projectManagerOptions) {
    super(projectManagerOptions);
    this.gradClassName = projectManagerOptions.gradClassName;
    this.favInstructor = projectManagerOptions.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @${channel} standy times!`;
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}'`;
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
  favSubjects: {
    subject1: "c++",
    subject2: "game hacking",
    subject3: "logic"
  }
});
var projectManagerTest = new ProjectManager({
  name: "Perry Ahern",
  age: "50",
  location: "New York",
  gender: "Male",
  specialty: "React",
  favLanguage: "C++",
  catchPhrase: "Pair programming is fun!",
  gradClassName: "CS7",
  favInstructor: "Dianndra Ryan-Mas"
});
//function tests
console.log(personTest.speak());
console.log(instructorTest.demo("c++"));
console.log(instructorTest.grade(studentTest,"c++"));
console.log(studentTest.listsSubjects());
console.log(studentTest.PRAssignment("Perl"));
console.log(studentTest.sprintChallenge("Classes"));
console.log(projectManagerTest.standUp("Cs11-Perry"));
console.log(projectManagerTest.debugsCode(studentTest, "CSS"));
