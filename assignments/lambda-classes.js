// CODE here for your Lambda Classes

// ------------------------------------------
// Person Class starts here
class Person {
  constructor(people){
    this.name = people.name;
    this.location = people.location;
  }
  speak(){
    return(`Hello my name is ${this.name} I am from ${this.location}`)
  }
} 
// Person Class ends here
// ------------------------------------------

//-------------------------------------------
// Instructor class starts here

  class Instructor extends Person {
    constructor (instruct){
      super(instruct);
      this.specialty = instruct.specialty;
      this.favLanguage = instruct.favLanguage;
      this.catchPhrase = instruct.catchPhrase;
    }
    demo(subject){console.log(`Today we are learning about ${subject}`)}
    grade(student, subject){console.log(`${student.name} receives a perfect score on ${subject}`)}
  }
//Instructor class ends here
//--------------------------------------------

//--------------------------------------------
//Students class starts here

  class Student extends Instructor{
    constructor(stud){
      super(stud);
      this.previousBackground = stud.previousBackground;
      this.className = stud.className;
      this.favSubjects = stud.favSubjects;
   }
   listsSubjects(){console.log([this.listsSubjects])};
   PRAssignment(subject){`${student.name} has submitted a PR for ${subject}` }
   sprintChallenge(subject){`${student.name} has begun sprint challenge on ${subject}`}
  }

  //Students class ends here
//--------------------------------------------

 //--------------------------------------------
//PMs class starts here

  class ProjectManagers extends Instructor {
    constructor(prom){
      super (prom);
      this.gradClassName = prom.gradClassName;
      this.favInstructor = prom.favInstructor;
    }
    standUp(channel){console.log(`${name} announces to ${channel}, @channel standy times!`​​​​​);}
    debugsCode(Student){`${name} debugs ${student.name}'s code on ${subject}`}

  }

//PMs class ends here
//--------------------------------------------