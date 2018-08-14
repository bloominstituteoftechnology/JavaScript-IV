// CODE here for your Lambda Classes
class Person {
    constructor(props) {
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
      this.gender = props.gender;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  class Goku extends Person {
    constructor(props) {
      super(props);
      this.specialty = props.specialty;
      this.favLanguage = props.favLanguage;
      this.catchPhrase = props.catchPhrase;
    }
  
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
  
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }
  } // Goku
  
  
  class Student extends Person {
    constructor(props) {
      super(props);
      this.previousBackground = props.previousBackground;
      this.className = props.className;
      this.favSubjects = props.favSubjects;
    }
  
    listsSubjects() {
      for (let i = 0; i < this.favSubjects.length; i++) {
        console.log(`${this.name} <3's ${this.favSubjects[i]}`);
      }
    }
  
    PRAssignment(subject) {
      console.log(`${this.name} submitted a PR for ${subject}`);
    }
  
    sprintChallenge(subject) {
      console.log(`${this.name} begins working hard on ${subject}`);
    }
  }
  
  class ProjectManager extends Goku {
    constructor(props) {
      super(props);
      this.gradClassName = props.gradClassName;
      this.favInstructor = props.favInstructor;
    }
  
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
  
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }
  
  const Gohan = new Goku({
    name: 'Gohan',
    location: 'Namek',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Spirit-Bomb',
    catchPhrase: `Kamehameha`
  });
  
  const Bulma = new ProjectManager({
    name: 'Bulma',
    location: 'Planet Vegeta',
    age: 32,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Vegeta',
    favLanguage: 'React',
    specialty: 'Tech',
    catchPhrase: 'Capsule Corp'
  });
  
  const Brolly = new Student({
    name: 'Brolly',
    location: 'Planet 13',
    age: 37,
    gender: 'male',
    previousBackground: 'Super Saiyan',
    className: 'CS11',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });
  
  Gohan.speak();
  Gohan.demo('variables');
  Gohan.grade(Brolly, 'redux');
  
  Brolly.speak();
  Brolly.listsSubjects();
  Brolly.PRAssignment('Redux');
  Brolly.sprintChallenge('Pre-proccessing');
  
  Bulma.speak();
  Bulma.demo('Redux');
  Bulma.grade(Brolly, 'const vs let');
  Bulma.debugsCode(Brolly, 'DS-Algos');
  Bulma.standUp('#Code-Allstars');
  