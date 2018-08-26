// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name ;
        this.age = obj.age ;
        this.location = obj.location ;
        this.gender = obj.gender ;

    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(obj) {
        this.specialty = obj.specialty ;
        this.favLanguage = obj.favLanguage ;
        this.catchPhrase = obj.catchPhrase ;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(studentObj, subjectStr) {
        return `${studentObj.name0} recieves a perfect score on ${subjectStr}.`
    }
}