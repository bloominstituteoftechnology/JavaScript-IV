class Person{
    
	constructor(personAttributes){
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
		this.gender = personAttributes.gender;
	}
	speak(){
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
	}
}

class Instructor extends Person {

	constructor(attributes){
		super(attributes)
		this.speciality = attributes.specialty;
		this.favLanguage = attributes.favLanguage;
		this.catchPhrase ="Don't forget the homies";
	}

	demo(subject){
		console.log(`Today we are learning about ${subject}`)
	}

	grade(student, subject){
		console.log(`${student.name} receives a perfect score on ${subject}`)
	}

	studentGrade(student){
		let grade  = student.grade - Math.round(Math.random(100) * 100);
		console.log(`${student.name} score ${grade} `)
		return grade;
	}        
}


class Student extends Person{

	constructor(attributes){
		super(attributes)
		this.previousBackground = attributes.previousBackground;
		this.className = attributes.className;
		this.favSubjects = attributes.favSubjects;
		this.grade = Math.round(Math.random(100)* 100);
	}

	listSubjects(){
		let subjects = this.favSubjects;
		return subjects.forEach(element => console.log(element));
	}

	PRAssignment(subject){
		console.log(`${this.name} has submitted a PR for ${subject}`)
	}

	sprintChallenge(subject){
		console.log(`${this.name} has begun a sprint challenge on ${subject}`)
	}

	graduate(){
		if(this.grade > 70 ){
			console.log (`${this.name } is ready to graduate`)
		}else{
			console.log(`${this.name} need more study time`)
		}
	}
}


class ProjectManagers extends Instructor{
    constructor(attributes){
			super(attributes)
			this.gradClassName = attributes.gradClassName;
			this.favInstructor = attributes.favInstructor;
	}
	standUp(channel = this.gradClassName){
			console.log(`${this.name} announces to ${channel}, @channel standy times!`)
	}

	debugsCode(student,subject){
			console.log(`${this.name} debugs ${student.name} code on ${subject}`)
	}
}


const jerry = new Student({
	name: 'Jerry',
	location: 'Bedrock',
	age: 25,
	gender: 'male',
	previousBackground:'accounting',
	className:'CSPT2',
	favSubjects:['html', 'Less', 'JS']
});

const fred = new Instructor({
  name: 'Fred',
  location: 'casper',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const luis = new ProjectManagers({
	name: 'luis',
	location: 'Bedrock',
	age: 28,
	gender: 'male',
	gradClassName:'CSPT2',
	favInstructor:'John'
});


console.log(jerry.listSubjects());
console.log(jerry);
jerry.sprintChallenge("less");
jerry.speak();
jerry.graduate();

console.log(/********************************/)
console.log(fred);
fred.grade(jerry,'JavaScript');
fred.studentGrade(jerry);

console.log(/*********************************/)
console.log(luis);
luis.debugsCode(jerry,'JavaScript');
luis.standUp();
luis.studentGrade(jerry);