// CODE here for your Lambda Classes

class Person {
    constructor(characteristics) {
      this.name = characteristics.name;
      this.age = characteristics.age;
      this.location = characteristics.location;
      this.gender = characteristics.gender;
    }
    speak () {
      return `Hello my is ${this.name}, I am from ${this.location} .`;
    }
  }// end of Person


  class Instructor extends Person{
    constructor(superPowers) {
        super(superPowers);
        this.specialty = superPowers.specialty;
        this.favLanguage = superPowers.favLanguage;
        this.catchPhrase = superPowers.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning ${subject}.`;
    }
    grade (studentObject, subject) { // STILL MISSING STUDENT OBJECT==========================
        return `${this.name} receives a perfect score on ${subject}`;
    }
  }// end of Instructor


  class Student extends Person {
    constructor(skills) {
        super(skills);
        this.previousBackground = skills.previousBackground;
        this.className = skills.className;
        this.favSubjects = skills.favSubjects;
    }
    listsSubjects () {
        // LOGS OUT ALL OF THE STUDENTS FAVORITES SUBJECTS, ONE BY ONE.=======================
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}// end of Student


class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp () {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode () { // STILL MISSING STUDENT OBJECT ========================================
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  console.log(fred.demo('JavaScript')); // Today's date