// CODE here for your Lambda Classes
class Person {
    constructor(stats) {
        this.name = stats.name;
        this.age = stats.age;
        this.gender = stats.gender;
        this.location = stats.location;
    }
    speak() {
      return `Hello my name is ${stats.name}, I am from ${stats.location}`;
    }
};

class Instructor extends Person {
    constructor(isGoodAt) {
        super(isGoodAt)
        this.specialty = isGoodAt.specialty;
        this.favLanguage = isGoodAt.favLanguage;
        this.catchPhrase = isGoodAt.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.specialty}`;
    }
    grade() {
        return `${this.name} receives a perfect score on ${this.specialty}`;
    }
};

class Student extends Person {
    constructor(details) {
        super(details)
        this.previousBackground = details.previousBackground;
        this.className = details.className;
        this.favSubject = details.favSubject;
    }

    listSubject() {                   
        return `${this.favSubject}`;
    }

  *  PRAssignment() {
        return `${this.name} has submitted a PR for ${this.favSubject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.favSubject}`;
    } 
};

class ProjectManagers extends Instructor {
    constructor(manDetails) {
        super(manDetails)
        this.gradClassName = manDetails.gradClassName;
        this.favInstructor = manDetails.favInstructor;
    }
    standUp() {
        return `${this.name} announces to channel, @channel study times!`;
    }
    debugsCode() {
        return `${this.name} debugs ${this.name}'s code on ${this.specialty}.`;      
    }
};

const burt = new Student({
    name: 'Burt',
    age: 21,
    gender: 'male',
    location: 'California',
    previousBackground: 'electrician',
    className: 'CS2',
    favSubject: ['JS', 'Science']
});

const beualah = new Instructor({
    name: 'InstructorBeulah',
    age: 42,
    gender: 'female',
    location: 'California',
    specialty: 'physical eduction',
    favLanguage: 'english',
    catchPhrase: 'Whats up' 
});

const raymond = new ProjectManagers({
    name: 'Raymond',
    age: 23,
    gender: 'male',
    location: 'Notsureville',
    specialty: 'JavaScript',
    favLanguage: 'JS',
    catchPhrase: 'PM me if you need help',
    gradClassName: 'CS1',
    favInstructor: 'Buelah'
});

console.log(burt.age);  
console.log(burt.listSubject()); //21
console.log(raymond.specialty);
console.log(beualah.demo());
console.log(beualah.grade());
console.log(raymond.standUp());
console.log(raymond.debugsCode());