

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

/////////// TEST OBJECTS - INSTRUCTOR /////////////
const lucy= new Instructor({
//Person props
  name: 'Lucy',
  location: 'New York',
  age: 30,
  gender: 'female',
//instructor props
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: ' but Ricky!'
});

const ethel= new Instructor({
  name: 'Ethel',
  location: 'New York',
  age: 37,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: 'I\'m going to regret this'
});

const ricky= new Instructor({
  name: 'Ricky',
  location: 'New York',
  age: 35,
  gender: 'male',
  favLanguage: 'Ruby',
  specialty: 'Front-end',
  catchPhrase: 'Lucy - what did you do??'
});

///--------- TEST OBJECTS - STUDENT---------/////
const ross = new Student ({
    //Person props
      name: 'Ross',
      location: 'NY',
      age: 37,
      gender: 'male',
    //student props
      previousBackground: 'dinosaurs',
      className: 'FullStack',
      favSubject: ['dinoScript', 'CSS', 'HTML']
    });
    
    const pheobe = new Student({
      name: 'Pheobe',
      location: 'NY',
      age: 33,
      gender: 'female',
      previousBackground: 'massage',
      className: 'Front-end',
      favSubject: ['trippyScript', 'Java', 'JS']
    });
    
    const monica = new Student({
      name: 'Monica',
      location: 'NY',
      age: 30,
      gender: 'female',
      previousBackground: 'chef',
      className: 'back-end',
      favSubject: ['cleanScripting', 'ruby', 'Python']
    });
    
    ///||||||| TEST OBJECTS - PM ||||||||||///
    const sheridan = new ProjectManager ({
    //Person props
      name: 'Sheridan',
      location: 'B5',
      age: 37,
      gender: 'male',
    //instructor props
      favLanguage: 'JavaScript',
      specialty: 'Front-end',
      catchPhrase: 'lets go win',
    //PM props
      gradClassName: 'CSB5',
      favInstructor: 'Lucy'
    });
    
    const delenn= new ProjectManager({
    //Person props
      name: 'Delenn',
      location: 'B5',
      age: 37,
      gender: 'female',
      favLanguage: 'Python',
      specialty: 'Front-end',
      catchPhrase: 'never goodbye',
      gradClassName: 'CSB55',
      favInstructor: 'Ricky'
    });
    
    const susan = new ProjectManager({
    //Person props
      name: 'Susan',
      location: 'Bedrock',
      age: 32,
      gender: 'female',
    //instructor props
      favLanguage: 'C',
      specialty: 'back-end',
      catchPhrase: 'Susan is always right',
    //PM props
      gradClassName: 'CSB555',
      favInstructor: 'Ethel'
      
    });