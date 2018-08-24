// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    };

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    };

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    };

    listsSubjects() {
        console.log(this.favSubjects);  //needs to split up an array?
    };

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    };

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    };
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    };

    standUp() {
        console.log(`${this.name} announces to {channel}, @channel standy times!`)
    };

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    };
}


//Objects created after here

// **************Instructors
const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const Dan = new Instructor({
    name: 'Dan',
    location: 'Salt Lake City',
    age: 62,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Stick death animations',
    catchPhrase: `All right everybody`,
  });

  // **************Project Managers

  const Jacob = new ProjectManager({
    name: 'Dan',
    location: 'Salt Lake City',
    age: 62,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Stick death animations',
    catchPhrase: `All right everybody`,
    gradClassName: 'CSPT6',
    favInstructor: 'Dan',

  });

  const Moises = new ProjectManager({
    name: 'Moises',
    location: 'Canada',
    age: 21,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'VSCode',
    catchPhrase: `All right everybody`,
    gradClassName: 'CSPT6',
    favInstructor: 'Dan',

  });


  

// **************Students

  const Brandon = new Student({
    name: 'Dan',
    location: 'Salt Lake City',
    age: 62,
    gender: 'male',
    favLanguage: 'HTML',
    className: 'Stick death animations',
    favSubjects: `All right everybody`
  });

  const Lily = new Student({
    name: 'Lily',
    location: 'El Salvador',
    age: 22,
    gender: 'Female',
    favLanguage: 'English',
    className: 'Crossfit',
    favSubjects: `Snatches`
  });



  console.log(fred.speak());