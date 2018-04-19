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

}

// ==== Student ====
class Student extends Person {

}

// ==== Project Manager ====
class ProjectManager extends Instructor {
  
}