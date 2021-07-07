// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.newAge = attributes.age;
        this.newName = attributes.name;
        this.newLocation = attributes.location;
        this.newGender = attributes.gender;
    };
    speak() {
        return `Hello, this is ${this.newName} and I am from ${this.newLocation}.`
    };
};
class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.newSpecialty = instructorAttr.specialty;
        this.newFavLanguage = instructorAttr.favLanguage;
        this.newCatchPhrase = instructorAttr.catchPhrase;
    };
    demo() {
        return `Today we are learning about Javascript.`
    };
    grade() {
        return `Victor receives a perfect score on Javascript`
    };
};
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.newPreviousBackground = studentAttr.previousBackground;
        this.newClassName = studentAttr.className;
        this.newFavSubjects = studentAttr.favSubjects;
    };
    listsSubjects() {
        return `${this.newFavSubjects} are my favorite!`;
    };
    PRAssignment() {
        return `${this.newName} has submitted a PR for Javascript.`;
    };
    sprintChallenge() {
        return `${this.newName} has begun a sprint challenge for Javascript.`;
    };
};
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.newGradClassName = pmAttr.gradClassName;
        this.newFavInstructor = pmAttr.favInstructor;
    };
    standUp() {
        return `${this.newName} announces to Web19, @channel standy times!​​​​​`;
    };
    debugsCode() {
        return `${this.newName} debugs student's code on Javascript.`;
    };
};

const god = new Person({
    age: 'Old',
    name: 'God',
    location: 'Heaven',
    gender: 'divine'
});
const josh = new Instructor({
    age: 30,
    name: 'Josh',
    location: 'Utah',
    gender: 'Male',
    specialty: 'playing the banjo',
    favLanguage: 'Hmong',
    catchPhrase: 'I promise you yesterday was worse'
});
const dan = new Instructor({
    age: 31,
    name: 'Dan',
    location: 'somewhere',
    gender: 'Male',
    specialty: 'replacing Josh',
    favLanguage: 'Javascript',
    catchPhrase: 'Hello I am Dan'
});
const victor = new Student({
    age: 20,
    name: 'Victor',
    location: 'South Carolina',
    gender: 'Male',
    specialty: 'HTML and CSS',
    favLanguage: 'HTML and CSS',
    catchPhrase: 'This is hard',
    previousBackground: 'Business major',
    className: 'Web19',
    favSubjects: ['HTML', ' CSS', ' Javascript']
})
const joe = new Student({
    age: 24,
    name: 'Joe',
    location: 'South Dakota',
    gender: 'Male',
    specialty: 'HTML and React',
    favLanguage: 'HTML',
    catchPhrase: 'I love Lambda!',
    previousBackground: 'Science major',
    className: 'Web19',
    favSubjects: ['HTML ', 'CSS ']
})
const bob = new Student({
    age: 32,
    name: 'Bob',
    location: 'Hawaii',
    gender: 'Male',
    specialty: 'none',
    favLanguage: 'none',
    catchPhrase: 'I dont love Lambda!',
    previousBackground: 'construction worker',
    className: 'Web19',
    favSubjects: ['HTML ', 'CSS ', 'React ']
})
const joshua = new ProjectManager({
    age: 26,
    name: 'Joshua',
    location: 'Arizona',
    gender: 'Male',
    specialty: 'leading our group',
    favLanguage: 'HTML',
    catchPhrase: 'What was difficult and what was easy',
    gradClassName: 'WEB17',
    favInstructor: 'Josh'
});
const nancy = new ProjectManager({
    age: 18,
    name: 'Nancy',
    location: 'South Carolina',
    gender: 'Female',
    specialty: 'sleeping',
    favLanguage: 'HTML',
    catchPhrase: 'Try harder',
    gradClassName: 'WEB17',
    favInstructor: 'Dan'
});

console.log(nancy.grade());