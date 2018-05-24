class Person {
	// name age location gender
	constructor(pAttributes){
		this.name = pAttributes.name;
		this.age = pAttributes.age;
		this.location = pAttributes.location;
		this.gender = pAttributes.gende;
	}

	// This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
	speak(){
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}

} // Person

class Instructor extends Person {
	// specialty favLanguage catchPhrase
	constructor(iAttributes) {
		super(iAttributes);
		this.specialty = iAttributes.specialty;
		this.favLanguage = iAttributes.favLanguage;
		this.catchPhrase = iAttributes.catchPhrase;
	}

	// receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}

	// `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
	grade(student, subject) {
		return `${student.name} recieves a perfect score on ${subject}`
	}

}// Instructor

class Student extends Person {
	// previousBackground className favSubjects
	constructor(sAttributes) {
		super(sAttributes);
		this.previousBackground = sAttributes.previousBackground;
		this.className = sAttributes.className;
		this.favSubjects = sAttributes.favSubjects;
	}
	// a method that logs out all of the student's favoriteSubjects one by one.
	listsSubjects(){
		for(let i = 0; i < this.favSubjects.length; i++){
			console.log(this.favSubjects[i]);
		}
	}

	// a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
	PRAssignment(subject){
		return `${this.name} has submitted a PR for ${subject}`;
	}

	// similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`
	sprintChallenge(subject){
		return `${this.name} has begun spring challenge on ${subject}`;
	}

} // Student

class ProjectManager extends Instructor {
	constructor(pmAttributes) {
		// gradClassName favInstructor
		super(pmAttributes);
		this.gradClassName = pmAttributes.gradClassName;
		this.favInstructor = pmAttributes.favInstructor;
	}

	// a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
	standUp(slackChannel){
		return `${this.name} announces to ${slackChannel}, @channel standy times!`;
	}

	// a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
	debugsCode(student, subject){
		return `${this.name} debugs ${student.name}'s conde on ${subject}`;
	}

} // Project Manager