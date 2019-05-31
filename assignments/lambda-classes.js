// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we wil be learning about ${subject}`
    };
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`
    }
    changeGrade(student){
        const max = Math.floor(100 - student.grade)
        const min = Math.ceil(student.grade - 100)
        return student.grade = student.grade + Math.floor(Math.random() * (max - min)) + min;
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
    }

    PRAssignment(attribute){
        return `${this.name} has submitted a PR for ${attribute}`
    };
    listSubjects(){
        return this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
    }
    sprintChallenge(attribute){
        return `${this.name} has begun sprint challenge on ${attribute}`
    }
    graduate(){
        if(this.grade >= 70){
            return this.graduate = true;
        }else{
            return this.graduate = false;
        }
    }
    applyForInstructor(){
        if (this.graduate === true){
            return `Congrats ${this.name} you will now be considered for the next available instructor position!`
        }else{
            return `Sorry but unfortunately you must graduate before applying for this position, But feel free to apply to being a pm in the meantime!`;
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(attr){
        return `${this.name} announces to ${attr.channel}, @channel standy time!!!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const logan = new Student ({
    name: 'Logan Karnes',
    age: 20,
    location: 'Vancouver Wa',
    previousBackground: 'Foundations',
    className: 'WebPT7',
    favSubjects: ['Javascript', 'html', 'Css', 'Python'],
    grade: 75,

})
const dan = new Instructor ({
    name: 'Dan Frehner',
    age: 36,
    location: 'California',
    specialty: 'Javascript',
    favLanguage: 'Javascript',
    catchPhrase: 'Cult of Functionality'
})

const jeff = new ProjectManager ({
    name: 'Jeff Artrip',
    age: 24,
    location: 'New York',
    specialty: 'Javascript',
    favLanguage: 'python',
    catchPhrase: 'Hi Everyone!',
    gradClassName: 'Web12',
    favInstructor: 'Dan Frehner'
})

console.log(dan.changeGrade(logan));
console.log(logan);
console.log(dan);
console.log(jeff);
console.log(logan.graduate());
console.log(logan.applyForInstructor());