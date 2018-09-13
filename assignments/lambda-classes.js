// CODE here for your Lambda Classes

// Person class. Base class.
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

// Instructor class
class Instructor extends Person {
    constructor(instructorAttributes) {
            super(instructorAttributes);
            this.specialty = instructorAttributes.specialty;
            this.favLanguage = instructorAttributes.favLanguage;
            this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        return(`${student.name} receives a perfect score on ${subject}`);
    }

}

// Students
class Student extends Person {
    constructor(studentAttributes) {
            super(studentAttributes);
            this.previousBg = studentAttributes.previousBg;
            this.className = studentAttributes.className;
            this.favSubjects = studentAttributes.favSubjects;
            this.grade = 79;
        }
    listsSubjects() {
        return this.favSubjects.forEach(subject => subject);
    }

    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }

    newGrade() {
        console.log(this.grade > 75 ? `Congratulations!` : `You are now a Software Engineer Ninja!`);
      }
}
  

//  Project Managers
class ProjectManagers extends Instructor {
    constructor(projManagersAttributes) {
            super(projManagersAttributes)
            this.gradClassName = projManagersAttributes.gradClassName;
            this.favInstructor = projManagersAttributes.favInstructor;
        }
        
        standUp() {
            return (`${name} announces to ${channel}, @channel standby times!`);
}
        debugsCode() {
            return (`${name} debugs {student.name}'s code on ${subject}`)
            
    }
}

// Objects

// Instructor
const kevin = new Instructor({
    name:'Kevin Flynn',
    location: 'The Grid',
    age: 65,
    gender: 'Male',
    favLanguage: 'Haskell',
    specialty: 'Creating the Grid',
    catchPhrase: 'Greetings, Programs!'
});

// Student
const sam = new Student ({
    name:'Sam Flynn',
    location: 'Boston, MA',
    age: 28,
    favSubjects: [
        'Science',
        'Math',
        'Alternate Dimensions',
    ],
    className: 'Hacking the Grid',
    previousBackground: 'Son of God Kevin Flynn, also CEO of ENCOM.'
});

// Project Manager
const rinzler = new ProjectManagers ({
    name:'Rinzler',
    location: 'The Grid',
    age: 45,
    gender: 'Male',
    favLanguage: 'Malbolge',
    specialty: 'Creating the Grid',
});

kevin.speak();
kevin.demo('creating the perfect system');
sam.newGrade();