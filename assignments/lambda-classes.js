// CODE here for your Lambda Classes

class Person {
	constructor(attrs) {
		this.name = attrs.name;
		this.age = attrs.age;
		this.location = attrs.location;
		this.gender = attrs.gender;
	}

	phrase() {
		return `Hello, my name is ${this.name}, I am from ${this.location}.`;
	}
}

class Instructor extends Person {
	constructor(instructorAttrs) {
		super(instructorAttrs);
		this.speciality = instructorAttrs.speciality;
		this.favLanguage = instructorAttrs.favLanguage;
		this.catchPhrase = instructorAttrs.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}.`;
	}

	grade(student, subject) {
		return `${student.name} recieved a perfect score on ${subject}.`;
  }
  
  gradeBuildOut(student, min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    student.grade += num;
    return `${student.name}'s grade is now at ${student.grade}%!`;
  }
}

class Student extends Person {
	constructor(studentAttrs) {
		super(studentAttrs);
		this.previousBackground = studentAttrs.previousBackground;
		this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
	}

	listsSubjects() {
		return `${this.name}'s favorite subjects are ${this.favSubjects
			.slice(0, this.favSubjects.length - 1)
			.join(', ')} and ${this.favSubjects[this.favSubjects.length - 1]}.`;
	}

	PRAssignment(student, subject) {
		return `${student.name} has submitted a PR for ${subject}.`;
	}

	sprintChallenge(student, subject) {
		return `${student.name} has begun sprint challenge on ${subject}.`;
  }
  
  graduate(student) {
    if (student.grade > 70) {
      return `Congratulations! You, ${student.name}, may graduate from Evil Lambda School!`;
    } else {
      student.grade += 5;
      return `Get back to schooling ${student.name}!`;
    }
  }
}

class ProjectManager extends Instructor {
	constructor(projectManagerAttrs) {
		super(projectManagerAttrs);
		this.gradClassName = projectManagerAttrs.gradClassName;
		this.favInstructor = projectManagerAttrs.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announces to ${channel}, @${channel} standy times!`;
	}

	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}.`;
	}
}

const evilJosh = new Instructor({
	name: 'Josh',
	location: 'Hell',
	age: 10234,
	gender: 'fallen angel',
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: 'Dost thou wish to live deliciously?'
});

const butters = new Student({
	name: 'Butters Leopold Stotch',
	location: 'South Park',
	age: 10,
	gender: 'male',
	favLanguage: 'JavaScript',
	className: 'fsw23',
  favSubjects: ['tapdancing', 'Professor Chaos', 'singing'],
  grade: 77
});

const evilLuis = new ProjectManager({
	name: 'Luis',
	location: 'The Sunken Place',
	age: 3343,
	gender: 'fallen angel',
	gradClassName: 'fws20',
	favInstructor: 'Josh'
});

console.log(butters.phrase());
console.log(evilJosh.demo('React'));
console.log(evilLuis.grade(butters, 'Angular-I'));
console.log(butters.listsSubjects());
console.log(butters.PRAssignment(butters, 'React'));
console.log(butters.sprintChallenge(butters, 'Vue'));
console.log(evilLuis.standUp('fws23'));
console.log(evilLuis.debugsCode(butters, 'Vue'));
console.log(evilJosh.gradeBuildOut(butters, -10, 5));
console.log(evilLuis.gradeBuildOut(butters, -15, 10));
console.log(butters.graduate(butters));
console.log(butters.graduate(butters));
