class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak(){
        return `Hello! My name is ${this.name}, I am from ${this.location}.`
    }
}

class Student extends Person{
  constructor(obj){
    super(obj)
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listsSubjects(){
    return this.favSubjects;
    }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(student, subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class Instructor extends Person{
  constructor(obj){
    super(obj)
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLangauge;
    this.catchPhrase = obj.catchPhrase;
  }
  
  demo(subject){
        return `Today we are learning about ${subject}`;
    }
  grade(Student, subject){
       return '${Student.name} receives a perfect score on ${subject}';
  }
}

class ProjectManagers extends Instructor {
  constructor(obj){
    super(obj)
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }
  debugsCode(Student, subject){
    return `${name} debugs ${Student.name}'s code on ${subject}`
  }
}

const fred = new Student({
  name: 'Fred',
  age: 37,
  location: 'Bedrock',
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});
