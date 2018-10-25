// CODE here for your Lambda Classes
class Person {
    constructor(personalInfo) {
        this.name =(personalInfo).name;
        this.age =(personalInfo).age;
        this.location =(personalInfo).location;
        this.gender =(personalInfo).gender;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    };
    demo(subject) {
        return `Today we are learning about ${subject}`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    };
};

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    };
    listsSubjects() {
        let subjects = this.favSubjects;
        subjects.forEach(subject => console.log(subject));
    };
    PRAssignment(student, subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(student, subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
};

class ProMananger extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    };
    standUp(student, channel) {
        return `${this.name} announces to ${channel} @channel put ya hands in the air! It's stand-up time!`;
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}

const rajesh = new Instructor({
    name: 'Raj',
    location: 'California',
    age: 31,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `I am resplendent, am I not?`
});

const sheldon= new Instructor({
    name: 'Sheldon',
    location: 'Calfiornia',
    age: 33,
    gender: 'male',
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: 'BAZINGA!'
});

const howard = new Instructor({
    name: 'Wolowitz',
    location: 'California',
    age: 30,
    gender: 'male',
    favLanguage: 'the language of love',
    specialty: 'being a creeper',
    catchPhrase: 'I say let\'s pour one out for the science homies that came before us.'
});

const penny = new Student({
    name: 'Penny',
    age: 24,
    location: 'Nebraska',
    gender: 'female',
    previousBackground: ["Actress"],
    className: "FSW 15",
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

  const leonard = new Student({
    name: 'Leonard',
    age: 31,
    location: 'New York City',
    gender: 'male',
    previousBackground: ["Grad Student"],
    className: "FSW 15",
    favSubjects: ['CSS', 'JavaScript']
});

const bernadette = new Student({
    name: 'Bernie',
    age: 29,
    location: 'Washington',
    gender: 'female',
    previousBackground: ["Grad Student"],
    className: "FSW 15",
    favSubjects: ['HTML']
  });
  