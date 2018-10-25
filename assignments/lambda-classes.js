// CODE here for your Lambda Classes

class Person{
	constructor(props){
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
		this.gender = props.gender;
	}
	speak(){
		return `Hello, my name is ${this.name} and I am from ${this.location}`;
	}
}

class Instructor extends Person{
	constructor(props){
		super(props);
		this.specialty = props.specialty;
		this.faveLanguage = props.faveLanguage;
		this.catchPhrase = props.catchPhrase;
	}
	demo(subject){
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject){
		return `${student.name} receives a perfect score on ${subject}`;
	}
}

class Student extends Person{
	constructor(props){
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
		this.favSubjects = props.favSubjects;
	}
	listsSubjects(){
		this.favSubjects.forEach(x => console.log(x)); // Asks to log out "one by one", no return statement here.  Could alternatively return whole array, or a list by using this.favSubjects.join();
	}
	PRAssignment(subject){
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject){
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor{
	constructor(props){
		super(props);
		this.gradClassName = props.gradClassName;
		this.favInstructor = props.favInstructor;
	}
	standUp(channel){
		return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
	}
	debugsCode(student, subject){
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}
