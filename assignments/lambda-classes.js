// CODE here for your Lambda Classes
class Person {
    constructor(attribute) {
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}

class Instructor extends Person {
    constructor(insattribute){
        super(insattribute);
        this.specialty = insattribute.specialty;
        this.favLanguage = insattribute.favLanguage;
        this.catchPhrase = insattribute.catchPhrase;

    }
    demo(param1) {
        return `Today we are learning about ${param1}`; 
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(stuattribute){
        super(stuattribute);
        this.previousBackground = stuattribute.previousBackground;
        this.classname = stuattribute.classname;
        this.favSubjects = stuattribute.favSubjects;
        this.listsSubjects = stuattribute.listsSubjects;
        
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }



}

class ProjectManager extends Instructor {
    constructor(prattribute){
        super(prattribute);
        this.gradClassname = prattribute.gradClassname;
        this.favInstructor = prattribute.favInstructor;
        
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
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

  const josh = new Instructor({
    name: 'Josh',
    location: 'NY',
    age: 34,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the snacks`
  });


const james = new Student({
    name:'James',
    location: 'Kentucky',
    age: 25,
    gender: 'male',
    previousBackground:'Retail',
    className:'CS11',
    favSubjects: ['Html', 'CSS', 'Javascript']
    
});

const jacob = new Student({
    name:'Jacob',
    location: 'Louisville',
    age: 21,
    gender: 'male',
    previousBackground:'Sales',
    className:'CS11',
    favSubjects: ['Html', 'CSS', 'Javascript']
    
});

const sarah = new ProjectManager({
    name:'Sarah',
    location:'Toledo',
    age:18,
    gender:'female',
    gradClassname: 'CS01',
    favInstructor:'Josh'
});

const ryan = new ProjectManager({
    name:'Ryan',
    location:'Knoxville',
    age:25,
    gender:'male',
    gradClassname: 'CS02',
    favInstructor:'Jason'
});

console.log(fred.speak());
console.log(ryan.speak());
console.log(josh.speak());
console.log(james.speak());
console.log(sarah.speak());
console.log(jacob.speak());
console.log(fred.demo('python'));
console.log(fred.grade(jacob,'javascript'));
console.log(james.PRAssignment('python'));
console.log(james.sprintChallenge('bootstrap'));
console.log(sarah.standUp('CS11'));
console.log(sarah.debugsCode(jacob,'javascript'));
// console.log(brian.standup('cs11'));
// console.log(chang.grade(troy, "science"))
// console.log(chang.grade(troy, "science"))
// console.log(troy.PRAssignment("JavaScript"))
// console.log(troy.speak());
// console.log(brian.debugsCode(troy, "JavaScript"))
// console.log(abed.listsSubjects())
// console.log(troy.sprintChallenge("JavaScript"))

  




  