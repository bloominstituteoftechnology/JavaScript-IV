let webDevTopics = ['UI and Responsive Design', 'Web Tools and Frameworks', 'JavaScript', 'Applied JavaScript']
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject, didWell) {
        if (didWell) {
            return `${student.name} did a great job on the ${subject} assignment! ` + this.adjustGrade(student, true);
        } else {
            return `${student.name} needs some more practice with ${subject}. ` + this.adjustGrade(student, false);
        }
        
    }
    adjustGrade(student, increaseGrade) {
        if (increaseGrade) {
            student.grade += Math.round(Math.random() * 5)+ 1;
            if (student.grade >= 100) {
                return `${student.name}'s grade has been increased to ${student.grade}` + student.graduate();
            } else {
                return `${student.name}'s grade has been increased to ${student.grade}`;
            }
        } else {
            student.grade -= Math.round(Math.random() * 5) + 1;
            return `${student.name}'s grade has been decreased to ${student.grade}`;
        }
        
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        return this.favSubjects.join(", ");
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated!`;
        } else {
            return `Sorry, ${this.name} still has work to do before they can graduate.`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

  const josh = new Instructor({
    name: 'Josh',
    location: 'Provo',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `DRY`
  });

  const nathan = new ProjectManager({
    name: 'Nathan',
    location: 'SomeTown',
    age: 25,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Awesome job today`,
    gradClassName: 'CS4',
    favInstructor: 'josh'
  });

  const kate = new ProjectManager({
    name: 'Kate',
    location: 'NYC',
    age: 26,
    gender: 'female',
    favLanguage: 'Javascript',
    specialty: 'UI',
    catchPhrase: `Don't repeat yourself!`,
    gradClassName: 'CS3',
    favInstructor: 'josh'
  });

  const lauren = new Student({
    name: 'Lauren',
    location: 'Seattle',
    age: 24,
    gender: 'female',
    previousbackground: 'Java and swift',
    className: 'CS12',
    favSubjects: ['JavaScript', 'CSS', 'BootStrap'],
    grade: 90
  });

  const percy = new Student({
    name: 'Percy',
    location: `Lauren's house`,
    age: 3,
    gender: 'male',
    previousbackground: 'being a cat',
    className: 'CS12',
    favSubjects: ['meowing', 'purring', 'cuddling'],
    grade: 100
  });

  console.log(fred.speak());
  console.log(nathan.speak());
  console.log(lauren.speak());

  console.log(fred.demo('BootStrap'));
  console.log(josh.grade(lauren, 'JavaScript', true));
  console.log(nathan.grade(lauren, 'UI', false));
  console.log(percy.listsSubjects());
  console.log(lauren.PRAssignment('BootStrap'));
  console.log(lauren.sprintChallenge('JavaScript'));
  console.log(lauren.graduate());

  console.log(kate.standUp('CS_12'));
  console.log(nathan.debugsCode(lauren, 'UI'));
  
