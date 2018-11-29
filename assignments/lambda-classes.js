// CODE here for your Lambda Classes



//===== Person class =====

class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//===== Instructor class =====

class Instructor {
    constructor(instructorAttributes){
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}` ;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}` //-----check this line later!!!----
    }
}

//===== Student class =====

class Student {
    constructor(studentAttributes){
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        return `${this.favSubjects1}, ${this.favSubjects2}, ${this.favSubjects3}`;  //-----check this line later!!!----
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}