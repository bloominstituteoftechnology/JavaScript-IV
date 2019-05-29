
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
        super(name,age,location);
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
        super(name,age,location);
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

// Tests 

// Testing Class Person 

const CorruptDon = new Person('Don',72,'New York City, NY');

CorruptDon.speak();

// Testing Class Instructor

// Testing Class Student

// Testing Class Project Manager 
