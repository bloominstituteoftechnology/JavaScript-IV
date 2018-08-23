// CODE here for your Lambda Classes
// #### Person
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
	constructor(personObject) {
        this.name = personObject.name;
        this.age = personObject.age;
        this.location = personObject.location;
        this.gender = personObject.gender;
	}

	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

// #### Instructor
// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructors extends Person  {
	constructor(instructorObject) {
        super(instructorObject);
        this.specialty = instructorObject.specialty;
        this.favLanguage = instructorObject.favLanguage;
        this.catchPhrase = instructorObject.catchPhrase;
	}

	demo(subject) {
        console.log(`Today we are learning about ${subject}`);
	}

	grade(studentObject, subject) {
		console.log(`${studentObject.name} receives a perfect score on ${subject}`);
	}
}

// #### Student
// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Students extends Person {
	constructor(studentObject) {
		super(studentObject); 
		this.previousBackground = studentObject.previousBackground;
		this.className = studentObject.className;
		this.favSubjects = studentObject.favSubjects;
		this.listsSubjects = studentObject.listsSubjects;

	}

	listsSubjects() {
		for(let i =0; i< this.favSubjects; i++) {
			 console.log(this.favSubjects[i]);
		}
	}

	PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge() {
		console.log(`${student.name} has begun sprint challenge on ${subject}`);
	}
}

// #### Project Mananger
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructors {
	 constructor(pmObj) {
        super(pmObj);
        this.gradClassName = pmObj.gradClassName;
        this.favInstructor = pmObj.favInstructor;
    }

    standUp() {
    	console.log(`${this.name} announces to ${this.channel} @channel standy times!`);
    }

    debugsCode(studentObject, subject) {
        console.log(`${this.name} debugs ${studentObject.name}'s code on ${subject}`);
    }
}


const fred = new Instructors({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


const dan = new Instructors({
  name: 'Dan',
  location: 'Cali',
  age: 33,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Full-stack',
  catchPhrase: `Teaching is my ....`
});


const venky = new Students({
  name: 'venky',
  location: 'Columbia',
  age: 39,
  gender: 'male',
  favLanguage: ['HTML5','CSS3', 'JavaScript','Node.js', 'pYT'],
  className: 'CSPT2',
  previousBackground: "Math Teacher"

});

const oliver = new Students({
  name: 'oliver',
  location: 'houston',
  age: 26,
  gender: 'male',
  favLanguage: ['HTML5','CSS3', 'JavaScript','Node.js', 'pYT'],
  className: 'CSPT2',
  previousBackground: "quality engineer"

});

const myke = new ProjectManagers({
  name: 'myke',
  location: 'sanjose',
  age: 26,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Front-end & back-end',
  catchPhrase: `Always helping`,
  gradClassName: "CS2",
  favInstructor: "Sean"

});

const julian = new ProjectManagers({
  name: 'julian',
  location: 'newyork',
  age: 36,
  gender: 'Female',
  favLanguage: 'C++',
  specialty: 'back-end',
  catchPhrase: `Keep learning`,
  gradClassName: "CS1",
  favInstructor: "Dan Haffer"

});



//Instructors

console.log(fred.name);
console.log(fred.favLanguage);
console.log(dan.demo('C#'));
console.log(dan.grade(venky, "Python"));

//Students
console.log(venky.location);
console.log(venky.favSubjects);
console.log(venky.listsSubjects());
console.log(venky.PRAssignment("JavaScript"));
