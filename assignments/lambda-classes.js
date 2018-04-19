// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors


// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock​​​​​ where name and location are the object's own props
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Person {
    constructor(instructorsObj){
        super(instructorsObj);

    }
}

class Students extends Person {
    constructor(studentsObj){
        super(studentsObj);
    }
}

class ProjectManagers extends Instructors {
    constructor(projectManagersObj){
        super(projectManagersObj);
    }
}

// Objects

const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const alice = new Students({
    name: 'Alice',
    location: 'Seattle',
    age: 27,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: ``
});

const pete = new Students({
    name: 'Pete',
    location: 'Denver',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: ``
});

const jess = new ProjectManagers({
    name: 'Jess',
    location: 'New York',
    age: 34,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: ``
});

// Tests
console.log(pete.speak());