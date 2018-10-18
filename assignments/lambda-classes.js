// CODE here for your Lambda Classes
class Person {
    constructor(personStats) {
        this.name = personStats.name;
        this.age = personStats.age;
        this.location = personStats.location;
        this.gender = personStats.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}!`
    }
}

const poop = new Person({
    name: 'poop',
    age: 'poopAge',
    location: 'poopVille',
    gender: 'poopSexual',
});


const coolDude = new Person ({
    name: 'Fonzie',
    age: 'Who cares?',
    location: 'Where the wind takes me.',
    gender: 'pansexual' 
});

console.log(poop.speak());
console.log(coolDude.speak());

class Instructor extends Person{
    constructor(instructorStats) {
        super(instructorStats);
        this.speciality = instructorStats.speciality;
        this.favLanguage = instructorStats.favLanguage;
        this.catchPhrase = instructorStats.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} recieves a very cool score on ${subject}.`
    }
}

const josh = new Instructor( {
    name: 'Josh',
    age: '30',
    location: 'Mid-West',
    gender: 'male',
    speciality: 'being cool',
    favLanguage: 'React',
    catchPhrase :'Yo, good job there. That was well done.'
});

const obiwan = new Instructor( {
    name: 'Obi-Wan',
    age: '70',
    location: 'Tatooine',
    gender: 'male',
    speciality: 'disappearing',
    favLanguage: 'SandPeople',
    catchPhrase : 'Trust in the force. I mean, I died but lol im a spirit cool amirite'
});

const poopMaster = new Instructor({
    name: 'poop',
    age: 'poopAge',
    location: 'poopVille',
    gender: 'poopSexual',
    speciality: 'pooping',
    favLanguage: 'pooScript',
    catchPhrase : 'Pooping feels good. And its good for you.'
});

console.log(poopMaster.demo("math"));

class Student extends Person {
    constructor(studentStats) {
        super(studentStats);
        this.previousBackground = studentStats.previousBackground;
        this.className = studentStats.className;
        this.favSubjects = studentStats.favSubjects;
    }
    listsSubjects(favSubjects) {
        return (favSubjects);
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(pmStats){
        super(pmStats);
        this.gradClassName = pmStats.gradClassName;
        this.favInstructor = pmStats.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}

const daniel = new Student ({
    name: 'Daniel',
    location: 'Florida',
    age: '25',
    gender: 'male',
    previousBackground:'Python',
    className: 'FSW_15',
    favSubjects: ["Inheritance","Flexbox","Generator functions"],
});

const trevor = new ProjectManagers({
    name: 'Trevor',
    location: 'behind you',
    age: 'I dont Age',
    gender: 'flexible',
    specialty: 'Frontend development',
    favLanguage: 'Javascript',
    favSubjects: ['js', 'html', 'react']
 });

 trevor.standUp('goodstuff');
 trevor.debugsCode(daniel, 'Javascript');