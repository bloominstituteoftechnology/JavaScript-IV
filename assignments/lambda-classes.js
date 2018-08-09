// CODE here for your Lambda Classes
class Person {
    constructor(testingPartOne){
        this.name = testingPartOne.name;
        this.age = testingPartOne.age;
        this.location = testingPartOne.location;
        this.gender = testingPartOne.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(testingPartTwo){
        super(testingPartTwo)
        this.specialty = testingPartTwo.specialty;
        this.favLanguage = testingPartTwo.favLanguage;
        this.catchPhrase = testingPartTwo.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
      return `${student.name} receives a perfect score on ${subject}.`;
    }

}

class Student extends Person{
    constructor(testingPartThree){
        super(testingPartThree)
        this.previousBackground = testingPartThree.previousBackground;
        this.className = testingPartThree.className;
        this.favSubjects = testingPartThree.favSubjects;
    }
    listsSubjects(){
      return `${this.favSubjects}.`
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManangers extends Instructor{
    constructor(testingPartFour){
        super(testingPartFour)
        this.gradClassName = testingPartFour.gradClassName;
        this.favInstructor = testingPartFour.favInstructor
    }
    standUp(channel){
      return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 37,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const marvin = new Instructor({
    name: 'Marvin',
    location: 'New York',
    age: 55,
    gender: 'Male',
    favLanguage: 'C++',
    specialty: 'Full-Stack',
    catchPhrase: `what up SON!!`
  });
const libby = new Instructor({
    name: 'Librada',
    location: 'Texas',
    age: 50,
    gender: 'Female',
    favLanguage: 'all of them',
    specialty: 'Full-Stack',
    catchPhrase: `Don't go breaking my heart!`
  });

const mike = new Student({
    name: 'Michael',
    location: 'Texas',
    age: 24,
    gender: 'Male',
    previousBackground:'played nothing but Magic the Gathering and Melee',
    className : 'CS13',
    favSubjects:['Html', 'CSS', 'JavaScript'],
  });

  const hailey = new Student({
    name: 'Hailey',
    location: 'Texas',
    age: 21,
    gender: 'Female',
    previousBackground:'Do my nails, eat food, and go clubing',
    className : 'CS12',
    favSubjects:['Html', 'CSS', 'JavaScript'],
  });

  const clarissa = new Student({
    name: 'Clarissa',
    location: 'Texas',
    age: 24,
    gender: 'Female',
    previousBackground:'Studied to be a zooligist.',
    className : 'CS14',
    favSubjects:['Html', 'CSS', 'JavaScript'],
  });

const zack = new ProjectManangers({
    name: 'Zack',
    location: 'Middle of no Where',
    age: 28,
    gender: 'Male',
    gradClassName: 'CS10',
    favInstructor: 'Billy',
    favLanguage: 'C++',
    specialty: 'back-end',
    catchPhrase: `I'm not creative`
});

const bob = new ProjectManangers({
    name: 'Bobby',
    location: 'buck**** no where!',
    age: 38,
    gender: 'Male',
    gradClassName: 'CS1',
    favInstructor: 'shelly',
    favLanguage: 'HTML',
    specialty: 'a lil of everything',
    catchPhrase: `get err duune!`
});

  console.log(josh.speak());
  console.log(marvin.demo('Html'));
  console.log(libby.grade(mike,'CSS'));
  console.log(mike.listsSubjects());
  console.log(hailey.PRAssignment('HTML'));
  console.log(clarissa.sprintChallenge('JavaScript'));
  console.log(zack.standUp('cs13_Zack'));
  console.log(bob.debugsCode(mike,'JavaScript'));