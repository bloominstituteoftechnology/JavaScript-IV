// CODE here for your Lambda Classes

class Person {
	constructor(attr) {
	  this.name = attr.name;
	  this.age = attr.age;
	  this.location = attr.location;
	  this.gender = attr.gender;
	}

	speak() {
	  console.log(`Hello my name is ${this.name} I am from ${this.location}`);
	}
}


class Instructor extends Person {
	constructor(attr) {
		super(attr);
		this.speciality = attr.speciality;
		this.favLanguage = attr.favLanguage;
		this.catchPhrase = attr.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}



class Student extends Person {
	constructor(attr) {
		super(attr);
		this.previousBackground = attr.previousBackground;
		this.className = attr.className;
		this.favSubjects = attr.favSubjects;
	}

	listsSubjects() {
		console.log(`${this.name}'s favorite subjects are ${this.favSubjects}`);
	}

	PRAssignments(subject){
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject){
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}	
}


class ProjectManager extends Instructor {
	constructor(attr) {
		super(attr);
		this.gradClassName = attr.gradClassName;
		this.favInstructor = attr.favInstructor;
	}

	standUp(slack) {
		console.log(`${this.name} announces to ${slack}, @channel standy times!`);
	}

	debugsCode(Student, subject){
		console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
	}
}


const Greg = new Instructor({
	name: "Greg",
	age: 1,
	location: "Boston",
	gender: "N/A",
	speciality: "Javascript",
	favLanguage: "C++",
	catchPhrase: "Doh!"
})



const Matt = new Student({
	name: "Matt",
	age: 43,
	location: "LA",
	gender: "M",
	favSubjects: ['Ruby', 'Javascript', 'C++', 'PHP', 'Python'],
	previousBackground: "none",
	className: "CS132",
})

const Pedro = new ProjectManager({
	name: "Pedro",
	age: 2,
	location: "Utah",
	gender: "M",
	gradClassName: "CS132",
	favInstructor: "Paul",
	speciality: "PHP",
	favLanguage:"Ruby",
	catchPhrase: "Yabba Dabba Do!!!"
})


console.log(Greg);
console.log(Pedro);
console.log(Matt);

Matt.sprintChallenge("Ruby");
Matt.listsSubjects();

Pedro.debugsCode(Matt, "Ruby")
Pedro.standUp("asdlkfjalsdjk");

Greg.grade(Matt, "Ruby");
Greg.demo("C++");