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

// Testing

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const dumbledore = new Instructor({
	name: 'Albus Dumbledore',
	location: 'Hogwarts',
	age: 160,
	gender: 'male',
	favLanguage: 'Magic',
	speciality: 'Transfiguration',
	catchPhrase: 'It does not do to dwell on dreams and forget to live.'
});

const frank = new Person({
	name: 'Franklin',
	age: 37,
	location: 'New York',
	gender: 'male'
});

const al = new Person({
	name: 'Alfred Yankovic',
	age: 59,
	location: 'California',
	gender: 'male'
});

const ed = new Student({
	name: 'Edward',
	age: 27,
	location: 'New Jersey',
	gender: 'male',
	previousBackground: 'Free Code Camp and Practical JS',
	className: 'CSPT3',
	favSubjects: ['Javascript']
});

const harry = new Student({
	name: 'Harry Potter',
	age: 17,
	location: 'Little Whinging',
	gender: 'male',
	previousBackground: 'The Boy Who Lived',
	className: 'Gryffindor',
	favSubjects: ['Defense Against the Dark Arts']
});

const percy = new ProjectManager({
	name: 'Percy Weasley',
	age: 21,
	location: 'The Burrow',
	gender: 'male',
	favLanguage: 'Magic',
	speciality: 'Being Head Boy',
	catchPhrase: 'Blah blah rules blah',
	gradClassName: 'Gryffindor',
	favInstructor: 'Professor McGonagall'
});

const dude = new ProjectManager({
	name: 'Dude',
	age: 99,
	location: 'Everywhere',
	gender: 'male',
	favLanguage: 'Java',
	speciality: 'OOP',
	catchPhrase: 'I\'m a guy',
	gradClassName: 'FSW1',
	favInstructor: 'Beej'
});
