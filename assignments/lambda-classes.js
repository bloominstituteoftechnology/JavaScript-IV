// CODE here for your Lambda Classes

//base class
class Person {
	constructor(attributes) {
		this.name = attributes.name;
		this.location = attributes.location;
		this.age = attributes.age;
		this.gender = attributes.gender;
	}
		speak(){
			return `Hello my name is ${this.name} and I am from ${this.location}.`;
		}
}



//attributes
const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 100,
  gender: 'male',
});


const teacher = new Instructor ({
  name: 'Josh',
  location: 'Utah',
  age: 34,
  gender: 'male',
  favLanguage: "JavaScript, Python, Elm",
  specialty: "Redux",
  catchPhrase: "Don't forget the homies"
});

const student = new Student ({
	name: 'Em',
  location: 'Seattle',
  age: 65,
  gender: 'female',
  previousbackground: "healthcare",
  className: "CS132",
  favSubject: ["HTML", "CSS", "Javascript"],
});

const projectManager = new ProjectManager ({
	name: 'Johnathan',
  location: 'Unknown',
  age: 100,
  gender: 'male',
  gradClassName: "CSI",
  favInstructor: "Sean PDiddy Combs"
});

console.log(fred.name);
console.log(fred.speak());

