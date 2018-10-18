// CODE here for your Lambda Classes


// ***********************************************************
// ******************       CLASSES       ***********************
// ***********************************************************
class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  };
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  };
}

class Instructor extends Person {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;    
  };
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  };
  gradeProjects(student){
    let rand = Math.round(Math.random() * 100);
    
    if(rand <= 70) {
      return student.grade -= 10;
    } if (rand > 70){
    return student.grade += 10; 
  }
}}

class Student extends Person {
  constructor(props){
  super(props);
  this.previousBackground = props.previousBackground;
  this.className = props.className;
  this.favSubjects = props.favSubjects;
  this.grade = 100;
  }
  listsSubjects() {
    const subjects = this.favSubjects;
    for(let i = 0; i < subjects.length; i++) {
      console.log(subjects[i]);      
    };
  };
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;    
  };
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;    
  };
  graduate() {
    const graduationScore = 300;
    if(this.grade >= (0.7 * graduationScore)) {
      return `Congradulations ${this.name}, you have demonstrated knowledge and the ability to produce clean code in all the areas of our studies`
    } else {
      return `Sorry ${this.name}, keep working at it and get ${this.grade} up to at least 210`;
    }
  };
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;    
  };
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;    
  };
}

// ***********************************************************
// ******************     Objects      ***********************
// ***********************************************************


// ************PERSONS/PEOPLE(lol)********************
const JohnDoe = new Person({
  name: 'John Doe',
  age: 45,
  location: "Boston, Mass",
  gender: "Male"
});

const JaneDoe = new Person({
  name: 'Jane Doe',
  age: 38,
  location: "Boston, MA",
  gender: "Female"
});

// ************INSTRUCTORS********************
const prof = new Instructor({
  name: 'Professor Banks',
  age: 40,
  location: "New York, NY",
  gender: "Male",
  specialty: "Node.js",
  favLanguage: "PHP - :-P",
  catchPhrase: "Fuhget abot it"
});

const freddy = new Instructor({
  name: 'Professor Fred',
  age: 42,
  location: "Salt Lake City, UT",
  gender: "Male",
  specialty: "UI/UX",
  favLanguage: "Python",
  catchPhrase: "FoSho"
});


// ************STUDENTS********************
const jasper = new Student({
  name: 'Jasper',
  age: 28,
  location: "Columbus, OH",
  gender: "Male",
  previousBackground: "dish washer",
  className: "FSW20",
  favSubjects: ['math', 'computer science', 'data structures']
})

const jackie = new Student({
  name: 'Jackie',
  age: 22,
  location: "Reno, NV",
  gender: "Female",
  previousBackground: "Student",
  className: "FSW20",
  favSubjects: ['Intro tp JS', 'HTML', 'Intro to React']
})

// ************PMS********************
const mcQue = new ProjectManager({
  name: 'CJ McQue',
  age: 25,
  location: "Albany, NY",
  gender: "Male",
  specialty: "css3",
  favLanguage: "JS",
  catchPhrase: "One for the Homies!!!",
  gradClassName: "FSW17",
  favInstructor: "Professor Snipe"
})

const cindy = new ProjectManager({
  name: 'Cindy',
  age: 20,
  location: "San Francisco, CA",
  gender: "Female",
  specialty: "Animation",
  favLanguage: "Scratch",
  catchPhrase: "Repetition repetition repetition",
  gradClassName: "FSW20",
  favInstructor: "Jack Hammel"
})

// ***********************************************************
// ****JS IV**************       LOGS       ***********************
// ***********************************************************

console.log(JohnDoe);
console.log(JaneDoe.speak());
console.log(prof.demo("DBs"));
console.log(prof.gradeProjects(jasper));
console.log(freddy.grade(jackie, "DBs"));
console.log(jasper);
jasper.listsSubjects()
console.log(jasper.PRAssignment('math'));
console.log(jasper.sprintChallenge('computer science'));
console.log(mcQue.standUp('fsw20_help'));
console.log(mcQue.gradeProjects(jackie));
console.log(mcQue.gradeProjects(jackie));
console.log(mcQue.gradeProjects(jackie));
console.log(mcQue.gradeProjects(jackie));
console.log(mcQue.gradeProjects(jackie));
console.log(mcQue.gradeProjects(jackie));
console.log(cindy.debugsCode(jasper, 'data structures'));
jackie.grade = 210;
console.log(jackie.graduate());
console.log(jasper.graduate());
