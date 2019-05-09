// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location= attributes.location;
    }
    //meathods
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}.`
    }
}//person

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    //meathods
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}.`
    }
}// instructor

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBkg = attributes.previousBkg;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    //meathods
    listsSubjects(){
        return (`{${this.favSubjects}}`)
    }
    praassignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;  
    }
    //meathods
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    deBugsCode(student,subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}



const dan = new Instructor({
    name: 'Dan',
    age: 10000,
    location: 'cat house',
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: 'cats, cats, cats',
});

const cole = new Instructor({
    name: 'Cole',
    age: 9,
    location: 'Austin',
    favLanguage: 'Javascript',
    specialty: 'back-end',
    catchPhrase: 'Ditto',
});

const dave = new Student({
    name: 'Cole',
    age: 22,
    location: 'Austin',
    previousBkg: 'barista',
    className: 'WEB-19',
    favSubjects: ['html, css']
});

const tyler = new Student({
    name: 'Tyler',
    age: 50,
    location: 'Dallas',
    previousBkg: 'construction',
    className: 'WEB-18',
    favSubjects: ['html, css, ruby']
});

const zion = new ProjectManager({
    name: 'zion',
    age: 5,
    location: 'Beaumont',
    gradClassName: 'web-1',
    favInstructor: 'Josh Knell'
});

console.log(dan.age)
console.log(dan.catchPhrase)
console.log(dan.specialty)
console.log(dan.favLanguage)
console.log(dan.catchPhrase)
console.log(cole.age)
console.log(cole.catchPhrase)
console.log(cole.specialty)
console.log(cole.favLanguage)
console.log(cole.catchPhrase)
console.log(dave.age)
console.log(dave.favSubjects)
console.log(dave.className)
console.log(dave.previousBkg)
console.log(tyler.age)
console.log(tyler.favSubjects)
console.log(tyler.className)
console.log(tyler.previousBkg)
console.log(zion.age)
console.log(zion.gradClassName)
console.log(zion.favInstructor)

















console.log(dan.speak())
console.log(dan.demo('javascript'))
console.log(dan.grade('javascript'))
console.log(cole.speak())
console.log(cole.demo('java'))
console.log(cole.grade('java'))
console.log(dave.listsSubjects())
console.log(dave.praassignment('java'))
console.log(dave.sprintChallenge('java'))
console.log(tyler.listsSubjects())
console.log(tyler.praassignment('java'))
console.log(tyler.sprintChallenge('java'))
console.log(zion.standup('web-1'))
console.log(zion.deBugsCode('patrick', 'ruby'))



















