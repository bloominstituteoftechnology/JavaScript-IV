// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    hello() {
        return `Hello, my name is ${this.name} and I'm from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specilaty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning bout ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    calculateGrade(student) {
        const grade = Math.random() * 101;
        student.grade = grade;
        return `${student.name}'s calculated grade is ${grade}`;
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = 0;
    }

    listsSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects.join(' & ')}. `;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate() {
        if (this.grade > 70) {
            return 'Congratulations! You get to graduate!';
        }
        return "It looks like you'll have to redo some classes."
    }
}

class ProjectManager extends Instructor {
    constructor(PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }

    standUp(channel) {
        return `${this.name} anounces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 36,
    location: 'Utah',
    gender: 'Male',
    specialty: 'Teaching',
    favLanguage: 'JavaScript',
    catchPhrase: 'cosnt!',
});

const john = new ProjectManager({
    name: 'John',
    age: 27,
    location: 'Somewhere on the East coast',
    gender: 'Male',
    specialty: 'Chat reactions',
    favLanguage: 'JavaScript',
    catchPhrase: 'Heyooo!',
    gradClassName: 'CS7',
    favInstructor: 'Probably Dan',
});

const mitchell = new Student({
    name: 'Mitchell',
    age: 26,
    location: 'California',
    gender: 'Male',
    previousBackground: 'Electrician',
    className: 'CSPT2',
    favSubjects: ['JavaScript', 'HTML', 'Lunch'],
});