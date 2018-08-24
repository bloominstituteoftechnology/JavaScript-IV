// CODE here for your Lambda Classes

// Set up LambdaAssociate as head class
// Need Instructor, student & PM classes

class Person{
	constructor(PersonProp){
		this.name = PersonProp.name;
		this.age = PersonProp.age;
		this.Location = PersonProp.Location;
		this.gender = PersonProp.gender;
	}
	speak(){return `Hello my name is ${this.name}, I am from ${this.Location}`;};
}

class Instructor extends Person{
	constructor(InstructorProp){
		super(InstructorProp);
		this.specialty = InstructorProp.specialty;
		this.favLanguage = InstructorProp.favLanguage;
		this.catchPhrase = InstructorProp.catchPhrase;
	}
	demo(subject){return `Today we are learning about ${subject}`;};
	grade(student,subject){return
		`${student.name} receives a perfect score on ${subject}`;
	};
}

class Student extends Person{
	constructor(StudentProp){
		super(StudentProp);
		this.previousBackground = StudentProp.previousBackground;
		this.className = StudentProp.className;
		this.favSubjects = StudentProp.favSubjects;
	}
	listsSubjects(){return this.favSubjects;};
	
	PRAssignment(subject){
	return `${this.name} has submitted a PR for ${subject}`;};
	
	sprintChallenge(subject){
	return `${this.name} has begun sprint challenge on ${subject}`;};

}

class PM extends Instructor{
	constructor(PMprop){
		super(PMprop);
		this.gradClassName = PMprop.gradClassName;
		this.favInstructor = PMprop.favInstructor;
	}
	standUp(name,channel){return `${name} announces to ${channel}, @channel standy times!`;};
	debugsCode(name,Student,subject){return 
		`${name} debugs ${Student.name}s code on ${subject}`;
	};
}


// Person Test
const Bobby = new Person({
	name:"Bobby Johns",
	age:35,
	Location:"New Yawk"
});

console.log(Bobby.name);
console.log(Bobby.age);
console.log(Bobby.Location);
console.log(Bobby.speak());

// Instructor Test

// Student Test

// PM test







