// CODE here for your Lambda Classes
class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects(){
        console.log(`${this.name}'s favorite subjects:`);
        this.favSubjects.forEach((element, index) => {
            console.log(`${index + 1}. ${element}`);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const genericPerson = new Person({
    name: 'Liam',
    age: 14,
    location: 'Texas',
    gender: 'Male'
});

const bob = new Instructor({
    name: 'Bob',
    age: 36,
    location: 'Mount Everest',
    gender: 'Male',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'JavaScript is at the top of the World'
});

const eric = new Student({
    name: 'Eric',
    age: 41,
    location: 'Maricopa, AZ',
    gender: 'Male',
    previousBackground: 'Some C++ programming',
    className: 'CSPT2',
    favSubjects: ['JavaScript', 'HTML', 'React']
});

const charlie = new ProjectManager({
    name: 'Charlie',
    age: 24,
    location: 'A beach somewhere',
    gender: 'Female',
    specialty: 'Teaching React',
    favLanguage: 'Javascript',
    catchPhrase: 'When you stay classy, \'this\' happens',
    gradClassName: 'CS1',
    favInstructor: 'Dan \'Lambda Swap\' Frehner'
});

// Testing Objects
genericPerson.speak();

bob.speak();
bob.demo('data structures');
bob.grade(eric, 'Javascript');

eric.speak();
eric.listsSubjects();
eric.PRAssignment('Python');
eric.sprintChallenge('React');

charlie.speak();
charlie.demo('algorithms');
charlie.grade(eric, 'MongoDB');
charlie.standUp('CSPT2_Charlie');
charlie.debugsCode(eric, 'Javascript');


// Testing Stretch Goals
