// CODE here for your Lambda Classes
class Person{
    constructor(properties){
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
        this.gender = properties.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }

}

class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    changeGrade(student){
       return student.grade += Math.random() * (10 - (-10)) + (-10);
    }

}

class Student extends Person{
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(item => {console.log(item)});
        }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate(){
        if(this.grade >= 70)
            console.log(`${this.name} has graduated with a passing grade of ${this.grade}!`)
        else
            console.log(`${this.name} has a grade below 70% and needs to go back and work on it.`)
    }
}

class ProjectManager extends Instructor{
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standup time!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const miyagi = new Instructor({
    name: 'Mr. Miyagi',
    location: `Los Angeles`,
    age: '65',
    gender: 'male',
    favLanguage: 'Assembly',
    specialty: 'Theoretical computer science',
    catchPhrase: 'Wax on Wax off'
});

const daniel = new Student({
    name:`Daniel`,
    location: `New Jersey`,
    age: '15',
    gender: 'male',
    previousBackground: 'Karate student',
    className: 'CS44',
    favSubjects: ['Data Structures', 'Algorithms', 'Web Design'],
    grade: 72

});

const john = new ProjectManager({
    name: 'John',
    location: 'Cobra Kai',
    age: '17',
    gender: 'male',
    gradClassName: 'CS41',
    favInstructor: 'Josh'
})

miyagi.speak();
miyagi.demo('karate coding');
miyagi.grade(daniel,'Wax Algorithms');
daniel.listsSubjects();
daniel.PRAssignment('Window Washing');
daniel.sprintChallenge('Ethical Hacking');
john.standUp('CS41-Python Kai');
john.debugsCode(daniel, 'HTML');
john.demo('Competitive coding');
miyagi.changeGrade(daniel);
miyagi.changeGrade(daniel);
john.changeGrade(daniel);
console.log(daniel);
daniel.graduate();
