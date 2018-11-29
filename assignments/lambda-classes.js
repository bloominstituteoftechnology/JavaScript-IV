//#region Class Declarations
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        let score = Math.max(Math.min(35 + Math.round(Math.random() * 100), 100), 0);
        // Smooth moving average
        let newGrade = student.grade + ((score - student.grade) * 0.1);
        student.grade = newGrade;

        let result = `${student.name} receives a ${score}/100 on ${subject}!\n`;
        if (score === 100) {
            result += 'A perfect score!';
        } else if (score >= 70) {
            result += 'A job well done!';
        } else if (score >= 40) {
            result += 'Could use more work, maybe next time!';
        } else {
            result += 'Was the assignment done? Let\'s try that again.';
        }
        result += '\n';
        result += `${student.name} now has a grade of ${newGrade}.`

        console.log(result);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = 50;
    }

    listSubjects() {
        console.log(`${this.name} has ${this.favSubjects.length} favorite subjects:`);
        this.favSubjects.forEach(subject => console.log(`- ${subject}`));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}.`);
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} has graduated from Lambda School and is ready for the work force! Hooray!`);
        } else {
            console.log(`${this.name} needs more work to graduate, but they can make it!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel stand-up time!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}
//#endregion

//#region Initializers

const testPerson = new Person({
    'name': 'Jimmy',
    'age': 34,
    'location': 'Ohio, United States',
    'gender': 'male'
});

const testInstructor = new Instructor({
    'name': 'Jack',
    'age': 38,
    'location': 'Chicago, Illinois, United States',
    'gender': 'male',
    'specialty': 'React',
    'favLanguage': 'ES6 JavaScript',
    'catchPhrase': 'I INVOKE YOU!'
});

const testStudent = new Student({
    'name': 'Roxy',
    'age': 20,
    'location': 'Portland, Oregon, United States',
    'gender': 'female',
    'previousBackground': 'college student',
    'className': 'FSW76',
    'favSubjects': [
        'Advanced CSS',
        'JavaScript Fundamentals'
    ]
})

const testProjectManager = new ProjectManager({
    'name': 'Yelina',
    'age': 27, 
    'location': 'Albany, New York, United States',
    'gender': 'female',
    'specialty': 'UI/UX Design',
    'favLanguage': 'LESS (CSS)',
    'catchPhrase': 'Wooo!',
    'gradClassName': 'FSW68',
    'favInstructor': 'Jack'
})
//#endregion

//#region Program
console.log('==PERSON TESTS==');
console.log(testPerson);
console.log(testPerson.name);
console.log(testPerson.age);
console.log(testPerson.location);
console.log(testPerson.gender);
testPerson.speak();

console.log('==INSTRUCTOR TESTS==');
console.log(testInstructor);
console.log(testInstructor.name);
console.log(testInstructor.age);
console.log(testInstructor.location);
console.log(testInstructor.gender);
console.log(testInstructor.specialty);
console.log(testInstructor.favLanguage);
console.log(testInstructor.catchPhrase);
testInstructor.speak();
testInstructor.demo('Applied JavaScript');
testInstructor.grade(testStudent, 'Applied JavaScript');

console.log('==STUDENT TESTS==');
console.log(testStudent);
console.log(testStudent.name);
console.log(testStudent.age);
console.log(testStudent.location);
console.log(testStudent.gender);
console.log(testStudent.previousBackground);
console.log(testStudent.className);
console.log(testStudent.favSubjects);
testStudent.speak();
testStudent.listSubjects();
testStudent.PRAssignment('Applied JavaScript');
testStudent.sprintChallenge('Applied JavaScript');

console.log('==PROJECT MANAGER TESTS==');
console.log(testProjectManager);
console.log(testProjectManager.name);
console.log(testProjectManager.age);
console.log(testProjectManager.location);
console.log(testProjectManager.gender);
console.log(testProjectManager.specialty);
console.log(testProjectManager.favLanguage);
console.log(testProjectManager.catchPhrase);
console.log(testProjectManager.gradClassName);
console.log(testProjectManager.favInstructor);
testProjectManager.speak();
testProjectManager.demo('Advanced CSS');
testProjectManager.grade(testStudent, 'Advanced CSS');
testProjectManager.standUp('#fsw76');
testProjectManager.debugsCode(testStudent, 'Advanced CSS');

console.log('==STRETCH==');
let days = 30 * 5; // 30 week program, 5 days a week.
for (let i = 0; i < days; i += 1) {
    if (i % 4 === 0) {
        testInstructor.grade(testStudent, `Subject #${i}`);
    } else {
        testProjectManager.grade(testStudent, `Subject #${i}`);
    }
}
testStudent.graduate();
//#endregion
