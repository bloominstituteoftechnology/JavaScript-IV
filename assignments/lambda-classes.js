// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name= attributes.name;
        this.age= attributes.age;
        this.gender = attributes.undefined;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}
const Ruxin = new Instructor({
    name: "Ruxin",
    age: 37,
    gender: 'male',
    location: 'Chicago',
    favLanguage: "Python",
    specialty: "Back-end",
    catchPhrase: "Baby-ruxin forever unclean!!!"
})

const Andre = new Instructor ({
  name: 'Andre',
  age: 38,
  gender: 'male',
  location: 'Chicago',
  favLanguage: 'Pascal',
  specialty: 'static-programming',
  catchPhrase: 'Child, please',
});

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
       let logSubjects =this.favSubjects.forEach(element => console.log((element)));
       return logSubjects;
        }

    PRAssignment(subject){
        if (this.favSubjects.includes(subject)){
            console.log(`${this.name} has submitted a PR for ${subject}`);
        }
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

}
const Jennie = new Student ({
  name: 'Jennie',
  age: 35,
  gender: 'female',
  location: 'Chicago',
  previousBackground: 'Real-Estate Agent',
  className: "FSW15",
  favSubjects: ['HTML','CSS','JavaScript']
});

const babyRuxin = new Student({
    name: 'Baby-Ruxin',
    age: 4,
    gender: 'male',
    location: 'Chicago',
    previousBackground: 'none',
    className: "FSW15",
    favSubjects: ['Functional-Prgramming', 'OOP', 'Python']
});
class ProjectManagers extends Instructor{
    constructor(projectManagersAttributes){
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standup(slack){
        return `${this.name} announces to ${slack}, @channel standy times!`
    }
    debugsCode(obj, subject){
        return `${this.name} debugs ${obj.name}\'s code on ${subject}`
    }
}

const Pete = new ProjectManagers({
    name: 'Pete',
    age: 37,
    gender: 'male',
    location: 'Chicago',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: 'it is decided',
    gradClassName: 'fsw 7',
    favInstructor: 'Ruxin' 
});

const Taco = new Student({
    name: 'Taco',
    age: 35,
    gender: 'male',
    location: 'Chicago',
    favLanguage: 'Swift',
    specialty: 'Front-end',
    catchPhrase: "Don't compromise notarize",
    gradClassName: 'fsw 7',
    favInstructor: 'Ruxin', 
});

console.log(Ruxin);
console.log (Andre);
console.log (Pete);
console.log (Jennie);
console.log (babyRuxin);
console.log(Taco);

console.log(Ruxin.speak())
console.log(Ruxin.demo("JavaScript"))
console.log(Ruxin.grade(Taco, "CSS"))
console.log (Pete.standup ("slack"));
console.log (Pete.debugsCode(Jennie, "HTML"))
console.log(babyRuxin.listsSubjects())
console.log(babyRuxin.sprintChallenge("JS fundamentals"));
console.log(babyRuxin.PRAssignment('OOP'))