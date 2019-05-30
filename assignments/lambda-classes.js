// CODE here for your Lambda Classes
class Person{
    constructor(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
   }
   demo(subject){
       console.log(`Today we are learnind about ${subject}`)
   }
   grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`)
   }
}
class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listSubjects(student){
        console.log(`${student.favSubjects[0]}, ${student.favSubjects[1]}, ${student.favSubjects[2]}`)
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}
class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        console.log(`${ProjectManager.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject){
        `${ProjectManager.name} debugs ${studentObj.name}'s code on ${subject}.`
    }
}
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
const sage = new Student({
    name: "Sage",
    age: 20,
    location: "Indianapolis",
    previousBackground: "Host",
    className: "WEBPT7",
    favSubjects: ["Math", "Science", "Computers"]
});
  console.log(fred.favLanguage);
  console.log(fred.debugsCode(sage, "Javascript"));
