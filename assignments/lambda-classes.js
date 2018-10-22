// CODE here for your Lambda Classes
/*************************************************************************************************
 ******************************************* Class(es) *******************************************
 *************************************************************************************************/
//================================================================================
//==================================== Person ====================================
class Person {
  //------------------------- Constructor -------------------------
  constructor(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  //-------------------------- Method(s) --------------------------
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

//================================================================================
//================================== Instructor ==================================
class Instructor extends Person {
  //------------------------- Constructor -------------------------
  constructor(obj){
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  //-------------------------- Method(s) --------------------------
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
  addAssignment(student, assignment){
    student.receiveAssignment(assignment);
  }
  gradeAssignment(student, assignmentsIndex, grd){
    student.assignments[assignmentsIndex].updateGrade(grd);
  }
  gradeAssignments(student){
    student.assignments.forEach(function(asnmt){
      josh.gradeAssignment(student, student.assignments.map(function(studentAsnmt) {return studentAsnmt.name; }).indexOf(asnmt.name), Math.floor(Math.random() * (100 - 0 + 1) ) + 0);
    });
  }
  calcTotalGrade(student){
    return parseFloat(student.assignments.reduce(function(accu, assignment){return accu + assignment.grade;}, 0) / 100).toFixed(2) /
            parseFloat((student.assignments.length * 100) / 100).toFixed(2) * 100;
  }
  updateStudentGrade(student, grd){
    student.grade = grd;
  }
}

//================================================================================
//==================================== Student ===================================
class Student extends Person {
  //------------------------- Constructor -------------------------
  constructor(obj){
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    this.assignments = obj.assignments;
    this.grade = obj.grade;
  }
  //-------------------------- Method(s) --------------------------
  listsSubjects(){
    console.log(`${this.name}\'s favorite subjects are:\n`);
    this.favSubjects.forEach(function(element) {
      console.log(element)
    });
  }
  receiveAssignment(assignment){
    this.assignments.push(assignment);
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  displayAssignments(){
    console.info(JSON.stringify(this.assignments, null, ' '));
  }
}

//================================================================================
//================================ ProjectManager ================================
class ProjectManager extends Instructor {
  //------------------------- Constructor -------------------------
  constructor(obj){
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  //-------------------------- Method(s) --------------------------
  standUp(channel){
    return `${this.name} announces to ${channel} @channel standy times!​​​​​`
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}\'s code on ${subject}`;
  }
}

//================================================================================
//================================== Assignment ==================================
class Assignment{
  //------------------------- Constructor -------------------------
  constructor(obj){
    this.name = obj.name;
    this.grade = obj.grade;
  }
  //-------------------------- Method(s) --------------------------
  updateGrade(grd){
    this.grade = grd;
  }
}

/*************************************************************************************************
 ******************************************** Objects ********************************************
 *************************************************************************************************/
//================================================================================
//==================================== Example ===================================
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

//================================================================================
//================================== Instructor ==================================
const josh = new Instructor({
  name: 'Josh',
  location: 'In Da House',
  age: 42,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `Study hard my friends`
});

//================================================================================
//==================================== Student ===================================
const james = new Student({
  name: 'James',
  location: 'Arizona',
  age: 35,
  gender: 'male',
  previousBackground: 'Lots of things',
  className: 'FSW15',
  favSubjects: ['Algorithms', 'Data Structures', 'Automation', 'Design Patterns', `Time Complexity Notation`,
                'HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C++', 'Gui Implementation', 'Architecture', 'TDD'],
  assignments: [],
  grade: 0,
})

//================================================================================
//================================ Project Manager ===============================
const sawyer = new ProjectManager({
  name: 'Sawyer',
  location: 'Earth',
  age: 31,
  gender: 'male',
  gradClassName: 'FSW15',
  favInstructor: josh.name
})

/*************************************************************************************************
 ********************************************** Main *********************************************
 *************************************************************************************************/
let main = function(){
  console.log('*************************** lambda-classes.js ***************************');
  //================================================================================
  //================================= MVP Use Cases ================================
  james.listsSubjects();
  console.log(josh.speak());
  console.log(sawyer.speak());
  console.log(james.speak());
  console.log(`${josh.name} says: ${josh.demo(josh.favLanguage)}`);
  console.log(james.sprintChallenge(josh.favLanguage));
  console.log(james.PRAssignment(josh.favLanguage));
  console.log(`${josh.name} says: ${josh.grade(james, josh.favLanguage)}`);
  console.log(`${sawyer.standUp('FSW15_sawyer')}`);
  console.log(`${sawyer.debugsCode(james, james.favSubjects[7])}`);

  //================================================================================
  //=============================== Stretch Use Cases ==============================
  console.log('******************************* (Stretch) *******************************');
  let assignmentNames = ['User Interface I', 'User Interface II', 'User Interface III', 'Git for Web Development',
                                  'Responsive Design I', 'Responsive Design II', 'Preprocessing I', 'Preprocessing II',
                                  'JavaScript I', 'JavaScript II', 'JavaScript III', 'JavaScript IV'
                                  ];
  console.log(`${james.name} begins Lambda School with a grade of: ${james.grade}`);
  console.log(`${james.name} receives the assignments from ${josh.name}`);
  assignmentNames.forEach(function(asnName){
    josh.addAssignment(james, new Assignment({name: asnName, grade: 0}));
  });
  james.displayAssignments();
  console.log(`${james.name} completes assignemnts and ${josh.name} grades them...`);
  josh.gradeAssignments(james);
  james.displayAssignments();
  josh.updateStudentGrade(james, josh.calcTotalGrade(james));
  console.log(`${james.name}'s total grade = ${james.grade}`);

  // ToDo
  if (james.grade <= 70){
    console.log(`Uh oh, ${james.name} needs some help. Lets see if ${sawyer.name} can help ${james.name} get his grades up...`)
    //sawyer.assistStudentWithAssignments(); ToDo
  }
}
main();