class Person {
    constructor(attributes){
        this.age = attributes.age;
        this.name = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
class Instructor extends Person{
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(subject) {
        return `${this.name} receives a perfect scaore on ${subject}.`
    }
}
class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(name, subject){
        `${name} debugs ${student.name}'s code on ${subject}.`
    }
}

class Student extends Instructor {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects() {
        return this.favSubjects;
    }
    PRAsignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Lambda',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const tim = new Instructor({
    name: 'Tim',
    location: 'Atlanta',
    age: 65,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Cookies are my favorite!`
  });
  const cook = new ProjectManager({
    name: 'Cook',
    location: 'Austin',
    age: 22,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Oh yeahhhhh!`,
    gradClassName: 'FSW04',
    favInstructor: 'Tim'
  });
  const alex = new ProjectManager({
    name: 'Alex',
    location: 'San Antonio',
    age: 37,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'UI',
    catchPhrase: `I'm not sure how I got here?`,
    gradClassName: 'FSW02',
    favInstructor: 'Myers'
  });
  const jon = new Student({
    name: 'Jon',
    location: 'Dallas',
    age: 12,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'UI',
    catchPhrase: `I love Lambda!`,
    previousBackground: 'Military',
    className: 'FSW14',
    favSubjects: 'unsure'
  });
  const jim = new Student({
    name: 'Jim',
    location: 'Kentucky',
    age: 19,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Android-dev',
    catchPhrase: `I love Lambda!`,
    previousBackground: 'Doctor',
    className: 'FSW14',
    favSubjects: 'reading'
  });


console.log(jim.PRAsignment('reading'));
console.log(jim.favSubjects);


