// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
      this.gender = attributes.gender;
      this.age = attributes.age;
      this.name = attributes.name;
      this.location = attributes.location;
    }
    speak() {
      return `Hello, my name is ${this.name},  I am from ${this.location}`;
    }
}
  

class Instructor extends Person {
    constructor(attributes) {
      super(attributes);
      this.specialty = attributes.specialty;
      this.favLanguage = attributes.favLanguage;
      this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects(){
        return this.favSubjects;        
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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

  
const joe = new Person({
    name: 'Joe',
    age: 37,
    location: 'Bedrock',
    gender: 'female'
});  

const studentA = new Student ({
    name: 'Joe',
    age: 37,
    location: 'Bedrock',
    gender: 'female',
    previousBackground: 'skydiver',
    className: 'CS0132',
    favSubjects: ['js', 'python', 'c', 'css'],
})


console.log(joe);
console.log(fred);

console.log(studentA)