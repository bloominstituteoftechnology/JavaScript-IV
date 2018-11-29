// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    addGrade(student){
        const rando = Math.floor(Math.random() * 2);
        const addedGrade = Math.floor(Math.random() * 10);
        if(rando){
            student.grade += addedGrade;
        } else {
            student.grade -= addedGrade;
        }
            console.log(`${student.name}'s new grade is ${student.grade}`);
            student.graduate();
        
    }
}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    listSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate(){
        if(this.grade >= 70){
            console.log(`${this.name} is ready to graduate!`);
        } else {
            console.log(`Keep trying! you need ${70 - this.grade} more points to graduate!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}: @channel standy times!`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
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

  const brannan = new Student({
    name: 'Brannan',
    location: 'Chambana',
    age: 33,
    gender: 'male',
    previousBackground: 'Tutorial hell',
    className: 'FSW16',
    favSubjects: ['Hypnotized by everything', 'Cloud Technology', 'JavaScript'],
    grade: 97
  });

  const badStudent = new Student({
    name: 'Chad',
    location: 'Buffalo',
    age: 23,
    gender: 'male',
    previousBackground: 'Goffing off',
    className: 'FSW16',
    favSubjects: ['Skateboarding', 'Fortnite', 'CSS'],
    grade: 60
  });

  const bob = new ProjectManager({
    name: 'Bob',
    location: 'The Sun',
    age: 37,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Full on hacker',
    catchPhrase: `Mess with the best, die like the rest!`,
    gradClassName: 'CS2',
    favInstructor: 'Josh'
  });

  fred.demo('Test Subject');
  fred.grade(brannan, 'A subject');
  fred.speak();

  brannan.listSubjects();
  brannan.PRAssignment('A subject');
  brannan.sprintChallenge('A different subject');
  brannan.speak();

  bob.standUp('FSW16');
  bob.debugsCode(brannan, 'coding in general');

  console.log(brannan.grade);
  bob.addGrade(brannan);
  fred.addGrade(brannan);

  bob.addGrade(badStudent);
  fred.addGrade(badStudent);

  while(badStudent.grade < 70){
      bob.addGrade(badStudent);
  }