// CODE here for your Lambda Classes
class Person {
    constructor(personInfo) {
      this.name = personInfo.name;
      this.age = personInfo.age;
      this.location = personInfo.location;
      this.gender = personInfo.gender;
      
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
      super(instructorInfo);
      this.specialty = instructorInfo.specialty;
      this.favLanguage = instructorInfo.favLanguage;
      this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
      console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
  }

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.previousBackground;
        this.favSubjects = studentInfo.favSubjects;
    }

    listsSubjects() {

    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenege(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
    
}

const instructorBobby = new Instructor({
    name: 'Bobby',
    age: 31,
    location: 'Canada',
    gender: 'M',
    specialty: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'YEET'
})

const studentPam = new Student({
    name: 'Pam',
    age: 21,
    location: 'U.S',
    gender: 'F',
    previousBackground: 'University of Somewhere',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})

const pmJohn = new ProjectManager({
    name: 'John',
    age: 23,
    location: 'U.S',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'Sheep sleep',
    gradClassName: 'CS13',
    favInstructor: 'Bobby'
})

