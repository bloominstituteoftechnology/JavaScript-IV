// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

  const john = new Person({
    name: 'John',
    location: 'Bedrock',
    age: 19,
    gender: 'male',
  });

  const danielle = new Person({
    name: 'Danielle',
    location: 'Bedrock',
    age: 22,
    gender: 'female',
  });

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
    gradeStudent(student) {
        if(Math.floor(Math.random() * 2) === 0) {
            // Add
            return student.grade += Math.floor((Math.random() * 10) + 1);
        } else {
            // Subtract
            return student.grade -= Math.floor((Math.random() * 10)) + 1;
        }
    }
}

  const brandon = new Instructor({
    name: 'Brandon',
    location: 'Bedrock',
    age: 20,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: `Don't forget the homies`
  });

  const nick = new Instructor({
    name: 'Nick',
    location: 'Bedrock',
    age: 18,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
        this.grade = studentOptions.grade;
    }
    listSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
        if(this.grade >= 70) {
            return `Congratulations! You graduated Lambda School with a grade of ${this.grade}!`;
        } else {
            return `Unfortunately, you failed to graduate from Lambda School with a score of ${this.grade}..`;
        }
    }
}

const janet = new Student({
    name: 'Janet',
    location: 'Bedrock',
    age: 22,
    gender: 'female',
    previousBackground: 'gamer',
    className: 'CS-11',
    favSubjects: ['HTML, CSS, C++'],
    grade: 70
  });

  const jane = new Student({
    name: 'Jane',
    location: 'Bedrock',
    age: 33,
    gender: 'female',
    previousBackground: 'worker',
    className: 'CS-11',
    favSubjects: ['C#, .NET'],
    grade: 70
  });

class ProjectManagers extends Instructor {
    constructor(pmOptions) {
        super(pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const chris = new ProjectManagers({
    name: 'Chris',
    location: 'Bedrock',
    age: 20,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS-4',
    favInstructor: 'Josh'
  });

  const josh = new ProjectManagers({
    name: 'Josh',
    location: 'Bedrock',
    age: 25,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Front-End',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS-2',
    favInstructor: 'Ian'
  });

console.log(john.gender);
console.log(danielle.name);
console.log(danielle.speak());

console.log(brandon.demo('JavaScript-V'));
console.log(nick.grade(janet, 'JavaScript-V'));

console.log(janet.listSubjects());
console.log(jane.PRAssignment('JavaScript-III'));
console.log(janet.sprintChallenge('JavaScript'));

console.log(chris.standUp('CS-11'));
console.log(josh.debugsCode(brandon, 'JavaScript'));

brandon.gradeStudent(janet);
console.log(janet.graduate());

