// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.names;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello, my name is ${this.name} and I live in ${this.lcation}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo() {
        console.log(
            `Alright, everyone, we're learning ${subject}, today!`
        );
    }

    grade() {
        console.log(
            `I wanted to congratulate you, ${student.name}, on how well you passed ${subject}. You should be very proud!`
        );
    }
}

class InstructorNolan extends Person {
    constructor(nolanAttributes) {
        this.specialty = nolanAttributes.specialty;
        this.favLanguage = nolanAttributes.favLanguage;
        this.catchPhrase = nolanAttributes.catchPhrase;
    }

    demo() {
        console.log(
            `Ok, you animals, we're learning ${subject}. You may now rejoice. Hey, hey! Lock that up! I said 'rejoice,' not 'revolt.'`
        );
    }

    grade() {
        console.log(
            `By the powers vested in me, I pronounce you, ${student.name}, passed in ${subject}. I'm very happy for you.`
        );
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = [];
    }

    listSubjects() {
        console.log(
            favSubjects.map(
                function(subjects) {
                    return student.favSubjects;
                }
            )
        );
    }

    prAssignments() {
        console.log(
            `${name} has submitted a PR for ${subject}.`
        );
    }

    sprintChallenge() {
        console.log(
            `${name} has begun a Sprint Challenge for ${subject}.`
        );
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp() {
        console.log(
            `${name} announced to ${channel}, "@channel : time to stand UP!!!!"`
        );
    }

    debugCodes() {
        console.log(
            `${name} debugged ${student.name}'s code during a Project for ${subject}.`
        );
    }
}