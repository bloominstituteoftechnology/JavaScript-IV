// CODE here for your Lambda Classes

class People {
    constructor (person) {
       this.name = person.name;
       this.age = person.age;
       this.location = person.location;
       this.gender = person.gender;
    }
    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends People {  // child of People 
    constructor (instructor) {
        super (instructor)
        this.favLanguage = instructor.favLanguage;
        this.specialty = instructor.specialty;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo (subject){
        return `Today we are learning about ${subject}.`
    }
    grade (student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends People {  // child of People 
    constructor (theStudent) {
        super (theStudent)
        this.previousBackground = theStudent.previousBackground;
        this.className = theStudent.className;
        this.favSubjects = theStudent.favSubjects;
    } 
    listSubjects (){
        this.favSubjects.forEach((subject)=> {
            console.log(subject)
        });
    }
    PRassignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

class ProjectManager extends Instructor{ // extends Instructor
    constructor (pm) {
        super (pm)
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp (channel){
       return  `${this.name} announces to ${channel}, @channel standby times!`
    }
    debugsCode (student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const cameron = new Instructor ({
    name: 'Cameron',
    location: 'SomeWhere, USA',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Alexa turned on my music`
})

const josh = new Instructor ({
    name: 'Josh',
    location: 'Salt Lake City',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Hi, I am Josh` 
})

const jamar = new Student ({
    name: 'Jamar',
    location: 'NYC',
    age: 30,
    gender: 'male',
    // favLanguage: 'JavaScript',
    // specialty: 'Full-Stack',
    // catchPhrase: `Alexa turned on my music`
    previousBackground: 'International relations',
    className: 'FSWPT3',
    favSubjects: ['Html', 'CSS', 'JavaScript', 'node.js']
})

const karla = new Student ({
    name: 'Jamar',
    location: 'Brooklyn',
    age: 25,
    gender: 'female',
    // favLanguage: 'JavaScript',
    // specialty: 'Full-Stack',
    // catchPhrase: `Alexa turned on my music`
    previousBackground: 'tech related',
    className: 'FSWPT3',
    favSubjects: ['JavaScript', 'Python']
})

const mustafa = new Student ({
    name: 'Mustafa',
    location: 'Bay Area',
    age: 22,
    gender: 'male',
    // favLanguage: 'JavaScript',
    // specialty: 'Full-Stack',
    // catchPhrase: `Alexa turned on my music`
    previousBackground: 'tech related',
    className: 'FSWPT3',
    favSubjects: ['css.LESS', 'CSS', 'JavaScript']
})

const austin = new ProjectManager ({
    name: 'Austin',
    location: 'Central USA',
    age: 27,
    gender: 'male',
    gradClassName: 'FT3',
    favInstructor: 'Josh'
})


console.log(cameron)
console.log(josh.favLanguage)
console.log(cameron.speak());
console.log(cameron.demo('JavaScriptIV'))
console.log(josh.grade(jamar, 'JavaScriptII'))
console.log(jamar)
console.log(jamar.favSubjects)
console.log(austin)
console.log(austin.standUp('FSWPT3'))
console.log(austin.debugsCode(jamar, 'JSIV homework'))