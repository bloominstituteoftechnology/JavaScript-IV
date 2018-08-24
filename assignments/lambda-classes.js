// CODE here for your Lambda Classes
class Person {
    constructor (obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor (obj) {
        super(obj);
        this.speciality = obj.speciality;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

        demo(subject) {
            return `Today we are learning about ${subject}.`
        }

        grade(student,subject) {
            return `${student.name} receives a perfect score on ${subject}`;
        }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        }

        listsSubjects() {
            return this.favSubjects.map(function (x) {console.log(x);})
        }

        PRAssignment(subject) {
            return `${this.name} has submitted a PR for ${subject}.`
        }

        sprintChallenge(subject) {
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
    }

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUP(channel) { return `${obj.name} announces to ${channel}, @channel standy times!​​​​​`;}

    debugsCode(student,subject) {return `${obj.name} debugs ${student.name}'s code on ${subject}`;}
}

const caleb = new Student ({
  name: 'Caleb'
  ,
  age: 34
  ,
  location: 'Africa'
  ,
  gender: 'Male'
  ,
  previousBackground: 0
  ,
  className:'PT2'
  ,
  favSubjects: ['Chess','Math','Functions']
  ,
})

caleb.sprintChallenge('Functions')

const alison = new Student ({
  name: 'Alison'
  ,
  age: 25
  ,
  location: 'Florida'
  ,
  gender: 'Female'
  ,
  previousBackground: 5
  ,
  className:'PT2'
  ,
  favSubjects: ['Chess','Math','Functions']
  ,
})

const eric = new Instructor ({
  name: 'Eric'
  ,
  age: 45
  ,
  location: 'Russia'
  ,
  gender: 'Male'
  ,
  speciality: 'Java'
  ,
  favLanguage:'Chinese'
  ,
  catchPhrase: 'Do or do not! There is no try.'
  ,
})

eric.speak()