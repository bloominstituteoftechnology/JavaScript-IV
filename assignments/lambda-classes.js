// CODE here for your Lambda Classes

// Create class Person to serve as base class
class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

// testing person
const david = new Person({
    name: 'David',
    age: 32,
    location: 'London',
    gender: 'M'
})

console.log(david); // Person {name: "David", age: 32, location: "London", gender: "M"}
david.speak(); // Hello my name is David, I am from London.

// create class Instructor which inherits from Person
class Instructor extends Person {
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// testing instructor 
const emma = new Instructor({
    name: 'Emma',
    age: 26,
    location: 'Dublin',
    gender: 'F',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: '"You see, it makes sense if you think about it"'
});

console.log(emma); // Instructor {name: "Emma", age: 26, location: "Dublin", gender: "F", specialty: "Redux", …}
emma.demo("Immutability"); // Today we are learning about Immutability.
emma.grade(david, "redux"); // David receives a perfect score on redux


// create class Student that inherits from Person
class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className  = student.className;
        this.favSubjects = student.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// testing student
const isaac = new Student({
    name: 'Isaac',
    age: 23,
    location: 'Dublin',
    gender: 'M',
    previousBackground: 'Business & Law',
    className: 'JavaScript IV',
    favSubjects: ['Introduction to User Interface and Git', 'Advanced CSS', 'JavaScript Fundamentals']
})

console.log(isaac); // Student {name: "Isaac", age: 23, location: "Dublin", gender: "M", previousBackground: "Business & Law", …}
isaac.listsSubjects(); // Introduction to User Interface and Git - Advanced CSS - JavaScript Fundamentals
isaac.PRAssignment('JavaScript IV'); // Isaac has submitted a PR for JavaScript IV
isaac.sprintChallenge('JavaScript Fundamentals'); // Isaac has begun sprint challenge on JavaScript Fundamentals

// Create class Project Manager that inherits from Instructors
class ProjectManager extends Instructor {
    constructor(projectManager) {
        super(projectManager);
        this.gradClassName = projectManager.gradClassName;
        this.favInstructor = projectManager.favInstructor;
    }

    standup(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// testing ProjectManager
const elizabeth = new ProjectManager({
    name: 'Elizabeth',
    age: 25,
    location: 'Belgium',
    gender: 'F',
    specialty: 'Backend Dev',
    favLanguage: 'Java',
    catchPhrase: '"Easy peezy"',
    gradClassName: "EU1",
    favInstructor: "Emma"
});

console.log(elizabeth); // ProjectManager {name: "Elizabeth", age: 25, location: "Belgium", gender: "F", specialty: "Backend Dev", …}
elizabeth.standup("eu_elizabeth"); // Elizabeth announces to eu_elizabeth, @channel standy times!
elizabeth.debugsCode(isaac, "Advanced CSS"); // Elizabeth debugs Isaac's code on Advanced CSS

// Person Objects

const alpha = new Person({
    name: 'Alpha',
    age: 37,
    location: 'New York',
    gender: 'F'
})

console.log(alpha); // Person {name: "Alpha", age: 37, location: "New York", gender: "F"}
alpha.speak(); // Hello my name is Alpha, I am from New York.

const beta = new Person({
    name: 'Beta',
    age: 29,
    location: 'Egypt',
    gender: 'M'
});

console.log(beta); // Person {name: "Beta", age: 29, location: "Egypt", gender: "M"}
beta.speak(); // Hello my name is Beta, I am from Egypt.

// Instructor Objects

const charlie = new Instructor({
    name: 'Charlie',
    age: 33,
    location: 'Cork',
    gender: 'F',
    specialty: 'Data Analysis',
    favLanguage: 'Julia',
    catchPhrase: '"You need to keep up with the times"'
});

const delta = new Instructor({
    name: 'Delta',
    age: 24,
    location: 'Manchester',
    gender: 'M',
    specialty: 'Computer Architecture',
    favLanguage: 'Visual Basic',
    catchPhrase: '"You need to learn the fundamentals"'
});

console.log(charlie); // Instructor {name: "Charlie", age: 33, location: "Cork", gender: "F", specialty: "Data Analysis", …}
charlie.demo("Persistence"); // Today we are learning about Persistence.
charlie.grade(alpha, "Data Analysis"); // Alpha receives a perfect score on Data Analysis

console.log(delta); // Instructor {name: "Delta", age: 24, location: "Manchester", gender: "M", specialty: "Computer Architecture", …}
delta.demo("Synchronisation"); // Today we are learning about Synchronisation.
delta.grade(beta, "C Programming"); // Beta receives a perfect score on C Programming


// Student Objects
const echo = new Student({
    name: 'Echo',
    age: 41,
    location: 'Vancouver',
    gender: 'M',
    previousBackground: 'Physics',
    className: 'React',
    favSubjects: ['Applied JavaScript', 'React', 'Intermediate React']
});

const foxtrot = new Student({
    name: 'Foxtrot',
    age: 25,
    location: 'Sillicon Valley',
    gender: 'M',
    previousBackground: 'Mathematics',
    className: 'Redux',
    favSubjects: ['Single Page Applications', 'Redux']
});

console.log(echo); 
echo.listsSubjects(); 
echo.PRAssignment('Applied JavaScript'); 
echo.sprintChallenge('Intermediate React');

console.log(foxtrot); 
foxtrot.listsSubjects(); 
foxtrot.PRAssignment('Redux'); 
foxtrot.sprintChallenge('Single Page Applications');

// Project Manager Objects

const golf = new ProjectManager({
    name: 'Golf',
    age: 27,
    location: 'Westminister',
    gender: 'F',
    specialty: 'Fullstack Dev',
    favLanguage: 'JavaScript',
    catchPhrase: '"Never give up"',
    gradClassName: "EU1",
    favInstructor: "Emma"
});

const hotel = new ProjectManager({
    name: 'Hotel',
    age: 19,
    location: 'Antrim',
    gender: 'F',
    specialty: 'Frontend Dev',
    favLanguage: 'Prolog',
    catchPhrase: '"Make it count"',
    gradClassName: "EU1",
    favInstructor: "Emma"
});

console.log(golf); 
golf.standup("eu_golf"); 
golf.debugsCode(echo, "React"); 

console.log(hotel); 
hotel.standup("eu_hotel"); 
hotel.debugsCode(foxtrot, "Data Structures"); 
