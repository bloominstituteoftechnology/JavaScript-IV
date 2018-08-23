// CODE here for your Lambda Classes
class Person {
  constructor (person_attributes) {
    this.name = person_attributes.name;
    this.age = person_attributes.age;
    this.location = person_attributes.location;
    this.gender = person_attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person{
  constructor (instructor_attributes){
    super(instructor_attributes);
    this.specialty = instructor_attributes.specialty;
    this.favLanguage = instructor_attributes.favLanguage;
    this.catchPhrase = instructor_attributes.catchPhrase;
}
  demo (subject) {
    return `Today we are learning about ${subject}`;
  }
  grade (studentObj, subject) {
    return `${studentObj.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor (student_attributes) {
    super(student_attributes);
    this.previousBackground = student_attributes.previousBackground;
    this.classname = student_attributes.classname;
    this.favSubjects = student_attributes.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach(function(element){
      console.log(`${element}\n`);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}


class ProjectManager extends Instructor {
  constructor (projectManager_attributes) {
    super(projectManager_attributes);
    this.gradClassName = projectManager_attributes.gradClassName;
    this.favInstructor = projectManager_attributes.favInstructor;
  }
  standUp (slackChannel){
    return `${this.name} announces to ${slackChannel}, at @channel standy times!`;
  }
  debugsCode (studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
  }
}

const joeI = new Instructor({
  name: 'Joe',
  age: 35,
  location: 'Austin',
  gender: 'male',
  specialty: 'algorithms',
  favLanguage: 'JavaScript',
  catchPhrase: 'just Google it'
});

const maryI = new Instructor({
  name: 'Mary',
  age: 32,
  location: 'Seattle',
  gender: 'female',
  specialty: 'data science',
  favLanguage: 'Python',
  catchPhrase: 'look in the data'
});

const samS = new Student({
  name: 'Sam',
  age: 25,
  location: 'Denver',
  gender: 'female',
  previousBackground: 'cashier',
  classname: 'iOS programming',
  favSubjects: ['math', 'science', 'art']
});

const mikeS = new Student({
  name: 'Mike',
  age: 34,
  location: 'Cupertino',
  gender: 'male',
  previousBackground: 'bouncer',
  classname: 'Python programming',
  favSubjects: ['history', 'politics', 'cage fighting']
});

const kenPM = new ProjectManager({
  name: 'Ken',
  age: 38,
  location: 'Denver',
  gender: 'male',
  specialty: 'UX',
  favLanguage: 'JavaScript',
  catchPhrase: 'I love StackOverflow',
  gradClassName: 'CS1',
  favInstructor: 'Mary'
});

const cathyPM = new ProjectManager({
  name: 'Cathy',
  age: 34,
  location: 'Chicago',
  gender: 'female',
  specialty: 'Full Stack Development',
  favLanguage: 'JavaScript',
  catchPhrase: 'Lambda Rules',
  gradClassName: 'CS101',
  favInstructor: 'Mike'
});

console.log(joeI.name);
console.log(maryI.specialty);
console.log(joeI.speak());
console.log(joeI.demo('Front-End Development'));
console.log(maryI.grade(mikeS, 'Web Security'));
console.log(samS.favSubjects);
console.log(samS.listSubjects());
console.log(mikeS.PRAssignment('history of objects'));
console.log(samS.sprintChallenge('JavaScript IV'));
console.log(kenPM.name);
console.log(kenPM.speak());
console.log(cathyPM.catchPhrase);
console.log(cathyPM.standUp('hired'));
console.log(cathyPM.debugsCode(samS, 'recursion'));