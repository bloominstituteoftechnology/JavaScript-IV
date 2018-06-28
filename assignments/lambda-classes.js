// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
    }
  }

class Instructor extends Person {
  constructor(InsAttr) {
    super(InsAttr);
    this.specialty = InsAttr.specialty;
    this.favLanguage = InsAttr.favLanguage;
    this.catchPhrase = InsAttr.catchPhrase;
    }

  demo (subject) {
    return `Today we are learning about ${subject}.`;
    }

  grade (subject) {
    return `${this.name} receives a perfect score on ${subject}`;
    }
  }

class Student extends Person {
  constructor(StuAttr) {
    super(StuAttr);
    this.previousBackground = StuAttr.previousBackground;
    this.className = StuAttr.className;
    this.favSubjects = StuAttr.favSubjects;
    }

  listsSubjects (this.favSubjects) {
    this.favSubjects.forEach(x => console.log(x));
    }

  PRAssignment (subject) {
    return `${this.name} receives a perfect score on ${subject}`;
    }

  sprintChallenge (subject) {
    return `${this.name} has begun their sprint challenge on ${subject}`
    }
  }
