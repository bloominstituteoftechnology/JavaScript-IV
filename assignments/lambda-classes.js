/**
 * A class to represent a person at school.
 * @class
 * @constructor
 * @property name the person's name
 * @property age the person's age
 * @property location the person's location
 * @property gender the person's gender
 * @function speak() return a string  
 */

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

/**
 * A class to represent an instructor at school.
 * @class
 * @constructor
 * @augments Person
 * @property specialty the instructor's specialty
 * @property favLanguage the instructor's favLanguage
 * @property catchPhrase the instructor's catchPhrase
 * @function demo() 
 *      @param subject 
 *      @returns string '​​​​​Today we are learning about {subject}' 
 * @function grade() 
 *      @param studentObject
 *      @param subject
 *      @returns string '​​​​​{student.name} receives a perfect score on {subject}'
 */
class Instructors extends Person {
    constructor(instructorsObj){
        super(instructorsObj);
        this.specialty = instructorsObj.specialty;
        this.favLanguage = instructorsObj.favLanguage;
        this.catchPhrase = instructorsObj.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
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
console.log(fred.demo('Js-III'))
console.log(fred.grade(pete, 'Js-III'))