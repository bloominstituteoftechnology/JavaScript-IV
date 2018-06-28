//Person Class Starts
class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  //Person Class Ends
  
  //Instructor Clas Starts
  class Instructor extends Person {
    constructor(instructorAttributes) {
      super(instructorAttributes);
      this.speciality = instructorAttributes.speciality;
      this.favLanguage = instructorAttributes.favLanguage;
      this.catchPhrase = 
    }
  }
  //Instructor Class Ends
