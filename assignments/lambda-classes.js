// CODE here for your Lambda Classes
class Person {
    constructor (personInfo) {
        this.name=personInfo.name;
        this.age=personInfo.age;
        this.location=personInfo.location;
        this.gender=personInfo.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
const Will=new Person({
    'name': 'Will',
    'age': 25,
    'location': 'Walnut',
    'gender': 'M'
}
)
const Dominique=new Person({
    'name': 'Dominique',
    'age': 22,
    'location': 'Sunnyvale',
    'gender': 'F'
})

Will.speak();
Dominique.speak();

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty=instructorInfo.specialty;
        this.favLanguage=instructorInfo.favLanguage;
        this.catchPhrase=instructorInfo.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
const Dan=new Instructor ({
    'name': 'Dan',
    'age': 33,
    'location': 'Brea',
    'gender': 'M',
    'specialty': 'Django',
    'favLanguage': 'Python',
    'catchPhrase': 'Slow is smooth, smooth is fast.'
});
const Beneil=new Instructor ({
    'name': 'Beneil',
    'age': 29,
    'location': 'Anaheim',
    'gender': 'M',
    'specialty': 'Angular',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Oss!'
});
Dan.demo('responsive-design');
Beneil.demo('CoffeeScript');
Dan.grade(Will,'JS-Fundamentals');
Beneil.grade(Dominique,'React');

class Student extends Person {
    constructor (studentInfo){
        super(studentInfo);
        this.previousBackground=studentInfo.previousBackground;
        this.className=studentInfo.className;
        this.favSubjects=studentInfo.favSubjects;
    }
    listSubjects(){
        this.favSubjects.forEach(function(e){
            console.log(e);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has a submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}
const William=new Student(
    {
    'name': 'Will',
    'age': 25,
    'location': 'Walnut',
    'gender': 'M',
    'previousBackground': 'Studying Biology at UCSB',
    'className': 'CS 12',
    'favSubjects':['JavaScript','Python','Computer Science']
    }
)
const Victoria=new Student(
    {
        'name': 'Victoria',
        'age': 24,
        'location': 'Rowland Heights',
        'gender': 'F',
        'previousBackground': 'ROTC',
        'className': 'CS tbd',
        'favSubjects': ['R', 'Python', 'Ruby']
    }
)
William.listSubjects();
Victoria.listSubjects();
William.PRAssignment('JavaScript IV');
Victoria.PRAssignment('Computer Architecture');
William.sprintChallenge('JavaScript Fundamentals');
Victoria.sprintChallenge('Database');

class ProjectManager extends Instructor {
    constructor(projectManagerInfo){
        super(projectManagerInfo);
        this.gradClassName=projectManagerInfo.gradClassName;
        this.favInstructor=projectManagerInfo.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
const Jimmie=new ProjectManager({
        'name': 'Jimmie',
        'age': 33,
        'location': 'Brea',
        'gender': 'M',
        'specialty': 'Django',
        'favLanguage': 'Python',
        'catchPhrase': 'Slow is smooth, smooth is fast.',
        'gradClassName': 'CS 8',
        'favInstructor': 'Roger'
})
const Sean=new ProjectManager({
    'name': 'Sean',
    'age': 29,
    'location': 'Anaheim',
    'gender': 'M',
    'specialty': 'Angular',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Oss!',
    'gradClassName': 'CS 8',
    'favInstrucor': 'Ralph'
});
Jimmie.standUp('#general');
Sean.standUp('#general');
Jimmie.debugsCode(Will,'React');
Sean.debugsCode(Dominique,'React');