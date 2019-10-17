// CODE here for your Lambda Classes
class Person{
    constructor(atts){
        this.name = atts.name;
        this.age = atts.name;
        this.location = atts.location;
        this.subject = atts.subject;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from the ${this.location}!`
    }
}

class Student extends Person{
    constructor(atts){
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
    }
    listsSubjects(){
        return `These are my favorite subjects - ${this.favSubjects}!`
    }
    prAssignment(){
        return `${this.name} has submitted a PR for ${this.subject}!`
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subject}!`
    }
}

class Instructor extends Person{
    constructor(atts){
        super(atts);
        this.specialty = atts.specialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
        
    }
    demo(){
        return `Today we are learning about ${this.subject}!`
    }
    grade(){
        return `${Student.name} receives a perfect score on ${this.subject}!`
    }
}

class ProjectManager extends Instructor{
    constructor(atts){
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
        this.channel = atts.channel;
    }
    standUp(){
        return `${this.name} announces to ${this.channel}, @channel standy times!`
    }
    debugsCode(){
        return `${this.name} debugs ${Student.name}'s code on ${this.subject}!`
    }
}


const james = new Person({
    name: "James",
    age: 33,
    location: "USA",
    subject: "biology"

})

console.log(james.speak());

const emily = new Person({
    name: "Emily",
    age: 33,
    location: "Austrailia",
    subject: "biology"

})

// console.log(emily.speak());

const brit = new Instructor({
    name: "Brit",
    age: 25,
    location: "USA",
    subject: "Classes",
    specialty: "Web Development",
    favLanguage: "JS",
    catchPhrase: "AYEEE IM CANADIAN!"

})

console.log(brit.demo());
console.log(brit.grade());

const jordan = new Instructor({
    name: "Jordan",
    age: 25,
    location: "USA",
    subject: "Classes",
    specialty: "Web Development",
    favLanguage: "JS",
    catchPhrase: "AYEEE IM CANADIAN!"

})

// console.log(jordan.demo());
// console.log(jordan.grade());

const josh = new Student({
    name: "Josh",
    age: 22,
    location: "USA",
    subject: "Classes",
    previousBackground: "College Student",
    className: "WEB25",
    favSubjects: "JavaScript, HTML, CSS"
})
console.log(josh.listsSubjects());
console.log(josh.prAssignment());
console.log(josh.sprintChallenge());

const brendan = new Student({
    name: "Brendan",
    age: 22,
    location: "USA",
    subject: "Classes",
    previousBackground: "College Student",
    className: "WEB25",
    favSubjects: "JavaScript, HTML, CSS"
})

// console.log(brendan.listsSubjects())
// console.log(brendan.prAssignment())
// console.log(brendan.sprintChallenge())

const roenz = new ProjectManager({
    name: "Roenz",
    age: 26,
    location: "USA",
    subject: "Classes",
    specialty: "Web Development",
    favLanguage: "JS",
    catchPhrase: "MACHINE LEARNING!",
    gradClassName: "WEB20??",
    favInstructor: "BRITTTTTT",
    channel: "the slack channel WEB_25_ROENZ"
})

console.log(roenz.standUp());
console.log(roenz.debugsCode());


const ryan = new ProjectManager({
    name: "Ryan",
    age: 26,
    location: "USA",
    subject: "Classes",
    specialty: "Web Development",
    favLanguage: "JS",
    catchPhrase: "MACHINE LEARNING!",
    gradClassName: "WEB20??",
    favInstructor: "BRITTTTTT",
    channel: "the slack channel WEB_25_RYAN"
})

// console.log(ryan.standUp());
// console.log(ryan.debugsCode());