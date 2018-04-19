// CODE here for your Lambda Classes


class Person {
    constructor(traits) {
        this.name = traits.name;
        this.age = traits.age;
        this.location = traits.location;
        this.gender = traits.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor(instructorTraits) {
        super(instructorTraits);
        this.specialty = instructorTraits.specialty;
        this.favLanguage = instructorTraits.favLanguage;
        this.catchPhrase = instructorTraits.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject) {
        // return `${this.student.name} receives a perfect score on ${this.variables​​​​​}`;
        return this.student.name + ' receives a perfect score on ' + this.variables;
        }
}


class Student extends Person {
    constructor(studentTraits) {
        super(studentTraits);
        this.previousBackground = studentTraits.previousBackground;
        this.className = studentTraits.className;
        this.favSubjects = studentTraits.favSubjects;
    }
    listsSubjects() {
        
    }
    PRAssignment(subject) {
        return `${this.student.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge(subject) {
        return `${Student.name} has begun sprint challenge on ${Student.favSubjects}`;
    }
}



class ProjectManagers extends Instructor {
    constructor(managerTraits) {
        super(managerTraits);
        this.gradClassName = managerTraits.gradClassName;
        this.favInstructor = managerTraits.favInstructor;
    }
    standUp(channel) {
        // return `${this.name} announces to ${this.channel}, @channel standy times!`​​​​​;
        return this.name + ' announces to ' + this.channel + ', @channel standy times!';
    }
    debugsCode(student, subject) {
        // return `${this.​​​​​name} debugs ${this.student.name}'s code on ${this.subject}.`;
        return this.name + ' debugs ' + this.student.name + '\'s code on ' + this.subject;
    }
}

const josh = new Instructor({
      name: 'Josh',
      location: 'Orem',
      age: 35,
      gender: 'male',
      favLanguage: 'JavaScript',
      specialty: 'Front-end',
      catchPhrase: `Good morning Lambda School!`
    });

const bob = new Instructor({
      name: 'Bob',
      location: 'San Francisco',
      age: 80,
      gender: 'female',
      favLanguage: 'SQL',
      specialty: 'Relational Databases',
      catchPhrase: `What's up ma bruthas?!`
    });

    const calvin = new Student({
        name: 'Calvin',
        location: 'Seattle',
        age: 99,
        gender: 'male',
        previousBackground: 'Genius extraordinaire',
        className: 'CS10',
        favSubjects: [
            'JavaScript',
            'HTML',
            'CSS'
        ]
      });
  
    const chris = new Student({
        name: 'Chris',
        location: 'Rescue',
        age: 123,
        gender: 'male',
        previousBackground: 'Cashier',
        className: 'CS10',
        favSubjects: [
            'JavaScript',
            'HTML',
            'CSS'
        ]
      });

    const moises = new ProjectManagers({
        name: 'Moises',
        location: 'Orlando',
        age: 35,
        gender: 'male',
        gradClassName: 'CS5',
        favInstructor: 'Josh'
      });
  
    const jackee = new ProjectManagers({
        name: 'Jackee',
        location: 'San Francisco',
        age: 30,
        gender: 'female',
        gradClassName: 'CS5',
        favInstructor: 'Austen'
      });

      console.log(calvin.sprintChallenge(calvin['favSubjects'[0]]));