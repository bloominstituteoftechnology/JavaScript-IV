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
      return `Hello my name is ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${subject}`;
    }
    
    grade(subject) {
        return `${this.name} receives a perfect score on ${subject}`;
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
        return this.favSubjects.join(", ");
      }

      PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
      }

      sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
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
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
      }

      debugsCode(subject) {
        return `${this.name} debugs ${this.name}'s code on ${subject}`;
      }
  }
  //Project Manager Ends

  //Object for Person
  const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 35,
    gender: 'male'
  });

  const wilma = new Person({
    name: 'Wilma',
    location: 'Bedrock',
    age: 37,
    gender: 'female'
  });
  //Object for Person

  //Object for Instructor
  const tim = new Instructor({
    name: 'tim',
    location: 'Seattle',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const bob = new Instructor({
    name: 'Bob',
    location: 'NY',
    age: 40,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `Noice!`
  });
  //Object for Instructor

  //Object for Student
  const susie = new Student({
    name: 'Susie',
    location: 'Florida',
    age: 27,
    gender: 'female',
    previousBackground: 'Hair-stylist',
    className: 'CS100',
    favSubjects: ['Math', 'Java', 'Hair Cutting']
  });

  const jim = new Student({
    name: 'Jim',
    location: 'Texas',
    age: 25,
    gender: 'male',
    previousBackground: 'FireFighter',
    className: 'CS90',
    favSubjects: ['English', 'HTML', 'Video Games']
    
  });
  //Object for Student

  //Object for PM
  const kevin = new ProjectManagers({
    name: 'Kevin',
    location: 'California',
    age: 20,
    gender: 'male',
    gradClassName: 'CS25',
    favInstructor: 'Josh'
  });

  const lilly = new ProjectManagers({
    name: 'Lilly',
    location: 'North Carolina',
    age: 22,
    gender: 'female',
    gradClassName: 'CS26',
    favInstructor: 'Eric'
  });
  //Object for PM

// console.log(fred.name);
// console.log(fred.location);
// console.log(fred.age);
// console.log(fred.gender);

// console.log(wilma.name);
// console.log(wilma.location);
// console.log(wilma.age);
// console.log(wilma.gender);

// console.log(lilly.grade('math'));