// CODE here for your Lambda Classes
class Person {
	constructor(details){
		this.name = details.name,
		this.age = details.age,
		this.location = details.location,
		this.gender = details.gender
	
  }
	speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
  }
}

class Instructor extends Person {
	constructor(newDetails){
		super(newDetails),
		this.specialty = newDetails.specialty,
		this.favLan = newDetails.favLan,
		this.catchPhrase = newDetails.catchPhrase
	}
	
	demo(subject){
	console.log(`Today we are learning about ${subject}`)
	}

	grade (student, subject){
	console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}

class Student extends Person {
	constructor(studentDetails){
  super(studentDetails);
	this.previousBackground = studentDetails.previousBackground;
  this.favSubject = studentDetails.favLan;
  this.className = studentDetails.className;
}
  listsSubject(){
    console.log(this.favSubject)
  }
  PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }
  sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManagers extends Instructor {
  constructor(props){
    super(props)
    this.grandClassName = props.grandClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const One = new Person ({
    name: 'Can',
    age: 35,
    location: 'Anywhere, USA',
    gender: 'Male'
})

const Mr = new Instructor({
    name: 'Mr,One',
    age: 73,
    location: 'Downey, USA',
    gender: 'Male',
    favLanguage: 'English',
    specialty: "Running",
    catchPhrase: 'On and Off.'
})

const Two = new Student({
    name: 'Two',
    age: 32,
    location: 'South Gate,CA',
    gender: 'Male',
    previousBackground: 'None',
    classname: 'CSPT2',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const Jacob = new ProjectManagers({
    name: 'Jacob',
    age: 35,
    location: 'Somewhere, USA',
    gender: 'Male',
    specialty: 'Javascript',
    favLanguage: 'See specialty',
    catchPhrase: 'The Guy',
    gradClassName: 'CSPT2',
    favInstructor: 'Dan Frehner'
});

console.log(One);
One.speak();
Mr.speak();
Mr.demo('Karate');
Mr.grade(Two, 'Karate');
Two.sprintChallenge('Javascript IV');
Jacob.grade(Two, 'Javascript');
Jacob.standUp('#CSPT2');
Jacob.debugsCode(Two, 'Array Methods');