class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    };
}

class Instructor extends Person{
    constructor(instAtt){
        super(instAtt);
        this.specialty = instAtt.specialty;
        this.favLanguage = instAtt.favLanguage;
        this.catchPhrase = instAtt.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    };
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    };
}

class Student extends Person {
    constructor(studentAtt) {
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(sub) {
            console.log(sub);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class PM extends Instructor {
    constructor(pmAtt) {
        super(pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const braden = new Student ({
    'name': 'Braden',
    'age': 20,
    'location': 'CA',
    'gender': 'M',
    'previousBackground': 'college',
    'className': 'CS10',
    'favSubjects': ['HTML', 'CSS', 'JaveSript']
});

const ja = new Student ({
    'name': 'Ja',
    'age': 35,
    'location': 'NC',
    'gender': 'F',
    'previousBackground': 'college',
    'className': 'CS10',
    'favSubjects': ['Basic HTML', 'Basic CSS', 'Basic JaveSript']
});

const josh = new Instructor ({
    'name': 'Josh',
    'age': 30,
    'location': 'UT',
    'gender': 'M',
    'specialty': 'Web Development',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Go Jazz!'    
});

const heather = new Instructor ({
    'name': 'Heather',
    'age': 40,
    'location': 'OR',
    'gender': 'F',
    'specialty': 'Coding',
    'favLanguage': 'Ruby',
    'catchPhrase': 'Hey Everyone!'    
});

const ellen = new PM ({
    'name': 'Ellen',
    'age': 21,
    'location': 'CA',
    'gender': 'F',
    'specialty': 'helping students',
    'favLanguage': 'React',
    'catchPhrase': 'Who\'s next?',
    'gradClassName': 'CS5',
    'favInstructor': 'Josh'
});

const moises = new PM ({
    'name': 'Moises',
    'age': 22,
    'location': 'NY',
    'gender': 'M',
    'specialty': 'coding challenges',
    'favLanguage': 'javaScript',
    'catchPhrase': 'Zoom time!',
    'gradClassName': 'CS5',
    'favInstructor': 'Sean'
});

braden.speak();
braden.listsSubjects();
ja.PRAssignment('JavaScript');
ja.sprintChallenge('JavaScriptIV');

josh.demo('JavaScript');
heather.grade(braden, 'JavaScript');

ellen.standUp('cs_10 ellen');
moises.debugsCode(ja, 'JavaScript');