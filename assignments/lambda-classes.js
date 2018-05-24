// CODE here for your Lambda Classes


class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.gender = instructorAttributes.gender;
        this.favLanguage = instructorAttributes.favLanguage;
        this.specialty = instructorAttributes.specialty;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
    manuplateGrade(student, refactor){
        let randNum = Math.random() * 50;
        if(typeof(refactor) !== String) return 'Please type add or subtract!';

        if(refactor.toLowerCase() === 'add'){
            return student.grade + randNum;
        }else if(refactor.toLowerCase() === 'subtract' ){
            return student.grade - randNum;
        }
    }
}


class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = 99;
    }
    listsSubjects(){
        this.favSubjects.forEach(function(element){
            console.log(element);
        }) ;
    } 
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    } 
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}`
    }
    graduate(){
        if(this.grade > 70){
            return "graduate".toUpperCase();
        }else{
            this.grade += 10;
        }
    }
}

class ProjectManagers extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
});
console.log(fred.speak());

const freds = new Instructor({
    name: 'Fred2',
    location: 'Bedrock',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
console.log(freds.grade({name:'sibhat'}, 'history'));


