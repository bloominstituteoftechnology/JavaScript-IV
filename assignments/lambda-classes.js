// CODE here for your Lambda Classes
class Person {
	constructor(options) {
		this.name = options.name;
		this.age = options.age;
		this.location = options.location;
		this.gender = options.gender;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	};
}


class Instructor extends Person {
	constructor(instructorOptions) {
		super(instructorOptions);
		this.specialty = instructorOptions.specialty;
		this.favLanguage = instructorOptions.favLanguage;
		this.catchPhrase = instructorOptions.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	};
}


class Student extends Person {
	constructor(studentOptions) {
		super(studentOptions);
		this.previousBackground = studentOptions.previousBackground;
		this.className = studentOptions.className;
		this.favSubjects = studentOptions.favSubjects;
	}
	listsSubjects() {
		console.log(this.favSubjects);
	};

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	};

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	};
}


class ProjectMananger extends Instructor {
	constructor(projectManangerOptions) {
		super(projectManangerOptions);
		this.gradClassName = projectManangerOptions.gradClassName;
		this.favInstructor = projectManangerOptions.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	};

	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	};
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

const lisa = new Instructor({
  name: 'Lisa',
  location: 'Sacramento',
  age: 35,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Back-end',
  catchPhrase: `Hello!`
});

const mark = new Student ({
  name: 'Mark',
  location: 'Denver',
  age: 33,
  gender: 'male',
  previousBackground: 'IT',
  className: 'CS13',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const john = new Student ({
  name: 'John',
  location: 'San-Antonio',
  age: 27,
  gender: 'male',
  previousBackground: 'construction',
  className: 'CS11',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const tom = new ProjectMananger({
  name: 'Tom',
  location: 'Reno',
  age: 45,
  gender: 'male',
  favLanguage: 'Ruby',
  specialty: 'Web-Dev',
  catchPhrase: `Life is good!`,
  gradClassName: 'CS1',
  favInstructor: 'Donald'
});

const sam = new ProjectMananger({
  name: 'Sam',
  location: 'New-York',
  age: 52,
  gender: 'male',
  favLanguage: 'C#',
  specialty: 'Web-Dev',
  catchPhrase: `I love New-York`,
  gradClassName: 'CS2',
  favInstructor: 'Josh'
});


sam.speak();
tom.demo('HTML');
lisa.grade(mark, 'CSS');
mark.listsSubjects();
john.PRAssignment('CSS');
mark.sprintChallenge('LESS');
tom.standUp('CS13');
sam.debugsCode(john, 'Java-Script');



