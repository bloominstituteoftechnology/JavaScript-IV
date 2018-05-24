// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
}
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
}

}

class Instructor extends Person {
    constructor(options){
        super(options);
        this.specialty = options.specialty
        this.favLanguage = options.favLanguage
        this.catchPhrase = options.catchPhrase
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }
    gradeChange(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random(this.grade) * (max - min + 1)) + min;
    }
}
class Student extends Person {
    constructor(traits){
        super(traits);
        this.previousBackground = traits.previousBackground
        this.className = traits.className
        this.favSubjects = traits.favSubjects
    }

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
          console.log(`${this.name} loves ${this.favSubjects[i]}`);
    }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}`;
    }
    gradeAdjust(){
        return Math.floor(Math.random() * 100) + 1;
    }
    graduate(){
        if (this.grade > 70){
            console.log(`Congratulations ${this.name}, you graduated!`)
        }
        else {
           console.log(this.grade);
        }
    }
}
class ProjectManagers extends Instructor {
    constructor(descriptors){
        super(descriptors);
        this.gradClassName = descriptors.gradClassName
        this.favInstructor = descriptors.favInstructor
    }

    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const Mike = new Student ({
    name: 'Mike',
    age: 28,
    location: 'Philadelphia, PA',
    gender: 'M',
    previousBackground: 'Covert Ops',
    className: 'CS 11',
    favSubjects:['JavaScript', 'CSS', 'Python']
});
const Todd = new Student ({
    name: 'Todd',
    age: 34,
    location: 'Albequerque, NM',
    gender: 'M',
    previousBackground: 'Accountant',
    className: 'CS 10',
    favSubjects:['Node', 'C++', 'Applied Cryptography']
});

const Darrel = new Instructor ({
    name: 'Darrel',
    age: 41,
    location: 'Austin, TX',
    gender: 'M',
    specialty: 'Applied JavaScript',
    favLanguage: 'Rust',
    catchPhrase: 'Flippin heck!'
});

const Tracy = new Instructor ({
    name: 'Tracy',
    age: 37,
    location: 'Seattle, WA',
    gender: 'F',
    specialty: 'React',
    favLanguage: 'Solidity',
    catchPhrase: 'By golly!' 
});

const Cheryl = new ProjectManagers ({
    name: 'Cheryl',
    age: 51,
    location: 'Buffalo, NY',
    gender: 'F',
    specialty: 'Node',
    favLanguage: 'Python',
    catchPhrase: 'Bring the ruckus!',
    gradClassName: 'Aristocrats',
    favInstructor: 'Patrick'
});

const David = new ProjectManagers ({
    name: 'David',
    age: 70,
    location: 'Denver, CO',
    gender: 'M',
    specialty: 'R',
    favLanguage: 'JavaScript',
    catchPhrase: 'What was that?',
    gradClassName: 'Gentlefolks',
    favInstructor: 'Josh'
});


console.log(Mike.previousBackground);
console.log(Todd.className);
console.log(Mike.favSubjects);
console.log(Todd.listsSubjects()); //?
console.log(Mike.PRAssignment('value'));
console.log(Mike.sprintChallenge('whatever')); 
console.log(Darrel.catchPhrase); 
console.log(Darrel.specialty);
console.log(Tracy.favLanguage);
console.log(Tracy.demo('C'));
console.log(Tracy.grade('Jeff', 'C++'));
console.log(Cheryl.favInstructor); //?
console.log(Cheryl.demo('thing')); 
console.log(Cheryl.grade('Cheryl' ,'R')); //?
console.log(David.gradClassName);
console.log(David.standup('CS11'));
console.log(David.debugsCode('Alan', 'HTML'));
console.log(Mike.gradeAdjust());
console.log(Todd.graduate());
console.log(Darrel.gradeChange(70,80));