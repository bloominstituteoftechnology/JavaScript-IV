// CODE here for your Lambda Classes
class Person{
    constructor(people){
        this.name = people.name;
        this.age = people.age;
        this.location = people.location;
        this.gender = people.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}


class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects(){
        this.favSubjects.forEach( (array) => {
            console.log(array);
        })
        }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a Pull Request on ${subject}.`)
    } 
    sprintChallenge(student, subject){
        console.log(`${student.name} has begun Sprint Challenge on ${subject}.`)
    }       
    }

class ProjectManager extends Instructor {

    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel} , @channel study times!`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}    

const josh = new Instructor({
    'name':'Josh',
    'age':30,
    'location':'Utah',
    'gender':'M',
    'specialty': 'Web Development',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'catchyCatchPhrase'
})

const carlo = new Student({
    'name':'Carlo',
    'age':21,
    'location':'Texas',
    'gender':'M',
    'previousBackground':'No background on programming',
    'className':'FSW14',
    'favSubjects':['HTML','CSS','JavaScript'],
})

const kevin = new ProjectManager ({
        'name':'Kevin',
        'age':25,
        'location':'USA',
        'gender':'M',
        'specialty': 'Watching over his people',
        'favLanguage': 'JavaScript',
        'catchPhrase': 'Its ok to take a break',
        'gradClassName': 'CS11',
        'favInstructor': 'Josh Knell'
})


console.log(josh);
console.log(carlo);
console.log(kevin);

josh.demo("JavaScript");
josh.grade(carlo,'JavsScript');
carlo.listsSubjects();
carlo.PRAssignment('JavsScript');
kevin.standUp('fsw14 kevin');
kevin.debugsCode(carlo,'JavaScript');
