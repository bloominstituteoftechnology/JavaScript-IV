
// ------------------------------------------
// Person Class starts here
class Person {
  constructor(people){
    this.name = people.name;
    this.location = people.location;
    this.age = people.age;
    this.gender = people.gender;
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
    grade(){console.log(`${student.name} receives a perfect score on ${subject}`)}
  }
//Instructor class ends here
//--------------------------------------------

//--------------------------------------------
//Students class starts here

  class Student extends Person{
    constructor(stud){
      super(stud);
      this.previousBackground = stud.previousBackground;
      this.className = stud.className;
      this.favSubjects = stud.favSubjects;
   }
   listsSubjects( ){
     for (let i = 0; i < this.favSubjects.length; i ++){
       console.log(this.favSubjects[i])
     }};

   PRAssignment(subject){console.log(`${student.name} has submitted a PR for ${subject}`) }
   sprintChallenge(subject){console.log(`${student.name} has begun sprint challenge on ${subject}`)}
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
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(subject){`${name} debugs ${student.name}'s code on ${subject}`}
    
    

  }

//PMs class ends here
//--------------------------------------------
const tai = new ProjectManagers({
  name: "Tai",
  age: 25,
  gender: 'm',
  location: "Virginia",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "See ya'll tomorrow, have a good day!",
  gradClassName: "CS11",
  favInstructor: "Josh"
});

console.log(tai);
tai.standUp(1);

const figg = new Student({
  name: 'Figgy',
  location: 'Charleston',
  age: 37,
  gender: 'male',
  previousBackground: 'Fork Lift Operator',
  className: 'CS11',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});
console.log(figg);
console.log(figg.favSubjects);
figg.listsSubjects();