// CODE here for your Lambda Classes
class Person {
	constructor(p){
		this.name = p.name;
		this.location = p.location;
		this.gender = p.gender;
	}
	speak(){
		return`Hello my name is ${this.name}, I am from ${this.location}`
	}
}

class Instructor extends Person {
	constructor(i){
		super(i)
		this.specialty = i.specialty;
		this.favLanguage = i.favLanguage;
		this.catchPhrase = i.catchPhrase;
	}
	demo(sub){
		return`Today we are learning about ${sub}` 
	}
	grade(stud,subject){
		return`${stud.name} receives a perfect score on ${subject}`
	}
}

class Student extends Person {
	constructor(s){
		super(s);
		this.previousBackground = s.previousBackground;
		this.className = s.className;
		this.favSubjects = s.favSubjects
	}
	listsubjects(){
	  for(z = 0; z<this.favSubjects; z++){
	  	console.log(subject[i]);
	}
	}
	PRAssignment(b){
		return`${this.name} has submitted a PR for ${b}`
	}
	sprintChallenge(c){
		return`${this.name} has begun sprint challeng on ${c}`
	}
}

class ProjectManager extends Instructor {
	constructor(p){
		super(p);
		this.gradClassName = p.gradClassName;
		this.favInstuctor = p.favInstuctor;
	}
	standUp(slack){
		return`${this.name} announces to ${slack}, @channel standy times!`
	}
	debugCode(studobj, subj){
		return`${this.name} debugs ${studobj.name}'s code on ${subj}' `
	}
}

//----Objects----

//Person

const norm = new Person({
  name: 'norm',
  location: 'location',
  gender: 'eh'

});

const orange = new Person({
  name: 'orange',
  location: 'locationlocation',
  gender: 'why do you ask?'

});

const bob = new Person({
  name: 'bob',
  location: 'locationlocationlocation',
  gender: 'male',
});

//Students

const joe = new Student({
  name: 'joe',
  location: 'Bedrock',
  gender: 'male',
  favSubjects :['math', 'physics', 'chemistry'],
  previousBackground : 'interloper'
});

const shawn = new Student({
  name: 'shawn',
  location: 'Bedrock',
  gender: 'mal',
  favSubjects :['math', 'physics', 'chemistry'],
  previousBackground : "resistancefighter"
});

const ishaan = new Student({
  name: 'ishaan',
  location: 'Bedrock',
  gender: 'ma',
  favSubjects: ['math', 'physics', 'chemistry'],
  previousBackground :"don'tgotonedone'tneedone"


});

//Instructors

const fredd = new Instructor({
  name: 'fredd',
  location: 'Bedrock',
  gender: 'ale',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const fredda = new Instructor({
  name: 'fredda',
  location: 'Bedrock',
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'back-end',
  catchPhrase: `Don't die`
});

const freddi = new Instructor({
  name: 'freddi',
  location: 'Bedrock',
  gender: 'le',
  favLanguage: 'Lisp',
  specialty: 'Front-end',
  catchPhrase: `Do whatever man`
});

//ProjectsManagers
const fred = new ProjectManager({
  name: 'fred',
  location: 'nonya',
  gender: 'male',
  favLanguage: 'C',
  specialty: 'Vagrancy',
  catchPhrase: `I'm not a gimmick`,
  gradClassName: 'I forgot sorry'
});

const fredder = new ProjectManager({
  name: 'fredder',
  location: 'chiraq',
  gender: 'male',
  favLanguage: 'C++',
  specialty: 'Bum',
  catchPhrase: `I am a gimmick`,
  gradClassName: 'CS-1'
});

const freddest = new ProjectManager({
  name: 'freddest',
  location: 'bedsty',
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'reading thomas pynchon novels',
  catchPhrase: `I don't even know what I am, I guess I'm just an object`,
  gradClassName: 'CS negative abillion'
});

//----------tests-------------------
console.log(norm.name); 
console.log(orange.gender); 
console.log(bob.speak()); 
console.log(shawn.gender);
console.log(shawn.listsubjects());
console.log(ishaan.sprintChallenge('second')); 
console.log(joe.PRAssignment('first')); 
console.log(fredd.catchPhrase); 
console.log(fredda.demo('this')); 
console.log(freddi.grade(joe,'subject')); 
console.log(fred.gradClassName); 
console.log(fredder.debugCode(shawn,'bal')); 
console.log(freddest.standUp('blah'));