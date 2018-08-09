// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        const phrase = `Hello my name is ${this.name}, I am from ${this.location}.`
        console.log(phrase)
        return phrase;
    }
}

class Instructor extends Person {
    constructor(instAttr) {
        super(instAttr);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject) {
        const demoPhrase = `Today we are learning about ${subject}.`;
        console.log(demoPhrase);
        return demoPhrase;
    }
    grade(Student, subject) {
        const gradePhrase = `${Student.name} receives a perfect score on ${subject}`;
        console.log(gradePhrase);
        return gradePhrase;
    }

    //Stetch Task
    gradingSystem(Student) {
        if (Math.random() > .5) {
            Student.grade - 3;
        } else {
            Student.grade + 3;
        }
        return Student.grade;
    }
}

class Student extends Person {
    constructor(studAttr) {
        super(studAttr);
        this.previousBackground = studAttr.previousBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
        //Stetch Task
        this.grade = studAttr.grade;
    }
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects[i]}`);
        }
        
    }
    prAssignments(subject) {
        const assignPhrase = `${this.name} has submitted a PR for ${subject}`
        console.log(assignPhrase);
        return assignPhrase;
    }
    sprintChallenge(subject) {
        const sprintPhrase = `${this.name} has begun the sprint challenge on ${subject}`;
        console.log(sprintPhrase);
        return sprintPhrase;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(slackChannel) {
        const standPhrase = `${this.name} announces to ${slackChannel}, @channel standy times!`;
        console.log(standPhrase);
        return standPhrase;
    }
    debugsCode(Student,subject) {
        const debugPhrase = `${this.name} debugs ${Student.name}'s code on ${subject}.`;
        console.log(debugPhrase);
        return debugPhrase;
    }
}

// Instructor Objects

const mrBanana = new Instructor({
    name: 'Mr.Banana',
    location: 'Chiquita',
    age: 35,
    gender: 'male',
    favLanguage: 'Swift',
    specialty: 'Mac OS apps',
    catchPhrase: `I am a banana-person.`
});

const msApple = new Instructor({
    name: 'Ms.Apple',
    location: 'McIntosh',
    age: 30,
    gender: 'female',
    favLanguage: 'Ruby',
    specialty: 'OOP',
    catchPhrase: `If you wish to make an apple pie from scratch, you must first invent the universe.`
});

const msCherry = new Instructor({
    name: 'Ms. Cherry',
    location: 'Maraschino',
    age: 37,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I'm cherry good at web development.`
});

//Student Objects

const piney = new Student({
    name: 'Piney',
    location: 'Florida',
    age: 52,
    gender: 'male',
    previousBackground: 'lumberjack',
    className: 'CS11',
    favSubjects:['html', 'css'],
    grade: 63
});

const palm = new Student({
    name: 'Palm',
    location: 'Florida',
    age: 19,
    gender: 'female',
    previousBackground: 'lifeguard',
    className: 'CS13',
    favSubjects: ['JavaScript', 'LESS'],
    grade: 82
});

// ProjectManager Objects

const msOrange = new ProjectManager({
    name: 'Ms. Orange',
    location: 'California',
    age: 37,
    gender: 'female',
    gradClassName: 'CS1',
    favInstructor: 'Ms. Cherry'
});

const mrPineapple = new ProjectManager({
    name: 'Mr. Pineapple',
    location: 'Bikini Bottom',
    age: 28,
    gender: 'male',
    gradClassName: 'CS1',
    favInstructor: 'Mr. Banana'
});


//Console.logs to check work

console.log(mrBanana.speak());
console.log(msApple.favLanguage);
console.log(msCherry.catchPhrase);
console.log(piney.favSubjects);
console.log(mrPineapple.debugsCode(palm, 'JavaScript'));
console.log(msOrange.standUp(`Ms. Orange's Group`));
console.log(palm.sprintChallenge('Web Development for Trees'));
console.log(mrPineapple.speak());
console.log(piney.listSubjects());

msApple.gradingSystem(piney);
msApple.gradingSystem(piney);
msApple.gradingSystem(piney);

console.log(msApple.gradingSystem(piney))