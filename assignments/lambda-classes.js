// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instructorInfo){
        super(instructorInfo);
        
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
     }
  
     demo(subject){
    console.log(`Today we learned about ${subject}.`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listSubjects(){
        console.log(this.favSubjects);
    }

    PRAssignment(subject){
console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor{
    constructor(PM){
        super(PM);
        this.gradClassName = PM.gradClassName;
        this.favInstructor = PM.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to channel, @${channel} standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}

const Estevan = new Person({
    name : 'Estevan',
    age: '22',
    location: 'Riverside, CA'

});

const Mom = new Person({
    name : 'Silvia',
    age: '42',
    location: 'San Bernardino, CA'

});

const Brother = new Person({
    name : 'James',
    age: '24',
    location: 'Irvine, CA'

});



const Suthep = new Instructor({
    name: 'Suthep',
    age:'21',
    location: 'Hemet, CA',
    specialty: 'front-end',
    favLanguage: 'HTML',
    catchPhrase: 'Its Lit'
});

const Ryan = new Instructor({
    name: 'Ryan',
    age:'20-something',
    location: 'CA',
    specialty: 'full-stack',
    favLanguage: 'JavaScript',
    catchPhrase: 'Great Work Everyone'
});

const Josh = new Instructor({
    name: 'Josh',
    age:'30-something',
    location: 'CA',
    specialty: 'everything',
    favLanguage: 'javascript',
    catchPhrase: 'Big Boss'
});

const Tom = new Student({
    name: 'Tom',
    age: '19',
    location: 'El Monte, CA',
    previousBackground: 'Worked at Blaze Pizza',
    className: 'FSW16',
    favSubjects: ['Math','CS','English']
});

const Mathew = new Student({
    name: 'Tom',
    age: '19',
    location: 'El Monte, CA',
    previousBackground: 'Worked at Blaze Pizza',
    className: 'FSW16',
    favSubjects: ['Fishing','Math','CS']
});

const Cecil = new Student({
    name: 'Cecil',
    age: '20s',
    location: 'Texas',
    previousBackground: 'coder',
    className: 'FSW16',
    favSubjects: ['nap-time','CS','web-dev']
});

const Abdul = new ProjectManager({
    name: 'Abdul',
    age: '30-ish',
    location:'Lambda CPU',
    gradClassName: 'FSW',
    favInstructor:'Josh'
});

const Emily = new ProjectManager({
    name: 'Emily',
    age: '??',
    location:'Okhlahoma',
    gradClassName: 'FSW',
    favInstructor:'Tom Tarpey'
});

const Caitlin = new ProjectManager({
    name: 'Caitlin',
    age: '22',
    location:'Lambda CPU',
    gradClassName: 'FSW',
    favInstructor:'Josh'
});


console.log(Tom.listSubjects());
console.log(Suthep.demo('JavaSript'));
console.log(Estevan.speak());
console.log(Emily.debugsCode(Tom, 'JavaScript4'));




