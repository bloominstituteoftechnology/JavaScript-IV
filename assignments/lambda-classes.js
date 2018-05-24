// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name= info.name;
        this.age= info.age;
        this.location= info.location;
        this.gender= info.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorInfo){
        super(instructorInfo);
        this.speacialty= instructorInfo.speacialty;
        this.favLanguage= instructorInfo.favLanguage;
        this.catchPhrase= instructorInfo.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground =studentInfo.previousBackground;
        this.className= studentInfo.className;
        this.favSubjects= studentInfo.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class Pms extends Instructor{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName= pmInfo.gradClassName;
        this.favInstructor= pmInfo.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standup times!`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);

}
}


const Josh= new Instructor({
    name:'Josh',
    gender:'male',
    favLanguage:'JavaScript',
    catchPhrase: `Don't forget the homies.`
});

const Justin= new Pms({
    name:'Justin',
    gender:'male',
    favInstructor:'Josh'
});

const Alex= new Student ({
    name: 'Alex',
    gender:'male',
    age: 25,
    className:'cs11'
});