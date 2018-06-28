// CODE here for your Lambda Classes


class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.name;
        this.location = options.location;
        this.gender = options.location;

    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(sub) {
        return `Today we are learning about ${sub}`;
    }
    grade(stu, sub) {
        return `${stu.name} receives a perfect score on ${sub}`;
    }
    score(stu) {

        const ranNum = Math.floor((Math.random() * 20) - 10);

        stu.grade = stu.grade + ranNum;

        if (stu.grade < 0) {
            stu.grade = 0;
        }
        return `${stu.name} has had their grade changed by ${ranNum}. Their grade is now ${stu.grade}.`

    }

}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;

    }
    listSubjects() {
        return this.favSubjects.join(", ");
    }
    PRAssignment(sub) {
        return `${this.name} has submitted a PR for ${sub}`;
    }
    sprintChallenge(sub) {
        return `${this.name} has begun sprint challenge on ${sub}`;
    }
    graduate() {
        if (this.grade >= 70) {
            return `🎆 Good enough! You graduate! 🎆`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(SC) {
        return `${this.name} announces to ${SC}, @channel standy times!`;
    }
    debugsCode(stu, sub) {
        return `${this.name} debugs ${stu.name}'s code on ${sub}`;
    }
}

const red = new Student({
    name: 'Red Green',
    location: 'Canada',
    age: 72,
    gender: 'male',
    previousBackground: "Fixin'",
    className: "CS1",
    grade: 90,
    favSubjects: ["duct tape", "lawn mowers", "canada"]

});

const ricky = new Student({
    name: 'Ricky',
    location: 'Canada',
    age: 42,
    gender: 'male',
    previousBackground: "Crime'",
    className: "CS12",
    grade: 1,
    favSubjects: ["horticulture", "guns"]

})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const arnold = new Instructor({
    name: 'Arnold',
    location: 'California',
    age: 67,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Mad Reps',
    catchPhrase: `I'll be back`
});

const doom = new ProjectManager({
    name: 'DOOM',
    location: 'New York',
    age: 50,
    gender: 'male',
    favLanguage: 'Dope Rhymes',
    specialty: 'Wordsmith',
    catchPhrase: `All caps when ya spell the man's name`,
    gradClassName: "CS4",
    favInstructor: fred
});
const daveed = new ProjectManager({
    name: 'Daveed Diggs',
    location: 'L.A.',
    age: 36,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Full stack',
    catchPhrase: `It's clipping`,
    gradClassName: "CS10",
    favInstructor: arnold
});

//   console.log(red, ricky);
//   console.log(fred,arnold);
//   console.log(doom,daveed);
//   console.log(red.speak());
//   console.log(ricky.PRAssignment("JS12"));
//   console.log(red.listSubjects())
//   console.log(ricky.sprintChallenge("Running"));
//   console.log(fred.demo("javascriptin'"));
//   console.log(arnold.grade(red, "typescript"));
//   console.log(fred.speak());
//   console.log(doom.catchPhrase);
//   console.log(daveed.standUp("#general"));
//   console.log(doom.debugsCode(red,"typing"));

console.log(doom.score(ricky));
console.log(red.graduate());
debugger;