class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    };
}

class Instructor extends Person{
    constructor(instAtt){
        super(instAtt);
        this.specialty = instAtt.specialty;
        this.favLanguage = instAtt.favLanguage;
        this.catchPhrase = instAtt.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    };
}

class Student extends Person{
    constructor(studentAtt){
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
    }
    listsSubjects(){
        favSubjects.forEach(function(sub){
            console.log(sub);
        });
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
}

class PM extends Instructor{
    constructor(pmAtt){
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const Braden = new Student ({
    'name': 'Braden',
    'age': 20,
    'location': 'CA',
    'gender': 'M',
    'previousBackground': 'college',
    'className': 'CS10',
    'favSubjects': ['HTML', 'CSS', 'JaveSript']
});

const Ja = new Student ({
    'name': 'Ja',
    'age': 35,
    'location': 'NC',
    'gender': 'F',
    'previousBackground': 'college',
    'className': 'CS10',
    'favSubjects': ['Basic HTML', 'Basic CSS', 'Basic JaveSript']
})