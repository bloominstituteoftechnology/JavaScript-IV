class Person{
    constructor(stats) {
        this.name = stats.name;
        this.age = stats.age;
        this.location = stats.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(stats) {
        super(stats)
        this.speciality = stats.speciality;
        this.favLanguage = stats.favLanguage;
        this.catchPhrase = stats.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

const ricky = new Instructor({
    name: 'Rickay',
    location: 'Texas',
    age: 42,
    speciality: 'Back-end',
    favLanguage: 'C#',
    catchPhrase: 'When I was a little girl in Poland...'
});

const martha = new Instructor({
    name: 'Martha',
    location: 'Florida',
    age: 26,
    speciality: 'Admissions',
    favLanguage: 'Spanish',
    catchPhrase: 'I hated that movie.'
});



class Student extends Person{
    constructor(stats) {
        super(stats)
        this.previousBackground = stats.previousBackground;
        this.className = stats.className;
        this.favSubjects = stats.favSubjects;
    }
    listSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint chhallenge on ${subject}.`);
    }
}

const jane = new Student({
    name: 'Jane',
    location: 'Madrid',
    age: 16,
    speciality: 'Instagram Marketing',
    favLanguage: 'Mean Girls',
    catchPhrase: 'Ugh',
    previousBackground: 'Instagram Marketer',
    className: 'Web 21',
    favSubjects: ['Spanish', 'Marketing']
});


const tom = new Student({
    name: 'Tom',
    location: 'Bristol',
    age: 32,
    speciality: 'Guitar',
    favLanguage: 'British English',
    catchPhrase: 'I never knew that.',
    previousBackground: 'Musician',
    className: 'iOS 3',
    favSubjects: ['Music', 'React']
});
jane.listSubjects();

class ProjectManager extends Instructor{
    constructor(stats) {
        super(stats)
        this.gradClassName = stats.gradClassName;
        this.favInstructor = stats.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}'`);
    }
}
