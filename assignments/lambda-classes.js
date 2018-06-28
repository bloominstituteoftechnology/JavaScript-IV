// CODE here for your Lambda Classes
class Person {
    constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this. gender = props.gender;
    }
    speak () {
    return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(iProps){
        super(iProps);
        this.specialty = iProps.specialty;
        this.favLanguage = iProps.favLanguage;
        this.catchPhrase = iProps.catchPhrase;
    }
    demo(subject) {
        return `Today we're learning about ${subject}`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person {
    constructor(sProps) {
        super(sProps);
        this.previousBackground = sProps.previousBackground;
        this.className = sProps.className
        this.favSubjects = sProps.favSubjects
    }

    listsSubjects () {
        return this.favSubjects.join(' ');
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge for ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pProps) {
        super(pProps);
        this.gradClassName = pProps.gradClassName
        this.favInstructor = pProps.favInstructor
    }
   standup(channel) {
      return `${this.name} announces to ${channel}, @${channel} standup times!`
    }
    debugsCode(student, subject) {
      return  `${this.name} debugs ${student.name}'s code on ${subject}`
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

  const BamBam = new Student({
    name: 'BamBam',
    location: 'Bedrock',
    age: 1,
    gender: 'male',
    previousBackground: 'Clubbing',
    favSubjects: ['rock', 'club', 'hit'],
    className: 'CS-100000'
  });

  const george = new ProjectManager({
    name: 'George',
    location: 'Above the clouds',
    age: 40,
    gender: 'male',
    favLanguage: 'That one',
    specialty: 'Yes',
    catchPhrase: `Honh honh honh`,
    gradClassName: `CS 100000`,
    favInstructor: 'Fred',
  });

  console.log(BamBam.sprintChallenge('bam'));
  console.log(BamBam.PRAssignment('ok'));
  console.log(BamBam.listsSubjects());
  console.log(fred.demo('mammoth hunting'));
  console.log(fred.grade(BamBam, 'Thinking'));
  console.log(fred.speak());
  console.log(george.standup('Stump'))
  console.log(george.debugsCode(BamBam, 'Sledding'));