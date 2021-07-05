// CODE here for your Lambda Classes

//  Parent Class

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;


    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }

}


// Subclasses:

class Instructor extends Person { // inherits parent class
    constructor(obj) {
        ;
        super(obj); // inherits parent classes properties
        this.specialty = obj.specialty;
        this.faveLanguage = obj.faveLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject} `);
    }
}

class Student extends Instructor {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function (el) {
            console.log(el);
        });
    }

    PRAssignment(subject) {
        console.log(`${student.name}.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${student.name} has begun a sprint challenge on ${subject}`)
    }


}


class Project_Manager extends Student {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    };

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel strict attendance!`);

    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


// instatiation and class calls

// Instructor Class:

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

dan.demo('JavaScript'); // Today we are learning about JavaScript
dan.speak(); // Hello my name is Dan, I am from Denver

const fred = new Instructor({
    name: 'Joe',
    location: 'Montana',
    age: 37,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Go 49ers`
});

fred.demo('Python');
fred.speak();

// Student Class:
const james = new Student({
    name: 'James',
    age: 28,
    location: 'Florida',
    previousBackground: 'Undergrad',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

james.grade({ name: 'James' }, 'CSS');
james.listsSubjects();


const jose = new Student({
    name: 'Jose',
    age: 41,
    location: 'Alexandria Virginia',
    previousBackground: 'Grad Student',
    className: 'Web21',
    favSubjects: ['Soccer', 'JavaScript', 'Ecology'],
});


jose.grade({ name: 'Jose' }, 'JavaScript');
jose.listsSubjects();
jose.speak();




// Project Manager:
const anna = new Project_Manager({
    name: 'Anna',
    age: 'Maybe 23',
    gradClassName: 'Likely WEB17',
    favInstructor: 'Me?',
    location: 'Michigan',
    specialty: 'CSS',
    favLanguage: 'JavaScript, HTML, CSS',
    catchPhrase: "Practice meow-ology !!!",
});

anna.standUp('Web21Anna');
anna.debugsCode({ name: 'Jose' }, 'JavaScript');

const luke = new Project_Manager({
    name: 'Luke',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Dan Frehner',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",

});

luke.speak();
luke.demo('Java');
