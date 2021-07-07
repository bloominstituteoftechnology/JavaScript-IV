// CODE here for your Lambda Classes

//=============== Parent Class  =============//

class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.sex = personAttributes.sex;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
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
    saysCatchPhrase(){
        console.log(`${this.catchPhrase}.`);
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
        console.log(`My fave subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`);
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
});


//======== Student Objects Here =============//

const jTrout = new Student({
    name: 'Josh',
    location: 'Richmond, Virginia',
    age: 27,
    sex: 'male',
    prevBackground: 'Operations for Capital One',
    className: 'FSW16',
    favSubjects: [
        'HTML', 
        'CSS', 
        'UX/UI', 
    ],
});

const cRoy = new Student({
    name: 'Christie',
    location: 'kinda all over the place',
    age: 23,
    sex: 'female',
    prevBackground: 'Seminary',
    className: 'FSW16',
    favSubjects: [
        'JavaScript', 
        'Wizardry', 
        'Bingo', 
    ],
});


//============ Project Manager Objects Here  ============//

const mDavis = new ProjectManager({
    name: 'Marious',
    location: 'Alabama',
    age: 28,
    sex: 'male',
    gradClassName: 'CS9',
    favInstructor: 'Josh Knell'
});

const cKuntz = new ProjectManager({
    name: 'Clint',
    location: 'Utah',
    age: 28,
    sex: 'male',
    gradClassName: 'CS9',
    favInstructor: 'Ryan Hamblin'
});

console.log(jKnell.specialty);
console.log(holdy.location);
console.log(jTrout.className);
console.log(cRoy.age);
console.log(mDavis.gradClassName);
console.log(cKuntz.favInstructor);
jTrout.speak();
jKnell.demo('the DOM');
jKnell.saysCatchPhrase();
holdy.grade(cRoy, 'Capstone Project');
cRoy.listsSubjects();
jTrout.PRAssignment('JavaScript-IV');
cRoy.sprintChallenge('JS Fundamentals');
cKuntz.standUp('KuntzCrew');
mDavis.debugsConsole(jTrout, 'Redux');
