// CODE here for your Lambda Classes

//=============== Parent Class  =============//

class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.sex = personAttributes.sex;
        speak() {
            console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
        }
    }
}

//=============== Child Class  =============//

//===== Instructor Here =======//

class Instructor extends Person{
    constructor(instAttributes){
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}   

//========  Student Here  ==========//

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.prevBackground = studentAttributes.prevBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        console.log(`My fave subjects are ${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(${student.name} has begun a sprint challenge on ${subject}.);
    }
}

//=============== GrandChild Class  =============//

//==========  Project Manager Here  ==========//

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!!`);
    }
    debugsConsole(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

//====== Instructor Objects Here  ===========//

const jKnell = new Instructor({
    name: 'Josh',
    location: 'Orem, Utah',
    age: 35,
    sex: 'male',
    favLanguage: 'CSS',
    specialty: 'Fundamentals',
    catchPhrase: 'All that other stuff is just extra cheese'
});

const holdy = new Instructor({
    name: 'Holdy',
    location: 'Red Sox Nation',
    age: 30,
    sex: 'male',
    favLanguage: 'React',
    specialty: 'Lambda Labs',
    catchPhrase: 'I got the Sox winning the World Series',
})