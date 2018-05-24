// -CLASSES-
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
		this.favoriteSubjects = sAttributes.favoriteSubjects;
	}

	// a method that logs out all of the student's favoriteSubjects one by one.
	listsSubjects(){
		for(let i = 0; i < this.favoriteSubjects.length; i++){
			console.log(this.favoriteSubjects[i]);
		}
	}

	// a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
	PRAssignment(subject){
		return `${this.name} has submitted a PR for ${subject}`;
	}

	// similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`
	sprintChallenge(subject){
		return `${this.name} has begun sprint challenge on ${subject}`;
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

// -OBJECTS-
// Students name age location gender previousBackground className favSubjects
const morty = new Student({
	"name": "Morty Smith",
	"age": "14",
	"location": "Chicago",
	"gender": "M",
	"previousBackground": ["Interdimentional Travel", "Puberty"],
	"className": "Computer Science Immersive",
	"favoriteSubjects": ["HTML", "CSS"]
});

const summer = new Student({
	"name": "Summer Smith",
	"age": "18",
	"location": "Chicago",
	"gender": "F",
	"previousBackground": ["Not Much"],
	"className": "Computer Science Immersive",
	"favoriteSubjects": ["Lunch", "Mall"]
});

const abrodolph = new Student({
	"name": "Abrodolph Lincler",
	"age": "47",
	"location": "Rick's Lab",
	"gender": "M",
	"previousBackground": ["Morally Confused"],
	"className": "Computer Science Immersive",
	"favoriteSubjects": ["Moral-Neutrality", "AI"]
});

// Teachers name age location gender specialty favLanguage catchPhrase
const rick = new Instructor({
	"name": "Rick Sanchez",
	"age": "70",
	"location": "Earth",
	"gender": "M",
	"specialty": "Inventor",
	"favLanguage": "Bird Person",
	"catchPhrase": "Wubba lubba dub-dub!"
});

const eyehole = new Instructor({
	"name": "Eyehole Man",
	"age": "26",
	"location": "Earth",
	"gender": "M",
	"specialty": "Roughing up 'Eyehole Cerial' fans",
	"favLanguage": "Megaphone",
	"catchPhrase": "Get up on out of hter with my Eyeholes."
});

const goldenfold = new Instructor({
	"name": "Mr. Goldenfold",
	"age": "48",
	"location": "Earth",
	"gender": "M",
	"specialty": "Algebra",
	"favLanguage": "Python",
	"catchPhrase": "My lust... My greed... I deserve this!"
});


// ProjectManagers name age location gender specialty favLanguage catchPhrase gradClassName favInstructor
const albert = new ProjectManager({
	"name":"Albert Einstein",
	"age":"76",
	"location":"Deceased",
	"gender":"M",
	"specialty":"Space Time",
	"favLanguage":"Basic",
	"catchPhrase":"The difference between stupidity and genious is that genious has it's limits",
	"gradClassName":"CS11",
	"favInstructor":"eyehole"
});

const kyle = new ProjectManager({
	"name":"Kyle",
	"age":"30",
	"location":"Rick's Microverse",
	"gender":"M",
	"specialty":"Miniverse Citizen",
	"favLanguage":"Ruby",
	"catchPhrase":"That just sounds like slavery with ex... tra... steps.",
	"gradClassName":"CS11",
	"favInstructor":"goldenfold"
});

const xenon = new ProjectManager({
	"name":"Dr. Xenon Bloom",
	"age":"78",
	"location":"Anatomy Park",
	"gender":"M",
	"specialty":"Running Anatomy Park",
	"favLanguage":"JSON",
	"catchPhrase":"The digestive tract is the body's evacuation route....get it?",
	"gradClassName":"CS11",
	"favInstructor":"rick"
});