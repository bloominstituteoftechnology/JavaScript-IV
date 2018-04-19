// CODE here for your Lambda Classes

/**
 * ------- Person -------
 */
class Person {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
/**
 * ------- Instructor -------
 */
class Instructor extends Person {
    constructor(options){
        super(options)
        this.speciality = options.speciality;
        this.favLanguage = options.favLanguage;
        this.catchPhrase = options.catchPhrase;
    }
    demo(subject) {
        console.log(`'​​​​​Today we are learning about ${subject}'`);
    }
    grade(studen, subject) {
        console.log()`'​​​​​${student.name} receives a perfect score on ${subject}'`;
    }
}
/**
 * ------- Student -------
 */
class Student extends Person {
    constructor(options){
        super(options);
        this.previousBackground = options.previousBackground;
        this.className = options.className;
        this.favSubjects = options.favSubjects; //array
    }
    listsSubjects(){
        this.favSubjects.forEach( subject => {
            console.log(subject);
        });
    }
    PRAssigment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    springChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`);
    }
}
/**
 * ------- ProjectM -------
 */
class ProjectM {
    constructor(options){
        this. = options.;
    }
}