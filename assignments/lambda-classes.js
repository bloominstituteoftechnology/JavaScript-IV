// CODE here for your Lambda Classes
class Person {
    constructor(info){
        this.name = info.name;
        this.age  = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);   
    }
}

class Instructor extends Person {
    constructor(info) {
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`)
    }

    apathy(student) {
        let modifier = 1;
        if (Math.random() < .5) {
        modifier = -1;
        }
        return student.grade += (Math.floor(Math.random() * 10) * modifier);
    }
}

class Student extends Person {
    constructor(info) {
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
        this.grade = 100;
        this.graduated = false;
        this.yearbookQuote = info.yearbookQuote;
    }

    listSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    pRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`);
    }
    graduate() {
        if (this.grade > 70){
            this.graduated = true;
            console.log(`${this.name} graduated!`);
        } else {
            console.log(`With an abyssmal grade of ${this.grade}, ${this.name} has been found wanting.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }
    
    standUp(channel){
        console.log(`${this.name} annoucnes to ${channel}: "@channel standy times!"`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Make our people to populate:

//Instructors
const snape = new Instructor({
    name: 'Snape',
    location: 'Scotland',
    age: 37,
    gender: 'male',
    favLanguage: 'Evil',
    specialty: 'Potions',
    catchPhrase: `Ah, yes. Harry Potter. Our new — celebrity.`
  });

  const mcGonagall = new Instructor({
    name: 'McGonagall',
    location: 'Scotland',
    age: 72,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Transfiguration',
    catchPhrase: `WHY IS IT ALWAYS YOU THREE?`
  });

  const lupin = new Instructor({
    name: 'Lupin',
    location: 'Scotland',
    age: 36,
    gender: 'male',
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: `It is the quality of one's convictions that determines success...`
  });

// Project Managers
const mickey = new ProjectManager({
    name: 'Mickey Mouse',
    location: 'Disneyland',
    age: 89,
    gender: 'male',
    favLanguage: 'Squeakems',
    specialty: 'Animation',
    catchPhrase: `It's kind of fun to do the impossible.`,
    gradClassName: 'Old School',
    favInstructor: "Walt Disney"
});

const donald = new ProjectManager({
    name: 'Donald Duck',
    location: 'Disneyland',
    age: 84,
    gender: 'male',
    favLanguage: 'Duck',
    specialty: 'Duck',
    catchPhrase: `DUCK!`,
    gradClassName: 'Old School',
    favInstructor: "Walt Disney"
});

const goofy = new ProjectManager({
    name: 'Goofy the Goof',
    location: 'Disneyland',
    age: 86,
    gender: 'male',
    favLanguage: 'Binary',
    specialty: 'Being Goofy',
    catchPhrase: `Life's too short to always be serious.`,
    gradClassName: 'Old School',
    favInstructor: "Walt Disney"
});

//Students
const ferris = new Student({
    name: 'Ferris Bueller',
    location: 'Chicago',
    age: 17,
    gender: 'male',
    previousBackground: 'Junior',
    className: 'Old School',
    favSubjects: ['Empathy', 'Friendship', 'Beautiful Days'],
    yearbookQuote: `Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.`
  });

const cameron = new Student({
    name: 'Cameron Fry',
    location: 'Chicago',
    age: 17,
    gender: 'male',
    previousBackground: 'Junior',
    className: 'Old School',
    favSubjects: ['Apathy', 'Fear',  'Uncertainty'],
    yearbookQuote: `You're my hero.`
  });

  const sloane = new Student({
    name: 'Sloane Peterson',
    location: 'Chicago',
    age: 17,
    gender: 'female',
    previousBackground: 'Junior',
    className: 'Old School',
    favSubjects: ['Mimicry', 'Badassery', 'Slacking'],
    yearbookQuote: `Sooner or later, everybody goes kazoo.`
  });

//Instructor Tests
//   console.log(snape.specialty);
//   console.log(mcGonagall.favLanguage);
//   console.log(lupin.catchPhrase);
//   lupin.demo("The Moon");
//   mcGonagall.grade(cameron, "Being Decent");
//   console.log(snape.apathy(cameron));

//Project Manager Tests
// console.log(mickey.specialty);
// console.log(goofy.favLanguage);
// console.log(donald.catchPhrase);
// mickey.demo("Animation History");
// goofy.grade(ferris, "Not being a cartoon");
// console.log(donald.apathy(sloane));
// mickey.standUp("CS13_MickeyMouseClub");
// goofy.debugsCode(cameron, "C++");

//Student Tests
console.log(ferris.name);
console.log(sloane.age);
console.log(cameron.location);
console.log(sloane.gender);
ferris.speak();
console.log(cameron.previousBackground);
console.log(ferris.className);
console.log(sloane.grade);
console.log(ferris.yearbookQuote);
sloane.listSubjects();
cameron.pRAssignment("Fixing Cars");
cameron.sprintChallenge("Fixing Cars");
cameron.graduate();
if(cameron.graduated){console.log(`${cameron.name} is on to bigger and better.`)};

