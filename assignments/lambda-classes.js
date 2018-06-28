/**
* Lambda Objects in Class Syntax
**/
/**
 * Constructors
 */
//* BASE CLASS

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

//* INSTRUCTOR CLASS

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
	}
	mark(exampleStudent) {
		console.log(`${exampleStudent.name}'s current grade is ${exampleStudent.grade}`);
		const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		exampleStudent.grade += Math.floor(Math.random()*10) * plusOrMinus;
		if (exampleStudent.grade < 0) {
			exampleStudent.grade = 0;
		}
		console.log(`${exampleStudent.name}'s current grade is ${exampleStudent.grade}`);
		exampleStudent.graduate(this);
	}
}

//* STUDENT CLASS

class Student extends Person {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade =  Math.floor(Math.random()*100);
    }
    listsSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
        })
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
	graduate(instructorObject) {
		if (this.grade < 70) {
			instructorObject.mark(this);
		} else {
			console.log(`${this.name} passed!  I'm as surprised as you are.`)
		}
	}
}

//* PROJECT MANAGER CLASS 

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}'`);
    }
}

/**
 * Objects
 */

 //* Instructor Objects

 const Josh  = new Instructor ({
     name: 'Josh',
     location: `Josh's House`,
     age: `Oh like 22 at most`,
     gender: 'male',
     favLanguage: 'Esperanto',
     speciality: 'Karate',
     catchPhrase: 'Calm down CS 12, just calm down.',
 });

 const Diandra = new Instructor ({
     name: 'Diandra',
     location: 'I think New Mexico',
     age: 'Like...26?',
     gender: 'female',
     favLanguage: 'Bee Dance',
     speciality: 'Teaching n00bs',
     catchPhrase: 'For those of you just joining us let me tell you a little about Lambda School',
 });



 //*Student Objects

 const Trevor = new Student ({
     name: 'Trevor',
     location: 'BEHIND YOU!',
     age: 36,
     gender: 'male',
     previousBackground: 'Witness protection.  Wait, forget you read that',
     className: 'CS12',
     favSubjects: ['Literature', 'Music'],
    });
    
    const Alberto = new Student ({
    name: 'Alberto',
    location: 'Everywhere and Nowhere',
    age: 26,
    gender: 'male',
    previousBackground: 'True Crime Novelist',
    className: 'CS12',
    favSubjects: ['Peasants','Dukes','Blacksmiths'],
});


//*PM Objects

const Eric = new ProjectManager ({
    name: 'Eric',
    location:'The middle of a storm',
    age: 26,
    gender: 'male',
    gradClassName: 'CS5',
    favInstructor: 'Josh',
});

const Terrie = new ProjectManager ({
    name: 'Terrie',
    location: 'Lurking',
    age: 24,
    gender: 'female',
    gradClassName: 'CS5',
    favInstructor: 'Josh',
});

Alberto.listsSubjects();
console.log(Eric.name);
console.log(Trevor.grade);
Eric.mark(Trevor);