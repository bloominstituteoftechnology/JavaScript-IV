// CODE here for your Lambda Classes

//Person Parent Class

class Person {
    constructor(perAttr) {
      this.name = perAttr.name;
      this.age = perAttr.age;
      this.location = perAttr.location;
      this.gender = perAttr.gender;  
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
};

//Instructor Child Class

class Instructor extends Person {
    constructor(InsAttr) {
        super(InsAttr);
        this.speciality = InsAttr.speciality;
        this.favLanguage = InsAttr.favLanguage;
        this.catchPhrase = InsAttr.catchPhrase;
    }
    demo() {
        console.log(`Today we are learning about ${this.subject}.`);
    }    
    grade() {
        console.log(`${this.student} receives a  perfect score on ${this.subject}.`);
    }
};

//Student Child Class

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment() {
        console.log(`${this.student} has submitted a PR for ${this.subject}.`);
    }
    sprintChallenge() {
        console.log(`${this.student} has begun sprint challenge on ${this.subject}.`);
    }
};

//Project Manager Grandchild Class

class ProjectManager extends Instructor {
    constructor(proAttr) {
        super(proAttr);
        this.gradClassName = proAttr.gradClassName;
        this.favInstructor = proAttr.favInstructor;
    }
    standUp() {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
    }
    debugsCode() {
        console.log(`${this.name} debugs ${this.student}'s code on ${this.subject}.`);
    }
};

//Objects

//Person 

const bob = new Person({
    name: 'Bob',
    age: 32,
    location: 'Lincoln, MA',
    gender: 'male',
});

const kellie = new Person({
    name: 'Kellie',
    age: 22,
    location: 'Kennebunk, ME',
    gender: 'female',
});

const billy = new Person({
    name: 'Billy',
    age: 42,
    location: 'Las Vegas, NV',
    gender: 'male',
});


//Instructor

const kevin = new Instructor({
    name: 'Kevin',
    age: 38,
    location: 'Canton, NY',
    gender: 'male',
    speciality: 'Back-end',
    favLanguage: 'Html',
    catchPhrase: `Hit the classes up!`
});

const sammy = new Instructor({
    name: 'Sammy',
    age: 45,
    location: 'Glasonbury, CT',
    gender: 'female',
    speciality: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: `Open 'em books!`
});

const katie = new Instructor({
    name: 'Katie',
    age: 30,
    location: 'Willshire, VT',
    gender: 'female',
    speciality: 'Redux',
    favLanguage: 'C sharp',
    catchPhrase: `Go Beef!`
});


//Students

const kelly = new Student({
    name: 'Kelly',
    age: 24,
    location: 'Haven, ME',
    gender: 'female',
    previousBackground: 'therapist',
    className: 'WEB17',
    favSubjects: 'CSS'
});

const jennifer = new Student({
    name: 'Jennifer',
    age: 23,
    location: 'Haverly, OR',
    gender: 'female',
    previousBackground: 'make-up artist',
    className: 'WEB16',
    favSubjects: 'Ruby'
});

const john = new Student({
    name: 'John',
    age: 58,
    location: 'Amherst, MA',
    gender: 'male',
    previousBackground: 'doctor',
    className: 'WEB13',
    favSubjects: 'C++'
});


//Project Manager

const keith = new ProjectManager({
    name: 'Keith',
    age: 28,
    location: 'Natick, CA',
    gender: 'male',
    speciality: 'Front-end',
    favLanguage: 'Java',
    catchPhrase: `Drop a beat!`,
    gradClassName: 'CS4',
    favInstructor: 'Kevin'
});

const marcus = new ProjectManager({
    name: 'Marcus',
    age: 27,
    location: 'Lebanon, KY',
    gender: 'male',
    speciality: 'React',
    favLanguage: 'Python',
    catchPhrase: `What's up Doc!`,
    gradClassName: 'CS2',
    favInstructor: 'Sammy'
});

const carley = new ProjectManager({
    name: 'Carley',
    age: 25,
    location: 'San Diego, CA',
    gender: 'female',
    speciality: 'Swift',
    favLanguage: 'PHP',
    catchPhrase: `Whatcha doing buddy!`,
    gradClassName: 'CS1',
    favInstructor: 'Katie'
});


//Check console.logs

console.log(bob.name); //
console.log(kellie.age); //
console.log(billy.location); //
console.log(kevin.gender); //
console.log(sammy.speciality); //
console.log(katie.favLanguage); //
console.log(kelly.previousBackground); //
console.log(jennifer.className); //
console.log(john.favSubjects); //
console.log(keith.catchPhrase); //
console.log(marcus.gradClassName); //
console.log(carley.favInstructor); //


