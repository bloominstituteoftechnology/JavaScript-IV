// CODE here for your Lambda Classes


// Person base-class
class Person {
    constructor(personInfo){
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//Instructor Class

class Instructor extends Person {
    constructor(instructorInfo){
        super(instructorInfo)
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

// Student class

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

// Project Managers Class

class ProjectManagers extends Person{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Instructor Objects

const micheal = new Instructor({
    'name': 'Micheal',
    'age': 25,
    'location': 'Hawaii',
    'gender': 'M',
    'specialty': 'Data Analyst',
    'favLanguage': 'Python',
    'catchPhrase': "Let's play the pronoun game."
});

const hyun = new Instructor({
    'name': 'Hyun',
    'age': 23,
    'location': 'Seuol',
    'gender': 'F',
    'specialty': 'Software Engineer',
    'favLanguage': 'C',
    'catchPhrase': "반갑습니다"
});

const felix = new Instructor({
    'name': 'Felix',
    'age': 37,
    'location': 'Sweden',
    'gender': 'M',
    'specialty': 'Full Stack Developer',
    'favLanguage': 'JavScript',
    'catchPhrase': "Jag saknar dig."
});

//Student Objects

const david = new Student({
    'name': 'David',
    'age': 22,
    'location': 'Texas',
    'gender': 'M',
    'previousBackground': 'Customer Service',
    'className': 'FSW14',
    'favSubjects': ['HTML', 'CSS', 'Javascript'],
});

const mickey = new Student({
    'name': 'Mickey',
    'age': 21,
    'location': 'Florida',
    'gender': 'M',
    'previousBackground': 'Animation',
    'className': 'FSW14',
    'favSubjects': ['Art', 'Animation', 'Drawing'],
});

const liam = new Student({
    'name': 'Liam',
    'age': 100,
    'location': 'Space',
    'gender': 'M',
    'previousBackground': 'Astronaut',
    'className': 'SpaceX',
    'favSubjects': ['Space', 'Galaxy', 'Universe'],
});

// Project Managers

const keenan = new ProjectManagers({
    'name': 'Keenan',
    'age': 26,
    'location': 'Washington',
    'gender': 'M',
    'gradClassName': 'CS12',
    'favInstructor': 'Josh',
});

const joe = new ProjectManagers({
    'name': 'Joe',
    'age': 29,
    'location': 'New York',
    'gender': 'M',
    'gradClassName': 'CS12',
    'favInstructor': 'Dan',

});

const ed = new ProjectManagers({
    'name': 'Eddy',
    'age': 100,
    'location': 'Space',
    'gender': 'M',
    'gradClassName': 'CS12',
    'favInstructor': 'Ken',
});
