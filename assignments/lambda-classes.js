// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello. my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects(){
        this.favSubjects.forEach(subject => {
            console.log(`${subject}`);
        });
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slack){
        return `${this.name} announces to ${slack}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const bob = new Instructor({
    name: 'Bob',
    location: 'WV',
    age: 20,
    gender: `male`,
    favLanguage: 'JavaScript',
    specialty: `Front-end`,
    catchPhrase: 'You failed'
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const brandon = new Student({
    name: 'Brandon',
    location: 'Florida',
    age: 23,
    gender: 'male',
    previousBackground: 'Cash Management Specialist',
    className: 'FSW16',
    favSubjects: [
        'JavaScript', 
        'CSS',
        'Less'
    ]
});
const amanda = new Student({
    name: 'Amanda',
    location: 'Florida',
    age: 22,
    gender: 'Female',
    previousBackground: 'Teacher',
    className: 'College',
    favSubjects: [
        'Psychology', 
        'Fallout 4',
        'Math'
    ]
});
const abdul = new ProjectManager({
    name: 'Abdul',
    location: 'West Virginia',
    age: 21,
    gender: 'male',
    gradClassName: 'FSW14',
    favInstructor: 'Josh'
});

function test(personObject) {
    console.log(`
    Name:${personObject.name}
    ---------------------
    Location:${personObject.location}
    ---------------------
    Age:${personObject.age}
    ---------------------
    Gender:${personObject.gender}
    ---------------------
    `)
}

test(abdul);
test(fred);
test(bob);
test(brandon);
console.log(abdul.standUp('Slack Chat'));
console.log(brandon.listSubjects());
console.log(brandon.sprintChallenge('Math'));
console.log(amanda.name);