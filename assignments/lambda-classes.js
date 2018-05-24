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
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    gradeAdjust(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random(student.grade) * (max - min + 1)) + min;
    }
}
class Student extends Person {
    constructor(traits){
        super(traits);
        this.previousBackground = traits.previousBackground
        this.className = traits.className
        this.favSubjects = traits.favSubjects
    }

    listsSubjects(){
        for(i=0;i<favSubjects.length;i++){
            console.log(favSubjects);
    }
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun spring challenge on ${subject}`);
    }
    grade(){
        console.log(Math.floor(Math.random() * 100) + 1);
    }
    graduate(){
        if (student.grade > 70){
            console.log(`Congratulations ${student.name}, you graduated!`)
        }
        else {
            grade(student.name) 
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
        console.log(`${name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`)
    }
}

console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()