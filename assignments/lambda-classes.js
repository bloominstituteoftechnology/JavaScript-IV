// CODE here for your Lambda Classes

///Person - base class

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

  ///Instructor extends Person
  
  class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;

    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
  }


  ///Student extends Person

  class Student extends Person{
      constructor(studentAttributes) {
          super(studentAttributes);
          this.previousBackground = studentAttributes.previousBackground;
          this.className = studentAttributes.className;
          this.favSubjects = studentAttributes.favSubjects;
      }

      listsSubjects() {
            console.log(`${this.favSubjects}`);
        }
      

      PRAssignment(subject){
          console.log(`${this.name} has submitted a PR for ${subject}`);
      }

      sprintChallenge(subject){
        console.log(`${this.name} has has begun sprint challenge on ${this.subject}`);
      }

  }


  ///Project Managers extend Instructors

  class ProjectManager extends Instructor{
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(){
        console.log(`${this.name} announces to ${this.gradClassName} @channel stundy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }


  ///Objects new Instructors

  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const bill = new Instructor({
    name: 'Bill',
    location: 'San Francisco',
    age: 40,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `First things first`
  });


///Objects new Students

const thomas = new Student({
    name: 'Thomas',
    location: 'Philadelphia, PA',
    age: 23,
    gender: 'male',
    previousBackground: 'Basic knowledge of HTML and CSS',
    className: 'CS16',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });


const tara = new Student({
    name: 'Tara',
    location: 'Lancaster, PA',
    age: 25,
    gender: 'female',
    previousBackground: 'Basic knowledge of HTML and CSS, JavaScript and Python',
    className: 'CS16',
    favSubjects: ['Html', 'CSS', 'JavaScript', 'Python']
});


//Project Managers new Instructors

const eric = new ProjectManager({
    name: 'Eric',
    location: 'Los Angeles',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "And that's the way it is",
    gradClassName: 'CS16',
    favInstructor: 'Fred'
});

const katelyn = new ProjectManager({
    name: 'Katelyn',
    location: 'Los Angeles',
    age: 26,
    gender: 'female',
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: "Just one more thing...",
    gradClassName: 'CS16',
    favInstructor: 'Billy'
});



//instructors 
console.log(fred.name);
console.log(fred.specialty);
console.log(fred.catchPhrase);
console.log(fred.demo('JavaScript Fundamentals'));
console.log(fred.grade(thomas, 'CSS'));

console.log(bill.location);
console.log(bill.age);
console.log(bill.favLanguage);
console.log(bill.demo('Advanced CSS'));
console.log(bill.grade(tara, 'Flex Box project'));


//students
console.log(thomas.previousBackground);
console.log(thomas.className);
console.log(thomas.favSubjects);
console.log(thomas.listsSubjects());
console.log(thomas.PRAssignment('Introduction to HTML'));

console.log(tara.previousBackground);
console.log(tara.className);
console.log(tara.favSubjects);
console.log(tara.listsSubjects());
console.log(tara.PRAssignment('Introduction to HTML'));


//pms
console.log(eric.favLanguage);
console.log(eric.catchPhrase);
console.log(eric.gradClassName);
console.log(eric.standUp());
console.log(eric.debugsCode(tara, 'Inline-block Project'));

console.log(eric.favLanguage);
console.log(eric.catchPhrase);
console.log(eric.gradClassName);
console.log(eric.standUp());
console.log(eric.debugsCode(thomas, 'Array methods Project'));
  