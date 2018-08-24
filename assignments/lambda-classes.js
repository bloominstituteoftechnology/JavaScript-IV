//Person Class
class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}
//Instructor Class
class Instructor extends Person {
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    };
    /* randomGrade(student, min, max){
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        if (student.grade + randomInt >= 100){
            return student.grade = 100;
        } else {
            return student.grade = student.grade + randomInt;
        }
    }; */
    //revised method
    randomGrade(student){
        const randomNum = Math.floor(Math.random() * 21) - 10;
        if (student.grade + randomNum >= 100) {
            return student.grade = 100;
        } else {
            return student.grade = student.grade + randomNum;
        }
    }
}
//Student Class
class Student extends Person {
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
    }
    listsSubjects(){
        const returnValue = this.favSubjects.map(function(subject) {
            return subject;
        });
        return returnValue;
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    };
    graduate(){
        if(this.grade >= 70) {
            return `Let them graduate!`;
        } else {
            return 'Go back to grading their assignments.';
        }
    };
}
//ProjectManager Class
class ProjectManager extends Instructor {
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times`;
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}
//Created new student class
const Emmanuel = new Student({
    name: 'Emmanuel',
    age: '25',
    location: 'ID',
    gender: 'M',
    previousBackground: 'Musician',
    className: 'CSPT2',
    favSubjects: [
        'Life',
        'Music',
        'Javascript',
        'HTML/CSS',
    ],
    grade: 100,
});
//testing methods on Student class
console.log(Emmanuel.listsSubjects());
console.log(Emmanuel.PRAssignment('JavascriptIV'));
console.log(Emmanuel.sprintChallenge('Javascript'));
console.log(Emmanuel.speak());
console.log(Emmanuel.graduate());

//Created new Instructor class
const Dan = new Instructor({
    name: 'Dan',
    age: 'Unknown, speculated immortal',
    location: 'Utah',
    gender: 'M',
});
//testing methods on Instructor class
console.log(Dan.demo('LESS'));
console.log(Dan.grade(Emmanuel, 'LIFE'));

//Created new Project Manager class
const Mykael = new ProjectManager({
    name: 'Mykael',
    age: '',
    location: 'Florida',
    gender: 'M',
    specialty: 'Saving the Earth from Danger',
    favLanguage: 'A New Language he is inventing',
    catchPhrase: 'Hey guys welcome to...',
    previousBackground: 'Saving the Earth',
    className: 'CSPT2',
    favSubjects: 'Powershell Scripts',
});
//testing methods on Project Manager class
console.log(Mykael.standUp('cspt2_myke'));
console.log(Mykael.debugsCode(Emmanuel, 'Classes'));
console.log(Mykael.randomGrade(Emmanuel));

//testing message when student.grade is below 70%
console.log(Emmanuel.graduate());
