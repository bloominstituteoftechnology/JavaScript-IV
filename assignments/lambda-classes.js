// CODE here for your Lambda Classes

class Person {
    constructor(person){
    this.name = person.name;
    this.age = person.age;
    this.location = person.location;
    this.gender = person.gender;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

var Mason = new Person ({
    name: "Tommy", age: 24, location: "Seattle", gender: "male",
})

Mason.speak();

class Instructor extends Person {
    constructor(instructor) {
        super(Person);
        this.speciality = instructor.speciality;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }

    demo(subject) { 
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, string) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    catchPhrase(){
        console.log(Dan.catchPhrase);
    }
}

var DanF = new Instructor ({
    name: "Dan", age: 24, location: "SLC", gender: "male", speciality: "coding", catchPhrase: 'Goooood evening everyone',
})

DanF.demo(`JS4`)
DanF.catchPhrase() // this doesn't work yet, but will reexamine tomorrow.

class Student extends Person {
    constructor(attributes) {
        this.previousbackground = studentOptions.previousbackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }

    prAssignment(subject) { 
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }

    listSubjects(){ 
        return `{...favSubjects}`;
    }
}

class ProjectManager extends Instructor { 
    constructor(attributes) {
        this.gradClassName = projectManagerOptions.gradClassName;
        this.favInstructor = projectManagerOptions.favInstructor;
    }

    standUp(channel) { 
        return `{name} announces to {channel}, @channel standy times!​​​​​`;
    }

    debug(student, subject) {
        `{name} debugs {student.name}'s code on {subject}`;
    }
}

