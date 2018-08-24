// CODE here for your Lambda Classes

class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
	}
	
	speak() {
		return `Hello my name is ${this.name}`;
	}
}

class Instructor extends Person {
	constructor(attributes) {
		super(attributes);
		this.specialty = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase = attributes.catchPhrase;
	}
	
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}
	
	gradeAssignment(student) {
		let score = Math.floor(Math.random() * 10) + 1;
		score *= Math.floor(Math.random()*2) == 1 ? 1 : -1;		
		return score;
	}
}

class Student extends Person {
	constructor(attributes) {
		super(attributes);
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects;
		this.grade = attributes.grade;
	}
	
	listsSubjects() {
		this.favSubjects.forEach(function(item) {
			console.log(item);
		});
	}
	
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
		return `${this.name} has submitted a PR for ${subject}`;
	}
	
	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
	
	graduate() {
		if (me.grade >= 70) {
			console.log(`Congratulations ${this.name} has graduated!`);
			return true;
		}
		return false;
	}
}

class ProjectManagers extends Instructor {
	constructor(attributes) {
		super(attributes)
		this.gradClassName = attributes.gradClassName;
		this.favInstructor = attributes.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}
	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}


const me = new Student({
	name: "Jason",
	age: 35,
	location: "Reedley",
	previousBackground: "Manufacturing",
	className: "Web Development",
	favSubjects: ["JavaScript", "C#"],
	grade: 0,
});
const camila = new ProjectManagers({
	name: "Camila",
	age: 27,
	location: "Texas",
	specialty: "Java",
	favLanguage: "Java",
	catchPhrase: "Shoot for the moon. Even if you miss, you'll land among the stars.",
	gradClassName: " ",
	favInstructor: " ",
});

me.listsSubjects();
me.PRAssignment("JavaScript");
me.sprintChallenge("JavaScript");
camila.standUp("cspt2_camila");
console.log(camila.debugsCode(me, "JavaScript"));

while(me.graduate() != true) {
	me.grade += camila.gradeAssignment(me);
	console.log(`My current grade is ${me.grade}`);
}
