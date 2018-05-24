// CODE here for your Lambda Classes
class people{
constructor(params){
	this.age=params.age;
	this.name=params.name;
	this.location=params.location;
	this.gender=params.gender;
		}
speak(){
	return ("Hello, my name is "+this.name+", and I'm from "+this.location);
	}
}
class instructor extends people{
constructor(params){
	super(params);
	this.specialty=params.specialty;
	this.favLang=params.favLang;
	this.chatchPhrase=params.catchPhrase;
		}
	demo(subject){
		return("Yo, yo, yo, today we're learning about "+subject+" ya'll!")
	}
	grade(student,subject){
		return(student.name+" is a horrible dissapointment, and failed at "+subject)
	}
}
class student extends people{
constructor(params){
	super(params);
	this.previousBackground=params.previousBackground;
	this.className=params.className;
	this.favSubjects=params.favSubjects;
		}
	listSubjects(){
		function myFunc(value){
	console.log(value);
			}
		this.favSubjects.forEach(myFunc);
	}
}
class projectManager extends instructor{
constructor(params){
	super(params);
	this.gradClassName=params.gradClassName;
	this.favInstructor=params.favInstructor;
		}
	standUp(chan){
		console.log(`${this.name} announces to ${chan}, @channel standy times!`)
	}
	debugsCode(student,subject){
		console.log(this.name+" laughs at "+student.name+" for screwing up at "+subject)
	}
}
	
const fred = new instructor({
  "gender": "M",
  "age": 35,
  "name": "Fred",
  "location": "bedrock",
  "specialty": "Rock.os",
  "favLang": "club++",
  "catchPhrase": "Yabba Dabba Doo!",
});
const David = new student({
  "gender": "M",
  "age": 21,
  "name": "David",
  "location": "OH",
  "previousBackground": "highschool student",
  "className": "cs11",
  "favSubjects": ['math','coding','history','tigers'],
});
const Josh = new projectManager({
  "gender": "M",
  "age": '30-ish',
  "name": "Josh",
  "location": "the moon",
  "specialty": "everything",
  "favLang": "English",
  "catchPhrase": "Yabba Dabba Doo!",
  "gradClassName": "cs4",
  "favInstructor": "himself",
});


console.log(fred.speak());
console.log(fred.grade(David, 'science'));
David.listSubjects();
Josh.standUp('our channel');