// CODE here for your Lambda Classes
class Person{
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(personAttributes){
        super(personAttributes);
        this.favLanguage = personAttributes.favLanguage;
        this.specialty = personAttributes.specialty;
        this.catchPhrase = personAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(personAttributes){
        super(personAttributes);
        this.previousBackground = personAttributes.previousBackground;
        this.className = personAttributes.className;
        this.favSubjects = personAttributes.favSubjects;
    }
    listsSubjects() {
        return `My favorite subjects are ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(managerAttributes){
        super(managerAttributes);
        this.gradClassName = managerAttributes.gradClassName;
        this.favInstructor = managerAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const sanderson = new Person({
    name: 'Brandon Sanderson',
    location: 'Utah',
    age: 42,
    gender: 'male',
  });

  const jordan = new Person({
    name: 'Robert Jordan',
    location: 'South Carolina',
    age: 58,
    gender: 'male',
  });

const rand = new Student({
    name: 'Rand alThor',
    location: 'Two Rivers',
    age: 18,
    gender: 'male',
    previousBackground: 'farmer', 
    className: 'CS20',
    favSubjects: ['swordfighting', 'farming'],
    grade: 50
  });

  const mat = new Student({
    name: 'Matrim Cauthon',
    location: 'Two Rivers',
    age: 18,
    gender: 'male',
    previousBackground: 'troublemaker',
    className: 'CS20',
    favSubjects: ['gambling', 'dancing'],
    grade: 90
  });

  const perrin = new Student({
    name: 'Perrin Aybara',
    location: 'Two Rivers',
    age: 18,
    gender: 'male',
    previousBackground: 'blacksmith',
    className: 'CS20',
    favSubjects: ['blacksmithing', 'playing with siblings'],
    grade: 72
  });

  const lan = new Instructor({
    name: 'Lan Mandragoran',
    location: 'The White Tower',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Death is lighter than a feather. Duty, heavier than a mountain.`
  });

  const moiraine = new Instructor({
    name: 'Moiraine Sedai',
    location: 'The White Tower',
    age: 'ageless',
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `The Wheel weaves as the Wheel wills.`
  });

  const elyas = new Instructor({
    name: 'Elyas Machera',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Run when you have to, fight when you must, rest when you can.`
  });

  const lanfear = new ProjectManager({
    name: 'Lanfear',
    location: 'Telaranrhiod',
    age: 'ageless',
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `He is mine!`,
    gradClassName: 'CS1',
    favInstructor: 'Lews Therin Telamon'
  });

  const siuan = new ProjectManager({
    name: 'Siuan Sanche',
    location: 'The White Tower',
    age: 'ageless',
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Fish guts!`,
    gradClassName: 'CS5',
    favInstructor: 'Gareth Byrne'
  });

  const thom = new ProjectManager({
    name: 'Thom Merrilin',
    location: 'Caemlyn',
    age: 60,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Kill a man who needs killing, and sometimes others pay for it.`,
    gradClassName: 'CS7',
    favInstructor: 'Morgase Trakand'
  });

 console.log(sanderson.speak());
 console.log(lan.demo('Javascript'));
 console.log(elyas.grade(mat, 'classes'));
 console.log(rand.listsSubjects());
 console.log(perrin.PRAssignment('Arrays'));
 console.log(mat.sprintChallenge('CSS'));
 console.log(siuan.standUp('Team Dragon'));
 console.log(thom.debugsCode(perrin, 'javaScript'))

  