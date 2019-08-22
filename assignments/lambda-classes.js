class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    }

class Instructor extends Person {
    constructor (instructattributes) {
        super (instructattributes);
        this.specialty = instructattributes.specialty;
        this.favLanguage = instructattributes.favLanguage;
        this.catchPhrase = instructattributes.catchPhrase;
        }

        demo(subject){
            return `Today we are learning about ${subject}`;
        }
        grade(Student, subject){
            return `${Student.name} receives a perfect score on ${subject}`
        }
    }

class Student extends Person {
    constructor (studentattributes) {
        super (studentattributes);
        this.previousBackground = studentattributes.previousBackground;
        this.favSubjects = studentattributes.favSubjects;
        this.catchPhrase = studentattributes.catchPhrase;
        }

        listsSubjects(Student, subject){
            return `${this.favSubjects}`;
        }
        demo(){
            return `${Student.name} receives a perfect score on ${subject}`
        }

         PRAssignment(subject) {
            return `${Student.name} has submitted a PR for ${subject}`
        }

        sprintChallenge() {
            return `${student.name} begun sprint challenge on ${subject}`
        }
}

class ProjectManagers extends Instructor {
        constructor (pmattributes) {
            super (pmattributes);
            this.NewgradClassName = gradClassName;
            this.NewfavInstructor = favInstructor;
        }

        standup (channel) {
            return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
        }

        debugsCode (subject) {
            return `${name} debugs ${student.name}'s code on ${subject}`
        }
}
    

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,

})

const wilma = new Person({
    name: 'Wilma',
    location: 'Rosebed',
    age: 30,
})

const tom = new Instructor ({
    name: 'Tom',
    location: 'USA',
    age: 30,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Happy Birthday`,
})

const jerry = new Instructor ({
    name: 'Jerry',
    location: 'Costa Rica',
    age: 40,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Salud`
})


const nicole = new Student ({
    name: 'Nicole',
    location: 'San Diego',
    age: 21,
    previousBackground: 'Sales',
    className: 'Web-Dev23',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})

const nikki = new Student ({
    name: 'Nikki',
    location: 'Los Angeles',
    age: 22,
    previousBackground: 'Beauty',
    className: 'Web-Dev21',
    favSubjects: ['Python', 'React', 'C#']
})

console.log(fred.speak());
console.log(wilma.speak());
console.log(tom.demo("constructors"));
console.log(jerry.demo("classes"));
console.log(tom.grade(nikki, "constructors"));