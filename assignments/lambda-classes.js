// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects() {
        console.log(student.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    };
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
}

class ProjectManager  extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode({student}, subject) {
        console.logs(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



const lulu = new Instructor({
    name: 'Lulu',
    location: 'Chicago',
    age: 21,
    gender: 'Non-binary',
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: `A real bobby-dazzler`,
  });

const delphine = new Student ({
    name: 'Delphine',
    location: 'Perpignan',
    age: 34,
    gender: 'Female',
    previousBackground: 'Barista',
    className: 'CSPT3',
    favSubjects: 'Math',
  });

  const joey = new ProjectManager ({
      name: 'Joey',
      location: 'Honolulu',
      age: 41,
      gender: 'Female',
      favLanguage: 'C++',
      specialty: 'Back-End',
      catchPhrase: 'Cheap as Chips',
      gradClassName: 'CS3',
      favInstructor: 'Dan',
 });

console.log(joey.name);
console.log(delphine.location);
console.log(joey.favLanguage);
console.log(lulu.gender);
console.log(lulu.catchPhrase);
console.log(lulu.specialty);
console.log(joey.catchPhrase);


//WooooHooooo I love this stuff!