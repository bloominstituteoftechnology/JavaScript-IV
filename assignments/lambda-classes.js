/** Classes */

/** Person
 * Base Person class
 */
class Person {
    constructor (params) {
        this.name = params.name;
        this.age = params.age;
        this.location = params.location;
        this.gender = params.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}.`;
    }
}

/** Instructor
 * Base Instructor class - extends from
 * person
 */
class Instructor extends Person {
    constructor (params) {
        super(params);
        this.specialty = params.specialty;
        this.favLanguages = params.favLanguages;
        this.catchPhrase = params.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }

    /** Grades the student with a random number and adds or subtracts based
     * on the number given
     */
    gradeStudent(student) {
        const result = getRandomInt(1, 2);

        if (result === 1) {
            student.grade += getRandomInt(1, 100);
            if (student.grade >= 100) { student.grade = 100;}

            return `${student.name} has been graded.`;
        }
        else if (result === 2) {
            student.grade -= getRandomInt(1, 100);
            if (student.grade <= 0) { student.grade = 0;}
            
            return `${student.name} has been graded.`;
        }
    }
}

/** Student
 * Base Student class - extends from
 * person
 */
class Student extends Person {
    constructor(params) {
        super(params);
        this.previousBackground = params.previousBackground;
        this.className = params.className;
        this.favSubjects = params.favSubjects;
        this.grade = params.grade;
    }

    listsSubjects() {
        return this.favSubjects.join('\n');
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

    /** Checks if the student can graduate */
    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has graduated!`;
        }
        else {
            return `${this.name} has not graduated...`;
        }
    }
}

/** ProjectManager
 * Base ProjectManager class - extends from
 * Instructor
 */
class ProjectManager extends Instructor {
    constructor(params) {
        super(params);
        this.gradClassName = params.gradClassName;
        this.favInstructor = params.favInstructor;
    }

    standUp(channel) {
        return  `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}\'s code on ${subject}.`;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Objects
 */
const mary = new Instructor({
    'name': 'Mary',
    'age': 32,
    'location': 'MA',
    'gender': 'Female',
    'previousBackground': 'Software Engineer',
    'className': 'CS5',
    'favSubjects': ['Web Dev', 'Computer Science', 'Hardware'],
    'specialty': 'React',
    'favLanguage': 'JS',
    'catchPhrase': 'Practice! Practice! Practice!'
});

const keven = new ProjectManager({
    'name': 'Keven',
    'age': 34,
    'location': 'CA',
    'gender': 'Male',
    'previousBackground': 'Web Developer',
    'className': 'CS6',
    'favSubjects': ['Web Dev', 'Computer Science', 'Hardware', 'Game Dev'],
    'specialty': 'C++',
    'favLanguage': 'C',
    'catchPhrase': 'Keep moving on!',
    'gradClassName': 'CS13',
    'favInstructor': 'Mary'
});

const jeremy = new Student({
    'name': 'Jeremy',
    'age': 25,
    'location': 'GA',
    'gender': 'Male',
    'previousBackground': 'Stock Clerk',
    'className': 'CS13',
    'favSubjects': ['Web Dev', 'Computer Science'],
    'grade': getRandomInt(1, 100)
});

/** Test Suit */
console.log(mary.speak());
console.log(mary.demo('JS'));
console.log(mary.grade(jeremy, 'JS'));

console.log(mary.gradeStudent(jeremy));

console.log('\n');

console.log(keven.speak());
console.log(keven.standUp('CS13'));
console.log(keven.debugsCode(jeremy, 'UI'));

console.log('\n');

console.log(jeremy.speak());
console.log(jeremy.listsSubjects());
console.log(jeremy.PRAssignment('JS'));
console.log(jeremy.sprintChallenge('User Interface'));
console.log(jeremy.grade);
console.log(jeremy.graduate());
