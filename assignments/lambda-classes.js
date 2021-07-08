// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.favLanguage = attributes.favLanguage;
        this.specialty = attributes.specialty;
        this.catchPhrase = attributes.catchPhrase
    }
    listSubjects(){
        // console.log(this.favSubjects);
        for(let i = 0; i< this.favSubjects.length; i++){
            console.log(`${this.favSubjects[i]}`);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes)
        this.favLanguage = attributes.favLanguage;
        this.specialty = attributes.specialty;
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


class ProjectManager extends Instructor{
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.favLanguage = attributes.favLanguage;
        this.specialty = attributes.specialty;
        this.catchPhrase = attributes.catchPhrase;
    }
    standUp(channel){
       return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
       return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const bobby = new Student({
    name: 'Bobby',
    age: 37,
    location: 'Michigan',
    previousBackground: "Grow with Google Front End Nano Degree",
    className: "WebPT8",
    favSubjects: ["Apis", "ReactJS"]
});

const aislynn = new ProjectManager({
    name: 'Aislynn',
    location: 'Flat rock',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    gradClassName: 'Web12',
    favInstructor: 'Keiran',
    catchPhrase: `Don't forget the Jalapenos`
});


console.log(bobby.speak());
bobby.listSubjects();
console.log(aislynn.demo('javaScript'));
console.log(aislynn.grade(bobby, 'javaScript'));
console.log(aislynn.standUp('aislynn-webpt8'));
console.log(aislynn.debugsCode(bobby , 'javaScript'));
console.log(bobby.PRAssignment('javaScript'));
console.log(bobby.sprintChallenge('javaScript'));

