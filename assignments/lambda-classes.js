// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
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
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    pRAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const gary = new Person({
    'name': 'Gary',
    'location': 'Paris, France',
    'age': 14,
    'gender': 'male'
});

const brad = new Student({
    'name': 'Brad Mortensen',
    'location': 'Denver, CO',
    'age': 32,
    'gender': 'male',
    'previousBackground': 'JavaScript',
    'className': 'FSW14',
    'favSubjects': [
        ' Math',
        ' Science',
        ' Programming'
    ]
});
const jamesTaylor = new Student({
    'name': 'James Taylor',
    'location': 'New Orleans, LA',
    'age': 87,
    'gender': 'male',
    'previousBackground': 'Music',
    'className': 'CS1',
    'favSubjects': [
        ' Music',
        ' Cooking'
    ]
});
const bobDylan = new Student({
    'name': 'Bob Dylan',
    'location': 'Tin-Pan Alley, NY',
    'age': 86,
    'gender': 'male',
    'previousBackground': 'harmonica',
    'className': 'CS1',
    'favSubjects': [
        ' Art',
        ' Sculpture'
    ]
});
const julian = new Instructor({
    'name': 'Julian',
    'location': 'Sunnyvale Trailer Park',
    'age': 35,
    'gender': 'male',
    'specialty': 'Aerospace Engineering',
    'favLanguage': 'Java',
    'catchPhrase': 'Geez Rick!'
});
const ricky = new Instructor({
    'name': 'Ricky',
    'location': 'Sunnyvale Trailer Park',
    'age': 33,
    'gender': 'male',
    'specialty': 'Grade 10',
    'favLanguage': 'CS1',
    'catchPhrase': 'Frig off Randy!'
});
const bubbles = new Instructor({
    'name': 'Bubbles',
    'location': 'A shed in Sunnyvale Trailer Park',
    'age': 31,
    'gender': 'male',
    'specialty': 'Kitties',
    'favLanguage': 'Flash',
    'catchPhrase': 'Deee-cent!'
});
const jane = new ProjectManager({
    'name': 'Jane',
    'location': 'Fayateville, AR',
    'age': 66,
    'gender': 'female',
    'specialty': 'front-end',
    'favLanguage': 'English',
    'catchPhrase': 'Good Job!',
    'gradClassName': 'CS12',
    'favInstructor': 'Julian'
});
const barbara = new ProjectManager({
    'name': 'Barbara',
    'location': 'Tuscon, AZ',
    'age': 34,
    'gender': 'female',
    'specialty': 'back-end',
    'favLanguage': 'French',
    'catchPhrase': 'Well Done!',
    'gradClassName': 'CS13',
    'favInstructor': 'Ricky'
});
const julia = new ProjectManager({
    'name': 'Julia',
    'location': 'Anchorage, AK',
    'age': 45,
    'gender': 'female',
    'specialty': 'full-stack',
    'favLanguage': 'Bolivian',
    'catchPhrase': 'That\'s nice!',
    'gradClassName': 'CS11',
    'favInstructor': 'Bubbles'
});



gary.speak();
bobDylan.pRAssignments('Math');
brad.listsSubjects();
jamesTaylor.sprintChallenge('Coffescript');
ricky.grade(brad, 'Partying');
bubbles.demo('Rush');
julia.standUp('FSW17');
barbara.debugsCode(bobDylan, 'Runescape');