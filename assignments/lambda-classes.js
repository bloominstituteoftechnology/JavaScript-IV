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

class Student extends Person{
	constructor(StudentProp){
		super(StudentProp);
		this.previousBackground = StudentProp.previousBackground;
		this.className = StudentProp.className;
		this.favSubjects = StudentProp.favSubjects;
	}
	listsSubjects(){
		return `${this.favSubjects}`;
	};
	
	PRAssignment(subject){
	return `${this.name} has submitted a PR for ${subject}`;};
	
	sprintChallenge(subject){
	return `${this.name} has begun sprint challenge on ${subject}`;};

}
//
class Instructor extends Person{
	constructor(InstructorProp){
		super(InstructorProp);
		this.specialty = InstructorProp.specialty;
		this.favLanguage = InstructorProp.favLanguage;
		this.catchPhrase = InstructorProp.catchPhrase;
	}
	demo(subject){return `Today we are learning about ${subject}`;};
	
	grade(Student,subject){
		return `${Student.name} made a perfect score on ${subject}`
	;};

	test(){return "DASDASDASD";};
}
//

class PM extends Instructor{
	constructor(PMprop){
		super(PMprop);
		this.gradClassName = PMprop.gradClassName;
		this.favInstructor = PMprop.favInstructor;
	}
	standUp(channel){return `${this.name} announces to ${channel}, @channel standy times!`;};

	debugsCode(Student,subject){
		return `${this.name} debugs ${Student.name}s code on ${subject}`;
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
///////////////////////////
console.log();
// Student Test

const Anon = new Student({
	name:"Anon Lmaoian",
	age:20,
	Location:"Utah",
	previousBackground:"Forum Moderator",
	className:"CS123",
	favSubjects:["World of Warcraft","Runescape","Roblox"]
});

console.log(Anon.name);
console.log(Anon.age);
console.log(Anon.Location);
console.log(Anon.previousBackground);
console.log(Anon.className);
console.log(Anon.favSubjects);
console.log(Anon.listsSubjects());
console.log(Anon.PRAssignment("Basic Math"));
console.log(Anon.sprintChallenge("Pascal"));

// Instructor Test

const Danny = new Instructor({
	name:"Dimitri Raskolov",
	age:"Age Unknown",
	Location:"Eastern Europe",
	specialty:"Secturtiy and Networking",
	favLanguage:"C",
});

console.log(Danny.name);
console.log(Danny.age);
console.log(Danny.Location);
console.log(Danny.specialty);
console.log(Danny.favLanguage);
console.log(Danny.demo("Privledge Elevation and Lateral Movement"));
console.log(Danny.grade(Anon,"Decryption"));

//////////////////////////////////////////////
console.log();
// PM test

const Joe = new PM({
	name:"Joe Smith",
	age:32,
	Location:"Somewhere",
	specialty:"CSS",
	favLanguage:"JavaScript",
	gradClassName:"CS2",
	favInstructor:"Danny"
});

console.log(Joe.name);
console.log(Joe.age);
console.log(Joe.Location);
console.log(Joe.specialty);
console.log(Joe.favLanguage);
console.log(Joe.gradClassName);
console.log(Joe.favInstructor);
console.log(Joe.standUp("11"));
console.log(Joe.debugsCode(Anon,"Quantum Computing"));

