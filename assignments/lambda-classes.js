// CODE here for your Lambda Classes
/*
## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example: */


//-----CLASS CREATIONS-----//
class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(obj, subject){
        console.log(`${obj.name} receives a perfect score on ${subject}`);
    }
    scoreCard(obj){
        let grade = Math.ceil(Math.random()*15);
        console.log(`\n ${this.name} gives ${obj.name} a score of: ${grade}`);
        return obj.grade = obj.grade + grade;
    }

}

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }
    listsSubjects(){
        console.log(`\n${this.name}'s favorite subjects are:`)
        this.favSubjects.forEach(function(element){
            console.log(element);
        })
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate(){
        if(this.grade >= 70){
            console.log(`I can graduate with a score of: ${this.grade}`);
            return true;
        }else{
            return false;
        }
    }
}

class TeamLeads extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(obj, subject){
        console.log(`${this.name} debugs ${obj.name}'s code on ${subject}.`);
    }
}

//---Objects----//

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
const ray = new TeamLeads({
    name: 'Ray',
    location: 'Milwaukee',
    age: 35,
    favLanguage: 'Node',
    specialty: 'Awesome TL',
    catchPhrase: 'Werd',
    gradClassName: 'Previous Class',
    favInstructor: 'Thor'
});
const brett = new Student({
    name: 'Brett',
    location: 'Chicago',
    age: 32,
    previousBackground: 'Engineer',
    className: "WebPT9",
    favSubjects: ['cooking', 'math', 'science', 'programming'],
    grade: Math.floor(Math.random()*10)
});

//---Testing my Lambda-Classes---//

//--Prints out Details of the Objects--//
console.log(fred);
console.log(ray);
console.log(brett);

//-Activate fred's methods-//
fred.grade(brett, brett.favLanguage);
fred.demo(fred.specialty);

//-Activate brett's methods-//
brett.listsSubjects();
brett.PRAssignment(brett.favSubjects[Math.floor(Math.random()*(brett.favSubjects.length-1))]);
brett.sprintChallenge(brett.previousBackground);

//-Activate ray's methods-//
ray.speak();
ray.standUp(`Ray's Awesome Channel`);
ray.debugsCode(brett, ray.specialty);

//-----Stretch Goal----//
console.log(`\n ${brett.name}'s grade is: ${brett.grade}`);
while(brett.graduate() !== true){
    ray.scoreCard(brett);
    console.log(`${brett.name}'s current grade is: ${brett.grade}`);
};