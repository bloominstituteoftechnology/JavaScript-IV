
// CODE here for your Lambda Classes


// Class Person 
class Person {
    constructor(name,age,location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    } 
}

// Class Instructor
class Instructor extends Person {
    constructor(specialty,favLanguage,catchPhrase){
        super();
        this.specialty = specialty;
        this.favLanguage = favLanguage; 
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {

        console.log(`Today we are learning about ${subject}`);

    }

    grade(student,subject) {

        console.log(`${student} receives a perfect score on ${subject}`);

    }
}


// Class Student
class Student extends Person {
    constructor(previousBackground,className,favSubjects) {
        super();
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {

        console.log(this.favSubjects);

    }

    PRAssignment(student,subject) {

        console.log(`${student} has submitted a PR for ${subject}`);
    }

    sprintChallenge(student,subject) {

        console.log(`${student} has begun sprint challenge on ${subject}`);

    }

}

// Class Project Manager 
class ProjectManager extends Person {
    constructor(gradClassName,favInstructor) {
        super();
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times! `);
    }

    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }

}
// Tests 

// Testing Class Person 

//const CorruptDon = new Person('Don',72,'New York City, NY');

//CorruptDon.speak();

// Create Student Object 


//const Student1 = new Student();



let Student1 = new Student({
    name: "Ernest Hemingway",
    location: "Phoenix, AZ",
    age: 25,
    previousBackground: "Tank Maintainer Specialist (91A)",
    className: "WebPT07"
  });

  Student1.favSubjects = ["Anime 101","Memes 101","Video Games 101"]; 
 
// Test Student Object 

console.log(Student1);

// Create Instructor Object 

const Instructor1 = new Instructor();

Instructor1.name = "Banjo Johnson";
Instructor1.age = 32;
Instructor1.location = "Dallas, TX";
Instructor1.specialty = "SQL";
Instructor1.favLanguage = "Java";
Instructor1.catchPhrase = "I feel the need for speed!";

// Test Instructor Object 

//console.log(Instructor1);

// Create PM Object 

const ProjectManager1 = new ProjectManager({

name: "Jasmine Smith",
age: 24,
location: "Austin, TX",
favInstructor: "Banjo Guy",
gradClassName: "WebPT05"

});
// Test ProjectManager Object

//console.log(ProjectManager1);

// Testing Class Instructor

//Instructor1.demo(Student1.favSubjects[0]);

//Instructor1.grade(Student1.name,Student1.favSubjects[0]);

// Testing Class Student

//Student1.listsSubjects();

//Student1.PRAssignment(Student1.name,Student1.favSubjects[1]);

//Student1.sprintChallenge(Student1.name,Student1.favSubjects[2]);

// Testing Class Project Manager 

//ProjectManager1.standUp(Student1.favSubjects[2]);

//ProjectManager1.debugsCode(Student1.name,Student1.favSubjects[2]);