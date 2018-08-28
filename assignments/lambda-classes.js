// CODE here for your Lambda Classes
class Person {
  constructor (personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak(){ return `Hello my name is ${this.name}, I am from ${this.location}`}
}

class Instructor extends Person {
  constructor (instructorAttributes){
    super(instructorAttributes)
      this.favLanguage = instructorAttributes.favLanguage;
      this.speciality = instructorAttributes.speciality;
      this.catchPhrase = instructorAttributes.catchPhrase;    
  }
  demo(subject) { return `Today we are learning about ${subject}` }
  grade(student, subject ){ return `${student} receives a perfect score on ${subject}`}
}

class Students extends Person {
  constructor (studentAttributes){
    super(studentAttributes)
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects; 
          
  }
  listsSubjects( ) { return `${(this.favSubjects).map((favSubject) => favSubject)}`}
  PRAssignment(subject) { return `${this.name} has submitted a PR for ${subject}`}
  sprintChallenge(subject) { return `${this.name} has begun sprint challenge on  ${subject}`}
  
}

class projectManagers  extends Instructor {
  constructor (pmAttributes){
    super(pmAttributes)
      this.gradClassName = instructorAttributes.gradClassName;
      this.favInstructor = instructorAttributes.favInstructors;
      this.catchPhrase = instructorAttributes.catchPhrase;    
  }
  standUp() { return `${this.name} announces to ${this.gradClassName}, @channel standy times!`​​​​​ }
  debugsCode(student, subject){`${this.name} debugs ${student.name}'s code on ${listsSubjects( ).subject}`}
}


