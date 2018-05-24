// CODE here for your Lambda Classes
class Person {
    constructor(personStats) {
        this.name = personStats.name;
        this.age = personStats.age;
        this.location = personStats.location;
        this.gender = personStats.gender;
    }
    speak() {
       return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorStats) {
        super(instructorStats);
        this.specialty = instructorStats.specialty;
        this.favLanguage = instructorStats.favLanguage;
        this.catchPhrase = instructorStats.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    } 
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    graduate(student) {
        
        if (this.grade > 70) {
            return 'You have graduated!';
        } else {
            return 'You have failed!';
        }
    }
}

class Student extends Instructor {
    constructor(studentStats) {
        super(studentStats);
        this.previousBackground = studentStats.previousBackground;
        this.className = studentStats.className;
        this.favSubjects = studentStats.favSubjects;
        this.grade = studentStats.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has submitted a PR for {subject}`;
    }
}

class ProjectManager extends Student {
    constructor(PMstats) {
        super(PMstats);
        this.gradClassName = PMstats.gradClassName;
        this.favInstructor = PMstats.favInstructor;
    }
    standUp(channel){
        return `${this.name} announced to ${channel}, @channel standup time!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${this.name}'s code on ${subject}`;
    }
}

const lily = new Person({
    name: 'Lily',
    location: 'Atlanta',
    age: 23,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `All about the back-end`
  });

const george = new Instructor({
    name: 'George',
    location: 'Salt Lake City',
    age: 47,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Born and raised in Utah`
});

const mark = new Student({
    name: 'Mark',
    location: 'San Diego',
    age: 21,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I hate Javascript`,
    previousBackground: `Hack Reactor`,
    className: 'HR14',
    favSubjects: ['Math', 'Economics', 'Politics'],
    grade: Math.floor(Math.random())
  });

  const stephanie = new ProjectManager({
    name: 'Stephanie',
    location: 'Phoenix',
    age: 29,
    gender: 'female',
    favLanguage: 'Go',
    specialty: 'Full-stack',
    catchPhrase: `Learning programming since I was 14`,
    gradClassName: 'HR10',
    favInstructor: 'Mike'
  });

  console.log(lily.name);
  console.log(lily.speak());
  console.log(george.favLanguage);
  console.log(george.demo('math'));
  console.log(george.grade(george, 'math'));
  console.log(mark.className);
  console.log(mark.favSubjects);
  console.log(mark.PRAssignment('math'));
  console.log(mark.sprintChallenge());
  console.log(stephanie.gradClassName);
  console.log(stephanie.standUp('random'));
  console.log(stephanie.debugsCode('mark', 'economics'));

  // Stretch


  