// CODE here for your Lambda Classes

class Person{
    constructor(properties){
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
        this.gender = properties.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person{
    constructor(properties){
        super(properties);
        this.specialty = properties.specialty;
        this.favLanguage = properties.favLanguage;
        this.catchPhrase = properties.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        let result = Math.floor((Math.random() - 0.5) * 20);
        student.grade += result;
        if(student.grade >= 100){
            student.grade = 100;
        } else if (student.grade <= 0){
            student.grade = 0;
        }
        if(student.grade >= 70){
            student.graduate();
        }
        console.log(`${student.name} receives a ${result} score on ${subject}. Their grade is now ${student.grade}.`);
        return student.grade;
    }
}

class Student extends Person{
    constructor(properties){
        super(properties);
        this.previousBackground = properties.previousBackground;
        this.className = properties.className;
        this.favSubjects = properties.favSubjects;
        this.grade = properties.grade;
    }
    listsSubjects(){
        console.log(...this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
    graduate(){
        if(this.grade >= 70){
            console.log(`Congratulations, ${this.name}! You've graduated from Lambda School!`);
            // throw new Error('Bye bye!');
        } else {
            console.log(`${this.name}, you need to try a little harder!`);
        }
    }
}

class ProjectManager extends Instructor{
    constructor(properties){
        super(properties);
        this.gradClassName = properties.gradClassName;
        this.favInstructor = properties.favInstructor;
    }
    standUp(){
        `${this.name} announces to channel, "@channel standy times!"`
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const George = new Student({
    name: 'George',
    location: 'New Jersey',
    age: '36',
    gender: 'male',
    previousBackground: 'Sports Management',
    className: 'CS14',
    favSubjects: ['Python', 'Django'],
    grade: 64
});

const Elaine = new ProjectManager({
    name: 'Elaine',
    location: 'New York City',
    age: '32',
    gender: 'female',
    specialty: 'UX/UI Design',
    favLanguage: ['LESS CSS', 'HTML', 'React'],
    catchPhrase: 'Get! Out!',
    gradClassName: 'CS3',
    favInstructor: 'Josh'
});

while(George.grade < 70){
    Elaine.grade(George);
}
