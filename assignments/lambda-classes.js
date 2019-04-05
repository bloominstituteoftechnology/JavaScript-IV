// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    } 
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
};

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        console.log('Today we are learning about ' + subject)
    }
    grade(student) {
        console.log(`${this.name} receives a perfect score on ${this.subject}`)
    }
};

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
};

class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
};

//Objects here

//instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'Caveman',
    specialty: 'Bowling',
    catchPhrase: 'Yaba-daba-do'
});

const barney = new Instructor({
    name: 'Barneys',
    location: 'Bedrock',
    age: 35,
    gender: 'male',
    favLanguage: 'Caveman',
    specialty: 'Knuclehead',
    catchPhrase: 'ha ha ha'
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    favLanguage: 'Caveman',
    specialty: 'cooking',
    catchPhrase: 'Oh Fred'
});
//students
const maria = new Student({
    name: 'maria',
    location: 'Nevada',
    age: 27,
    gender: 'female',
    previousBackground: 'factory worker',
    className: 'CS132',
    favSubjects: ['CS', 'JavaScript', 'Math']
});


const steve = new Student({
    name: 'steve',
    location: 'New York',
    age: 21,
    gender: 'male',
    previousBackground: 'cashier',
    className: 'CS132',
    favSubjects: ['CS', 'JavaScript', 'Science']
});


const larry = new Student({
    name: 'larry',
    location: 'Florida',
    age: 19,
    gender: 'male',
    previousBackground: 'unemployed',
    className: 'CS132',
    favSubjects: ['CS', 'JavaScript', 'Python']
});
//pm's
const brandon = new ProjectManagers({
    name: 'brandon',
    location: 'Alabama',
    age: 27,
    gender: 'male',
    gradClassName: 'CS3',
    favInstructor: 'bob ross'
});

const henry = new ProjectManagers({
    name: 'henry',
    location: 'California',
    age: 50,
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'sean'
});

const nivea = new ProjectManagers({
    name: 'nivea',
    location: 'Texas',
    age: 32,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'optimus prime'
});

//test
steve.listSubjects()
steve.PRAssignment('Math')
steve.sprintChallenge('Math')
nivea.standUp('webpt5')
nivea.debugsCode(steve, 'Lambda-classes.js assignment.')
steve.debugsCode(larry, 'health')// error because steve is a student and only has access to the Person class and not the PM or Instructor class.



