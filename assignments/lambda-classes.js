//------------constructors----------//

class Person {
    constructor (attribute){
        this.name = attribute.name;
        this.age = attribute.name;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor(teachAt){
    super(teachAt);
    this.specialty = teachAt.specialty;
    this.favLanguage = teachAt.favLanguage;
    this.catchPhrase = teachAt.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.specialty}.`;
    }
    grade() {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor (learnAt) {
    super (learnAt);
    this.previousBackground = learnAt.previousBackground;
    this.className = learnAt.className;
    this.favSubjects = learnAt.favSubjects;
    }
    listsSubjects (){
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        })
    }
   
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAt) {
    super (pmAt);
    this.gradClassName = pmAt.gradClassName;
    this.favInstructor = pmAt.favInstructor;
    }
    standUp (){
        return `${this.name} announces to @channel standy time!`;
    }
}
//------------------- Objects----------//

const agatha = new Instructor ({
    name: 'Agatha',
    age: 38,
    location: 'Lexington',
    gender: 'F',
    specialty: 'Python',
    favLanguage: 'C#',
    catchPhrase: 'just a drop in the bucket.'
});

const jared = new Instructor ({
    name: 'Jared',
    age: 38,
    location: 'Birmingham',
    gender: 'M',
    specialty: 'Framworks',
    favLanguage: 'R',
    catchPhrase: 'Bob\'s your uncle.'
});

const carmichael = new Student ({
    name: 'Carmichael',
    age: 19,
    location: 'Hartford',
    gender: 'M',
    previousBackground: 'student',
    className: 'CS132',
    favSubjects: ['math', 'UI', 'Java']
});


console.log(agatha.speak());
console.log(jared.demo());
console.log(carmichael.favSubjects);
console.log(carmichael.sprintChallenge("math"))