// CODE here for your Lambda Classes

class Person {
    constructor(personInfo)
    {
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    };
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

class Instructor extends Person {
    constructor(instInfo){
        super(instInfo);
        this.specialty = instInfo.specialty;
        this.favLanguage = instInfo.favLanguage;
        this.catchPhrase = instInfo.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject){
        return `${Student.name} recieves a perfect score on ${subject}`;
    }
};

class Student extends Person {
    constructor(studInfo){
        super(studInfo);
        this.previousBackround = studInfo.previousBackround;
        this.className = studInfo.className;
        this.favSubjects = studInfo.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(projInfo){
        super(projInfo);
        this.gradClassName = projInfo.gradClassName;
        this.favInstructor = projInfo.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(Student,subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const josh = new Instructor({
    name: 'Josh',
    age: '35',
    location: 'Over there',
    gender: 'male',
    specialty: 'Front-End',
    favLanguage: 'JavaScript, bootstrap',
    catchPhrase: 'I am here, and obey'
});

const libby = new Student({
    name: 'Libby',
    age: 'That one',
    location: 'Foresty place',
    gender: 'female',
    previousBackround: 'lion taming',
    className: 'CS11',
    favSubjects: 'Inline-block, lion taming'
});

const ben = new ProjectManager({
    name: 'Ben',
    age: 'That number',
    location: 'Way over there',
    gender: 'male',
    specialty: 'react',
    favLanguage: 'react',
    catchPhrase: 'Time to flamingle!',
    gradClassName: 'CS(Thatone)',
    favInstructor: 'Josh'
})

console.log(josh);
console.log(josh.demo('java'));
console.log(josh.grade(libby, 'arrayz'));
console.log(libby.listsSubjects());
console.log(libby.PRAssignment('prototype'));
console.log(libby.sprintChallenge('classes'));
console.log(ben.standUp('cs11'));
console.log(ben.debugsCode(libby, 'classes'));