// CODE here for your Lambda Classes

// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

// base class - Person
class Person {

    constructor (personAttributes) {
    this.name = personAttributes.name
    this.age = personAttributes.age
    this.location = personAttributes.location
    this.gender = personAttributes.gender;
  }

  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
  }
}

const James = new Person({
  name: 'James',
  age: 25,
  location: 'California',
  gender: 'Male'
})
console.log(James)
James.speak();

// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
  constructor(instructorAttributes){
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject){
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject){
    console.log(`${student} recieves a perfect score on ${subject}`)
  }

  giveGrade(student){
    let num = Math.floor(Math.random()*5) + 1;
    num *= Math.floor(Math.random()*2) == 1? 1: -1;

    student.grade = student.grade + num;

    console.log( `${this.name} gave ${student.name} a score of ${num}, his current grade is now ${student.grade}`)
  }

}

const Josh = new Instructor({
  name: 'Josh',
  age: 34,
  location: 'California',
  gender: 'Male',
  specialty: 'FrontEnd Development',
  favLanguage: 'JavaScript',
  catchPhrase: "Let's Go!!"
})

Josh.grade('David', 'Responsive Design');
Josh.speak()



// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
class Student extends Person {

  constructor(studentAttribute){
    super(studentAttribute)
    this.previousBackground = studentAttribute.previousBackground;
    this.favSubjects = studentAttribute.favSubjects;
    this.grade = studentAttribute.grade;
  }

  listsSubjects(){
    if (Array.isArray(this.favSubjects)){
      this.favSubjects.map(subject => {return subject})
    }
    return this.favSubjects;
  }

  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`
  }

  sprintChallenge(subject){
    return `${this.name} has begun spring challenge on ${subject}`
  }

  graduate(){
    if (this.grade > 70){
      console.log(`${this.name} is ready to graduate! Congratulations on finishing Lambda School!!!`)
    } else {
      console.log(`${this.name} has not completed all the requirements, you must complete all projects before graduating.`)
    }
  }
}

const David = new Student({
  name: 'David',
  favSubjects: 'math',
  grade: 65
})

console.log(David);
console.log(David.listsSubjects())
console.log(David.PRAssignment('math'));
console.log(David.sprintChallenge('Responsive Design'));

// #### Project Mananger
//
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor{

  constructor(projectManagerAttributes){
    super(projectManagerAttributes)
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
  }

  standUp(channel){
    return `${this.name} announces to ${channel}, @channel study times!`
  }

  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const Buzz = new ProjectManager({
  name: 'Buzz',
  age: 34,
  location: 'Wilmington',
  gender: 'Male',
  specialty: 'FrontEnd Development',
  favLanguage: 'Python',
  catchPhrase: "You can do it!",
  gradClassName: 'CS4',
  favInstructor: 'Joe'
})

console.log(Buzz)
console.log(Buzz.specialty);
console.log(Buzz.standUp('CSPT3'))
console.log(Buzz.debugsCode(David, 'JavaScript IV'))

console.log(David.grade);
Josh.giveGrade(David);
Josh.giveGrade(David);
Josh.giveGrade(David);

David.graduate();
