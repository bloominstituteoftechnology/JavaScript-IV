// CODE here for your Lambda Classes

class Person{
	constructor(props){
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
		this.gender = props.gender;
	}
	speak(){
		console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
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
		console.log(`Today we are learning about ${subject}`);
	}
	grade(student, subject){
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
	changeGrade(student){
		for(;;){
			let change = Math.floor(Math.random()*(100-1)+1);
			if (Math.random() >= 0.5){
				if (student.grade + change > 100) continue;
				else {
					console.log(`${this.name} adds ${change} points to ${student.name}'s grade!`);
					student.grade += change;
					return;
				}
			} else {
				if (student.grade - change < 0) continue;
				else {
					console.log(`${this.name} removes ${change} points from ${student.name}'s grade!`);
					student.grade -= change;
					return;
				}
			}
		}
	}
}

class Student extends Person{
	constructor(props){
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
		this.favSubjects = props.favSubjects;
		this.grade = Math.floor(Math.random()*(100-1)+1);
	}
	listsSubjects(){
		this.favSubjects.forEach(x => console.log(x));
	}
	PRAssignment(subject){
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge(subject){
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
	graduate(){
		console.log(this.grade > 70 ? `${this.name} graduates!`:`${this.name} is not ready to graduate.`);
	}
}

class ProjectManager extends Instructor{
	constructor(props){
		super(props);
		this.gradClassName = props.gradClassName;
		this.favInstructor = props.favInstructor;
	}
	standUp(channel){
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
	}
	debugsCode(student, subject){
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

// Testing

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  faveLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const dumbledore = new Instructor({
	name: 'Albus Dumbledore',
	location: 'Hogwarts',
	age: 160,
	gender: 'male',
	faveLanguage: 'Magic',
	specialty: 'Transfiguration',
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
	faveLanguage: 'Magic',
	specialty: 'Being Head Boy',
	catchPhrase: 'Blah blah rules blah',
	gradClassName: 'Gryffindor',
	favInstructor: 'Professor McGonagall'
});

const dude = new ProjectManager({
	name: 'Dude',
	age: 99,
	location: 'Everywhere',
	gender: 'male',
	faveLanguage: 'Java',
	specialty: 'OOP',
	catchPhrase: 'I\'m a guy',
	gradClassName: 'FSW1',
	favInstructor: 'Beej'
});
