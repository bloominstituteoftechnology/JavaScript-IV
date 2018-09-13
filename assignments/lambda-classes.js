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
    demo(subject) {
      return `Today we are learning about ${subject}.`;
    };
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}.`;
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
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
        };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
        }; 
    }


    class PM extends Instructor {
        constructor(projectManangerattributes) {
            super(projectManangerattributes);
            this.gradClassName = projectManangerattributes.gradClassName;
            this.favInstructor = projectManangerattributes.favInstructor;
        }
        standUp(channel) {
            return `${this.name} announces to ${channel}, @channel standy times!`;
            };
        debugsCode(Student, subject) {
            return `${this.name} debugs ${Student.name}'s code on ${subject}.`;
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

       const joe = new Instructor({
            name: 'Joe',
            location: 'Bedrock',
            age: 37,
            gender: 'male',
            favLanguage: 'HTML',
            specialty: 'Front-end',
            catchPhrase: `HTML rules`
          });


          const bob = new Student({
            name: 'Bob',
            location: 'Bedrock',
            age: 37,
            gender: 'male',
            previousBackground: 'college student',
            className: 'CS14',
            favSubjects: ['HTML ', 'CSS ', 'JS']
          });

          const beth = new Student({
            name: 'Beth',
            location: 'Bedrock',
            age: 37,
            gender: 'female',
            previousBackground: 'Cashier',
            className: 'CS13',
            favSubjects: ['HTML ', 'React ', 'operating sytems']
          });


          const ted = new PM({
            name: 'Ted',
            location: 'Bedrock',
            age: 37,
            gender: 'male',
            gradClassName: 'CS2',
            favInstructor: 'Sean'
          });


         const lizzy = new PM({
            name: 'Lizzy',
            location: 'Bedrock',
            age: 37,
            gender: 'female',
            gradClassName: 'CS4',
            favInstructor: 'Josh'
          });


console.log(fred.name); 
console.log(joe.favLanguage); 
console.log(fred.demo('math')); 
console.log(joe.demo('CSS')); 
console.log(fred.grade( bob, 'Python')); 
console.log(joe.grade( beth, 'HTML'));
console.log(bob.name); 
console.log(bob.className); 
console.log(bob.listSubjects()); 
console.log(bob.PRAssignment('JS')); 
console.log(bob.sprintChallenge('CSS'));
console.log(beth.name); 
console.log(beth.className); 
console.log(beth.listSubjects()); 
console.log(beth.PRAssignment('Python')); 
console.log(beth.sprintChallenge('HTML'));
console.log(ted.name); 
console.log(ted.gradClassName); 
console.log(ted.favInstructor); 
console.log(ted.standUp('fsw14'));
console.log(ted.debugsCode(bob, 'JS')); 
console.log(lizzy.name); 
console.log(lizzy.gradClassName); 
console.log(lizzy.favInstructor); 
console.log(lizzy.standUp('fsw14 help'));
console.log(lizzy.debugsCode(beth, 'JS')); 