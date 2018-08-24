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
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject){
     return `${student} received a perfect score on ${subject}`;
  }
}

 
class Student extends Person{
    constructor(studentInfo){
      super(studentInfo);
      this.previousBackground = studentInfo.previousBackground; 
      this.className = studentInfo.className; 
      this.favSubjects = [studentInfo.favSubjects]; 
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`; 
    }
    sprintChallenge(sprintSub){
        return `${this.name} has begun sprint challenge on ${sprintSub}`;
    }
}

class projectManager extends Instructor{
    constructor(projectManagerInfo){
        super(projectManagerInfo); 
        this.gradClassName = projectManagerInfo.gradClassName; 
        this.favInstructor = projectManagerInfo.favInstructor; 
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​`; 
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const Ryan = new Student({
    name: 'Ryan',
    location: 'Dallas',
    age: 31,
    gender: 'male',
    previousBackground: 'music', 
    className: "CSPT2",
    favSubjects: `Javascript, Less/Css `
  });


console.log(Ryan.listsSubjects()); //undefined
