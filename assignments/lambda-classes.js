// CODE here for your Lambda Classes

// ==== Person ====
class Person {
  constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

// ==== Instructor ====
class Instructor extends Person {
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.speciality = instructorAttributes.speciality;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

// ==== Student ====
class Student extends Person {

}

// ==== Project Manager ====
class ProjectManager extends Instructor {

}