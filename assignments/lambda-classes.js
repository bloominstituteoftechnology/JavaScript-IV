class Person {
  
    constructor (attributes) {
      this.name = attributes.name,
      this.age = attributes.age,
      this.location = attributes.location,
      this.gender = attributes.gender
    }
    
    speak () {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  class Instructor extends Person {
  
    constructor (attributes) {
      super(attributes) // calling the parents constructor
      this.specialty = attributes.specialty,
      this.favLanguage = attributes.favLanguage,
      this.catchPhrase = attributes.catchPhrase
    }
    
    demo(subject){
      return `Today we are learning about ${subject}`
    }
    grade(student,subject){
    return `${student} receives a perfect score on ${subject}`
  }
}
class Student extends Person {
  
    constructor (attributes) {
      super(attributes) // calling the parents constructor
      this.previousBackground = attributes.previousBackground,
      this.className = attributes.className,
      this.favSubjects = attributes.favSubjects
    }   
    
listsSubject(){
      return `${this.favSubjects}`;
    }
    pRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject){
   return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
    constructor (attributes) {
        super(attributes) // calling the parents constructor
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
      }   
      standUp(channel){
          return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
      }
      debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const fred = new Person({ 
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male'
  });
  const aland = new Person({
    name: 'Aland',
    location: 'New York',
    age: 17,
    gender: 'male'
  });
  const brock = new Instructor({
    name: 'Brock',
    location: 'Miami',
    age: 20,
    gender: 'male',
    favLanguage: 'JavaScript, Python',
    specialty: 'Front-end',
    catchPhrase: `Don't forget about penguins`
  });

  const lauren = new Instructor({
    name: 'Lauren',
    location: 'Las Vegas',
    age: 25,
    gender: 'female',
    favLanguage: 'Elm',
    specialty: 'redux',
    catchPhrase: `Viva Las Vegas!`
  });
  const bob = new Student({
    name: 'Bob',
    location: 'Chicago',
    age: 35,
    gender: 'male',
    previousBackground: 'Bussiness Manager',
    className: 'fswpt5',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });
  const james = new Student({
    name: 'James',
    location: 'Los Angeles',
    age: 26,
    gender: 'male',
    previousBackground: 'carpenter',
    className: 'fswpt6',
    favSubjects: ['Python', 'CSS', 'JavaScript']
     });
  const nicole = new ProjectManager({
    name: 'Nicole',
    location: 'Boston',
    age: 45,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Aland',
    });
  const jonathan = new ProjectManager({
    name: 'Jonathan',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    gradClassName: 'CS6',
    favInstructor: 'Brock',
  });

  console.log(fred.speak());
  console.log(brock.demo("JavaScript II"));
  console.log(brock.grade('Bob', 'JavaScript II'));
  console.log(james.favSubjects);
  console.log(james.pRAssignment('JavaScript III'));
  console.log(bob.sprintChallenge('JavaScript IV'));
  console.log(nicole.standUp('CS6'));
  console.log(jonathan.debugsCode('Nicole', 'JavaScript IV'));


