// CODE here for your Lambda Classes
class Person{
    constructor(personInfo){
        this.name = personInfo.name; 
        this.age = personInfo.age; 
        this.location = personInfo.location;
        this.gender = personInfo.gender; 
    }
    speak(){
        return `Hello my name is ${this.name} and I am from ${this.location}`;
    }
}

class Instructor extends Person{
  constructor(instructorInfo){
    super(instructorInfo);
    this.specialty = instructorInfo.specialty; 
    this.favLanguage = instructorInfo.favLanguage; 
    this.catchPhrase = instructorInfo.catchPhrase; 
  }
}