// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`; 
    }
}

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} received a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(stuOptions) {
    super(stuOptions);
    this.previousBackground = stuOptions.previousBackground;
    this.className = stuOptions.className;
    this.favSubject = stuOptions.favSubject;
    this.grade = stuOptions.grade;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubject.length; i++) {
            console.log(this.favSubject[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmOptions) {
        super(pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const Fred = new Person ({
    name: 'Fred',
    age: 35,
    location: 'LA',
    gender: 'M'
  })
//   console.log(Fred)
//   Fred.speak()


  const Josh = new Instructor ({
    name: 'M',
    age: 30,
    location: 'UT',
    gender: 'M',
    specialty: 'WebDev',
    favLanguage: 'JS',
    catchPhrase: 'chomp at the bit'
  })
// console.log(Josh);
// Josh.demo('Javascript');


const Jurgen = new Student ({
    name: 'Jurgen',
    age: 25, 
    location: "Toronto", 
    gender: 'M',
    grade: 70,
    previousBackground: 'FreeCodeCamp',
    className: 'CS12', 
    favSubject: ['Javascript', 'CSS', 'HTML']
})
// console.log(Jurgen)
// Jurgen.PRAssignment('JS IV')
// Josh.grade(Jurgen,'JS')
// Jurgen.sprintChallenge('JS')


const Nathan = new ProjectManager ({
    name: 'Nathan',
    age: 25,
    location: 'East Coast',
    gender: 'M',
    specialty: 'WebDev',
    favLanguage: 'JS',
    catchPhrase: 'You do your homework?'
})
// console.log(Nathan)
// Nathan.standUp('CS12')
// Nathan.debugsCode(Jurgen, 'JS')
Jurgen.listsSubjects();