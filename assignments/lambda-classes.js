// CODE here for your Lambda Classes
class Person {
    constructor (id){
        this.name = id.name;
        this.age = id.age;
        this.location = id.location;
        this.gender = id.gender;
    };

    introduction(item) {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
    };

};

class Instructor extends Person {
    constructor (teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}`;
    };

    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`;
    };
};

class Student extends Person {
    constructor (learn) {
        super(learn); 
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    };

    listsSubjects() {
        return this.favSubjects.toString();
   };

   PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
   };

   sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
   };
};

class ProjectManager extends Instructor {
    constructor (teach) {
        super(teach);
        this.gradClassName = teach.gradClassName;
        this.favInstructor = teach.favInstructor;  
    };

    standUp(channel){
        return `${this.name} announces to ${channel}: @channel standy times!`;
    };

    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    };
};


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const thisGuy = new Student({
    name: 'This Guy',
    location: 'San Tan Valley',
    age: 23,
    gender: 'Male',
    previousBackground: 'Nada',
    className: 'CSPT2',
    favSubjects: ['CSS' , 'HTML' , 'Javascript']
  });

  const otherGuy = new ProjectManager({
    name: 'Other Guy',
    location: 'New York',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I'm here to help!`,
    gradClassName: 'CS6',
    favInstructor: 'Dan is the man!'
  });


  // console.log(thisGuy);
  console.log(fred.introduction());
  console.log(fred.demo('Javascript'));
  console.log(fred.grade(thisGuy, 'CSS'));
  console.log(thisGuy.listsSubjects());
  console.log(thisGuy.PRAssignment('LESS'));
  console.log(thisGuy.sprintChallenge('Memes'));
  console.log(otherGuy.standUp('CSPT2'));
  console.log(otherGuy.debugsCode(thisGuy, 'Memes'));
