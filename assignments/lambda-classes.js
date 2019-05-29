
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

        console.log(`Today we are learning about ${this.subject}`);

    }

    grade(student,subject) {

        console.log(`${student.name} receives a perfect score on ${subject}`);

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

        console.log(`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(student,subject) {

        console.log(`${student.name} has begun sprint challenge on ${subject}`)

    }

}

// Class Project Manager 
class ProjectManager extends Person {
    constructor(gradClassName,favInstructor) {
        super(name,age,location);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times! `);
    }

    debugsCode(student,subject){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }

}
// Tests 

// Testing Class Person 

const CorruptDon = new Person('Don',72,'New York City, NY');

CorruptDon.speak();

// Create Student Object 


const Student1 = new Student();

Student1.name = "Ernest Hemingway";
Student1.age = 25;
Student1.location = "Phoenix, AZ";
Student1.previousBackground = "Tank Maintainer Specialist (91A)";
Student1.className = "WebPT07";
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

console.log(Instructor1);

// Create PM Object 

// Testing Class Instructor

// Testing Class Student

// Testing Class Project Manager 
