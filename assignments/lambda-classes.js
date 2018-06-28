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
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
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
        return this.favSubjects.join(' , ');
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
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
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

const luis = new Student({
    name: 'Luis',
    location: 'San Diego',
    age: 27,
    gender: 'male',
    previousBackground: 'Civil Engineer',
    className: 'CS-12',
    favSubjects: [
        "HTML",
        "Bootstrap"
    ]
});

const ray = new ProjectManager({
    name: 'Ray',
    location: 'Los Angeles',
    age: 31,
    gender: 'male',
    gradClassName: 'CS-06',
    favInstructor: 'Fred',
});

const fernando = new Student({
    name: 'Fernando',
    location: 'Mexico',
    age: 25,
    gender: 'male',
    previousBackground: 'Sales',
    className: 'CS-10',
    favSubjects: [
        "HTML",
        "Bootstrap",
        "LESS",
        "JavaScript"
    ]
});

const steve = new Instructor({
    name: 'Steve',
    location: 'New York',
    age: 45,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `DAMN!`
});

const lilly = new ProjectManager({
    name: 'Lilly',
    location: 'Canada',
    age: 28,
    gender: 'female',
    gradClassName: 'CS-02',
    favInstructor: 'Steve',
});


console.log(fred.demo('JavaScript'));
console.log(luis.listsSubjects());
console.log(ray.standUp('Channel CS12'));
console.log(fernando.PRAssignment('JavaScript'));
console.log(steve.catchPhrase);
console.log(steve.grade(fernando, 'JavaScript'));
console.log(lilly.debugsCode(fernando, 'HTML'));