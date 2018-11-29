// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about {subject}`;
    };
    grade(subject) {
        return `${this.name} receives a perfect score on {subject}`;
    };
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for {subject}`;
    };
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on {subject}`;
    };
}

class ProjectManager extends Instructor {
    constructor(projectmanagerAttributes) {
        super(projectmanagerAttributes);
        this.gradClassName = projectmanagerAttributes.gradClassName;
        this.favInstructor = projectmanagerAttributes.favInstructor;
    }
}


  const josh = new Instructor({
    name: 'Josh',
    location: 'Pheonix',
    age: 34,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Isn't that awesome guys?`
  });

  const dustin = new Instructor({
    name: 'Dustin',
    location: 'San Diego',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `It's in the training kit`
  });

  const megan = new Student({
    name: 'Megan',
    location: 'Austin',
    age: 32,
    gender: 'female',
    previousBackground: 'Vape Industry',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const sam = new Student({
    name: 'Sam',
    location: 'Colorado Springs',
    age: 37,
    gender: 'male',
    previousBackground: 'Medical',
    className: 'FSW16',
    favSubjects: ['CSS', 'HTML']
  });

  const norman = new Student({
    name: 'Norman',
    location: 'White Pine Bay',
    age: 22,
    gender: 'male',
    previousBackground: 'Motel business',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const david = new ProjectManager({
    name: 'David',
    location: 'Denver',
    age: 34,
    gender: 'male',
    gradClassName: 'CS9',
    favInstructor: 'Dustin',
  });

 /* const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    gradClassName: 'CS6',
    favInstructor: 'Josh',
  });
*/
  console.log(megan.speak());