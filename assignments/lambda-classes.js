

class Person {
	constructor(personProps) {
	this.name = personProps.name;
	this.age = personProps.age;
	this.location = personProps.location;
	this.gender = personProps.gender;
}

speak() {
  return ` Hello my name is  ${name}, I am from ${location}`;
  }
};


class Instructor extends Person {
	constructor(instructorProps) {
	super(instructorProps);	
	this.speciality = instructorProps.speciality;
	this.favLanguage = instructorProps.favLanguage;
	this.catchPhrase = instructorProps.catchPhrase;
}

demo(subject) {
  return ` Today we are learning about ${subject}`;
  }
grade(student,subject) {
  return ` ${student.name}, receives a perfect score on ${subject}`;
  }
};

class Student extends Person {
	constructor(studentProps) {
	super(studentProps);	
	this.previousBackground = studentProps.previousBackground;
	this.className = studentProps.className;
	this.favSubject = studentProps.favSubject;
}

listsSubjects() {
 return student.favSubject.toString;
  }
  
PRAssignment(subject) {
  return ` ${student.name}, has submitted a PR for ${subject}`;
  }
  
sprintChallenge(subject) {
  return ` ${student.name}, has begun sprint challenge for ${subject}`;
  }
};


class ProjectManager extends Instructor {
	constructor(projectManagerProps) {
  	super(projectManagerProps);	
 	this.gradClassName = projectManagerProps.gradClassName;
  	this.favInstructor = projectManagerProps.favInstructor;
}

standUp(slackChannel) {
 return `${this.name},announces to ${slackChannel}, @channel standy times!`;
  }
  
debugs(student,subject) {
  return `${this.name}, debugs ${student.name}'s code on ${subject}`;
  }
  
};