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
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }


}



class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);

        this.previousBackground = studentAttrs.previousBackground;
        this.favSubject = studentAttrs.favSubject;

    }

    listsSubjects(subjects) {
        return subjects.forEach((subject) => {
            return `${subject}`;
        })
    }

    prAssignment(subject) {
        `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        `${this.name} has submitted their sprint challenge for ${subject}`;
    }



}
