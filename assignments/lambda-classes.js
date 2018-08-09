class Person  {
    constructor(traits){
    this.name = traits.name;
    this.age = traits.age;
    this.location = traits.location;
    this.gender = traits.gender;
  }
  
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
  };
  
  class Instructor extends Person {
      constructor(detailsOfInstructor) {
        super(detailsOfInstructor)
        this.specialty = detailsOfInstructor.specialty;
        this.favLanguage = detailsOfInstructor.favLanguage;
        this.catchPhrase = detailsOfInstructor.catchPhrase;
  }
      demo(subject) {
        return `Today we are learning about ${subject}`
      }

      grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`  
      }

      scoreIt(student) {
        return ( student.grade + (Math.random() * 100) / 2);
      }
  };
  
  
   class Student extends Person {
      constructor(studentDetails) {
        super(studentDetails)
        this.previousBackground = studentDetails.previousBackground;
        this.classname = studentDetails.classname;
        this.favSubjects = studentDetails.favSubjects;
        this.grade = studentDetails.grade;
  }
        listsSubjects() {
            return `${this.favSubjects}`;
        }
        PRAssignement(subject) {
            return `${this.name} has submitted a PR for ${subject}`
        }
        sprintChallenge (subject) {
            return `${this.name} has begun sprint challenge on ${subject}`
        }
  };
  
  class ProjectManager extends Instructor {
    constructor(detailsOfPm) {
        super(detailsOfPm)
      this.gradClassName = detailsOfPm.gradClassName;
      this.favInstructor = detailsOfPm.favInstructor;
}
    standUp(slackchannel) {
      return `${this.name} announces to ${slackchannel}, @channel standy times!`
    }

    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}.`  
    }
};

  
const fred = new Person({
    name: 'Fred',
    age: 104,
    location: 'Bedrock',
    gender: 'M'
  });  

const arlo = new Student({
    name: 'Arlo',
    age: 20,
    momname: 'Becky',
    location: 'Arksville',
    gender: 'M',
    previousBackground: 'Pro Bass Fisherman',
    classname: 'CS90',
    favSubjects: ['CompSci for n00bs', 'Torture Code', 'RocknRoll WiFi'],
    grade: 67
  });

  const guthrie = new Student({
    name: 'Guthrie',
    age: 32,
    location: 'Londale',
    gender: 'F',
    previousBackground: 'Zoo Cat Keeper',
    classname: 'CS93',
    favSubjects: ['Rowdy Debugging 101', 'Torture Code', 'RocknRoll WiFi'],
    grade: 82
  });

  const monty = new Student({
    name: 'Monty',
    age: 90,
    location: 'Nonletty Corner',
    gender: 'F',
    previousBackground: 'Member of the Skankin\'Pickles',
    classname: 'CS90',
    favSubjects: ['Rowdy Debugging 101', 'Hardware Buffet: Eating Right', 'RocknRoll WiFi'],
    grade: 98
  });

  const korko = new Instructor({
    name: 'Korko',
    age: 49,
    location: 'Bakersfield',
    gender: 'M',
    specialty: 'HACK',
    favLanguage: 'GO',
    catchPhrase: 'There\'s never a good time to check the time.'
  });

  const slapdash = new Instructor({
    name: 'Slapdash',
    age: 10,
    location: 'Riverdale',
    gender: 'F',
    specialty: 'Search Engines',
    favLanguage: 'JavaScript',
    catchPhrase: 'Score one for the old kipper.'
  });

  const chauncy = new Instructor({
    name: 'Chauncy',
    age: 36,
    location: 'Dalton',
    gender: 'F',
    specialty: 'kernel bustin',
    favLanguage: 'JavaScript',
    catchPhrase: 'Rick Roll? Rick ROCK!'
  });

  const smeckleroot = new ProjectManager({
    name: 'Smeckleroot',
    age: 10000,
    location: 'Mesopotamia',
    gender: 'F',
    specialty: 'Stick Craft',
    favLanguage: 'StoneScript',
    catchPhrase: 'Gold.',
    gradClassName: 'CS5',
    favInstructor: 'Nettion'
  });

  const rondo = new ProjectManager({
    name: 'Rondo',
    age: 22,
    location: 'Manhattan',
    gender: 'M',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Solid and Liquid....Gas Man!',
    gradClassName: 'CS1',
    favInstructor: 'Tom from MySpace'
  });

  const rj = new ProjectManager({
    name: 'RJ',
    age: 23,
    location: 'Mechnicsville',
    gender: 'F',
    specialty: 'Vue.js',
    favLanguage: 'C++',
    catchPhrase: 'I feel the need, the need for speed.',
    gradClassName: 'CS4',
    favInstructor: 'Austen'
  });
console.log(fred.age);
console.log(smeckleroot.catchPhrase);
console.log(monty.listsSubjects());
console.log(monty.PRAssignement('FlexBox'));
console.log(slapdash.grade(monty,'java'));
console.log(rondo.debugsCode(guthrie, 'JS'));
console.log(rondo.speak());
console.log(rj.demo('Go'));
console.log(korko.scoreIt(arlo));
console.log(rj.grade(arlo, 'The Maths'));