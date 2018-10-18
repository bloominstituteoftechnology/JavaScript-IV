// CODE here for your Lambda Classes
//Person Object Creator
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
       return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}
// Children of Person Creator

// Instructor Creator
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
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// Student Creator
class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        const startingGrade = initialGrade();
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = startingGrade
    }
    listsSubjects(){
          this.favSubjects.forEach(function (subject){
              console.log(subject)
          }); 
            
        }
    PRAssignment(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    
}


//Student RNG
 const initialGrade = ()  => Math.floor(Math.random()*(100 - 75 +1)) +75;


//Children of Instructor
class ProjectManagers extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



//Instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const kenobi = new Instructor({
    name: 'Obi-Wan',
    location: 'The Force',
    age: 57,
    gender: 'male',
    favLanguage: 'JediScript',
    specialty: 'High Ground',
    catchPhrase: `Hello There!`
  });

  //PMs
  const peter = new ProjectManagers({
    name: 'Spiderman',
    location: 'not here anymore',
    age: 17,
    gender: 'male',
    favLanguage: 'None Now',
    specialty: 'World Wide Web',
    catchPhrase: `I dont feel good Mr.Stark....`,
    gradClassName: `CS1`,
    favInstructor: 'Tony'
  });

  //Students
  const thor = new Student({
    name: 'Thor',
    location: 'Earth',
    age: 5050,
    gender: 'male',
    previousBackground: 'Thunder God',
    className: 'FSW15',
    favSubjects: ['Getting dumped by earthlings.','Making axes 101.','How to lose your hammer.']
  });



  //tests
  /*
  console.log(fred);
  console.log(kenobi);
  console.log(peter);
  console.log(thor);
  console.log(peter.catchPhrase);
  console.log(peter.debugsCode(thor,'Dealing with Loki'));
  console.log(peter.standUp('FSW15'));
  thor.listsSubjects();
  console.log(thor.sprintChallenge('How to Odin Force'));
  console.log(thor.PRAssignment('How to Odin Force'));
  console.log(kenobi.grade(thor, 'How to deal with green dudes'));
  console.log(kenobi.demo('Force Ghosting 203'));
*/

  //stretch tests
  console.log(thor.grade);
  console.log (initialGrade());