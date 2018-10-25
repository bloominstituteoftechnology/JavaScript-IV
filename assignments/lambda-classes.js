// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject) {
        return `${this.name} gives ${student.name} a perfect score on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClass = obj.gradClass;
        this.favInstructor = obj.favInstructor
    }
    standup(slackChannel) {
        return `-${this.name} announces to #${slackChannel}- '@channel it's time for standup'`;
    }
    debugsCode(student, subject) {
        return `-${this.name} debugs ${student.name}'s code for ${subject}-`
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.prevBackground = obj.prevBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects() {
        // console.log(`${this.name}'s favorite subjects are:`);
        let subjects = `\n ${this.name}'s favorite subjects are:\n`;
        this.favSubjects.forEach((x, i) => subjects = subjects + `${i+1}. ${x}\n`);
        // return `How fascinating.`
        return subjects;
    }
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    } 
    sprintChallenge(subject) {
        return `${this.name} has begun their Sprint challenge for ${subject}`
    }    
}

const dan = new Instructor({name: "Dan Frehner", age: "Immortal", location: "Lambda School of Ciphers and Strange Programming Glyphs", gender: "Male", specialty: "HTML & CSS/LESS", favLanguage: "LESS", catchPhrase: "Needs more Dodger Blue!"});
const cam = new Instructor({name: "Cam Pope", age: "Everlasting", location: "Lambda School of Ciphers and Strange Programming Glyphs", gender: "Male", specialty: "Javascript", favLanguage: "Vanilla JS", catchPhrase: "Let's check the MDN."});
const brock = new ProjectManager({name: "Brock Rohloff", age: "Around 25", location: "Javascript Land", gender: "Male", specialty: "Being THE Brockstar", favLanguage: "Javascript", catchPhrase: "Can you smell what the Brock is cooking?", gradClass: "FSW13", favInstructor: "Big Knell"});
const casey = new ProjectManager({name: "Casey Baker", age: "Around 25", location: "Computer Science Land", gender: "Female", specialty: "Being an awesome PM", favLanguage: "C", catchPhrase: "Use Quokka!", gradClass: "FSW13", favInstructor: "Beej"});
const me = new Student({name: "Jason Cook", age: 31, location: "Cape Cod", gender: "Male", prevBackground: "Freelancing, Carnival Game Operating, Parent", className: "FSWPT3", favSubjects: ["Quantum Theory", "Japanese", "Programming", "Artificial Intelligence"]});
const noah = new Student({name: "Noah Stoeckel", age: "Around 30", location: "New Hampshire", gender: "Male", prevBackground: "Nerdcore Rapper", className: "FSWPT3", favSubjects: ["Games", "Programming"]});

console.log(`-${dan.grade(me, "LESS")}- however, 'it ${dan.catchPhrase}' says ${dan.name}`);
console.log(`'${cam.demo("Javascript")} ${cam.catchPhrase}'`);
console.log(`'${dan.speak()} My specialty is ${dan.specialty}'`);
console.log(`'${cam.speak()} My favorite language is ${cam.favLanguage}'`);
console.log(`${brock.debugsCode(me, "Applied Javascript")} That's because ${brock.specialty} is his specialty! ${brock.catchPhrase}`);
console.log(`${casey.standup("fswpt3_casey")} 'Don't forget to ${casey.catchPhrase}'`);
console.log(`-${brock.name} and ${casey.name} introduce themselves- Brock says 'I'm from ${brock.location}' and Casey follows up with 'I'm from ${casey.location}'`);
console.log(`'${me.speak()}' says ${me.name}. ${me.listsSubjects()}`);
console.log(`${me.prevBackground}`);
console.log(`${noah.prAssignment("Javascript IV")}, I bet they did well since they used to be a ${noah.prevBackground}`);
console.log(`${me.sprintChallenge("Javascript Fundamentals")}`);
console.log(`${me.name} belongs to the ${me.class} class, at Lambda School of Ciphers and Strange Programming Glyphs.`);
console.log(`${noah.name} belongs to the ${noah.class} class, at Lambda School of Ciphers and Strange Programming Glyphs.`);