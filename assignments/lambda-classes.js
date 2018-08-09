// CODE here for your Lambda Classes
class Person {
    constructor(baseClass) {
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
        this.gender = baseClass.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(subject) {
        return `${this.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listSubjects() {
        return `My favorite subjects are ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if (jonathan.grade >= 70) {
            return `${this.name} is ready to graduate!`;
        } else {
            return 'Better wait to get more assignments graded';
        }
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(subject) {
        return `${this.name} debugs ${jonathan.name}'s code on ${subject}`
    }
    unfairGradeSystem() {
        if(Student) {
            if(Student.grade === 100) {
                return 'Perfect score';
            } else {
                jonathan.grade = Math.floor(Math.random() * 100);
                return jonathan.grade;
            }
        }
    }
}

const joshKnell = new Instructor({
    'name': 'Josh Knell',
    'age': 'Somewhat Young',
    'location': 'secret',
    'gender': 'M',
    'specialty': 'Redux',
    'favLanguage': 'JS, Python, Elm',
    'catchPhrase': 'Don\'t forget the homies'
});

const jonathan = new Student({
    'name': 'Jonathan Laluces',
    'age': '18',
    'location': 'secret',
    'gender': 'M',
    'previousBackground': 'High School Graduate',
    'className': 'CS13',
    'favSubjects': ['HTML', 'CSS', 'LESS', 'JS'],
    'grade': 0
});

const drewMoody = new ProjectManager({
    'name': 'Drew Moody',
    'age': 'Young-ish',
    'location': 'secret',
    'gender': 'M',
    'gradClassName': 'CS-Secret',
    'favInstructor': 'Sean'
});


console.log(joshKnell.demo('JavaScript'));
console.log(jonathan.listSubjects());
console.log(drewMoody.standUp('@cs13_drewsquad'));
console.log(drewMoody.debugsCode('JavaScipt'));
console.log(jonathan.grade);
console.log(drewMoody.unfairGradeSystem());
console.log(jonathan.grade);
console.log(jonathan.graduate());

