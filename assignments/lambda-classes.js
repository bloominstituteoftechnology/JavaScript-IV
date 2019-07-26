// CODE here for your Lambda Classes
	
// Base class
	class Person {
	    constructor(attrs){
	        this.name = attrs.name;
	        this.age = attrs.age;
	        this.location = attrs.location;
	    }
	

	    speak(name, location){
	        return `My name is ${this.name}, I am from ${this.location}.`;
	    }
	};
	

	// Instructor class
	class Instructor extends Person {
	    constructor(instructorAttrs){
	        super(instructorAttrs);
	        this.specialty = instructorAttrs.specialty;
	        this.favLanguage = instructorAttrs.favLanguage;
	        this.catchPhrase = instructorAttrs.catchPhrase;
	    }
	

	    demo(subject){
	        return `Today we learned about ${subject}`;
	    };
	

	    testResults(student, subject){
	        return `${student} receives a perfect score on ${subject}`;
	    }
	

	    grade(student){
	        return Student.grade = `${student} gets a ${Math.floor(Math.random() * 101) + 1} on today's test`;
	    }
	};
	

	// Student class
	class Student extends Person {
	    constructor(studentAttrs){
	        super(studentAttrs);
	        this.previousBackground = studentAttrs.previousBackground;
	        this.className = studentAttrs.className;
	        this.favSubjects = studentAttrs.favSubjects;
	        this.grade = [];
	    }
	

	    listsSubject(){
	        return `My favorite subjects are ${this.favSubjects}`;
	    }
	

	    PRAssingment(subject){
	        return `${this.name} has submitted a PR for ${subject}`;
	    }
	

	    sprintChallenge(subject){
	        return `${this.name} has begun the sprint challenge on ${subject}`;
	    }
	};
	

	//Project manager class
	class projectManager extends Instructor {
	    constructor(pm){
	        super(pm);
	        this.gradClassName = pm.gradClassName;
	        this.favInstructor = pm.favInstructor;
	    }
	

	    standUp(slackChannel){
	        return `${this.name} announces to ${slackChannel}, stand up time!`;
	    }
	

	    debugsCode(student, subject){
	        return `${this.name} debugs ${student}'s code on ${subject}.`;
	    }
	};
	

	// Instructor Objects
	

	// Marilyn object
	const Marilyn = new Instructor({
	    name: 'Marilyn',
	    age: 23,
	    location: 'Ohio',
	    favLanguage: 'JavaScript',
	    specialty: 'Front-End',
	    catchPhrase: 'Hot in Here!'
	});
	

	

	// Jackie object
	const Jackie = new Instructor({
	    name: 'Jackie',
	    age: 24,
	    location: 'New York',
	    favLanguage: 'Go Lang',
	    specialty: 'Back-End',
	    catchPhrase: Look! Up in the sky! It's a bird! It's a plane! It's Superman!
'
	});
	

	// Jack object
	const Munch = new Instructor({
	    name: 'Munch',
	    age: 27,
	    location: 'San Diego',
	    favLanguage: 'Python',
	    catchPhrase: 'Book 'em, Danno!
!'
	});
	

	// Students
	

	// Jill object
	const Jill = new Student({
	    name: 'Jill',
	    age: 19,
	    location: 'New York',
	    previousBackground: 'Baker',
	    className: 'web22',
	    favSubjects: ['HTML', 'CSS', 'UX Design']
	});
	

	// Frank object
	const Frankie = new Student({
	    name: 'Frankie',
	    age: 30,
	    location: 'Florida',
	    previousBackground: 'Professional skateborder',
	    className: 'Web17',
	    favSubjects: ['JavaScript', 'Web API']
	});
	

	// Austin object
	const Austin = new Student({
	    name: 'Austin',
	    age: 25,
	    location: 'Ohio',
	    previousBackground: 'Horseback rider',
	    className: 'DS12',
	    favSubjects: ['Data science', 'Data structures']
	});
	

	// Project Managers
	

	// Gabbie object
	const Gabbie = new projectManager({
	    name: 'Gabbie',
	    age: 40,
	    location: 'Seattle',
	    gradClassName: 'CS101',
	    favInstructor: 'Jackie'
	});
	

	// Bobbie object
	const Bobbie = new projectManager({
	    name: 'Bobbie',
	    age: 35,
	    location: 'Florida',
	    gradClassName: 'WEB20',
	    favInstructor: 'Marilyn'
	});
