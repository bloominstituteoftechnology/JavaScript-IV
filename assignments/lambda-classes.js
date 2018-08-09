class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    };
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    };
}

class Instructor extends Person{
    constructor(instructorOptions){
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    };
    demo(subject){
        console.log('Today we are learning about ' + subject)
    };
    grade(student, subject){
        console.log(student + ' receives a perfect score on ' + subject)
    };
    classPoints(student) {
		let random = ((Math.random() * 100) + 1);
		student.grade = student.grade - random;
		console.log(`${student.name} currently has a grade of ${student.grade}`);
	};
        
}

class Student extends Person{
    constructor(studentOptions){
        super(studentOptions);
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
        this.grade = studentOptions.grade;
    };
    listsSubjects(){
        console.log(`${this.favSubjects}`)
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ` + subject)
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ` + subject)
    };
    graduate() {
		if (this.grade >= 70) {
			console.log(`${this.name} has a grade of ${this.grade} and is ready to graduate!`);
		} else {
			console.log(`${this.name} has a grade of ${this.grade} and needs ${70-this.grade} more to graduate.`);
		}
	}
}

class ProjectManager extends Instructor{
    constructor(pmOptions){
        super(pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    };
    standUp(slack_channel){
        console.log(`${this.name} announce to ` + slack_channel + ' @channel standup time!')
    };    
    debugsCode(student, subject){
        console.log(`${this.name} debugs ` + student + ' code on ' + subject)
    };  
}

const Greg = new Person({
    name: 'Greg',
    age: 34,
    location: 'Louisiana',
    gender: 'M'
});

const Mary = new Person({
    name: 'Mary',
    age: 59,
    location: 'New York',
    gender: 'F'    
});

const Maurice = new Person({
    name: 'Maurice',
    age: 20,
    location: 'New Jersey',
    gender: 'M'
});

const Lisa = new Instructor({
    name: 'Lisa',   
    age: 40,
    location: 'California',
    gender: 'F',
    specialty: 'JavaScript',
    favLanguage: 'C++',
    catchPhrase: 'Groovy'
});

const John = new Instructor({
    name: 'John',   
    age: 45,
    location: 'Texas',
    gender: 'M',
    specialty: 'HTML',
    favLanguage: 'HTML & CSS',
    catchPhrase: 'Alright, Alright, Alright'
});

const Keith = new Instructor({
    name: 'Keith',   
    age: 38,
    location: 'Colorado',
    gender: 'M',
    specialty: 'Teaching',
    favLanguage: 'React',
    catchPhrase: 'Quiet down now!'
});

const Juan = new ProjectManager({
    name: 'Juan',   
    age: 25,
    location: 'New Mexico',
    gender: 'M',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: 'Do not worry, you will get it',
    gradClassName: "CS5",
    favInstructor: "John"
});

const Megan = new ProjectManager({
    name: 'Megan',   
    age: 55,
    location: 'Utah',
    gender: 'F',
    specialty: 'Mentoring',
    favLanguage: 'HTML',
    catchPhrase: 'There, there now',
    gradClassName: 'CS2',
    favInstructor: 'Lisa'
});

const Pam = new ProjectManager({
    name: 'Pam',   
    age: 41,
    location: 'California',
    gender: 'F',
    specialty: 'React',
    favLanguage: 'None',
    catchPhrase: 'Now What?',
    gradClassName: 'CS1',
    favInstructor: 'All of them'
});

const Kevin = new Student({
    name: 'Kevin',
    age: 19,
    location: 'New York',
    gender: 'M',
    previousBackground: 'student',
    className: 'CS12',
    favSubjects: 'HTML, CSS',
    grade: 89
})

const Sara = new Student({
    name: 'Sara',
    age: 51,
    location: 'North Carolina',
    gender: 'F',
    previousBackground: 'Accounting',
    className: 'CS12',
    favSubjects: 'Javascript and Node',
    grade: 94
});

const Julie = new Student({
    name: 'Julie',
    age: 36,
    location: 'Oregon',
    gender: 'F',
    previousBackground: 'Writer',
    className: 'CS12',
    favSubjects: 'Not Sure',
    grade: 78
});

Greg.speak();
Keith.demo('HTML');
John.grade('Julie', 'JavaScript');
Sara.listsSubjects();
Sara.PRAssignment('CSS');
Kevin.sprintChallenge('JavaScript');
Pam.standUp('Pam');
Megan.debugsCode('Kevin', 'React');
Lisa.classPoints(Sara);
Juan.classPoints(Kevin);
Julie.graduate();
