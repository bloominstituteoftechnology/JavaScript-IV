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
