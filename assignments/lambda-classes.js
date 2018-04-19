// CODE here for your Lambda Classes
class Person {
	constructor({name, age, location, gender}) {
		this.name = name;
		this.age = age;
		this.location = location;
		this.gender = gender;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(instructorAttributes) {
		super(instructorAttributes);
		this.specialty = instructorAttributes.specialty;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		student.grade += Math.round((Math.random() * 10), 2);
		return `${this.name} graded ${student.name}'s ${subject} assignment. \n${student.name}'s grade is ${student.grade}%`;
	}
}

class Student extends Person {
	constructor(studentAttributes) {
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
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
	graduate(instructor, subject) {
		if (this.grade >= 70) {
			return `${this.name} has graduated from LambdaSchool with a grade of ${this.grade}%!`;
		} else {
			instructor.grade(this, subject);
			return `${this.name}'s grade is ${this.grade}%. ${this.gender === 'M' ? 'He' : 'She'} needs more time at LambdaSchool.`;
		}
	}
}

class ProjectManager extends Instructor {
	constructor(pmAttributes) {
		super(pmAttributes);
		this.gradClassName = pmAttributes.gradClassName;
		this.favInstructor = pmAttributes.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to @${channel} standy times!`;
	}
	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}

/***********************************
 ********** Testing Code ***********
 ***********************************/

const josh = new Instructor({
	'name': 'Josh',
	'age': 33,
	'location': 'Utah',
	'gender': 'M',
	'specialty': 'Front-End Web Development',
	'favLanguage': 'JavaScript',
	'catchPhrase': 'Don\'t forget the homies'
});

const cass = new Student({
	'name': 'Cassandra',
	'age': 28,
	'location': 'Washington',
	'gender': 'F',
	'previousBackground': 'Education',
	'className': 'CS10',
	'favSubjects': ['JavaScript', 'CSS', 'Python'],
	'grade': Math.round((Math.random() * 100), 0)
});

const dresean = new ProjectManager({
	'name': 'Dre\'Sean',
	'age': 25,
	'location': 'North Carolina',
	'gender': 'M',
	'specialty': 'Back-End Web Development',
	'favLanguage': 'node.js',
	'catchPhrase': 'You stay classy, San Diego',
	'gradClassName': 'CS4',
	'favInstructor': josh
});

// testing speak
console.log(josh.speak());
console.log(cass.speak());
console.log(dresean.speak());

// testing properties
console.log(josh.age);
console.log(cass.gender);
console.log(dresean.specialty);
console.log(josh.favLanguage);
console.log(cass.previousBackground);
console.log(dresean.catchPhrase);
console.log(josh.catchPhrase);
console.log(cass.className);
console.log(dresean.favInstructor.name);

// testing grading
console.log(`${cass.name}'s initial grade is ${cass.grade}%`);
console.log(josh.grade(cass, 'JavaScript'));
console.log(dresean.grade(cass, 'Bootstrap'));
console.log(josh.grade(cass, 'CSS'));
console.log(dresean.grade(cass, 'HTML'));
console.log(cass.graduate(josh, 'JavaScript'));

// testing other methods
console.log(josh.demo('CSS'));
cass.listSubjects;
console.log(cass.PRAssignment('Bootstrap'));
console.log(cass.sprintChallenge('JavaScript'));
console.log(dresean.standUp('cs10_dreseansninjas'));
console.log(dresean.debugsCode(cass, 'HTML'));
