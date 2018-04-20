// CODE here for your Lambda Classes
class Person {
    constructor (stats) {
        this.name = stats.name;
        this.age = stats.age;
        this.location = stats.location;
        this.gender = stats.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I amd from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (credentials) {
        super (credentials);
        this.specialty = credentials.specialty;
        this.favLanguage = credentials.favLanguage;
        this.catchPhrase = credentials.catchPhrase;
    }
    demo (subject){
        return (`Today we are learning about ${subject}`)
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor (learning) {
        super (learning);
        this.previousBackground = learning.previousBackground;
        this.className = learning.previousBackground;
        this.favSubjects = learning.favSubjects;
    }
    listsSubjects () {
        this.favSubjects.forEach(element => 
            {console.log(element)            
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor (intern) {
        super (intern)
        this.gradClassName = intern.gradClassName;
        this.favInstructor = intern.favInstructor;
    }
    standup (PM, channel) {
        return `${PM.name} announces to ${channel}, @channel standup times!!!`
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Examples
const josh = new Instructor({
	'name': 'Josh Knell',
	'age': 35,
	'location': 'New York',
	'gender': 'M',
	'specialty': 'HTML',
	'favLanguage': 'JavaScript',
	'catchPhrase': 'IT\'S SO COOL'
});

const derrick = new Student({
	'name': 'Derrick',
	'age': 30,
	'location': 'Chicago',
	'gender': 'M',
	'previousBackground': 'Biology',
	'className': 'CS10',
	'favSubjects': ['JavaScript', 'CSS', 'Node'],
	'grade': Math.round((Math.random() * 100), 0)
});

const dresean = new ProjectManager({
	'name': 'Dre\'Sean',
	'age': 28,
	'location': 'North Carolina',
	'gender': 'M',
	'specialty': 'Python',
	'favLanguage': 'C++',
	'catchPhrase': 'I like spiders and spiders like me!',
	'gradClassName': 'CS5',
	'favInstructor': josh
});

console.log(josh.speak());
console.log(derrick.speak());
console.log(dresean.speak());

console.log(josh.age);
console.log(derrick.gender);
console.log(dresean.specialty);
console.log(josh.favLanguage);
console.log(derrick.previousBackground);
console.log(josh.catchPhrase);
console.log(dresean.catchPhrase);
console.log(derrick.className);
console.log(dresean.favInstructor.name);

console.log(josh.grade(derrick, 'JavaScript'));
console.log(dresean.grade(derrick, 'Bootstrap'));

console.log(josh.demo('CSS'));
console.log(derrick.listsSubjects) //I'm not sure if I did this one correctly.  Quokka doesn't seem to be outputting what I want it to
console.log(derrick.PRAssignment('Javascript IV'));
console.log(derrick.sprintChallenge('PreProcessing'));
// console.log(dresean.debugsCode(derrick, 'Flexbox'));