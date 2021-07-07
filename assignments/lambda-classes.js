
// CODE here for your Lambda Classes
// Class Person 
class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }

    speak() {        
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    } 
}


//  Class Student
class Student extends Person {
    constructor(personAttributes) {
        super(personAttributes);
        this.previousBackground = personAttributes.previousBackground;
        this.className = personAttributes.className;
        this.favSubjects = personAttributes.favSubjects;
    }

    listsSubjects() {

        console.log(`Here is a list of ${this.name}'s favorite subjects.`)
        var subArray = [];
        var item = 0;
        subArray = this.favSubjects
        for(item in subArray) {
        console.log(`subject: ${subArray[item]}`);
        
        }
    }

    PRAssignment(student,subject) {

        console.log(`${student} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(student,subject) {

        console.log(`${student} has begun sprint challenge on ${subject}.`);

    }

}

const fred = new Student({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  previousBackground: 'Bike Messenger',
  className: 'WebPT07',
  favSubjects: ['Video Gaming 101','Astronomy 101','JavaScript']
});

// Class Instructor
class Instructor extends Person {
    constructor(personAttributes){
        super(personAttributes);
        this.specialty = personAttributes.specialty;
        this.favLanguage = personAttributes.favLanguage; 
        this.catchPhrase = personAttributes.catchPhrase;
    }

    demo(subject) {

        console.log(`Today we are learning about ${subject}.`);

    }

    grade(student,subject) {

        console.log(`${student} receives a perfect score on ${subject}.`);

    }
}

const Dan = new Instructor({
    name: 'Dan',
    location: 'Levi, UT',
    age: 35,
    specialty: 'Hamonica',
    favLanguage: 'C#',
    catchPhrase: 'I feel the need for speed!'
  });

 // Class Project Manager 
class ProjectManager extends Person {
    constructor(personAttributes) {
        super(personAttributes);
        this.gradClassName = personAttributes.gradClassName;
        this.favInstructor = personAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times! `);
    }

    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}.`);
    }

} 

const Jasmine = new ProjectManager({
    name: 'Jasmine',
    location: 'Dallas, TX',
    age: 23,
    gradClassName: 'WebPT04',
    favInstructor: 'Dan'
  });



fred.speak();
fred.listsSubjects();
fred.sprintChallenge(fred.name,fred.favSubjects[0]);
Dan.demo(fred.favSubjects[1]); 
Dan.grade(fred.name,fred.favSubjects[2]);
console.log(Dan.catchPhrase);
Jasmine.standUp(fred.className);
Jasmine.debugsCode(fred.name,fred.favSubjects[2]);
console.log(`${Dan.name} is ${Jasmine.name}'s favorite instructor.`);