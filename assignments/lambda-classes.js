// CODE here for your Lambda Classes

class Person {
    constructor(deets){
        this.name = deets.name;
        this.age = deets.age;
        this.location = deets.location;
        this.gender = deets.gender;
    }
    greet() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorDeets){
        super(instructorDeets);
        this.specialty = instructorDeets.specialty;
        this.favLanguage = instructorDeets.favLanguage;
        this.catchPhrase = instructorDeets.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(name, subject) {
        return `${name} receives a perfect score on ${subject}`;
    }
    changeGrade(grade) {
        grade = grade + Math.floor((Math.random() * 10) + 1) - Math.floor((Math.random() * 10) + 1);
        return grade;
    }
}


const dude = new Instructor({
    name: 'El Duderino',
    age: 37,
    location: 'Los Angeles',
    gender: 'Male',
    catchPhrase: 'The Dude abides'
})

const bruce = new Instructor({
    name: 'Bruce Wayne',
    location: 'Gotham',
    age: 32,
    gender: 'Male',
    specialty: 'BATch',
    favLanguage: 'Ruby on Rails',
    catchPhrase: 'I am the Dark Net'
})

const walt = new Instructor({
    name: 'Walter White',
    location: 'Albuquerque, New Mexico',
    age: 42,
    gender: 'Male',
    specialty: 'Back End',
    favLanguage: 'C#',
    catchPhrase: 'I am the one who knocks'
})


class Students extends Person {
    constructor(studentDeets){
        super(studentDeets);
        this.previousBackground = studentDeets.previousBackground;
        this.className = studentDeets.className;
        this.favSubjects = studentDeets.favSubjects;
        this.grade = studentDeets.grade;
    }
    listsSubjects() {
        // return this.favSubjects.toString();
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}.`;
    }
    graduate() {
        if(this.grade < 70){
           bruce.changeGrade(this.grade) 
        }
        return `Congratulations, ${this.name}! You graduated!`
    }
}

// runners.forEach(function(a,i) {
//     fullName.push(`${runners[i].first_name} ${runners[i].last_name}`);
//   });


const gal = new Students({
    name: 'Wonder Woman',
    location: 'Amazon',
    age: '26',
    gender: 'Female',
    previousBackground: 'Member of the Justice League',
    className: 'CS8',
    favSubjects: ['HTML', ' CSS', ' Javascript'],
    grade: 88
})

const liz = new Students({
    name: 'Elizabeth I',
    location: 'England',
    age: 460,
    gender: 'Female',
    previousBackground: 'Queen of England',
    className: 'CS4',
    favSubjects: ['Sir Francis Walsingham', ' Sir Walter Raleigh'],
    grade: 94
})

const andy = new Students({
    name: 'Andy',
    location: 'Brooklyn',
    age: 34,
    gender: 'Male',
    previousBackground: 'Police Officer',
    className: 'CS9',
    favSubjects: ['React', ' C'],
    grade: 26
})


class ProjectManagers extends Instructor {
    constructor(PMdeets){
        super(PMdeets);
        this.gradClassName = PMdeets.gradClassName;
        this.favInstructor = PMdeets.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studentName, subject) {
        return `${this.name} debugs ${studentName}'s code on ${subject}`;
    }
}

const maude = new ProjectManagers({
    name: 'Maude',
    location: 'Los Angeles',
    age: 34,
    gender: 'Female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: 'Meat is murder',
    gradClassName: 'CS2',
    favInstructor: 'El Duderino'
})

const joe = new ProjectManagers({
    name: 'Joe',
    age: 34,
    gender: 'Male',
    location: 'Middletown',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: 'Never better',
    gradClassName: 'CS4',
    favInstructor: 'Bruce'
})

//Instructors
console.log(dude.greet());
console.log(bruce.demo('JavaScript')); 
console.log(walt.grade('Jessie', 'C#'));

// //Students
gal.listsSubjects();
console.log(liz.PRAssignment('JavaScript'));
console.log(andy.sprintChallenge('RoR'));
console.log(bruce.changeGrade(gal.grade));
console.log(andy.graduate());

//PMs
console.log(maude.standUp('CSHelp'));
console.log(joe.debugsCode('Alex', 'JavaScript'));