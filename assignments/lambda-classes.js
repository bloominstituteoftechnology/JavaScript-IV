// CODE here for your Lambda Classes

class Person{
    constructor(personOptions){
      this.name = personOptions.name;
      this.age = personOptions.age;
      this.location = personOptions.location;
      this.gender = personOptions.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }

  class Instructor extends Person{
    constructor(instructorOptions) {
      super(instructorOptions);
      this.specialty = instructorOptions.specialty;
      this.favLanguage = instructorOptions.favLanguage;
      this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    changeGrade(student){
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let points = Math.floor(Math.random() * 20);
        let randomPoints = points * plusOrMinus;
        return student.grade + randomPoints;
    }
  }
  
  class Student extends Person{
    constructor(studentOptions) {
      super(studentOptions);
      this.previousBackground = studentOptions.previousBackground;
      this.className = studentOptions.className;
      this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects(){
          this.favSubjects.forEach(element => {
            console.log(element);
          });
        }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
      }
      sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
      }
  }

  class ProjectManager extends Instructor{
  constructor(PMOptions) {
    super(PMOptions);
    this.gradClassName = PMOptions.gradClassName;
    this.favInstructor = PMOptions.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//////////////////////////////////////////////////////////////

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const frodo = new Instructor({
  name: 'Frodo',
  location: 'the Shire',
  age: 33,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Gandalf made me do it`
});

const blossom = new Student({
  name: 'Blossom',
  location: 'Townsville',
  age: 12,
  gender: 'female',
  previousBackground: 'superhero',
  className: 'CS12',
  favSubjects: [
      'HTML',
      'CSS',
    ]
});

const bubbles = new Student({
  name: 'Bubbles',
  location: 'Townsville',
  age: 13,
  gender: 'female',
  previousBackground: 'superhero',
  className: 'CS13',
  favSubjects: [
      'CSS',
      'Javascript',
    ]
});

const buttercup = new Student({
  name: 'Buttercup',
  location: 'Townsville',
  age: 11,
  gender: 'female',
  previousBackground: 'superhero',
  className: 'CS14',
  favSubjects: [
      'Bootstrap',
      'Javascript',
    ]
});

const mia = new ProjectManager({
  name: 'Mia',
  location: 'Nashville',
  age: 22,
  gender: 'female',
  favLanguage: 'Ruby',
  specialty: 'Front-end',
  catchPhrase: 'Eyebrows on fleek',
  gradClassName: 'CS1',
  favInstructor: 'Sean'
});

const james = new ProjectManager({
  name: 'James',
  location: 'Atlanta',
  age: 27,
  gender: 'male',
  favLanguage: 'C#',
  specialty: 'Full-Stack',
  catchPhrase: `I'm Batman`,
  gradClassName: 'CS2',
  favInstructor: 'Caleb'
});


// console.log(fred.specialty);
// console.log(frodo.catchPhrase);
// console.log(blossom.className);
//console.log(bubbles.listsSubjects());
// console.log(blossom.listsSubjects());
// console.log(buttercup.name);
// console.log(mia.gradClassName);
//console.log(james.debugsCode(bubbles, 'Bootstrap'));
// console.log(fred.speak());
//console.log(blossom.sprintChallenge('CSS'));
//console.log(mia.standUp('cs12_help'));
//console.log(fred.changeGrade(buttercup));