// CODE here for your Lambda Classes

// PERSON CLASS
class Person {
    constructor(allPeps) {
      this.name = allPeps.name;
      this.age = allPeps.age;
      this.location = allPeps.location;
      this.gender = allPeps.gender;
    }
    speak() {
      console.log(`Hello  my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  // INSTRUCTOR CLASS
  class Instructor extends Person {
    constructor(instructors) {
      super(instructors);
      this.specialty = instructors.specialty;
      this.favLanguage = instructors.favLanguage;
      this.catchPhrase = instructors.catchPhrase;
    }
  
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
      console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
    gradeing(student) {
     
   
      student.grade = Math.ceil(Math.random() * 100);
  
      console.log(`${this.name} updates receives a new grade ${student.grade}`);
    }
  }
  
  // STUDENTS CLASS
  class Students extends Person {
    constructor(student) {
      super(student);
      this.prevBackground = student.prevBackground;
      this.className = student.className;
      this.favSubjects = student.favSubjects;
      this.grade = student.grade;
    }
    listsSubjects() {
      console.log(`${this.name} favorite subjects are: ${this.favSubjects}`);
    }
    PRAssignment(subject) {
      console.log(`${this.name}, as submitted a PR for ${subject}`);
    }
  
    sprintChallenge(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject} `);
    }
    graduate(pm) {
        //will refactor this latter
        
     if (this.grade >= 70)
     {
          console.log(`${this.name} has graduated thank to ${pm.name}`);
     } else {

         console.log(`${pm.name} has determined that ${this.name} need to go back to increase ${this.name} score`);
                
     }
    }
  }
  
  // PROJECT MANAGERS CLASS
  
  class ProjectManagers extends Instructor {
    constructor(pmInstructor) {
      super(pmInstructor);
  
      this.gradClassName = pmInstructor.gradClassName;
      this.favInstructor = pmInstructor.favInstructor;
    }
  
    standUp(slackChannel) {
      console.log(
        `${this.name} announces to ${slackChannel}, @channel standby times!`
      );
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }
  
  // Instructors Starts Here
  const fred = new Instructor({
    name: "Fred",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`
  });
  
  const dan = new Instructor({
    name: "Dan Frehner",
    location: "SLC",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`
  });
  
  // Students Start Here
  const stefan = new Students({
    name: "Stefan Clem",
    location: "Phoenix",
    age: 40,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Full Stack Developer",
    prevBackground: "Jr QA Engineer",
    className: "CSPT2",
    favSubjects: ["LESS", "Syntax", "Electron Apps"],
    catchPhrase: `Better to burn out then to fade away!`,
    grade: 50
  });
  
  const mehdi = new Students({
    name: "Mehdi",
    location: "North Dakota",
    age: 30,
    gender: "male",
    favLanguage: "C#",
    specialty: "Full Stack Developer",
    prevBackground: "None",
    className: "CSPT2",
    favSubjects: ["VSTS", "Math", "C#"],
    catchPhrase: `You got dis!`,
    grade: 100
  });
  
  const metri = new Students({
    name: "Demetri",
    location: "Georgia",
    age: 30,
    gender: "male",
    favLanguage: "Javascript",
    specialty: "Full Stack Developer",
    prevBackground: "None",
    className: "CSPT2",
    favSubjects: ["CSS", "Javascript", "Lambda"],
    catchPhrase: `Hey man`,
    grade: 100
  });
  
  const jerrad = new Students({
    name: "Jerrad",
    location: "Georgia",
    age: 30,
    gender: "male",
    favLanguage: "Javascript",
    specialty: "Full Stack Developer",
    prevBackground: "None",
    className: "CSPT2",
    favSubjects: ["Javascript", "Math", "Reading"],
    catchPhrase: `What up what up!`
  });
  
  // Project Managers Start Here
  
  const analogy = new ProjectManagers({
    name: "Anthony Tweed",
    location: "Gorgia",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Full Stack Developer",
    gradClassName: `CS1`,
    favInstructor: `Dan`,
    catchPhrase: `Alright, Alright!`
  });
  
  // Instructors
  fred.speak();
  dan.speak();
  dan.demo(`Javascript Classes!!!`);
  dan.grade(stefan, `Javscript IV`);
  // // Students
  stefan.speak();
  stefan.listsSubjects();
  stefan.PRAssignment("Javascript IV Sprint Challenge");
  stefan.sprintChallenge("Javascript Challenge");
  mehdi.speak();
  // // Project Managers
  analogy.speak();
  analogy.standUp("#cspt2_anthony");
  analogy.debugsCode(stefan, "push method");
  
  dan.gradeing(stefan);
  stefan.graduate(dan, stefan.grade);
  