// CODE here for your Lambda Classes

class Person {
    constructor(pAttrs) {
      this.name = pAttrs.name;
      this.age = pAttrs.age;
      this.location = pAttrs.location;
      this.gender = pAttrs.gender;
    }
    speak() {
      console.log(`Hello, my name is ${this.name}, and I am from ${this.location}`)
    }
  }
  
  class Instructor extends Person {
    constructor(iAttrs) {
      super(iAttrs);
      this.specialty = iAttrs.specialty;
      this.favLanguage = iAttrs.favLanguage;
      this.catchPhrase = iAttrs.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    modGrade(student) {
      let old = student.grade;
      let change = '';
      const val = Math.floor(Math.random() * Math.floor(10));
      const addorsubtract =  Math.floor(Math.random() * Math.floor(2));
      if (addorsubtract === 0) {
        change = 'decreased'
        student.grade -= val;
      }
      else {
        change = 'increased'
        student.grade += val;
      }
      if (student.grade > 100) {
        student.grade = 100;
      }
      let difference = Math.abs(old-student.grade);
      console.log(`${student.name}'s score has ${change} by ${difference} from ${old} to ${student.grade}`)
      // return student.grade;
    }
  }
  
  class Student extends Person {
    constructor(sAttrs) {
      super(sAttrs);
      this.previousBackground = sAttrs.previousBackground;
      this.className = sAttrs.className;
      this.favSubjects = sAttrs.favSubjects;
      this.grade = sAttrs.grade;
    }
    listSubjects() {
      this.favSubjects.forEach(x => console.log(x))
    };
    prAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject) {
      console.log(`${this.name} has begin sprint challenge on ${subject}`)
    }
    graduate() {
      if (this.grade >= 70) {
        console.log(`${this.name} has scored ${this.grade} and has successfully graduated`)
        return this.grade;
      }
        console.log(`${this.name} has scored ${this.grade} and has needs to increase score by ${Math.abs(70-this.grade)} in order to graduate.`)
    }
  }
  
  const Tim = new Student({
    'favSubjects': ['math', 'science', 'history'],
  });
  
  // Tim.listSubjects()
  
  class ProjectManager extends Instructor {
    constructor(pAttrs) {
      super(pAttrs);
      this.gradClassName = pAttrs.gradClassName;
      this.favInstructor = pAttrs.favInstructor;
    }
    standup(channel) {
      console.log(`${this.name} announces to ${channel}, #channel standup time!`);
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
  }
  
  const josh = new Instructor({
    'name': 'Josh',
    'age': 35,
    'location': 'Utah',
    'gender':'M',
    'specialty': 'front-end',
    'favLanguage': 'CSS',
    'catchphrase': 'little old ladies'
  });
  
  const sarah = new Student({
    'name': 'Sarah',
    'age': 21,
    'location': 'Michigan',
    'gender':'F',
    'previousBackground': 'Retail',
    'className': 'CS13',
    'favSubjects': ['CSS', 'React', 'SQL'],
    'grade': 70
  });
  
  const drew = new ProjectManager({
    'name': 'Drew',
    'age': 25,
    'location': 'Maine',
    'gender':'M',
    'specialty': 'front-end',
    'favLanguage': 'CSS',
    'catchphrase': 'cool',
    'gradClassName': 'CS11',
    'favInstructor': 'Josh'
  });
  
  josh.demo('JavaScript IV')
  josh.grade(sarah, 'JavaScript I')
  
  sarah.listSubjects();
  sarah.prAssignment('JavaScript III');
  sarah.sprintChallenge('Advanced CSS');
  
  drew.grade(sarah, 'JavaScript II'); // test an instructor method
  drew.standup('cs13drewsquad');
  drew.debugsCode(sarah, 'React');
  
  // ----- Stretch ------ \\
  josh.modGrade(sarah);
  sarah.graduate();// CODE here for your Lambda Classes
