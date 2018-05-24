// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }

  class Instructor extends Person {
      constructor(uniqueProps){
          super(uniqueProps);
          this.specialty = uniqueProps.specialty;
          this.favLanguage = uniqueProps.favLanguage;
          this.catchPhrase = uniqueProps.catchPhrase;
      }
      demo(subject) {
          return `Todays we are learning about ${subject}`
      }
      grade(Student, subject) {
          return `${Student.name} receives a perfect score on ${subject}`
      } // MAKE SURE THIS WORKS
  }
  const chang = new Instructor({
    name: 'Chang',
    location: 'Greendale',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I'll allow it`
  });


  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred.speak())
  console.log(chang.speak())


  class Student extends Person {
      constructor(studentProps) {
          super(studentProps);
          this.previousBackground = studentProps.previousBackground;
          this.className = studentProps.className;
          this.favSubjects = studentProps.favSubjects;
      }
      listsSubjects() {
          return this.favSubjects;
      }
      PRAssignment(subject) {
          return `${this.name} has submitted a PR for ${subject}`
      }
      sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
  }

  const troy = new Student({
    name: 'Troy',
    location: 'Greendale',
    age: 21,
    gender: 'male',
    previousBackground: 'football',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });
  const abed = new Student({
    name: 'Troy',
    location: 'Greendale',
    age: 21,
    gender: 'male',
    previousBackground: 'football',
    className: 'CS132',
    favSubjects: ['Ruby', 'Viedography', 'JavaScript']
  });


  class ProjectManagers extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standup (channel) {
        return `${this.name} announces to ${channel}, @channel stand up time!`
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
  }

  const brian = new ProjectManagers({
    name: 'Brian',
    location: 'Utah',
    age: 36,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Codewars is awesome`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
  });

  const otherOne = new ProjectManagers({
    name: 'NotBrian',
    location: 'Silicon Valley',
    age: 20,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `Codewars is awesome`,
    gradClassName: 'CS2',
    favInstructor: 'Sean'
  });

  console.log(brian.speak());
  console.log(brian.standup());
  console.log(chang.grade(troy, "science"))
  console.log(chang.grade(troy, "science"))
  console.log(troy.PRAssignment("JavaScript"))
  console.log(troy.speak());
  console.log(brian.debugsCode(troy, "JavaScript"))
  console.log(abed.listsSubjects())