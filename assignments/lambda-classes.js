// CODE here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

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

console.log(JohnDoe);
console.log(JaneDoe);


class Instructor extends Person {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);    
  };
  grade(student, subject) {
    `${student.name} receives a perfect score on ${subject}`
  }
}

const Prof = new Instructor({
  name: 'Professor Banks',
  age: 40,
  location: "New York, NY",
  gender: "Male",
  specialty: "Node.js",
  favLanguage: "PHP - :-P",
  catchPhrase: "Fuhget abot it"
});

// console.log(Prof.demo("DBs"));
Prof.demo("DBs");
// Prof.grade(john, "DBs");


class Student extends Person {
  constructor(props){
  super(props);
  this.previousBackground = props.previousBackground;
  this.className = props.className;
  this.favSubjects = props.favSubjects;
  }
  listsSubjects() {  
    // return this.favSubjects.map(subject => subject).toString();
    const subjects = this.favSubjects;
    for(let i = 0; i < subjects.length; i++) {
      // console.log(subjects[i]);
      console.log(subjects[i]);      
    };
  };
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;    
  };
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;    
  }
}

const jasper = new Student({
  name: 'Jasper',
  age: 28,
  location: "Columbus, OH",
  gender: "Male",
  previousBackground: "dish washer",
  className: "FSW20",
  favSubjects: ['math', 'computer science', 'data structures']
})

console.log(jasper);
// console.log(jasper.listsSubjects());
jasper.listsSubjects()
console.log(jasper.PRAssignment('math'));
console.log(jasper.sprintChallenge('computer science'));


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
  }
}

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

console.log(mcQue.standUp('fsw20_help'));
console.log(mcQue.debugsCode(jasper, 'data structures'));
