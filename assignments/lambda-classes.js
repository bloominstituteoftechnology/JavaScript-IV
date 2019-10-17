// CODE here for your Lambda Classes
//Parent
class Parent {
		constructor(attributes) {
		this.newName = attributes.name;
		this.newAge = attributes.age;
		this.newLocation = attributes.location;
		}

//Method
		speak() {
			return `Hello my name is ${this.name}, I am from ${this.location}.`;
			console.log(speak());
		}
}
//---------------------------
//Child	
class Child extends Parent {
		constructor(resume) {
		super(resume);
		this.newSpecialty = resume.specialty;
		this.newfavLanguage = resume.favLanguage;
		this.newcatchPhrase = resume.catchPhrase;
		
		}

//Methods
		demo(subject) {
			return `Today we are learning about ${subject}.`;
			console.log(demo(subject));
				
			}

		grade(student, subject) {
			return `Hello ${student.name}receives a perfect score on ${subject}.`;				
			console.log(grade('Kara','hello'))			
				}

}		
			
		

//---------------------------	
//Grandchild
class GrandChild extends Child {
		constructor(report) {
		super(report);
		this.newPreviousBackground = report.previousBackground;
		this.newClassName = report.className;
		this.newFavSubjects = report.favSubjects;
		
	}

//Methods
		listSubjects(student, favSubjects) {// a method that logs out all of the student's favoriteSubjects one by one.
			return `${student.name}receives a perfect score on ${this.favSubjects}.`;
			console.log(listSubjects());
			}
		PRAssignment() {//a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
			return `${student.name}receives a perfect score on ${subject}.`;
			console.log(PRAssignment());
			}
		sprintChallenge() {//similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
			return ``;
			}
}

//---------------------------
//GreatGrandchild
class GreatGrandchild extends GrandChild {
		constructor(personal) {
		super(personal);
		this.newstandUp = personal.standup;
		this.newFavInstructor = personal.favInstructor;
		
	}

//Method
		standUp() {//a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
			return ``;
			}
		debugsCodes(student, subject) {//a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
			return ``;
			}
}





//----Objects====
//----Parent------
//1.
const firstPerson = new Parent({
  name: 'Gildo',
  age: 11,
  location: 'New Brunswick'
});

//2.
const secondPerson = new Parent({
  name: 'Galarny',
  age: 13,
  location: 'San Salvador',
 });
const thirdPerson = new Parent({
  name: 'Beckwith',
  age: 26,
  location: 'Calgary'
 });


//----- Child ------
//1.
const firstInstructor = new Child({
  specialty: 'History',
  favLanguage: 'Dothraky',
  catchPhrase: 'You know nuthin'
});

//2.
const secondInstructor = new Child({
  specialty: 'Alchemy',
  favLanguage: 'Elvin',
  catchPhrase: 'Tu-wotha'  
});


//3.
const thirdInstructor = new Child({
  specialty: 'metalurgy',
  favLanguage: 'muckduck',
  catchPhrase: 'All hands in the pot',  
});

//---- Grandchild -----
//1.
const firstStudent = new GrandChild({
  previousBackground: 'Detroit auto worker',
  className: 'webpt11' ,
  favSubjects: ['javascript', 'html', 'css'],
});

//2.
const d = new GrandChild({
  previousBackground: 'coal miner',
  className: 'webpt11',
  favSubjects: ['javascript', 'html', 'css']
});

//3.
const z = new GrandChild({
  previousBackground: 'truck driver',
  className: 'webpt11',
  favSubjects: ['javascript', 'html', 'css'],
});
//---- Great Grand Child ------
//1.
const g = new GreatGrandchild({
  gradClassName: 'webpt11',
  favInstructor: 'Josh Knell', 
});

//2.
const y = new GreatGrandchild({
  gradClassName: 'webpt11',
  favInstructor: 'Josh Knell', 
});

//3.
const m = new GreatGrandchild({
  gradClassName: 'webpt11',
  favInstructor: 'Josh Knell', 
});
