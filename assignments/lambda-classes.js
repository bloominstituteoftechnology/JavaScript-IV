// CODE here for your Lambda Classes
class Person{
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak(){
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}



class Instructor extends Person{
  constructor(instructorProps){
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;

  }
  demo(subject){console.log(`Today we are learning about ${subject}.`);}
  grade(student,subject){console.log(`${student.name} receives a perfect score on ${subject}`);}
  changeGrade(student){
    let addPoints= Math.floor(Math.random()*2);
    if(addPoints===1){
      student.grade += Math.floor(Math.random()*11);
    }else{
      if(student.grade>0){
      student.grade -= Math.floor(Math.random()*11);}
    }
    console.log(student.grade);
  }
}

class Student extends Person{
  constructor(studentProps){
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
    this.grade = Math.floor(Math.random()*100);

  }
  showGrade(){
    console.log(`${this.name} got a grade of ${this.grade}`);
  }
  listsSubjects()
    { console.log(`Hi, my name is ${this.name}, and my favorite subjects are: `);
      this.favSubjects.forEach(function(subject) {console.log(`${subject}\n`);})}

  PRAssignment(subject){console.log(`${this.name} has submitted a PR for ${subject}`);}

  sprintChallenge(subject){console.log(`${this.name} has begun sprint challenge on ${subject}`);}

  graduate(instructor){
    let graduated = false;
    while(!graduated){if(this.grade >=70){
       console.log(`${this.name} is a Lambda grad!`);
       graduated = true;
       }else{
         console.log(`${this.name}, you can't graduate. Work harder!`);
         instructor.changeGrade(this);
       }}

  }

}

class ProjectManager extends Instructor{
  constructor(pmProps){
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;

  }
  standUp(slackChannel){console.log(`${this.name} announces to ${slackChannel}, @channel, standy times!`);}
  debugsCode(student, subject){console.log(`${this.name} debugs ${student.name}'s code on ${subject}.'`);}
}

/* uncomment to test
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const john = new Student({
  name: 'John Smith',
  location: 'Houston',
  age: 23,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `I like food.`,
  previousBackground: 'dog',
  className: 'FSW17',
  favSubjects: ['math', 'logic', 'oop', 'DS&A']
});

const alex = new ProjectManager({
  name: 'Alex Pepper',
  location: 'Houston',
  age: 23,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `I like food.`,
  gradClassName: 'FSW17',
  favInstructor: 'Josh'
});


fred.demo('javascript');
fred.grade(john, 'javascript');
john.listsSubjects();
john.PRAssignment('JS-IV');
john.sprintChallenge('JS fundamentals');
john.showGrade();
alex.standUp('FSW17-Alex');
alex.debugsCode(john, 'prototypes');
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);
fred.changeGrade(john);

//john.graduate(fred);

*/
