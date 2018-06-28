// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(favSubjects1, favSubjects2, favSubjects3){
        return `My favorite subjects are ${favSubjects1}, ${favSubjects2}, ${favSubjects3}.`;
        
    };
    PRAssingment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}.`
    }
}
 
class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}

const josh = new Instructor({
    name: `Josh`,
    age: 35,
    location: `Michigan`,
    gender: `M`,
    specialty: `Web Devlopement`,
    favLanguage: `Javascript`,
    catchPhrase: `I invoke thine function!`
})

const james = new Student({
    name: `James`,
    age: 30,
    location: `Florida`,
    gender: `M`,    
    previousBackground: `None`,
    className: `CS12`,
    favSubjects: [`HTML`, `CSS`, `Javascript`]
})

const mike = new ProjectManager({
    name: `Michael`,
    age: 28,
    location: `Central US`,
    gender: `M`,
    specialty: `Game Developement`,
    favLanguage: `React`,
    catchPhrase: `It happened to me too.`,
    gradClassName: `CS7`,
    favInstructor: `Josh`
})

console.log(josh.catchPhrase)
console.log(mike.speak())
console.log(james.listSubjects(...james.favSubjects))
console.log(josh.demo(`CSS`))
console.log(mike.grade(james, `Javascript`))
console.log(james.PRAssingment(`Javascript-III`))
console.log(james.sprintChallenge(`Javascript`))
console.log(mike.standUp(`CS12-Michael`))
console.log(mike.debugsCode(`Alex`, `Javascript`))
