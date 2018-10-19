// CODE here for your Lambda Classes

class LambdaPerson{
	constructor(attributes){
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
		this.gender = attributes.gender;
	}
	speak(){
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends LambdaPerson{
	constructor(attributes){
  		super(attributes);
  		this.specialty = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase;
	}
	demo(subject){
		console.log(`Today we are learning about ${subject}`);
	}
	grade(student, subject){
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}

class Student extends LambdaPerson{
	constructor(attributes){
  		super(attributes);
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects =  attributes.favSubjects;
	}
	listsSubjects(){
		this.favSubjects.forEach(function(subject){
			console.log(subject);
		});
	}
	PRAssignment(subject){
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge(subject){
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}

class ProjectManager extends Instructor{
	constructor(attributes){
  		super(attributes);
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}
	standUp(channel){
		console.log(`${this.name} announces to ${channel}, @${channel} standy times!​​​​​`);
	}
	debugsCode(student, subject){
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}




//*********

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const joe = new Instructor({
  name: 'Joe',
  location: 'NYC',
  age: 34,
  gender: 'male',
  favLanguage: 'CSS',
  specialty: 'Front-end',
  catchPhrase: `What cha gonna do?`
});

const kathy = new Instructor({
  name: 'Kathy',
  location: 'cedar rapids',
  age: 36,
  gender: 'female',
  favLanguage: 'Pyhton',
  specialty: 'Back-end',
  catchPhrase: `When life gives you lemons, code some lemonde`
});

const mary = new Student({
  	name: 'Mary',
  	location: 'SF',
  	age: 22,
  	gender: 'female',
	previousBackground: 'call center',
	className: 'CS16',
	favSubjects:  ['React','Scala','CSS']
});

const james = new Student({
  	name: 'James',
  	location: 'Chicago',
  	age: 27,
  	gender: 'male',
	previousBackground: 'construction',
	className: 'CS16',
	favSubjects:  ['CSS']
});

const emily = new Student({
  	name: 'Emily',
  	location: 'Raleigh',
  	age: 24,
  	gender: 'female',
	previousBackground: 'barista',
	className: 'CS14',
	favSubjects:  ['Ruby']
});

const ashley = new ProjectManager({
  	name: 'Ashley',
  	location: 'Durham',
  	age: 26,
  	gender: 'female',
	favLanguage: 'Pyhton',
  	specialty: 'Back-end',
  	catchPhrase: `yo yo whaddup`,
	gradClassName: 'CS14',
	favInstructor: 'Josh Knell'
});

const john = new ProjectManager({
  	name: 'John',
  	location: 'Unknown',
  	age: 26,
  	gender: 'male',
	favLanguage: 'javascript',
  	specialty: 'Back-end',
  	catchPhrase: `lets roll`,
	gradClassName: 'CS14',
	favInstructor: 'Josh Knell'
});

const courtney = new ProjectManager({
  	name: 'Courtney',
  	location: 'LA',
  	age: 26,
  	gender: 'female',
	favLanguage: 'Scala',
  	specialty: 'Back-end',
  	catchPhrase: `get 'er done`,
	gradClassName: 'CS14',
	favInstructor: 'Josh Knell'
});


//** tests **
//instructor
console.log(fred.name);
console.log(joe.location);
console.log(kathy.age);
console.log(fred.gender);
console.log(joe.favLanguage);
console.log(kathy.catchPhrase);
kathy.speak();
kathy.demo('CSS');
kathy.grade(mary, 'CSS');

//student
console.log(mary.name);
console.log(james.location);
console.log(emily.age);
console.log(mary.gender);
console.log(james.previousBackground);
console.log(emily.className);
console.log(mary.favSubjects);
mary.listsSubjects();
mary.PRAssignment('CSS');
mary.sprintChallenge('CSS');

//pm
console.log(ashley.name);
console.log(john.location);
console.log(courtney.age);
console.log(ashley.gender);
console.log(john.favLanguage);
console.log(courtney.catchPhrase);

john.standUp('fsw15_john');
john.debugsCode(mary, 'CSS');


