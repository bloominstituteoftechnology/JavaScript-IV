// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}
}


class Instructor extends Person{
    constructor(attributes2){
        super(attributes2);
        this.specialty = attributes2.specialty;
        this.favLanguage = attributes2.favLanguage;
        this.catchPhrase = attributes2.catchPhrase;
    }
    demo(){
        return `Today we are learning about {subject}`;
    }
    grade(){
        return `{student.name} receives a perfect score on {subject}`;
    }
}

class Student extends Instructor{
    constructor(attributes3){
        super(attributes3);
        this.previousBackground = attributes3.previousBackground;
        this.className = attributes3.className;
        this.favSubjects = attributes3.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAassignment(){
return `${this.name} has submitted a PR for ${this.favSubjects}`;
    }
    sprintChallenge(){
        return `${this.name} has begun spring challenge ${this.favSubjects}`;
    }
}

class ProjectManager extends Student{
    constructor(attributes4){
        super(attributes4);
        this.gradClassName = attributes4.gradClassName;
        this.favInstructor = attributes4.favInstructor;
    }
    standUp(){
        return `${this.name} announces to {channel} @channel standy times!`;
    }
    debugsCode(){
        return `${this.name} debugs ${this.Student.name}'s code on ${this.favSubjects}`;
    
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

  console.log(fred.speak());
  console.log(fred.demo());
  console.log(fred.grade());
  console.log()
  console.log()