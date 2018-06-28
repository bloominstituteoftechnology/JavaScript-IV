//Person Class Starts
class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }

    //Method
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  //Person Class Ends
  
  //Instructor Clas Starts
  class Instructor extends Person {
    constructor(instructorAttributes) {
      super(instructorAttributes);
      this.speciality = instructorAttributes.speciality;
      this.favLanguage = instructorAttributes.favLanguage;
      this.catchPhrase = instructorAttributes.catchPhrase;
    }

    //Methods
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
  }
  //Instructor Class Ends

  //Student Class Starts
  class Student extends Person {
      constructor(studentAttributes){
          super(studentAttributes);
          this.previousBackground = studentAttributes.previousBackground;
          this.className = studentAttributes.className;
          this.favSubjects = studentAttributes.favSubjects;
      }

      //Methods
      listSubjects() {
        console.log(`${favSubjects}`);
      }

      PRAssignments(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`);
      }

      sprintChallenge(subject) {
        console.log(`${student.name} has begun spring challenge on ${subject}`);
      }
  }
  //Student Class Ends

  //Project Manager Starts
  class ProjectManagers extends Instructor {
      constructor(pmAttributes) {
          super(pmAttributes);
          this.gradClassName = pmAttributes.gradClassName;
          this.favInstructor = pmAttributes.favInstructor;
      }

      //Methods
      standUP(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
      }

      debugsCode(student, subject) {
          console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
      }
  }
  //Project Manager Ends

  //Object for Person
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
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
  //Object for Person

  //Object for Instructor
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
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
  //Object for Instructor

  //Object for Student
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
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
  //Object for Student

  //Object for PM
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
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
  //Object for PM