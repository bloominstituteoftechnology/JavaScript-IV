// CODE here for your Lambda Classes

//base/master class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    //methods
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//instructor class
class Instructor extends Person{
    constructor(instAttr) {
        super(InstOption);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    //methods
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

//student class
class Student extends Person {
    constructor(studOptions) {
        super(studOptions);
        this.previousBackground = studOptions.previousBackground;
        this.className = studOptions.className;
        this.favSubjects = studOptions.favSubjects;
    }
    //methods
    listSubjects() {
        //logs out all of the students fav subjects 1 by 1
    }
    PRAssignments(student, subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}` );
    }
}

//project manager class

class ProjectManager extends Instructor {
    constructor(pMOptions) {
        super();
        this.gradClassName = pMOptions.gradClassName;
        this.favInstructor = pMOptions.favInstructor;
    }
    //methods
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//instructor objects

const josh = new Instructor({
    name: "Josh",
    age: 30,
    location: "Utah",
    gender: "M",
    specialty: "front-end",
    favLanguage: "javascript" ,
    catchPhrase: "special sauce",

});

const roger = new Instructor({
    name: "Mr. Rogers",
    age: 55,
    location: "California",
    gender: "M",
    specialty: "all the things",
    favLanguage: "React",
    catchPhrase: "Won't you be my neighbor"

});

const picard = new Instructor({
    name: "Captain Picard",
    age: 65,
    location: "U.S.S. Enterprise",
    gender: "M",
    specialty: "data",
    favLanguage: "python",
    catchPhrase: "Make it so"

});

//student objects

const mindy = new Student({
  name: "Mindy",
  age: 37,
  location: "San Antonio",
  gender: "F",
  previousBackground: "self taught",
  className: "FSW-14",
  favSubjects: "Python"
});

const kevin = new Student({
    name: "Kevin",
    age: 35,
    location: "San Antonio",
    gender: "M",
    previousBackground: "self taught",
    className: "FSW-16",
    favSubjects: "Raspberry PI"
});




