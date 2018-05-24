// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    sayHello() {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(options) {
        super(options);
        this.specialty = options.specialty;
        this.favLanguage = options.favLanguage;
        this.catchPhrase = options.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    points(student) {
        var addSub =  [Math.floor(student.grade + (Math.random() * (100 - student.grade))), Math.floor(student.grade - (Math.random() * (student.grade)))];
         student.grade = addSub[Math.floor((Math.random() * addSub.length))];
         return student.grade;
         
    }
}

class Student extends Person {
    constructor(options) {
        super(options);
        this.previousBackground = options.previousBackground;
        this.className = options.className;
        this.favSubjects = options.favSubjects;
        this.grade = options.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate(instructor) {
        if (this.grade >= 70) {
            return `Congratulations! ${this.name} has graduated!`;
        }
        else {
          instructor.points(this);
            return `Keep trying to get your score up.`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(options) {
        super(options);
        this.gradClassName = options.gradClassName;
        this.favInstructor = options.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


const fred = new Instructor({
    name: 'Fred',
    age: 52,
    location: 'Dallas',
    gender: 'M',
    specialty: 'Back-end',
    favLanguage: 'C++',
    catchPhrase: 'What\'s a catchphrase?'
});

const mary = new Instructor({
    name: 'Mary',
    age: 48,
    location: 'Miami',
    gender: 'F',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Life is like a box of chocolates.'
});

const mike = new Instructor({
    name: 'Mike',
    age: 41,
    location: 'Atlanta',
    gender: 'M',
    specialty: 'Security',
    favLanguage: 'Python',
    catchPhrase: 'It\'s a trap!'
});

const erin = new Student({
    name: 'Erin',
    age: 39,
    location: 'Michigan',
    gender: 'F',
    previousBackground: 'none',
    className: 'CS11',
    favSubjects: ['CSS', 'Bootstrap', 'Javascript'],
    grade: Math.floor(Math.random() *100)+1

});

const luke = new Student({
    name: 'Luke',
    age: 23,
    location: 'Tattooine',
    gender: 'M',
    previousBackground: 'Moisture Farm Technician',
    className: 'CS11',
    favSubjects: ['Force 101', 'Lightsaber', 'X-wing piloting'],
    grade: Math.floor(Math.random() *100)+1
});

const leia = new Student({
    name: 'Leia',
    age: 23,
    location: 'Alderaan',
    gender: 'F',
    previousBackground: 'Imperial Senator',
    className: 'CS11',
    favSubjects: ['Advanced Blaster Techniques', 'Government', 'SQL'],
    grade: Math.floor(Math.random() *100)+1

});

const joe = new ProjectManager({
    name: 'Joe',
    age: 28,
    location: 'San Diego',
    gender: 'M',
    gradClassName: 'CS7',
    favInstructor: 'Josh',
});

const anne = new ProjectManager({
    name: 'Anne',
    age: 32,
    location: 'North Dakota',
    gender: 'F',
    gradClassName: 'CS3',
    favInstructor: 'Josh',
});

const sam = new ProjectManager({
    name: 'Sam',
    age: 24,
    location: 'Baltimore',
    gender: 'M',
    gradClassName: 'CS8',
    favInstructor: 'Josh',
});

console.log(fred.name);
console.log(mary.location);
console.log(mike.specialty);
console.log(mary.favLanguage);
console.log(fred.catchPhrase);
console.log(mike.demo('JavaScript'));
console.log(erin.age);
console.log(luke.favSubjects);
console.log(leia.previousBackground);
console.log(luke.PRAssignment('CSS'));
console.log(leia.listsSubjects());
console.log(joe.debugsCode(erin, 'Python'));
console.log(sam.standUp('CS11'));
console.log(sam.sayHello());
console.log(mike.grade(leia, 'bootstrap'));
console.log(mike.points(erin));
console.log(anne.points(luke));
console.log(mike.points(leia));
console.log(joe.points(luke));
console.log(luke.grade);
console.log(erin.grade);
console.log(leia.grade);
console.log(luke.graduate(fred));
console.log(erin.graduate(mary));
console.log(leia.graduate(mike));