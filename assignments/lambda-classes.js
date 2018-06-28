class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
     this.age= personAttributes.age;
     this.location =  personAttributes.location;
     this.gender = personAttributes.gender;
  }
  speak()= {
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
    grade (){
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
  listsSubjects(this.favSubjects){
    for (let i=0;i<this.favSubjects.length;i++){
    return this.favSubjects[i];
    }
  }
  PRAssignment(subject){
    return `${student.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(){
    return  `${student.name} has begun spring challenge on ${subject}`
  }
}
