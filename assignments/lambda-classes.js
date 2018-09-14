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
        return `Today we are learning about ${subject}`;
    }

    grade(student,subject) {
        return `${student} received a perfect score on ${subject}`;
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
        return `${this.favSubjects}`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor (projectmanagersoptions){
        super(projectmanagersoptions);
        this.gradClassName = projectmanagersoptions.gradClassName;
        this.favInstructor = projectmanagersoptions.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to @${channel}, standby times!`;
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

console.log(jim.speak());

const victoria = new Person({
    name: 'Victoria',
    age: 45,
    location: 'Arizona',
    gender: 'female',

});

console.log(victoria.speak());

const josh = new Instructor({
    name: 'Josh',
    age: 30,
    location: 'Utah',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Don\'t forget the homies'
});

console.log(josh.speak());
console.log(josh.demo('HTML'));
console.log(josh.grade('June', 'HTML'));

const bob = new Instructor({
    name: 'Bob',
    age: 30,
    location: 'Florida',
    gender: 'male',
    favLanguage: 'Node.js',
    specialty: 'SEO',
    catchPhrase: 'I dont know why it works, I dont know why it doesn\'t work'
});

console.log(bob.speak());
console.log(bob.demo('CSS'));
console.log(bob.grade('CSS'));

const alex = new Student({
    name: 'Alex',
    age: 25,
    location: 'Montana',
    gender: 'male',
    previousBackground: 'Ranch Hand',
    className: 'FSW18',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const june = new Student({
    name: 'June',
    age: 38,
    location: 'California',
    gender: 'female',
    previousBackground: 'waitress',
    className: 'OS18',
    favSubjects: ['HTML', 'CSS', 'Python']
});

const ed = new ProjectManagers({
    name: 'Ed',
    age: 31,
    location: 'Maine',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Think before you act.',
    gradClassName: 'CS4',
    favInstructor: 'Bob'
    
});

const maxine = new ProjectManagers({
    name: 'Maxine',
    age: 48,
    location: 'Alabama',
    gender: 'female',
    favLanguage: 'C++',
    specialty: 'Mobile Applications',
    catchPhrase: 'Go Big or go Home.',
    gradClassName: 'CS4',
    favInstructor: 'Bob'
    
});
console.log(josh.demo());
console.log(bob.speak());

