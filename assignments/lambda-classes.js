// CODE here for your Lambda Classes
// Base Class -- Person

class Person {
	constructor(traits) {
		this.name = traits.name;
		this.age = traits.age;
		this.location = traits.location;
		this.gender = traits.gender;
    }
    // Person Methods
	speak() {
		return `Hello, my name is ${this.name}. I am from ${this.location}`;
	}
}

const lavon = new Person({
	name: 'Lavon',
	age: 21,
	location: 'Tahiti',
	gender: 'F',
});

console.log(lavon.speak());

// Instructor - Class

class Instructor extends Person {
    constructor(instructorTraits) {
        super(instructorTraits);
        this.specialty = instructorTraits.specialty;
        this.favLanguage = instructorTraits.favLanguage;
        this.catchPhrase = instructorTraits.catchPhrase;
    }
    // Instructor Methods
    demo() {
        return `Today we are learning about ${this.subject}.`;
    }

    grade() {
        return '${student.name} receives a perfect score on ${this.subject}.`;
    }
}

// Student - Class

class Student extends Person {
    constructor(studentTraits) {
        super(studentTraits);
        this.previousBackground = studentTraits.previousBackground;
        this.className = studentTraits.className;
        this.favSubjects = studentTraits.favSubjects;
    }
    listsSubjects() {
        //  method that logs out all of the student's favoriteSubjects one by one
        Person.apply(this,)
    }

    PRAssignment() {
        return `${this.name} has submitted a PR for {this.subject}.`;
    }

    sprintChallenge() {
        `${this.name} has begun sprint challenge on ${this.subject}.`;
    }
}

// Project Manager - Class
