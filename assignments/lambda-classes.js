// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
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
        return `Today we are learning about ${subject}`
    }
    grade(subject) {
        return `${this.name} recieves a perfect score on ${subject}`
    }
}

class Student extends Instructor {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(student) {
        return `Here is a list of ${student.name}s favorite subjects: ${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManager extends Student {
    constructor(managerAttributes) {
        super(managerAttributes);
        this.gradClassName = managerAttributes.gradClassName;
        this.favInstructor = managerAttributes.favInstructor;

    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}s code on ${subject}`
    }
}


const john = new Person({
    'name': 'john',
    'age': 22,
    'location': 'Las Vegas',
    'gender': 'Male'
});

const amanda = new Person({
    'name': 'Amanda',
    'age': 23,
    'location': 'Ohio',
    'gender': 'Female'
});

const alex = new Person({
    'name': 'alex',
    'age': 24,
    'location': 'Orlando',
    'gender': 'Female'
});

const carl = new Instructor({
    'name': 'Carl',
    'age': 29,
    'location': 'Reno',
    'gender': 'Male',
    'specialty': 'HTML/CSS',
    'favLanguage': 'HTML',
    'catchPhrase': 'Hellllo There'
});

const sawyer = new Instructor({
    'name': 'Sawyer',
    'age': 88,
    'location': 'Anywhere',
    'gender': 'Female',
    'specialty': 'Java',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'I love to Program!'
});

const doug = new Instructor({
    'name': 'Doug',
    'age': 71,
    'location': 'New York',
    'gender': 'Male',
    'specialty': 'Python',
    'favLanguage': 'Python',
    'catchPhrase': 'I prefer Python over Rattlesnake'
});

const tessa = new Student({
    'name': 'Tessa',
    'age': 21,
    'location': 'Golden',
    'gender': 'Female',
    'specialty': 'Ruby',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'I love the outdoors!',
    'previousBackground': 'Burger Flipper',
    'className': 'CS199',
    'favSubjects': 'HTML, CSS, Python'
});

const phil = new Student({
    'name': 'Phil',
    'age': 24,
    'location': 'Denver',
    'gender': 'Male',
    'specialty': 'Everything',
    'favLanguage': 'React',
    'catchPhrase': 'Hi',
    'previousBackground': 'Sales',
    'className': 'FSW14',
    'favSubjects': 'CSS, JavaScript, React'
});

const lynn = new ProjectManager({
    'name': 'Lynn',
    'age': 32,
    'location': 'Los Angeles',
    'gender': 'Female',
    'specialty': 'React',
    'favLanguage': 'Java',
    'catchPhrase': 'React is the coolest',
    'previousBackground': 'Managing People',
    'className': 'FSW1456',
    'favSubjects': 'Html, SQL, React',
    'gradClassName': 'CS1',
    'favInstructor': 'Josh'
});

const dave = new ProjectManager({
    'name': 'Dave',
    'age': 100,
    'location': 'Nowhere',
    'gender': 'Male',
    'specialty': 'Python',
    'favLanguage': 'Python',
    'catchPhrase': 'I am the oldest one here',
    'previousBackground': 'Author',
    'className': 'FSW28',
    'favSubjects': 'Html, Python, React',
    'gradClassName': 'CS19',
    'favInstructor': 'All of them'
});
john.speak();
carl.demo('Java');
doug.grade(phil, 'HTML');
phil.listsSubjects(phil);
tessa.PRAssignment('Python');
phil.grade('React');
lynn.standUp('FSW14');
dave.debugsCode(phil, 'JavaScript')
console.log(sawyer.specialty);
console.log(phil.age);
