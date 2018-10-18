// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes) 
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;    
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}
    
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects(){
        return `${this.favSubjects}`
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
       return `${this.name} has submitted a PR for ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(ProjectManagerAttributes) {
        super(ProjectManagerAttributes)
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const jasmine = new Student ({
    name: 'Jasmine',
    age: 27,
    location: 'Queens, NY',
    gender: 'F',
    previousBackground: 'Janitor',
    className: 'The Choosen Ones',
    favSubjects: 'Math, Science, Art'
});

const julisa = new Student ({
    name: 'Julisa',
    age: 28,
    location: 'Brookyln, NY',
    gender: 'F',
    previousBackground: 'Make Up Artist',
    className: 'The Choosen Ones',
    favSubjects: 'Math and Art'
});

const mike = new Student ({
    name: 'Mike',
    age: 31,
    location: 'Baltimore, MD',
    gender: 'M',
    previousBackground: 'Recruiter',
    className: 'Lambda Squad',
    favSubjects: 'History'
});

const dale = new Instructor ({
    name: 'Dale',
    age: 25,
    location: 'Miami, FL',
    gender: 'M',
    specialty: 'Front-end',
    favLanguage: 'C++',
    catchPhrase: 'See you on the flip side'
});

const greg = new Instructor ({
    name: 'Greg',
    age: 35,
    location: 'Orlando, FL',
    gender: 'M',
    specialty: 'Back-end',
    favLanguage: 'C++',
    catchPhrase: 'Keep pushing!'
});

const jennifer = new Instructor ({
    name: 'Jennifer',
    age: 45,
    location: 'Mobile, Al',
    gender: 'F',
    specialty: 'Fullstack',
    favLanguage: 'PHP',
    catchPhrase: 'Life is what you make it.'
});

const susie = new ProjectManager ({
    name: 'Susie',
    age: 21,
    location: 'Nashville, TN',
    gender: 'F',
    specialty: 'Front-end',
    favLanguage: 'C',
    catchPhrase: 'Deal with it.',
    gradClassName: 'The Choosen Ones',
    favInstructor: 'Jennifer'
});

const lauren = new ProjectManager ({
    name: 'Lauren',
    age: 24,
    location: 'Louisville, KY',
    gender: 'F',
    specialty: 'Front-end',
    favLanguage: 'PERL',
    catchPhrase: 'Yeehaw',
    gradClassName: 'Lambda Squad',
    favInstructor: 'Greg'
});