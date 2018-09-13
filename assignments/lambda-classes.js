// CODE here for your Lambda Classes
//base-class declaration
class Person {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.location = personInfo.location;
    this.gender = personInfo.gender;
  }
  //methods
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//extended class Instructor from Person
class Instructor extends Person {
  constructor(insInfo) {
    super(insInfo);
    this.speciality = insInfo.speciality;
    this.favLanguage = insInfo.favLanguage;
    this.catchPhrase = insInfo.catchPhrase;
  }
  //methods
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  //stretch method. produces 2 randomized numbers, val1 is used to determine if val2 will be positive or negative
  //val2 then applied to student.grade
  //console.logs a dynamic string that updates user on student's grade
  gradeAssignment(student) {
    let val1 = Math.floor(Math.random() * 100);
    let plusMin = "";
    let val2 = Math.floor(Math.random() * 100);
    val1 >= 50 ? (plusMin = "plus") : (plusMin = "minus");
    if (plusMin === "plus") {
      if (student.grade + val2 > 100) {
        student.grade = 100;
      } else {
        student.grade += val2;
      }
    } else if (plusMin === "minus") {
      if (student.grade - val2 < 0) {
        student.grade = 0;
      } else {
        student.grade -= val2;
      }
    }
    console.log(
      `${this.name} graded ${student.name}\'s assignment. ${
        student.name
      } now has a grade of ${student.grade}!`
    );
  }
}

//extended class Student from Person
class Student extends Person {
  constructor(stuInfo) {
    super(stuInfo);
    this.previousBackground = stuInfo.previousBackground;
    this.className = stuInfo.className;
    this.favSubjects = stuInfo.favSubjects;
    //grade property added for stretch exercise
    this.grade = stuInfo.grade;
  }
  //methods
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  //stretch method graduate()
  //checks current student grade and returns graduation string if at least 70%
  //returns 'cannot graduate' string if below 70%
  graduate() {
    if (this.grade >= 70) {
      console.log(
        `${this.name} has graduated from Lambda School with a grade of ${
          this.grade
        }%! Congratulations, ${this.name}!`
      );
    } else {
      console.log(`${this.name} is failing Lambda School with a grade of ${
        this.grade
      }% and cannot graduate!
          Study up and try again, ${this.name}!`);
    }
  }
}

//extended class ProjectManager from Instructor
class ProjectManager extends Instructor {
  constructor(PMInfo) {
    super(PMInfo);
    this.gradClassName = PMInfo.gradClassName;
    this.favInstructor = PMInfo.favInstructor;
  }
  //methods
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const josh = new Instructor({
  name: "Josh",
  location: "Utah",
  age: 29,
  gender: "male",
  favLanguage: "JavaScript",
  speciality: "dropping knowledge bombs",
  catchPhrase: "Let's look in the guts of our Children, guys"
});

const bizarroJosh = new Instructor({
  name: "Bizarro Josh",
  location: "Australia",
  age: 92,
  gender: "male",
  favLanguage: "colonial French",
  speciality: "being totally different from regular Josh. Also whittling",
  catchPhrase: "man do I hate coding, guys"
});

const adam = new Student({
  name: "Adam",
  location: "Round Rock",
  age: 29,
  gender: "male",
  previousBackground: "retail management",
  className: "FSW14",
  favSubjects: ["JavaScript", "Html", "CSS"],
  //stretch property
  grade: 100
});

const feratu = new Student({
  name: "Coach Feratu",
  location: "inside your house",
  age: 327,
  gender: "male",
  previousBackground: "vampire management",
  className: "FSW14",
  favSubjects: ["RubyRedBlood", "CoffinScript", "SharpPerlyWhites"],
  //stretch property
  grade: 66
});

const jeff = new ProjectManager({
  name: "Jeff",
  location: "California(I think)",
  age: 29,
  gender: "male",
  gradClassName: "FSW14",
  favInstructor: "Josh, probably"
});

const kamry = new ProjectManager({
  name: "Kamry",
  location: "somewhere that uses Mountain Time Zone",
  age: 29,
  gender: "male",
  gradClassName: "FSW14",
  favInstructor: "Josh, probably"
});

//tests
console.log(josh.speciality); //dropping knowledge bombs
console.log(josh.catchPhrase); //Let's look in the guts of our Children, guys
josh.speak(); //Hello my name is Josh, I am from Utah
bizarroJosh.demo("preprocessors"); //Today we are learning about preprocessors
console.log(adam.favSubjects); // ['JavaScript', 'Html, 'CSS']
adam.listsSubjects(); // JavaScript //Html //CSS
feratu.sprintChallenge("Bloodsucking"); // Coach Feratu has begun sprint challenge on Bloodsucking
jeff.standUp("fsw14_jeff"); //Jeff announces to fsw14_jeff, @channel standy times!
kamry.debugsCode(adam, "constructors"); //Kamry debugs Adam's code in constructors
jeff.gradeAssignment(adam); //Jeff graded Adam's assignment. Adam now has a grade of {random number between 0-100}
jeff.gradeAssignment(adam); // ^^
adam.graduate(); //gives dynamic graduation string, or try again string
