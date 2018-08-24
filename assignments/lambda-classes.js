class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj)
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(str) {
        console.log(`Today we are learning about ${str}.`)
    }
    grade(obj, str) {
        console.log(`${obj.name} receives a perfect score on ${str}!`)
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj)
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.FavSubjects = obj.FavSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.FavSubjects.length; i++) {
            console.log(this.FavSubjects[i])
        }
    }
    PRAssignment(str) {
        console.log(`${this.name} has submitted a PR for ${str}.`)
    }
    sprintChallenge(str) {
        console.log(`${this.name} has begun sprint challenge on ${str}!`)
    }
}

class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj)
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(str) {
        console.log(`${this.name} announces to ${str}, @channel standy times!​​​​​`)
    }
    debugsCode(obj) {
        console.log(`${this.name} debugs ${obj.name}'s code. `)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 27,
    gender: 'female',
    favLanguage: 'Love',
    specialty: 'Debugging',
    catchPhrase: `No`
});

// fred.speak();
// fred.demo('english');
// fred.grade({name: 'Doug',age: 32},"english");

const barry = new Student({
    name: 'Barry',
    location: 'Reseda',
    age: 27,
    gender: 'male',
    previousBackground: 'none',
    className: 'cspt2',
    FavSubjects: ['Javascript', 'css', 'html'],
});

const larry = new Student({
    name: 'Larry',
    location: 'Santa Monica',
    age: 57,
    gender: 'male',
    previousBackground: 'none',
    className: 'cspt3',
    FavSubjects: ['Javascript', 'geography', 'html'],
});

const gary = new Student({
    name: 'Gary',
    location: 'Atlanta',
    age: 37,
    gender: 'male',
    previousBackground: 'none',
    className: 'cspt2',
    FavSubjects: ['Javascript', 'science', 'html'],
});

const doug = new ProjectManagers({
    name: 'Doug',
    location: 'Tahoe',
    age: 30,
    gender: 'male',
    gradClassName: 'CS11',
    favInstructor: 'Dan',
});

const john = new ProjectManagers({
    name: 'John',
    location: 'Havana',
    age: 45,
    gender: 'male',
    gradClassName: 'CS10',
    favInstructor: 'Dan',
});


const sam = new Person({
    name: 'Sam',
    location: 'Tahoe',
    age: 20,
    gender: 'female',
});

const carl = new Person({
    name: 'Carl',
    location: 'Tahoe',
    age: 100,
    gender: 'male',
});
fred.demo('Less');
wilma.grade(gary, 'Less');
carl.speak();
barry.listsSubjects();
gary.PRAssignment('Javascript');
larry.sprintChallenge('JavaScript');
doug.standUp('CSPT2');
john.debugsCode(barry);
