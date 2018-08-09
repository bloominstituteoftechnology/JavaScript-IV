// Create classes
class Person  {
  constructor(info) {
    this.name = info.name;
    this.location = info.location;
    this.age = info.age;
    this.gender = info.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorInfo) {
    super(instructorInfo);
    this.specialty = instructorInfo.specialty;
    this.favLanguage = instructorInfo.favLanguage;
    this.catchPhrase = instructorInfo.catchPhrase;
  }
  demo(subject)  {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person  {
  constructor(studentInfo)  {
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject)  {
    return `${this.name} has begun sprint challenge on ${subject}`;
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

const caleb = new Student({
  name: 'Caleb',
  location: 'Hometown',
  age: 24,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Goodness gracious! Gee wilikers`,
  previousBackground: 'Pizza Hut General Manager',
  className: 'CS13',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});
console.log(fred.name);
console.log(fred.speak());
console.log(fred.demo('math'));
console.log(caleb.age);
caleb.listsSubjects();
console.log(caleb.PRAssignment('JavaScript'));
console.log(caleb.sprintChallenge('HTML'))
