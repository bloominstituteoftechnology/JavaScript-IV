// CODE here for your Lambda Classes



//===== Person class =====

class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//===== Instructor class =====

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}` ;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}` //-----check this line later!!!----
    }
}

//===== Student class =====

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        return `${this.favSubjects1}, ${this.favSubjects2}, ${this.favSubjects3}`;  //-----check this line later!!!----
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

//===== ProjectManager class =====

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes){
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!` ;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}` //-----check this line later!!!----
    }
}

//------------Instructors--------------

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 34,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `Forget the homies`
});

//------------Students--------------

const chuck = new Student({
    name: 'Chuck',
    location: 'Anywhere',
    age: 27,
    gender: 'male',
    previousBackground: 'race car driver',
    className: 'JS101',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const janet = new Student({
    name: 'Janet',
    location: 'Somewhere',
    age: 24,
    gender: 'female',
    previousBackground: 'MMA fighter',
    className: 'CSS101',
    favSubjects: ['Python', 'CSS', 'PHP']
});

//------------ProjectManagers--------------

const joe = new ProjectManager({
    name: 'Joe',
    location: 'Eastside',
    age: 30,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `just do it`,
    gradClassName: 'CS10',
    favInstructor: `Sean`
});

const nancy = new ProjectManager({
    name: 'Nancy',
    location: 'Westside',
    age: 29,
    gender: 'female',
    favLanguage: 'Html',
    specialty: 'Back-end',
    catchPhrase: `get it done`,
    gradClassName: 'CS11',
    favInstructor: `Tony`
});