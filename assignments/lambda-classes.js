// CODE here for your Lambda Classes

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak(name, location){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    // extends -> Instructor.prototype = Object.create(Person.prototype);
    constructor(specialty, favLanguage, catchPhrase){
        super() //not sure here
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    // extends -> Student.prototype = Object.create(Person.prototype);
    constructor(previousBackground, className, favSubjects) {
        super()
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects; //supposed to be array?
    }

    listsSubjects(){
        favSubjects.forEach((element, index) => {
            console.log(favSubjects.element);
        })
    }

    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManagers extends Instructor {
    // extends -> ProjectManager.prototype = Object.create(Instructor.prototype);
    constructor(gradClassName, favInstructor){
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel){
        return `${name} announces to ${channel}, @channel standup times!`
    }

    debugsCode(student, subject){
        return `${name} debugs ${student.name}'s code on ${subject}.`
    }

}



const wilma = new Instructor ({
    specialty: 'javascript',
    favLanguage: 'python',
    catchPhrase: 'picture me rollin',
})

console.log(wilma);