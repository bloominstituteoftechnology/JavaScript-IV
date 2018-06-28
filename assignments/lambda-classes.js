// CODE here for your Lambda Classes

//===PERSON CLASS===//

class Person {
  constructor(options) {
  this.name = options.name;
  this.age = options.age;
  this.location = options.location;
  this.gender = options.age;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//===INSTRUCTOR CLASS===//

class Instructor extends Person{
  constructor(instructorOptions){
  super(instructorOptions);
  this.specialty = instructorOptions.specialty;//what the insructor is good at
  this.favLanguage = instructorOptions.favLanguage;
  this.catchPhrase = instructorOptions.catchPhrase;
  }
  demo(subject){
      console.log(`Today we are learning about ${this.subject}`);
  }
  grade(student, subject){
      console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

//===STUDENT CLASS===//

class Student extends Person {
    constructor(studentOptions){
    super(studentOptions); 
    this.previousBackground = studentOptions.previousBackground; //what Student used to do before Lambda School
    this.className = studentOptions.className; //i.e CS132
    this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects(){
      this.favSubjects.forEach(element => {
        console.log(element);
      });
    }
    PRAssignment(subject){
      console.log(`${this.name} has begun spring challenge on ${subject}`);
    }
}

//===PROJECT MANAGER CLASS===//

class ProjectManager extends Instructor{
    constructor(projectManagerOptions){
    super(projectManagerOptions);    
    this.gradClassName = projectManagerOptions.gradClassName;
    this.favInstructor = projectManagerOptions.favInstructor;
    }
    standUp(channel){
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const instructor1 = new Instructor({
  name: 'Joaquin',
  age: 345, 
  location: 'Foon',
  gender: 'male',
  specialty: 'Soup making',
  favLanguage: 'Squendarlian',
  catchPhrase: 'You\'ll never see these beets again!'
}); 

const instructor2 = new Instructor({
    name: 'Celadore',
    age: 25, 
    location: 'Foon',
    gender: 'male',
    specialty: 'Flying like a bird',
    favLanguage: 'Masquich',
    catchPhrase: 'Caroocoocachoo!'
  }); 

  const instructor3 = new Instructor({
    name: 'Mastofina',
    age: 1999, 
    location: 'Foon',
    gender: 'female',
    specialty: 'Laptop repair',
    favLanguage: 'Faldonian',
    catchPhrase: 'Gotta get those bobcats!'
  }); 