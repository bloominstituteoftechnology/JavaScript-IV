class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
     this.age= personAttributes.age;
     this.location =  personAttributes.location;
     this.gender = personAttributes.gender;
  }
  speak() {
 return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase
      }
      demo(subject){
    return `Today we are learning about ${subject}`
      }
    grade (subject){
      return `${student.name} receives a perfect score on ${subject}`
    }
}


class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground= studentAttributes.previousBackground;
    this.className=studentAttributes.className
    this.favSubjects= studentAttributes.favSubjects
  }
  listsSubjects(listfavSubjects){
    for (let i=0;i<listfavSubjects.length;i++){
    return listfavSubjects[i];
    }
  }
  PRAssignment(subject){
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(){
    return  `${student.name} has begun spring challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerAttributes) {
    super(projectManagerAttributes);
    this.gradClassName=projectManagerAttributes.gradClassName
  this.favInstructor= projectManagerAttributes.favInstructor
  }
  standup(channel){
    return`${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }
debugsCode(student,subject){
  `${this.name} debugs ${student.name}'s code on ${subject}`
}
}



const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
console.log(fred.age);
