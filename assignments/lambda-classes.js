// CODE here for your Lambda Classes

// Base Class

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;               
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`        
    }
}

// Instructors Class

class Instructors extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, topic) {
        return `​​​${student} receives a perfect score on ${topic}​​​.`
    }
}

const josh = new Instructors({
    name: 'Josh',
    age: 37,
    location: 'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

console.log(josh);  
console.log(josh.demo('React'));    
console.log(josh.grade('Dante', 'SQL'));

const diandra = new Instructors({
    name: 'Diandra',
    age: 25,
    location: 'Bedrock',
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(diandra);  
  console.log(diandra.demo('CSS'));    
  console.log(diandra.grade('Bel', 'JavaScript'));  

// Students Class

class Students extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(favoriteSubjects) {
        return `${favoriteSubjects}`;
    }
    PRAssignment(name, subject) {
        return `${name} has submitted a PR for ${subject}`;     
    }
    sprintChallenge() {
        return `student.name has begun spring challenge on {subject}`;
    }
}

const dil = new Students({
    name: 'Dil',
    age: 25,
    location: 'Bedrock',
    gender: 'Female',
    previousBackground: 'Student',
    className: 'CS12345',
    favSubjects: `['HTML', 'CSS', 'JavaScript']`
  });

console.log(dil);
console.log(dil.listsSubjects('Machine Learning, Calculus, Computer Architecture'));
console.log(dil.PRAssignment('Dil', 'UI Responsiveness'));

const dante = new Students({
    name: 'Dante',
    age: 35,
    location: 'Bedrock',
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

console.log(dante);
console.log(dante.listsSubjects('Machine Learning, Calculus, Computer Architecture'));
console.log(dante.PRAssignment('Dante', 'UI Responsiveness'));

// Project Managers Class

// class ProjectManagers extends Instructors {
//     constructor(projectManagerAttributes) {
//         super(projectManagerAttributes);
//         this.gradClassName = projectManagerAttributes.gradClassname;
//         this.favInstructor = projectManagerAttributes.favInstructor;
//     }
//     standUp() {
//         return `{this.name} announces to {channel}, @channel standy times!​​​​​`
//     }
//     debugsCode(studentName, subject) {
//         return `${​this.name} debugs ${studentName} code on ${subject}.`
//     }
// }

class ProjectManagers extends Instructors {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} standy times!​​​​​`
    }
    debugsCode(student, subject) {
        return `​​​${this.name} debugs ${student}'s code on ${subject}.`
    }
}

const dre = new ProjectManagers({
    name: 'Dre-Sean',
    age: 25,
    location: 'Bedrock',
    gender: 'Male',
    specialty: 'JavaScript',
    language: 'JavaScript',
    catchPhrase: 'Yeah',
    gradClassName: 'CS5',
    favInstructor: 'Josh'
  });

console.log(dre);
console.log(dre.gradClassName);
console.log(dre.favInstructor);
console.log(dre.standUp('Dre', 'CS10 Channel'));
console.log(dre.debugsCode('Dante','Classes'));

const moises = new ProjectManagers({
    name: 'Moises',
    age: 26,
    location: 'Bedrock',
    gender: 'Male',
    specialty: 'JavaScript',
    language: 'JavaScript',
    catchPhrase: 'Yeah',
    gradClassName: 'CS8',
    favInstructor: 'Nelson'
  });

console.log(moises);
console.log(moises.gradClassName);
console.log(moises.favInstructor);
console.log(moises.standUp('Moises', 'CS05 Channel'));
console.log(moises.debugsCode('Dante','Classes'));