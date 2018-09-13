// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (instructoroptions){
        super(instructoroptions);
        this.specialty = instructoroptions.specialty;
        this.favLanguage = instructoroptions.favLanguage;
        this.catchPhrase = instructoroptions.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about {subject}`;
    }

    grade() {
        return `${this.name} receives a perfect score on {subject}`;
    }
}

class Student extends Person {
    constructor (studentoptions){
        super(studentoptions);
        this.previousBackground = studentoptions.previousBackground;
        this.className = studentoptions.className;
        this.favSubjects = studentoptions.favSubjects;
    }

    listsSubjects() {
        return `list of favSubjects`;
    }

    PRAssignment() {
        return `${this.name} has submitted a PR for {subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor (projectmanagersoptions){
        super(projectmanagersoptions);
        this.gradClassName = projectmanagersoptions.gradClassName;
        this.favInstructor = projectmanagersoptions.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }

    debugsCode() {
        return `${this.name} debugs {student.name}'s code on {subject}.`;
    }
}

const jim = new Person({
    name: 'Jim',
    age: 45,
    location: 'Utah',
    gender: 'male',

});

const victoria = new Person({
    name: 'Victoria',
    age: 45,
    location: 'Utah',
    gender: 'male',

});
const josh = new Instructor({
    name: 'Josh',
    age: 30,
    location: 'Utah',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Don\'t forget the homies'
});

const bob = new Instructor({
    name: 'Bob',
    age: 30,
    location: 'Florida',
    gender: 'male',
    favLanguage: 'Node.js',
    specialty: 'SEO',
    catchPhrase: 'I dont know why it works, I dont know why it doesn\'t work'
});


console.log(josh.demo());
console.log(bob.speak());

const doug = new ProjectManagers ({
    name: 'doug',
})

console.log(doug.standUp('fsw14'));