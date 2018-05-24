// CODE here for your Lambda Classes
class Person {
	constructor (personAttributes){
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
	}

	speak(){
		console.log(`Hello. My name is ${this.name}. I am from ${this.location}.`)
	}
}
  
class Instructor extends Person {
	constructor (instructorAttributes){
		super(instructorAttributes);
		this.speciality = instructorAttributes.speciality;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}

	demo(subject){
		console.log(`Today we are learning about ${subject}`)
	} 
	
	grade(student, subject){
		console.log(`${student.name} recieves a perfect score on ${subject}`);
	}
}

class Student extends Person {
	constructor(studentAttributes){
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
	}

	listsSubjects() {
		this.favSubjects.forEach(subject=>{
			console.log(subject + ' is one of my favorite subjects');
		})
	}
	PRAssignments(subject){
		console.log(`${this.name} has completed a PR for ${subject}`);
	}
	sprintChallenge(subject){
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}

class ProjectManager extends Instructor {
	constructor(pmAttributes){
		super(pmAttributes);
		this.gradClassName = pmAttributes.gradClassName;
		this.favInstructor = pmAttributes.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`)
	}

	debugsCode (student, subject){
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
	}
}

