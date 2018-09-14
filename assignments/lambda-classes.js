// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name =  attributes.name;
        this.age =  attributes.age;
        this.location =  attributes.location;
        this.gender =  attributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage =  instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;

    }
   demo(subject){
        console.log(`Today we are learning about ${subject}`);
    };
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = [studentAttributes.favSubjects];
    }
    listsSubjects() {
        this.favSubjects.forEach(function (subject){
            console.log(subject);
        });

    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}
class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(student, subject){
        console.log(`${ProjectManager.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const oleks = new Student({
    name: 'Oleks',
    location: 'NC',
    age: 100,
    gender: 'male',
    previousBackground: 'Ukrainian',
    className: 'FSW14',
    favSubjects: ['JS', 'HTML', 'CSS', 'Physics', 'Data Science']
});

const bob = new ProjectManager({
    name: 'Bob',
    location: 'Lambda School',
    catchPhrase: 'Scooby DOooo'
});

console.log(fred.catchPhrase);
bob.speak();
bob.demo('JS4');
bob.debugsCode(oleks, 'JS4');

console.log(oleks.previousBackground);
oleks.speak();
oleks.listsSubjects();
oleks.PRAssignment('JS4');
oleks.sprintChallenge('JS4');