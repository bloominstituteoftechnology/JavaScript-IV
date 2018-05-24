// CODE here for your Lambda Classes

//base class
class Person{
  constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class Instructor extends Person{
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person{
  constructor(studentAttributes){
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listsSubjects(){
    return `${this.name}'s Favorite subjects are: ${this.favSubjects}`;
  }  

  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject){
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerAttributes){
      super(projectManagerAttributes);
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
  }

  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }

  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const hagrid = new Person({
  name: 'Hagrid',
  location: 'Hogwarts',
  age: 55,
  gender: 'male'
});

const snape = new Instructor({
  name: 'Snape',
  location: 'Hogwarts',
  age: 38,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: "Don't forget the potions"
});

const dumbledore = new Instructor({
  name: 'Dumbledore',
  location: 'Hogwarts',
  age: 100,
  gender: 'male',
  favLanguage: 'PHP',
  specialty: 'Full-Stack',
  catchPhrase: "Don''t tickle the sleeping Dragon"
});


const harry = new Student({
  name: 'Harry',
  location: 'Hogwarts',
  age: 17,
  gender: 'male',
  previousBackground: 'muggle',
  className: 'CS132',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const hermione = new Student({
  name: 'Hermione',
  location: 'Hogwarts',
  age: 16,
  gender: 'female',
  previousBackground: 'muggle',
  className: 'CS132',
  favSubjects: ['Html', 'CSS', 'JavaScript','SQL']
});

const ron = new ProjectManager({
  name: 'Ron',
  location: 'Hogwarts',
  age: 32,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Back-end',
  catchPhrase: 'Blimey',
  gradClassName: 'CS1',
  favInstructor: 'Snape'
});

const dean = new ProjectManager({
  name: 'Dean',
  location: 'Hogwarts',
  age: 35,
  gender: 'male',
  favLanguage: 'C',
  specialty: 'Back-end',
  catchPhrase: "Merlin's Beard",
  gradClassName: 'CS1',
  favInstructor: 'Dumbledore'
});



console.log(hagrid.age);// 55
console.log(snape.grade(hermione,"Java"));//Hermione receives a perfect score on Java
console.log(dumbledore.demo("C++"));//Today we are learning about C++
console.log(harry. sprintChallenge("JavaScript"));//Harry has begun spring challenge on JavaScript
console.log(hermione. listsSubjects());//Hermione's Favorite subjects are: Html,CSS,JavaScript,SQL
console.log(harry.PRAssignment("Java"));//Harry has submitted a PR for Java
console.log(ron.standUp('cs_11'));//Ron announces to cs_11, @channel standy times!
console.log(dean.debugsCode(harry, "JavaScript"));//Dean debugs Harry's code on JavaScript
