// CODE here for your Lambda Classes
class Person {
	constructor(personAttributes) {
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
		this.gender = personAttributes.gender;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person{
	constructor(instructorAttributes){
		super(instructorAttributes);
		this.speciality = instructorAttributes.speciality;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student) {
		let plusorMinus = Math.random() < 0.5 ? -1 : 1;
		let random = Math.floor(Math.random() * 40);
		student.grade = student.grade - (plusorMinus * random);
		return `${student.name} currently has a grade of ${student.grade}`;
	}
}

class Student extends Person {
	constructor(studentAttributes){
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
		this.grade = studentAttributes.grade;
	}
	listSubjects() {
		this.favSubjects.forEach(subject => console.log(subject));
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject){
		return `${this.name} has begun a sprint challenge on ${subject}`;
	}
	graduate() {
		if (this.grade >= 70) {
			return `${this.name} has a grade of ${this.grade} and is ready to graduate!`;
		} else {
			return 	`${this.name} has a grade of ${this.grade} and needs ${70-this.grade} more to graduate.`
		}
	}
}

class ProjectManager extends Instructor {
	constructor(projectManagerAttributes){
		super(projectManagerAttributes);
		this.gradClassName = projectManagerAttributes.gradClassName;
		this.favInstructor = projectManagerAttributes.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const joe = new Student({
  name: 'Joe',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  previousBackground: 'Rapper',
  className: 'CS100',
  favSubjects: ['HTML', 'React', 'D3'],
  grade: 100
});

const steve = new ProjectManager({
  name: 'Steve',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  gradClassName: 'CS1',
  favInstructor: 'Josh'
});

console.log(fred.demo('React'));
console.log(fred.grade(joe, 'React'));
joe.listSubjects();
console.log(joe.PRAssignment('JavaScript'));
console.log(joe.sprintChallenge('Python'));
console.log(steve.standUp('CS12'));
console.log(steve.debugsCode(joe, 'JavaScript'));
console.log(steve.grade(joe));
console.log(joe.graduate());