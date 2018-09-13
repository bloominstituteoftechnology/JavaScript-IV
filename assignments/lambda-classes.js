// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
  }

  class Instructor extends Person {
    constructor(instructorattributes) {
        super(instructorattributes);
        this.specialty = instructorattributes.specialty;
        this.favLanguage = instructorattributes.favLanguage;
        this.catchPhrase = instructorattributes.catchPhrase;
    }
    demo() {
      return `Today we are learning about ${subject}.`;
    };
    grade() {
        return `${this.name} receives a perfect score on ${subject}.`;
    };
  }


  class Student extends Person {
    constructor(studentattributes) {
        super(studentattributes);
        this.previousBackground = studentattributes.previousBackground;
        this.className = studentattributes.className;
        this.favSubjects = studentattributes.favSubjects;
    }
    listSubjects() {
        return `${this.favSubjects}`;
        };
    PRAssignment() {
        return `${this.name} has submitted a PR for ${subject}.`;
        };
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}.`;
        }; 
    }


    class PM extends Instructor {
        constructor(projectManangerattributes) {
            super(projectManangerattributes);
            this.gradClassName = projectManangerattributes.gradClassName;
            this.favInstructor = projectManangerattributes.favInstructor;
        }
        standUp() {
            return `${this.name} announces to ${channel}, @channel standy times!`;
            };
        debugsCode() {
            return `${this.name} debugs ${this.name}'s code on ${subject}.`;
            };
        } 
        
        
        const fred = new Instructor({
            name: 'Fred',
            location: 'Bedrock',
            age: 37,
            gender: 'male',
            favLanguage: 'JavaScript',
            specialty: 'Front-end',
            catchPhrase: `Don't forget the homies`
          });


          const fred = new Student({
            name: 'Fred',
            location: 'Bedrock',
            age: 37,
            gender: 'male',
            previousBackground: 'college student',
            className: 'CS14',
            favSubjects: ['HTML', 'CSS', 'JS']
          });


          const fred = new PM({
            name: 'Fred',
            location: 'Bedrock',
            age: 37,
            gender: 'male',
            favLanguage: 'JavaScript',
            specialty: 'Front-end',
            catchPhrase: `Don't forget the homies`
          });