// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]} and ${this.favSubjects[2]}.`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;    
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
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

  const jim = new Student({
    name: 'Jim',
    location: 'New York',
    age: 25,
    gender: 'male',
    previousBackground: 'Wall Street',
    className: 'CS100',
    favSubjects: ['C++', 'Ruby', 'Go'],
  });

  const john = new ProjectManager({
    name: 'John',
    location: 'Los Angeles',
    age: 30,
    gender: 'male',
    favLanguage: 'Haskell',
    specialty: 'Functional programming languages',
    catchPhrase: `Always forget the homies`,
    gradClassName: 'CS1',
    favInstructor: 'Fred',
  });

  console.log(fred)
  console.log(jim)
  console.log(john)
  console.log(fred.speak())
  console.log(jim.speak())
  console.log(john.speak())
  console.log(fred.demo('JavaScript'))
  console.log(fred.grade(jim, 'JavaScript'))
  console.log(jim.listsSubjects())
  console.log(jim.PRAssignment('JavaScript'))
  console.log(jim.sprintChallenge('JavaScript'))
  console.log(john.standUp("general"))
  console.log(john.debugsCode(jim, 'JavaScript'))