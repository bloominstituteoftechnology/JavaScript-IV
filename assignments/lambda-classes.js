// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instructorInfo){
        super(instructorInfo);
        
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
     }
  
     demo(subject){
    console.log(`Today we learned about ${subject}.`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listSubjects(){
        console.log(this.favSubjects);
    }

    PRAssignment(subject){
console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

const Estevan = new Person({
    name : 'Estevan',
    age: '22',
    location: 'Riverside, CA'

});

const Suthep = new Instructor({
    name: 'Suthep',
    age:'21',
    location: 'Hemet, CA',
    specialty: 'front-end',
    favLanguage: 'HTML',
    catchPhrase: 'Its Lit'
});

const Tom = new Student({
    name: 'Tom',
    age: '19',
    location: 'El Monte, CA',
    previousBackground: 'Worked at Blaze Pizza',
    className: 'FSW16',
    favSubjects: ['Math','CS','English']
});

console.log(Tom.name);
console.log(Suthep.demo('JavaSript'));
console.log(Estevan.speak());




