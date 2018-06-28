// CODE here for your Lambda Classes
class Person {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak(){
    console.log(`Hello, my name is ${this.name},
    I am from ${this.location}.`)
  }
}

class Instructor extends Person {
    constructor(instructorAttributes){
      super(instructorAttributes);
      this.specialty = instructorAttributes.specialty;
      this.favLanguage = instructorAttributes.favLanguage;
      this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
      console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
      console.log(`${student, subject} recieves a perfect score on ${subject}`)
    }
}

  class Student extends Person {
    constructor(studentAttributes){
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
    }
    PRAssignment(subject){
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
      console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    listsSubjects(){
      console.log(`${this.favSubjects}`)
    }
  }

  class PM extends Instructor {
    constructor(pmAttributes){
      super(pmAttributes);
      this.gradClassName = pmAttributes.gradClasName;
      this.favInstructor = pmAttributes.favInstructor;
    }
    standup(channel){
      console.log(`${this.name} announces to
        ${channel}, @channel standby times!`);
    }
    debugsCode(student, subject){
      console.log(`${this.name} debugs
        ${student}'s code on ${subject}'`)
    }
  }

  //===================Persons

  const Dan = new Instructor({
    'name': 'Dan',
    'age' : 30,
    'location' : "Iowa",
    'gender': "M",
    'specialty': "Full-Stack",
    'favLanguage': "JavaScript",
    'catchPhrase': "Don't forget the homies",
  });

    const Jill = new Student({
      'name': 'Jill',
      'age' : 23,
      'location' : 'Colorado',
      'gender': 'F',
      'previousBackground': 'none',
      'className': 'CS12',
      'favSubjects': 'CSS',
    });

    const Lauren = new PM({
      'name': 'Lauren',
       'age' : 34,
       'location' : 'New York',
       'gender': 'F',
       'specialty':'CSS',
       'favLanguage': 'CSS',
       'catchPhrase': "Hi guys",
       'gradClassName': 'CS3',
       'favInstructor': 'Greg',
     })
