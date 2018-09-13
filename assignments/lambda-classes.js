// CODE here for your Lambda Classes
class Person {
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
      console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
  constructor(InstructorInfo) {
    super(InstructorInfo)
    this.specialty = InstructorInfo.specialty;
    this.favLanguage = InstructorInfo.favLanguage;
    this.catchPhrase = InstructorInfo.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person {
  constructor(StudentInfo) {
    super(StudentInfo)
    this.previousBackground = StudentInfo.previousBackground;
    this.className = StudentInfo.className;
    this.favSubjects = StudentInfo.favSubjects;
    this.listsSubjects = StudentInfo.listsSubjects;
  }
  PRAssignment(subject) {
     console.log(`${this.name} has submitted a PR for ${subject}`)
  }
    sprintChallenge(subject) {
     console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(PMInfo) {
    super(PMInfo);
    this.gradClassName = PMInfo.gradClassName;
    this.favInstructor = PMInfo.favInstructor;
  }
  standUp() {
    console.log(`${this.name} announces to ${channel}, "@${channel} standy times!"`)
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student}'s code on ${subject}`)
  }
}

const edwin = new Student({
    "name": "Edwin",
    "age": 26,
    "location": "VA",
    "gender": "Male",
    "previousBackground": "Collection Specialist",
    "className": "FSW 14",
    "favSubjects": "Javascript",
    "listsSubjects": ["HTML", "CSS", "Javascript"]
  })
  
  edwin.sprintChallenge("Math")
  
  const margo = new ProjectManager({
    "name": "Margo",
    "age": 12,
    "location": "Internet",
    "gender": "female",
    "gradClassName": "FSW 14",
    "favInstructor": "Josh",
    "specialty": "Javascript"
  })
  
  margo.debugsCode("Edwin", "Math")