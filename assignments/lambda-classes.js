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
