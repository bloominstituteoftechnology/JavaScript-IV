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
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//instructor class
class Instructor extends Person{
    constructor(instAttr) {
        super(instAttr);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    //methods
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
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
    listsSubjects() {
        //logs out all of the students fav subjects 1 by 1
        return this.favSubjects.forEach(subjects => console.log(subjects));
    }
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}


//project manager class

class ProjectManager extends Instructor {
    constructor(pMOptions) {
        super(pMOptions);
        this.gradClassName = pMOptions.gradClassName;
        this.favInstructor = pMOptions.favInstructor;
    }
    //methods
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
  favSubjects: ["Python", "Javascript", "LESS"]
});

const kevin = new Student({
    name: "Kevin",
    age: 35,
    location: "San Antonio",
    gender: "M",
    previousBackground: "self taught",
    className: "FSW-16",
    favSubjects: ["Raspberry PI", "Python", "C"]
});



//project manager objects

const dude = new ProjectManager({
   name: "The Dude",
   age: 45,
    location: "California",
    gender: "M",
    className: "CS4",
    favInstructor: "Josh"
});

const tammy = new ProjectManager({
 name: "Tammy",
  age: 25,
  location: "Seattle",
  gender: "F",
  className: "CS6",
  favInstructor: "Mr Rogers"
});




console.log(roger.speak());
console.log(josh.demo("Javascript"));
console.log(picard.grade(mindy, "Javascript-IV"));
console.log(kevin.speak());
console.log(mindy.listsSubjects());
console.log(kevin.PRAssignments("LESS"));
console.log(mindy.sprintChallenge("Javascript"));
console.log(kevin.listsSubjects());
console.log(dude.speak());
console.log(tammy.standUp("FSW14"))
console.log(dude.debugsCode(kevin, "Javascript"));