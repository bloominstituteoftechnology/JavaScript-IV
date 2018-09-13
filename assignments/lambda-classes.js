// CODE here for your Lambda Classes

// Person class
class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.age  = attributes.age;
		this.location = attributes.location;
		this.gender = attributes.gender;
	}
	//methods
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

//Instructor  class 

class Instructor extends Person {
	constructor(instructorAttributes) {
		super(instructorAttributes);
		this.specialty = instructorAttributes.specialty;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}
	//methods
	demo(subject) {
		return `Today we are learning about ${subject}'`;
	}
	grade(student, subject) {
		return `'${student.name} receives a perfect score on ${subject}`;
	}
}

//Student class
class Student extends Person {
	constructor(studentAttributes) {
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
	}
	//methods

	listsSubjects() {
		this.favSubjects.forEach(function(element) {
			console.log(element);
		});
	} //listSubjects() ends

	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	} //PRAssignment() ends

	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	} // sprintChallenge() ends
} // student class ends.

//ProjectManager  class
class ProjectManager extends Instructor {
	constructor(pmAttributes) {
		super(pmAttributes);
		this.gradClassName = pmAttributes.gradClassName;
		this.favInstructor = pmAttributes.favInstructor;
	}
	//methods
	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
	} //standUp ends

	debugsCode(Student, subject) {
		return `${this.name} debugs ${Student.name}'s code on ${subject}`;
	} //debugCode() ends.

}

//Object creation..

const fred = new Instructor({
  	name: 'Fred',
  	location: 'Bedrock',
  	age: 37,
  	gender: 'male',
  	favLanguage: 'JavaScript',
  	specialty: 'Front-end',
  	catchPhrase: `Don't forget the homies`
});

const ld = new Student({
  	name: 'LD',
  	location: 'NJ',
  	age: 37,
  	gender: 'Female',
  	previousBackground : 'C',
	className : 'CS132',
	favSubjects : ['HTML', 'CSS', 'JavaScript']
});

const pm = new ProjectManager({
  	name: 'PMO',
  	location: 'CA',
  	age: 47,
  	gender: 'Female',
  	gradClassName : 'CS14',
	favInstructor : 'Sam'
});

console.log(`ProjectManager standUp() : ${pm.standUp('CS14')}`);
console.log("Student favSubjects : ")
ld.listsSubjects();

console.log("Instructor demo()  : " +fred.demo("JavaScript"));