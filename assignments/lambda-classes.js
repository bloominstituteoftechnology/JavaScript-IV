// CODE here for your Lambda Classes

/**
 * ------- Person -------
 */
class Person {
    constructor(options){
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
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
    
}
/**
 * ------- Student -------
 */
class Student {
    constructor(options){
        this. = options.;
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