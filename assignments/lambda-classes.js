// CODE here for your Lambda Classes

class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = this.pmInfo;
        this.favInstructor = this.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}



const turner = new Instructor({
    name: 'Turner',
    location: 'Arizona',
    age: 32,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I hate pythons but love Python.`
});

const simon = new Student({
    name: 'Simon',
    location: 'Georgia',
    gender: 'male',
    age: 40,
    favSubjects: ['Javascript', 'Mathmatics'],
    previousBackground: "Some JS experience",
    className: "CS11",
});

const josh = new ProjectManagers({
    name: 'Josh',
    location: 'Alabama',
    gender: 'male',
    specialty: 'front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'It\'s mindblowing',
    gradClassName: 'CS11',
    favInstructor: 'Josh Knell',
});

//Instructor tests
turner.speak();
turner.demo('HTML');
turner.grade(simon,'Javascript');


//Student tests
simon.listsSubjects();
simon.PRAssignment('Javascript IV');
simon.sprintChallenge('Super Javascript');


//PM tests
josh.standUp('CS11-Josh');
josh.debugsCode(simon, 'HTML');

