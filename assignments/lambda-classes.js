// CODE here for your Lambda Classes

class Person {
    constructor(individual) {
    this.name = individual.name
    this.age = individual.age
    this.location = individual.location
    this.gender = individual.gender
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    super(indivudual);
    constructor(individual) {
        this.specialty = individual.specialty;
        this.favLanguage = individual.favLanguage;
        this.catchPhrase = individual.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    super(stu);
    constructor(stu) {
        this.previousBackground = stu.previousBackground;
        this.className = stu.className;
        this.favSubjects = stu.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            return element;
        });
    }
    PRAssignment(subject) {
        return `${this.name}has submitted a PR for ${subject}`
    }
}