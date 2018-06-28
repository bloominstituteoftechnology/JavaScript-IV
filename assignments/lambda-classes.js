class Person {
    constructor(personAttributes) {
        this.createdAt = personAttributes.createdAt;
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak () {
        return `Hello, my name is ${this.name} and I am from ${this.location}. I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super (studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listSubjects () {
        return this.favSubjects.forEach(element => {console.log(element);});
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun Sprint Challenge on ${subject}.`;
    }
    graduate (subject) {
        if (this.grade >= 70) {
            return `${this.name}, you are ready to graduate from Lambda School!`;
        } else {
            return `${this.name} continues to work on ${subject}.`;
        }
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super (instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    addOrSubtract (student) {
        let upOrDown = Math.random();
        if (upOrDown > 0.5) {
            student.grade += Math.ceil(10 * Math.random());
        } else {
            student.grade -= Math.ceil(10 * Math.random());
        }
        
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super (projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standup times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

// People Objects 
// Students

const grant = new Student({
    'createdAt': new Date(),
    'name': 'Grant Reighard',
    'age': 29,
    'location': 'Perkasie, PA',
    'gender': 'M',
    'previousBackground': 'Casino',
    'className': 'CS12',
    'favSubjects': ['JavaScript', 'React'],
    'grade': 93
});

const frank = new Student({
    'createdAt': new Date(),
    'name': 'Frank Delmar',
    'age': 31,
    'location': 'Andersonville, GA',
    'gender': 'M',
    'previousBackground': 'Healthcare',
    'className': 'CS11',
    'favSubjects': ['HTML', 'CSS'],
    'grade': 88
});

const lucy = new Student({
    'createdAt': new Date(),
    'name': 'Lucy Deville',
    'age': 22,
    'location': 'Cupertino, CA',
    'gender': 'non-binary',
    'previousBackground': 'Retail',
    'className': 'CS9',
    'favSubjects': ['JavaScript', 'CSS'],
    'grade': 89
});

// Instructors

const josh = new Instructor({
    'createdAt': new Date(),
    'name': 'Josh Knell',
    'age': 31,
    'location': 'New York, NY',
    'gender': 'M',
    'specialty': 'Changing students\'s trajectories',
    'favLanguage': 'Python',
    'catchPhrase': 'Let\'s get it done!'
});

const russell = new Instructor({
    'createdAt': new Date(),
    'name': 'Russell Kennington',
    'age': 24,
    'location': 'Tampa, FL',
    'gender': 'M',
    'specialty': 'Explaining how concepts intertwine',
    'favLanguage': 'Ruby',
    'catchPhrase': 'Now, you try it.'
});

const ryan = new Instructor({
    'createdAt': new Date(),
    'name': 'Ryan Hamblin',
    'age': 32,
    'location': 'Stockton, UT',
    'gender': 'M',
    'specialty': 'Debugging the call stack',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Huh, that\'s interesting.'
});

// Project Managers

const terrie = new ProjectManager({
    'createdAt': new Date(),
    'name': 'Terrie Kim',
    'age': 32,
    'location': 'Boulder, CO',
    'gender': 'F',
    'gradClassName': 'CS2',
    'favInstructor': 'Ryan Hamblin'
});

const nate = new ProjectManager({
    'createdAt': new Date(),
    'name': 'Nathaniel Flory',
    'age': 28,
    'location': 'Orlando, FL',
    'gender': 'M',
    'gradClassName': 'CS7',
    'favInstructor': 'Russell Kennington'
});

const eric = new ProjectManager({
    'createdAt': new Date(),
    'name': 'Eric Hechavarria',
    'age': 26,
    'location': 'Boston, MA',
    'gender': 'M',
    'gradClassName': 'CS5',
    'favInstructor': 'Josh Knell'
});

// Students

console.log(grant.speak());
grant.listSubjects();
console.log(grant.PRAssignment('JS-I'));
console.log(grant.sprintChallenge('JS-I'));

console.log(frank.speak());
frank.listSubjects();
console.log(frank.PRAssignment('JS-II'));
console.log(frank.sprintChallenge('JS-II'));

console.log(lucy.speak());
lucy.listSubjects();
console.log(lucy.PRAssignment('JS-III'));
console.log(lucy.sprintChallenge('JS-III'));


// Instructors

console.log(josh.speak());
console.log(josh.demo('CSS'));
console.log(josh.grade(grant, 'CSS'));

console.log(russell.speak());
console.log(russell.demo('JavaScript'));
console.log(russell.grade(lucy, 'JavaScript'));

console.log(ryan.speak());
console.log(ryan.demo('React'));
console.log(ryan.grade(frank, 'React'));


// Project Managers

console.log(terrie.speak());
console.log(terrie.standUp("CS12_terrie"));
console.log(terrie.debugsCode(grant, 'React'));

console.log(nate.speak());
console.log(nate.standUp("CS12_nate"));
console.log(nate.debugsCode(frank, 'Redux'));

console.log(eric.speak());
console.log(eric.standUp("CS12_eric"));
console.log(eric.debugsCode(lucy, 'Python'));


// Stretch
console.log(grant.grade);
console.log(frank.grade);
console.log(lucy.grade);

console.log(grant.grade);
eric.addOrSubtract(grant);
console.log(grant.grade);
eric.addOrSubtract(grant);
console.log(grant.grade);
eric.addOrSubtract(grant);
console.log(grant.grade);
eric.addOrSubtract(grant);
console.log(grant.grade);
eric.addOrSubtract(grant);
console.log(grant.grade);

console.log(grant.graduate('C'));