// CODE here for your Lambda Classes

class Person {
  constructor(personAtr) {
    this.name = personAtr.name;
    this.age = personAtr.age;
    this.location = personAtr.location;
    this.gender = personAtr.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructAtr){
    super(instructAtr);
    this.specialty = instructAtr.specialty;
    this.favLanguage = instructAtr.favLanguage;
    this.catchPhrase = instructAtr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
     return `${student.name} receives a perfect score on ${subject}`
  }
  gradeDestroyer(student) {
    if (Math.floor(Math.random()*10) +1 < 6) {
      student.grade--;
    } else {
      student.grade++;
    }
  }
}

class Student extends Person {
  constructor(studentAtr) {
    super(studentAtr);
    this.previousBackground = studentAtr.previousBackground;
    this.className = studentAtr.className;
    this.favSubjects = studentAtr.favSubjects;
    // stretch
    this.grade = studentAtr.grade;
  }
  listsSubjects() {
    return this.favSubjects.map((item)=>item)
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }

 
  sprintChallenge(subject) {
    return `${student.name} has begun sprint challenge on ${subject}`
  }
  graduate() {
    if (this.grade >= 70) {
      return 'you have graduated!'
    }else {
      return 'Nope. You must pass. Back to learning.'
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAtr){
    super(pmAtr);
    this.gradClassName = pmAtr.gradClassName;
    this.favInstructor = pmAtr.favInstructor;
  }
  standUp(slackChannel) {
     return (`${this.name} announces to ${slackChannel}, @channel standy times!`)
  }
  debugsCode(student, subject) {
    return (`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}
// stretch
// instances of these classes

const naruto = new Student({
  name: `Naruto Uzumaki`,
  age: 45,
  location:`Konoha`,
  gender:`Male`,
  previousBackground: `Former Hokage`,
  className: `CS1337`,
  favSubjects: ['JavaScript', 'inline-block & Floats in CSS', 'NodeJs'],
  grade: 71
});

const kakashi = new Instructor({
  name: `Kakashi Sensei`,
  age: 60,
  location: `Konoha`,
  gender:`Male`,
  specialty: `Copying Answers`,
  favLanguage:`Assembly`,
  catchPhrase: `I like cheese.`
});

const sasuke = new ProjectManager({
  name: `Sasuke Uchiha`,
  age: 45,
  location: `Konoha`,
  gender:`Male`,
  gradClassName: `cs16`,
  favInstructor: `Josh`
})

// Instructor check

console.log(kakashi.demo('wow'));
kakashi.gradeDestroyer(naruto);
console.log(kakashi.grade(naruto, 'JavaScript'))


// student check
console.log(naruto.speak('hello'));
kakashi.gradeDestroyer(naruto);
console.log(naruto.listsSubjects());
console.log(naruto.PRAssignment('naruto','JavaScript'));
console.log(naruto.PRAssignment());

// stretch
console.log(naruto.grade);
console.log(naruto.graduate());


// pm check
console.log(sasuke.standUp('Random'));
console.log(sasuke.debugsCode(naruto, 'JavaScript'));
console.log(sasuke.grade(naruto, 'JavaScript'));
console.log(sasuke.demo('wow'));



/* Instructor
demo
grade

student
listsSubject
PRAssignment
sprintChallenge

ProjectManager
standUp
debugsCode
*/