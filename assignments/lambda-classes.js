// CODE here for your Lambda Classes

//PERSON CODE

function Person(personAttributes)  {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
    this.speak = function () {
        console.log(`Hello my name is ${name}, I am from ${location}`);};
  };

function Instructor(personAttributes)  {
    Person.call(this, personAttributes);
    this.specialty = personAttributes.specialty;
    this.favLanguage = personAttributes.favLanguage;
    this.catchPhrase = personAttributes.catchPhrase;
    this.gradeStudent = function (student) {
        student.grade = Math.floor(Math.random() * 101);
        console.log(`${this.name} graded ${student.name}'s assignment!`);
    };
    this.demo = function (subject) {
        console.log(`Today we are learning about ${subject}`)};
    this.grade = function (student, subject) {
        console.log(`${student} recieves a perfect score on ${subject}.`)};
  };

function Student(personAttributes)  {
    Person.call(this, personAttributes);
    this.previousBackground = personAttributes.previousBackground;
    this.className = personAttributes.className;
    this.favSubjects = personAttributes.favSubjects;
    this.grade = 50;
    this.graduate = function () {
        if(this.grade > 70){
            console.log(`${this.name} is ready to graduate!`);
        }
        else {
            console.log(`${this.name} is not ready to graduate, maybe they could use more tutoring.`)
        };
    };
    this.listsSubjects = function (favSubjects) {
        favSubjects.forEach(function(element) {
            console.log(element);
          });
    this.PRAssignment = function (name, subject) {
        console.log(`${name} has submitted a PR for ${subject}.`)};
    };
    this.sprintChallenge = function (name, subject) {
        console.log(`${name} has begun sprint challenge on ${subject}.`)};
    };

function ProjectManager(personAttributes)  {
    Instructor.call(this, personAttributes);
    this.gradClassName = personAttributes.gradClassName;
    this.favInstructor = personAttributes.favInstructor;
    this.standUp = function (name, channel) {
        console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`)};
    this.standUp = function (name, student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}​​​​​`)};
    };

//PERSON OBJECTS

const Jake = new Instructor({
    name: 'Jake',
    location: 'Phoenix, Arizona',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Be cool, stay in school!`
  });

  const Jess = new Student({
    name: 'Jess',
    location: 'Boston, Massachusetts',
    age: 26,
    gender: 'female',
    previousBackground: 'Underwater Basket Weaver',
    className: 'CSPT2',
    favSubjects: ['CSS', 'Javascript', 'HTML'],
  });

  const Jun = new ProjectManager({
    name: 'Jun',
    location: 'Orlando, Florida',
    age: 30,
    gender: 'non-binary',
    gradClassName: 'CS5',
    favInstructor: 'Jake',
  });

  console.log(Jake);
  console.log(Jess);
  console.log(Jun);

  console.log(Jess.grade);
  while (Jess.grade < 70) {
    Jake.gradeStudent(Jess);
    console.log(Jess.grade);
    Jess.graduate();
  }