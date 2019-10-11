// CODE here for your Lambda Classes
//Parent
class Parent {
	person(attributes) {
		this.newName = attributes.name;
		this.newAge = attributes.age;
		this.newLocation = attributes.location;
	}

//Method
	speak() {
			return `Hell my name is ${this.name}, I am from ${this.location}.`;
			console.log(speak());
		}
}
//---------------------------
//Child	
class Child extends Person {
	instructors(resume) {
		super();
		this.newSpecialty = resume.specialty;
		this.newfavLanguage = resume.favLanguage;
		this.newcatchPhrase = resume.catchPhrase;
		
	}

//Method
	demo(subject) {
			return `Today we are learning about ${subject}.`;
		}
		grade() {
				return `${student.name}receives a perfect score on ${subject}.`;
			}
}
//---------------------------	
//Grandchild
class Grandchild extends Child {
	students(report) {
		this.newPreviousBackground = report.previousBackground;
		this.newClassName = report.className;
		this.newFavSubjects = report.favSubjects;
		super(report);
	}
}
//Methods
	listSubjects() {// a method that logs out all of the student's favoriteSubjects one by one.
			return `${student.name}receives a perfect score on ${subject}.`;
		}
		PRAssignment() {//a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
				return `${student.name}receives a perfect score on ${subject}.`;
			}
			sprintChallenge() {//similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
					return ``;
				}
//---------------------------
//GreatGrandchild
class GreatGrandchild extends GrandChild {
	projectManagers(personal) {
		this.newstandUp = personal.standup;
		this.newFavInstructor = personal.favInstructor;
		super(personal);
	}

//Method
	standUp() {//a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
		return ``;
		}
		debugsCodes() {//a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
			return ``;
			}
}





//----Objects====
//----Person------
//1.
const firstPerson = new person({
  name: 'Gildo',
  age: 11,
  location: 'New Brunswick'
});

//2.
const secondPerson = new person({
  name: 'Galarny',
  age: 13,
  location: 'San Salvador',
 });
const thirdPerson = new person({
  name: 'Beckwith',
  age: 26,
  location: 'Calgary'
 });


//----- Instructor ------
//1.
const firstInstructor = new instructor({
  specialty: 'History',
  favLanguage: 'Dothraky',
  catchPhrase: 'You know nuthin'
});

//2.
const secondInstructor = new instructor({
  specialty: 'Alchemy'
  favLanguage: 'Elvin',
  catchPhrase: 'Tu-wotha',  
});


//3.
const thirdInstructor = new instructor({
  specialty: 'metalurgy'
  favLanguage: 'muckduck',
  catchPhrase: 'All hands in the pot',  
});

//---- Students -----
//1.
const firstStudent = new students({
  previousBackground: '',
  className: ,
  favSubjects: '',
});

//2.
const d = new students({
  previousBackground: '',
  className: ,
  favSubjects: '',
});

//3.
const d = new students({
  previousBackground: '',
  className: ,
  favSubjects: '',
});
//---- PM's ------
//1.
const g = new projectManagers({
  standUp: '',
  favInstructor: , 
});

//2.
const g = new projectManagers({
  standUp: '',
  favInstructor: , 
});

//3.
const g = new projectManagers({
  standUp: '',
  favInstructor: , 
});
