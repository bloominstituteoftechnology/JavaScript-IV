class Person {
	constructor(name, age, location){
		this.name = name;
		this.age = age;
		this.location = location;
	}
	speak(){
		return `Hello, my name is ${this.name}, I am from ${this.location}.`;
	}
}

class Instructor extends Person{
	constructor(instructorStuff){
		super(instructorStuff.name, instructorStuff.age, instructorStuff.location)
    // this.firstName = instructorStuff.firstName;
    // this.currentAge = instructorStuff.currentAge;
    // this.livesAt = instructorStuff.livesAt;
		this.specialty = instructorStuff.specialty;
		this.favLanguage = instructorStuff.favLanguage;
		this.catchPhrase = instructorStuff.catchPhrase;
	}

	demo(subject){
		return `Today we are learning about ${subject}.`;
	}

	grade(student, subject){
		return `${student} receives a perfect score on ${subject}.`;
	}
}

class Student extends Person{
	constructor(personStuff){
		super(personStuff.name, personStuff.age, personStuff.location)
		this.previousBackground = personStuff.previousBackground;
		this.className = personStuff.className;
		this.favSubjects = personStuff.favSubjects;
	}

	sprintChallenge(subject){
		return `${this.name} has begun sprint challenge on ${subject}.`;
	}

	PRAssignment(subject){
		return `${this.name} has submitted at PR for ${subject}.`;
	}

	listSubjects(){
		for(let x = 0; x < this.length; x++){
			return favSubjects[x];
		}
	}
}

class PM extends Person {
	constructor(pmStuff){
		super(pmStuff.name, pmStuff.age, pmStuff.location)
		this.gradClassName = pmStuff.gradClassName;
		this.favInstructor = pmStuff.favInstructor;
	}

	standUp(channel){
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}

	debugsCode(student, subject){
		return `${this.name} debugs ${student}'s code on ${subject}.`;
	}
}
//Instructor Add Area
const Dan = new Instructor({name: 'Dan', age: 35,location: 'Utah', specialty: 'Being Awesome', favLanguage: 'JavaScript', catchPhrase: 'Lets Get started.'});
// Dan.name = 'Dan';
// Dan.age = 35;
// Dan.location = 'Utah';

//Student Add Area
const Joe = new Student({name: 'Joe', age: 48, location: 'Haverhill', previousBackground: 'PC Support', className: 'CSPT2', favSubjects: ['HTML', 'CSS', 'LESS']});
// Joe.name = 'Joe';
// Joe.age = 48;
// Joe.location = 'Haverhill';

//Project Manager Area
const Camila = new PM({name: 'Camila', age: 'A lady never tells.', location: 'Somewhere in the US.', gradClassName: 'Team Camila', favInstructor: 'Herself of course.'});
// Camila.name = 'Camila';
// Camila.age = 'A lady never tells.';
// Camila.location = 'Somewhere in the USA.';



console.log(Dan);
console.log(Dan.speak())
console.log(Dan.catchPhrase)
console.log(Dan.demo('JavaScript'));
console.log(Dan.grade('Joe', 'JavaScript III'));

console.log(Joe);
console.log(Joe.speak())
console.log(Joe.favSubjects)
console.log(Joe.sprintChallenge('JavaScript IV'));
console.log(Joe.listSubjects()) // Review
console.log(Joe.PRAssignment('Applied JavaScript'));

console.log(Camila);
console.log(Camila.speak())
console.log(Camila.standUp('CSPT2_Camila'))
console.log(Camila.debugsCode('Robin', 'JavaScript IV'));