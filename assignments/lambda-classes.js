// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender; 
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
} // end of Person

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo (subject) {
        // console.log(`Today we are learing about ${subject}.`);
        return `Today we are learning about ` + subject + `.`;
    }
    grade (student, subject) {
        // console.log(student + ` recieves a perfect score on ` + subject);
        // return student + ` receives a perfect score on ` + subject + `.`;
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    randomizedMath () {

    }
}

class Student extends Person {
    constructor(studentProps) {
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
    }
    listsSubjects () {
        return `${this.favSubjects};`
        // console.log(`${this.favSubjects}`);
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
        // console.log(`${this.name} has submitted a PR for ` + subject + `.`);
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
        // console.log(`${this.name} has begun sprint challnge on ` +subject);
    }
    graduate () {
        if (this.grade >= 70) {
            return `${this.name} is able to graduate!`;  
        } else {
            return `${this.name} is NOT able to graduate!`;  
        }   
    } /// end of graduate() method
} // end of student

class ProjectManager extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradeClassName = pmProps.gradeClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
        // console.log(`${this.name} announces to ` + channel + `, @channel standy times!`);
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
        // console.log(`${this.name} debugs  ` + x + `'s code on ` + subject);
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

const bryce = new Student({
    name: 'Bryce',
    location: 'South Jordan',
    age: 35,
    gender: 'male',
    previousBackground: 'Teacher',
    className: "CS 12",
    favSubjects: ['HTML','CSS'],
    grade: 70,
  });

  const ben = new ProjectManager({
    name: 'Ben',
    location: 'California',
    age: 24,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the students`,
    gradeClassName: 'CS 9',
    favInstructor: 'Josh',
  });

  console.log(fred.name);
  console.log(fred.location);
  console.log(bryce);
  console.log(fred.speak());
  console.log(fred.demo('JS'));
  console.log(fred.grade(bryce, 'CSS'));
  console.log(bryce.listsSubjects());
  console.log(bryce.PRAssignment('HTML'));
  console.log(bryce.sprintChallenge('Bootstrap'));
  console.log(ben.standUp('CS12'));
  console.log(ben.debugsCode(bryce, 'Javascript'));
  console.log(bryce.graduate());