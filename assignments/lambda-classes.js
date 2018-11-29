// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender
    }

    greeting() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }

}


class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }


}



class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);

        this.previousBackground = studentAttrs.previousBackground;
        this.favSubjects = studentAttrs.favSubjects;

    }

    listSubjects() {
        return this.favSubjects.forEach((subject) => {
            console.log(`${subject}`);
        })
    }

    prAssignment(subject) {
        `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        `${this.name} has submitted their sprint challenge for ${subject}`;
    }



}


class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);

        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(channel) {
        return `@${this.name} announces to @${channel}, Standy time!`
    }

    debugsCode(student, subject) {
        return `${this.name} degugs ${student.name}'s code on ${subject}.`
    }

}


const john = new Instructor({
    name: 'John',
    age: 40,
    location: 'San Francisco',
    gender: 'M',

    specialty: 'Front-End Development',
    favLanguage: 'JavaScript',
    catchPhrase: 'Secret Sauce'


})


const lisa = new Student({
    name: 'Lisa',
    age: 23,
    location: 'Dallas',
    gender: 'F',

    previousBackground: 'Art',
    favSubjects: ['React', 'CSS', 'JavaScript', 'Back-End']
})


const jason = new ProjectManager({
    name: 'Jason',
    age: 28,
    location: 'Los Angeles',
    gender: 'M',

    specialty: 'React',
    favLanguage: 'TypeScript',
    catchPhrase: 'You got this',

    gradClassName: `CS10`, 
    favInstructor: 'John'
})


// Instructor Tests
console.log(``);
console.log(`**** INSTRUCTOR TESTS ****`);
console.log(``);


console.log(john.greeting());
console.log(john.demo('closures'));
console.log(john.grade(lisa, 'JavaScript Fundamentals'));


//Student Tests
console.log(``);
console.log(`***** STUDENT TESTS*****`)
console.log(``);


console.log(lisa.greeting());
console.log(lisa.listSubjects());


// PM Tests
console.log(``);
console.log(`***** PRODUCT MANAGER TESTS*****`)
console.log(``);

console.log(jason.greeting());
console.log(jason.standUp('fsw16'));
console.log(jason.debugsCode(lisa, 'JavaScript-IV'));



