

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
    adjustGrade (targetStudent) {
        const variation = 10;
        let adjustment = Math.floor(Math.random()*variation - (variation/3));
            // favors positive adjustments
        const originalGrade = targetStudent.grade;
        targetStudent.grade = Math.max(0, Math.min(100, targetStudent.grade+adjustment));
        adjustment = targetStudent.grade - originalGrade;
        console.log(`${this.name} adjusts ${targetStudent.name}'s grade by ${adjustment}%`);
        targetStudent.graduate();
    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = Math.floor(Math.random()*101) // Will result in range of [0,100]
        this.graduated = false;
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
    graduate (){
        if(this.grade > 70){
            this.graduated = true;
            console.log(`${this.name} has graduated from ${this.className}!`);
        } else{
            console.log(`More work is needed before ${this.name} can graduate (Current Grade: ${this.grade})`);
        }
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

while(!michelangelo.graduated){
    donatello.adjustGrade(michelangelo);
}