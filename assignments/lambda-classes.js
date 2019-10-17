// CODE here for your Lambda Classes


class Person {
    constructor(personAttr) {
        this.name = personAttr.name,
        this.age = personAttr.age,
        this.location = personAttr.location
    }
    speak() {
        return `Hello my name is Fred. I am from Bedrock where ${this.name} and ${this.location} are the object's own props.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttr){
        super(instructorAttr);
            this.specialty = instructorAttr.specialty,
            this.favLanguage = instructorAttr.favLanguage,
            this.catchPhrase = instructorAttr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }///this one needs fixing
}

class Student extends Person {
    constructor(stuAttr){
        super(stuAttr);
            this.previousBackground = stuAttr.previousBackground,
            this.className = stuAttr.className,
            this.favSubjects = stuAttr.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(name, subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(name, subject){
        return `${student.name} has begun sprint challenge on${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
            this.gradClassName = pmAttr.gradClassName,
            this.favInstuctor = pmAttr.favInstuctor
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standup times!`
    }
    debugscode(name, subject) {
        return `${projectmang.name} debugs ${student.name}'s code on ${subject}`
    }
}


const jason = new Instructor ({
    name: 'Jason Momoa',
    location: 'Hawaii',
    age: 38,
    favLanguage: 'HTML',
    specialty: 'works well with women',
    catchPhrase: 'Hello my lovelies!'
});

const penelope = new Instructor ({
    name: 'Penelope Garcia',
    location: 'San Francisco',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'hacking',
    catchPhrase: 'Your friendly neighborhood Oracle of all things knowable and unknowable, at your service'
});

const sarah = new Student ({
    name: 'Sarah',
    location: 'California',
    age: 41,
    favLanguage: 'JavaScript',
    specialty: 'making things complicated',
    catchPhrase: 'Sup fools?!',
    previousBackground: 'Customer Service, Teacher',
    className: 'Web25',
    favSubjects: ['Music', 'HTML', 'JavaScript']
});

const chanyeol = new Student ({
    name: 'Chanyeol',
    location: 'Seoul',
    age: 28,
    favLanguage: 'CSS',
    specialty: 'can play any instrument',
    catchPhrase: 'Im the Happy Virus',
    previousBackground: 'Kpop Idol',
    className: 'Web400',
    favSubjects: ['music', 'UX/UI', 'HTML']
})


const joscelyn = new ProjectManager ({
    name: 'Joscelyn',
    location: 'Ohio',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Super smash bros',
    catchPhrase: 'Gotta Catch Em All',
    gradClassName: 'CS15',
    favInstructor: 'Brit'
});

const tommy = new ProjectManager ({
    name: 'Tommy',
    location: 'Iowa',
    age: 'guess',
    favLanguage: 'C#',
    specialty: 'Node.js',
    catchPhrase: 'Whats sleep?',
    gradClass: 'Web21',
    favInstructor: 'Luis',
})

