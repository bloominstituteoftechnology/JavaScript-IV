// ------------------- class declarations -------------------
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
} //end Person class

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
} //end Instructor class

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach((subject) => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallent(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
} //end Student class

class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
} //end Product Manager class

// ------------------- object declarations -------------------

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 30,
    gender: 'male',
    specialty: 'Full Stack',
    favLanguage: 'JavaScript',
    catchPhrase: 'That\'s dope.'
});

const mrsPancakes = new Instructor({
    name: 'Mrs. Pancakes',
    location: 'Washington',
    age: 31,
    gender: 'female',
    specialty: 'QA Testing',
    favLanguage: 'CoffeeScript',
    catchPhrase: 'You don\'t know me!'
});

const sarah = new Student({
    name: 'Sarah',
    location: 'Massachusetts',
    age: 26,
    gender: 'female',
    previousBackground: 'Customer Service',
    className: 'FSW14',
    favSubjects: ['HTML', 'CSS', 'JavaScript', 'C#', 'Java']
});

const jeff = new Student({
    name: 'Jeff',
    location: 'Massachusetts',
    age: 25,
    gender: 'male',
    previousBackground: 'Business Analyst',
    className: 'none',
    favSubjects: ['PHP', 'Python', 'MongoDB', 'JavaScript', 'Database Management']
});

const tai = new ProjectManager({
    name: 'Tai',
    location: 'Alabama',
    age: 27,
    gender: 'male',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'I\'m making coffee now.',
    gradClassName: 'CS11',
    favInstructor: 'Josh'
});

const clementine = new ProjectManager({
    name: 'Clementine',
    location: 'Texas',
    age: 24,
    gender: 'female',
    specialty: 'UX/UI Design',
    favLanguage: 'English',
    catchPhrase: 'We need to be customer centric!',
    gradClassName: 'CS4',
    favInstructor: 'Josh'
});

// ------------------- testing -------------------

console.log(`josh.name: ${josh.name}`);
console.log(`mrsPancakes.location: ${mrsPancakes.location}`);
console.log(`sarah.age: ${sarah.age}`);
console.log(`jeff.gender: ${jeff.gender}`);
console.log(`tai.specialty: ${tai.specialty}`);
console.log(`clementine.favLanguage: ${clementine.favLanguage}`);
console.log(`josh.catchPhrase: ${josh.catchPhrase}`);
console.log(`sarah.className: ${sarah.className}`);
console.log(`jeff.favSubjects: ${jeff.favSubjects}`);
console.log(`tai.gradClassName: ${tai.gradClassName}`);
console.log(`clementine.favInstructor: ${clementine.favInstructor}`);

console.log('-----------------------------');

josh.speak();
josh.grade(jeff, 'street smarts');
mrsPancakes.demo('the meaning of human existence');
sarah.speak();
sarah.listsSubjects();
jeff.PRAssignment('Neopets HTML');
jeff.sprintChallent('JavaScript-IV');
tai.speak();
tai.demo('Bootstrap');
clementine.grade(sarah, 'JavaScript');
tai.standUp('fsw14_tai');
clementine.debugsCode(jeff, 'C');

