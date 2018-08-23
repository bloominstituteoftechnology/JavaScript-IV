// CODE here for your Lambda Classes

class Person {

    constructor(allPeps){
       this.name =allPeps.name;
       this.age = allPeps.age;
       this.location = allPeps.location;
       this.gender = allPeps.gender;
    }
    speak() {

        return `Hello  my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {

    constructor(instructors){
        super(instructors);
        this.speciality = instructors.speciality;
        this.favLanguage = instructors.favLanguage;
        this.catchPhrase = instructors.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${this.subject}`

    }
    grade(student, subject)
    {
        return `${students.name} recieves a perfect score on ${this.subject}`
    }

}
class Students extends Person {

}

class ProjectManagers extends Instructors {

}
