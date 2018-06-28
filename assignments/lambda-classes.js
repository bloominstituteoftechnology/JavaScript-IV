// CODE here for your Lambda Classes

class Person  {
    constructor (personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
    };
    speak() {
        return `My name is ${this.name}, i am from ${this.location}.`;
    };
};

class Instructor extends Person {
    constructor (instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    };

    demo (subject){
        return `Today we are learning about ${subject}.`;
    };
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    };

};

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    };

    listsSubjects () {
        return this.favSubjects;
    };

    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    };

    sprintChallenge (subject){
        return `${this.name} has begun sprint challenge for ${subject}.`;
    };

};

class Pm extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    };

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel stand up times!`;
    };

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}\'s code on ${subject}.`;
    };
};


//-------------- TESTING --------//

const josh = new Instructor ({
    location: 'California',
    name: 'Josh',
    age: 30,
    gender: 'M',
    favLanguage: 'JavaScript, Python, Elm etc',
    specialty: 'Full Stack',
    catchPhrase: 'Kill the mammoth'
});

const das = new Student ({
    location: 'Long Beach',
    name: 'DAS',
    age: 35,
    gender: 'M',
    previousBackground: 'Project Manager',
    favSubjects: ['CSS', 'JS', 'HTML'],
    className: 'CS12'


});

const calum = new Pm ({
    location: 'Somewhere',
    name: 'Calum',
    gradClassName: 'CS12',
    favInstructor: 'Josh'

});


//--------- Testing Instructor -------//
console.log(`\n// Instructor Testing //\n`);

console.log(josh.specialty);
console.log(josh.favLanguage);
console.log(josh.catchPhrase);
//Methods
console.log(josh.demo("Javascript"));
console.log(josh.grade(das, "HTML"));

console.log(`\n//---------------------//\n`);

//-------- Testing Student ----------//
console.log(`\n// Student Testing //\n`);

console.log(das.previousBackground);
console.log(das.className);
console.log(das.favSubjects);
//Methods
console.log(das.listsSubjects());
console.log(das.PRAssignment("CSS"));
console.log(das.sprintChallenge("JavaScript-IV"));

console.log(`\n//---------------------//\n`);

//-------- Testing  Project Manager----------//
console.log(`\n// Project Manager Testing //\n`);

console.log(calum.gradClassName);
console.log(calum.favInstructor);
//Methods
console.log(calum.standUp('CS12-Channel'));
console.log(calum.debugsCode(das, 'JavaScript'));



