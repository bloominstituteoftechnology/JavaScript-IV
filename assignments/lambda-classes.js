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
          return `Today we are learning about ${subject}`
      }
      grade(Student, subject) {
          return `${Student.name} receives a perfect score on ${subject}`
      }
      popQuiz(Student) {
        let points = Math.random();
        if (points > .5) {
            return Student.grade += (points * 10);  
        } else if (points <= .5) {
            return Student.grade -= (points * 10);  
        }
      }
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
          this.grade = studentProps.grade;
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
        graduate () {
        if (this.grade >= 70) {
            return `Congrats, ${this.name}, you graduate!`
        } else if (this.grade < 70) {
            return `Sorry, ${this.name}, You don't graduate!`
        }
    }
  }

  const troy = new Student({
    name: 'Troy',
    location: 'Greendale',
    age: 21,
    gender: 'male',
    previousBackground: 'football',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 60,
  });

  const abed = new Student({
    name: 'Abed',
    location: 'Greendale',
    age: 20,
    gender: 'male',
    previousBackground: 'Asbergers',
    className: 'CS131',
    favSubjects: ['Ruby', 'Videography', 'JavaScript'],
    grade: 90
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
    debugsCode (Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
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
  console.log(brian.standup('cs11'));
  console.log(chang.grade(troy, "science"))
  console.log(chang.grade(troy, "science"))
  console.log(troy.PRAssignment("JavaScript"))
  console.log(troy.speak());
  console.log(brian.debugsCode(troy, "JavaScript"))
  console.log(abed.listsSubjects())
  console.log(troy.sprintChallenge("JavaScript"))
  console.log(otherOne.specialty)
  console.log(abed.favSubjects)
  console.log(fred.catchPhrase)
  console.log(fred.popQuiz(troy))
  console.log(fred.popQuiz(abed))
 console.log(troy.graduate())
 console.log(fred.popQuiz(abed))
 console.log(abed.graduate())
 console.log(chang.demo("Spanish"));









  // STRECH PROBLEM

