// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
}

class Instructors extends Person {
    constructor (instructorsOptions) {
        super (instructorsOptions);
        this.specialty = instructorsOptions.specialty;
        this.favLanguage = instructorsOptions.favLanguage;
        this.catchPhrase = instructorsOptions.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };
    gradingStudents(student) {
        let random = Math.floor(Math.random()*15);
        let addOrSubstract = Math.random() > 0.5 ? 1 : -1;
        random = random * addOrSubstract;
        student.grade += random;
        student.grade >= 100 ? student.grade = 100 : student.grade +1;
    };
}

class Students extends Person {
    constructor (studentsOptions) {
        super (studentsOptions);
        this.previousBackground = studentsOptions.previousBackground;
        this.className = studentsOptions.className;
        this.favSubjects = studentsOptions.favSubjects;
        this.grade = studentsOptions.grade;
    }
    listsSubjects() {        
        return this.favSubjects.forEach(item => {console.log(item)});
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };
    checkGraduation() {
        const success = `${this.name} has been graded by Jacob with ${this.grade} points and is ready for graduating from Lambda School! Congratulations!!!`;
        const defeat = `Jacob think that ${this.name} needs to keep studying for being able to graduate.`;
        return this.grade >= 70 ? success : defeat;
    }
}

class ProjectManagers extends Instructors {
    constructor (pmOptions) {
        super (pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
}

const jorge = new Students ({
    name: 'Jorge Osto',
    age: 30,
    location: 'Austin, TX',
    gender: 'Male',
    previousBackground: 'Chess Player',
    className: 'CSPT2',
    favSubjects: ['Javascript', 'Less', 'Flexbox'],
    grade: 85,
});

const abigayle = new Students ({
    name: 'Abigayle Franklin',
    age: 35,
    location: 'Somewhere, USA',
    gender: 'Female',
    previousBackground: 'Good designer',
    className: 'CSPT2',
    favSubjects: ['CSS','Javascript', 'UI/UX Design', 'CSS again!', 'Helping us'],
    grade: 100,
});

const ryan = new Students ({
    name: 'Ryan Mathews',
    age: 25,
    location: 'Houston, TX',
    gender: 'Male',
    previousBackground: 'Javascript student',
    className: 'CSPT2',
    favSubjects: ['CSS','Javascript', 'Code Challenges', 'Cats', 'Painting'],
    grade: 90
});

const dan = new Instructors ({
    name: 'Dan Frehner',
    age: 60,//:D
    location: 'Salt Lake City',
    gender: 'Male',
    specialty: 'Web Development',
    favLanguage: 'Javascript',
    catchPhrase: 'I love Lambda swag and semicolons!',
});

const josh = new Instructors ({
    name: 'Josh',
    age: 35,
    location: 'Somewhere, USA',
    gender: 'Male',
    specialty: 'Web Development',
    favLanguage: 'Phyton',
    catchPhrase: 'Lets get started!',
});

const diandra = new Instructors ({
    name: 'Diandra Ryan-Mas',
    age: 30,//:D
    location: 'Bisbee, AZ',
    gender: 'Female',
    specialty: 'Web Development',
    favLanguage: 'Javascript',
    catchPhrase: 'I promise I know how to code guys!',
});

const jacob = new ProjectManagers ({
    name: 'Jacob Gakstatter',
    age: 30,
    location: 'Delaware, Oregon',
    gender: 'Male',
    specialty: 'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Ready when you are!',
    gradClassName: 'CS6',
    favInstructor: 'Dan Frehner',
});

const messi = new ProjectManagers ({
    name: 'Lionel Messi',
    age: 30,
    location: 'Barcelona, Spain',
    gender: 'Male',
    specialty: 'Scoring Goles',
    favLanguage: 'Soccer',
    catchPhrase: 'I don\'t like Cristiano Ronaldo!',
    gradClassName: 'CS6',
    favInstructor: 'Pep Guardiola',
});

const edSheeran = new ProjectManagers ({
    name: 'Ed Sheeran',
    age: 30,
    location: 'England',
    gender: 'Male',
    specialty: 'Sing great songs',
    favLanguage: 'Pop Music',
    catchPhrase: 'You look perfect tonight!',
    gradClassName: 'CS6',
    favInstructor: 'Jorge Osto',
});

abigayle.listsSubjects();
console.log(ryan.name);
console.log(jorge.speak());
console.log(ryan.PRAssignment('Javascript'));
console.log(jorge.sprintChallenge('React'));
console.log(diandra.gender);
console.log(dan.demo('Responsive Design'));
console.log(josh.grade(jorge, 'Flexbox'));
console.log(edSheeran.location);
console.log(jacob.debugsCode(jorge, 'Code Challenge'));
console.log(messi.standUp('CSPT2-Team-Jacob!'));
console.log(jacob.grade(jorge, 'JS-IV'));
console.log(messi.speak());
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.grade);
jacob.gradingStudents(jorge);
console.log(jorge.checkGraduation());