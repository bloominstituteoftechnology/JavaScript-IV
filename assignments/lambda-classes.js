class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.gender = attributes.gender;
      this.location = attributes.locale;
    }
    speak() {
      return `Hello, my name is ${this.name} , I am from ${this.location}`;
    }
  }
  
  class Instructor extends Person {
    constructor(instructorAttributes) {
      super(instructorAttributes);
      this.specialty = instructorAttributes.specialty;
      this.favLanguage = instructorAttributes.favLanguage;
      this.catchPhrase = instructorAttributes.catchPhrase;
    }
  }
  
  class Student extends Person {
    constructor(studentAttributes) {
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
      return `${this.favSubjects}`;
    }
    PRAssignment() {
      return //come back to this, Lib
    }
    sprintChallenge() {
      return //come back to this also
    }
  }
  
  class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp() {
      return `${this.name} announces to {channel}, @channel standy times!`;
    }
    debugsCode() {
      `${this.Student} + ${favSubjects} `
    }
  }
  
  
  
  // this.profession = attributes.profession;
  
  // CODE here for your Lambda Classes
  
  const frank = new Instructor({
      name: "Frank",
      age: "73",
      gender: "Male",
      location: "Sunny Philadelphia",
      specialty: "Dancing",
      favLanguage: "JavaScript",
      catchPhrase: "The Gruesome-Twosome, in effect!",
      profession: "Conman"
      }) 
      
      
      const dennis = new Instructor({
      name: "Dennis",
      age: "42",
      gender: "Male",
      location: "Paddy's Pub",
      specialty: "The D.E.N.N.I.S System",
      favLanguage: "Python",
      catchPhrase: "It's because of the implication.",
      previousBackground: "Owner of Paddy's Pub"
      }) 
      
      const countryMac = new Instructor({
      name: "Country Mac",
      age: "41",
      gender: "Male",
      location: "On a motorcycle",
      specialty: "Being super cool",
      favLanguage: "Python",
      catchPhrase: "I gave him an ocular patdown and assessed the threat level.",
      previousBackground: "Drifter"
      }) 
      
      const charlie = new Student ({
      name: "Charlie",
      age: "42",
      gender: "Male",
      location: "Couch-bed",
      specialty: "Bird law",
      favLanguage: "Speaking good",
      catchPhrase: "What's your spaghetti policy here?",
      previousBackground: "Janitor",
      className: "not sure",
      favSubjects: "Little green ghouls, magnets"
      }) 
      
      const ricketyCricket = new Student({
      name: "Rickety Cricket",
      age: "41",
      gender: "Male",
      location: "Sunny Philadelphia",
      specialty: "odd-jobs",
      favLanguage: "JavaScript",
      catchPhrase: "They broke my legs, but they couldn't break my spirit.",
      previousBackground: "street-rat",
      className: "cs13",
      favSubjects: "Little green ghouls, magnets"
      })
      
      const psychoPete = new Student({
      name: "Psycho Pete",
      age: "35",
      gender: "Male",
      location: "Sunny Philadelphia",
      specialty: "NOT cannibalism",
      favLanguage: "Elm",
      catchPhrase: "I'm not crazy",
      previousBackground: "Psycho",
      className: "cs11",
      favSubjects: "petting dogs, meditating"
      }) 
      
      const sweetDee = new ProjectManager ({
      name: "Sweet Dee",
      age: "42",
      gender: "Female",
      location: "Sunny Philadelphia",
      specialty: "Funny Characters",
      favLanguage: "Python",
      catchPhrase: "I'm Sweet Dee and the joke's on me!",
      previousBackground: "Bartender/Actress",
      gradClassName: "cs4",
      favInstructor: "BEN CAMPBELL"
      }) 
      
      const mac = new ProjectManager ({
      name: "Mac",
      age: "41",
      gender: "Male",
      location: "Sunny Philadelphia",
      specialty: "taking care of business",
      favLanguage: "JavaScript",
      catchPhrase: "I'm cultivating mass.",
      previousBackground: "Bodyguard",
      gradClassName: "cs5",
      favInstructor: "Josh Knell"
      })
      
      const waitress = new ProjectManager ({
      name: "Waitress",
      age: "29",
      gender: "Female",
      location: "Coffee Shop",
      specialty: "Making coffee",
      favLanguage: "Elm",
      catchPhrase: "No, Charlie, I will not marry you.",
      previousBackground: "Waitress",
      gradClassName: "cs7",
      favInstructor: "Mitchell Wright"
      }) 
  
  
  console.log(waitress.speak);