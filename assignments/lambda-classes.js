// CODE here for your Lambda Classes
//
 class Person {
   constructor(personStats) {
     this.name = personStats.name;
     this.age = personStats.age;
     this.gender = personStats.gender;
     this.graduate = personStats.graduate;
     this.location = personStats.location;
   }

   speak() {
     console.log(`Hello my name is ${this.name} and I am from ${this.location}`);
   }
 } //person class

class Instructor extends Person {
  constructor(instructorStats) {
    super(instructorStats);
    this.specialty = instructorStats.specialty;
    this.favoriteLang = instructorStats.favoriteLang;
    this.catchPhrase = instructorStats.catchPhrase;
  }

  demo(subjectString) {
    console.log(`Today we are learning about ${subjectString}.`);
  }

  grade(student, subject) {
    if(student.grade >= 100) {
      console.log(`Congradulations! ${student.name} has graduated from Lambda School!`)
    } else {
    let numGrade = Math.floor(Math.random() * 100 + 1)
    student.grade += numGrade;
    console.log(`${student.name} receives a ${numGrade} score on ${subject}. Students grade is now ${student.grade}`);
    student.graduate = true;
    }
  }
} // instructor class


class Student extends Person {
  constructor(studentStats) {
    super(studentStats);
    this.previousExperience = studentStats.previousExperience;
    this.className = studentStats.className;
    this.faveSubjects = studentStats.faveSubjects;// array
    this.grade = 1;
  }

  listSubject() {
    this.faveSubjects.forEach(item => console.log(item))   
  }

  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`)
  }

} //student class

class ProjectManager extends Instructor {
  constructor(pmStats) {
    super(pmStats);
    this.gradClass = pmStats.gradClass;
    this.faveInstructor= pmStats.faveInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standup time!`);
    // code here
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
} // project manager
//
const student = new Student({
  name: 'Chad',
  age: 33,
  gender: 'm',
  location: 'Utah',
  previousExperience: 'TV news',
  className: 'FSW14',
  faveSubjects: ['js', 'ruby', 'recess'],
  graduate: false
});


const instructor = new Instructor({
  name: 'Josh',
  age: 33,
  gender: 'm',
  location: 'Utah',
  specialty: 'JS',
  favoriteLang: 'english',
  catchPhrase: 'Hot Pocket!',
  graduate: false
});

const pm = new ProjectManager({
  name: 'Sumayyah',
  age: 33,
  gender: 'f',
  location: 'Chicago',
  specialty: 'JS',
  favoriteLang: 'js',
  catchPhrase: 'Hot Pocket!',
  gradClass: 'FSW1',
  graduate: true,
  faveInstructor: 'Yoda'
});
console.log(student);
console.log("############################################\n")
console.log(instructor);
console.log("############################################\n")
console.log(pm);
console.log("############################################\n")
instructor.speak();
instructor.demo('html');
instructor.grade(student, 'html');
instructor.grade(student, 'html');
instructor.grade(student, 'html');
console.log('Is student a graduate: ', student.graduate);
console.log("############################################\n")
student.speak();
student.listSubject();
student.prAssignment('Ruby');
student.sprintChallenge('JS-VI');
console.log("############################################\n")
pm.speak();
pm.standUp('fsw14');
pm.debugsCode(student, 'CSS');
