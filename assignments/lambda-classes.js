

//== Class Definitions =========================================================

class Person {
    constructor (personalInfo) {
        this.name = personalInfo.name;
        this.age = personalInfo.age;
        this.location = personalInfo.location;
        this.gender = personalInfo.gender;
    }
    speak (){
        console.log(`Hello my name is ${this.name} from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor (instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (targetStudent, subject) {
        console.log(`${targetStudent.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects () {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        })
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor (PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }
    standup (channel) {
        console.log(`${this.name} accounces to ${channel}, @channel standy times!`);
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//== Test Instances ============================================================

const alice = new Instructor({
    name: 'Alice',
    location: 'Here',
    age: 32,
    gender: 'female',
    favLanguage: 'SQL',
    specialty: 'Monologues',
    catchPhrase: `That reminds me of this one time -`
});
const elias = new Instructor({
    name: 'Elias',
    location: 'There',
    age: 64,
    gender: 'nonbinary',
    favLanguage: 'noSQL',
    specialty: 'Awkward Pauses',
    catchPhrase: `...`
});

const leonardo = new Student({
    name: 'Leo',
    location: 'Sewer',
    age: 18,
    gender: 'male',
    previousBackground: 'vigilante',
    className: 'FSW13',
    favSubjects: ['leadership', 'pizza']
});
const michelangelo = new Student({
    name: 'Mikey',
    location: 'Sewer',
    age: 15,
    gender: 'male',
    previousBackground: 'FSW13',
    className: 'FSW14',
    favSubjects: ['Partying', 'Pizza']
});
const raphael = new Student({
    name: 'Raph',
    location: 'Sewer',
    age: 17,
    gender: 'male',
    previousBackground: 'vigilante',
    className: 'FSW13',
    favSubjects: ['fighting', 'Pizza']
});
const donatello = new ProjectManager({
    name: 'Donnie',
    location: 'Sewer',
    age: 16,
    gender: 'male',
    favLanguage: 'English (hey, this is impressive considering he\'s a turtle',
    specialty: 'Technology',
    catchPhrase: `I actually don't know that much about TMNT or what their catchphrases are. Most of this came from wikipedia.`,
    gradClassName: 'FSW9',
    favInstructor: 'Alice'
});


elias.speak();
alice.demo(alice.specialty);
elias.grade(michelangelo, elias.specialty);

leonardo.listsSubjects();
michelangelo.PRAssignment(michelangelo.favSubjects[0]);
raphael.sprintChallenge(raphael.favSubjects[0]);

donatello.standup(leonardo.className);
donatello.debugsCode(michelangelo, michelangelo.favSubjects[1]);
    // Hey, you've got something on your pizza.
