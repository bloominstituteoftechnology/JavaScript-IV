class Person {
    constructor (attributes) { 
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I'm from ${this.location}.`;
    } 
}

class Instructor extends Person {
    constructor (instAttributes) { 
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
      }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    } 
    grade (studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    } 
}

class Student extends Person {
    constructor (studentAttributes) { 
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
      }
    listsSubjects () {
        return this.favSubjects;
    } 
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    } 
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    } 
}

class ProjectManager extends Instructor {
    constructor (pmAttributes) { 
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
      }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    } 
    debugsCode (studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    } 
}

const terrance = new Instructor({
    name: 'Terrance',
    location: 'Canada',
    age: 32,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Back-end',
    catchPhrase: `I'm not your buddy friend.`
  });

  const eric = new Student({
    name: 'Eric',
    location: 'South Park',
    age: 8,
    gender: 'male',
    previousBackground: 'Just graduated 3rd grade',
    className: 'Full-Stack Web Dev',
    favSubjects: ['Recess', 'Video Games', 'A-hole 101']
  });

  const al = new ProjectManager({
    name: 'Al Gore',
    location: 'Washington DC',
    age: 70,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Full-Stack',
    catchPhrase: `ManBearPig is half man, half bear, and half pig.`,
    gradClassName: 'CS12',
    favInstructor: 'Josh (of course)'
  });
