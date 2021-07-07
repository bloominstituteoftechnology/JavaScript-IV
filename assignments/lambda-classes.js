// CODE here for your Lambda Classes

// people --> instructors, studens, project managers 

class People {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends People {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject, grade, effort) {
        let randomInt = Math.floor(Math.random() * 11); // 0 -> 10 Points
        if (effort) {
            grade += randomInt;
            return `${student} is working hard on ${subject}. I will add ${randomInt} points to his score. ${grade}`;
        } else {
            grade -= randomInt;
            return `${student} is NOT working hard on ${subject}. I will subtract ${randomInt} points to his score. ${grade}`;
        }
    }
}

class Student extends People {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade; 
        this.isWorkingHard = attributes.isWorkingHard; 
    }
    listsSubjects() {
        return `${this.favSubjects}`; 
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (this.grade < 70) {
            let pointsNeeded = 70 - this.grade;
            return `Your current grade is ${this.grade}. You need ${pointsNeeded} points to graduate`;
        } else {
            return `CONGRATS!!!`;
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}


const jeor = new Instructor({
    name: 'Jeor Mormont',
    location: 'Castle Black',
    age: 60,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the your oath.`
  });

const jon = new Student({
    name: 'Jon Snow',
    location: 'Winterfell',
    age: 22,
    gender: 'male',
    previousBackground: 'none',
    className: 'CS16',
    favSubjects: ['Python', 'C', 'JavaScript'],
    grade: 65,
    isWorkingHard: false,
});

const aemon = new ProjectManagers({
    name: 'Aemon Targaryen',
    location: 'Castle Black',
    age: 100,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Maester Luwin'
});





// Instructor
console.log(jeor.speak());
console.log(jeor.demo('Object Oriented Programming'));
console.log(jeor.grade(jon.name, 'JavaScript IV', jon.grade, jon.isWorkingHard));

// Student 
console.log(jon.speak());
console.log(jon.listsSubjects());
console.log(jon.PRAssignment('JavaScript IV'));
console.log(jon.sprintChallenge('JavaScript Fundamentals'));
console.log(jon.graduate());

// PM 
console.log(aemon.speak());
console.log(aemon.standUp('FSW15'));
console.log(aemon.debugsCode('Jon Snow', 'JavaScript I'));
console.log(jeor.grade(jon.name, 'JavaScript IV', jon.grade, jon.isWorkingHard));