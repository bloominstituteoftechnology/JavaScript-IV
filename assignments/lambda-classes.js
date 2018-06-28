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
    catchPhrase: 'Party like it\'s 1999!'
  }); 

  const student1 = new Student({
    name: 'Mexican Pete',
    age: 2, 
    location: 'Foon',
    gender: 'male',
    previousBackground:'Used to fight the steel dwarves on the planet Macktoo.' , 
    className:'CS12' ,
    favSubjects:['JavaScript', 'HTML']
  }); 


  const student2 = new Student({
    name: 'Frenchy Franchesca',
    age: 7, 
    location: 'Foon',
    gender: 'female',
    previousBackground:'Used to teach the Zobdarts how to bobblefingle.' , 
    className:'CS12' ,
    favSubjects:['CSS', 'HTML' , 'C++']
  }); 

  
  const student3 = new Student({
    name: 'Spanish Jane',
    age: 4, 
    location: 'Foon',
    gender: 'female',
    previousBackground:'Used to train elephants in the circus.' , 
    className:'CS12',
    favSubjects:['C++', 'Python', 'JavaScript', 'CSS']
  }); 

  const projectManager1 = new ProjectManager({
    name: 'Mr. Socks',
    age: 75, 
    location: 'Foon',
    gender: 'male',
    specialty: 'Knitting',
    favLanguage: 'Faldonian',
    catchPhrase: 'SOCKS IN A BOX ARE SOCKS THAT ROCKS!',
    gradClassName: 'CS2',
    favInstructor: 'Mastofina'
  }); 

  const projectManager2 = new ProjectManager({
    name: 'Mrs. Wallabee',
    age: 76, 
    location: 'Foon',
    gender: 'female',
    specialty: 'Drawing Cats',
    favLanguage: 'Faldonian',
    catchPhrase: 'I want mine . . . all the way!',
    gradClassName: 'CS4',
    favInstructor: 'Celadore'
  }); 

  const projectManager3 = new ProjectManager({
    name: 'Mr. Waffles',
    age: 83, 
    location: 'Foon',
    gender: 'male',
    specialty: 'Skyrocketing',
    favLanguage: 'Squendarlian',
    catchPhrase: 'Pour on the syrup!',
    gradClassName: 'CS1',
    favInstructor: 'Celadore'
  }); 


  console.log(instructor1.name);