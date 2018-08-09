// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location= props.location;
        this.gender = props.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    examin(student){
        student.grade += Math.floor((Math.random())*200)-100;
        if(student.grade > 100){
            return `Student grade is already at maximum`;
        } else {
            return student.grade;
        }
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
        return `${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}` ;
    }
    PRAssignment(subject){
        return `${this.name} has began sprint challenge on ${subject}`;
    }
    springChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(){
        if(this.grade >= 70){
            return `Congrats! You Graduated!`;
        } else {
            return `Keep Studying!`;
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PmProps){
        super(PmProps);
        this.gradClassName = PmProps.gradClassName;
        this.favInstructor = PmProps.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const austin = new Student({
    'name': 'Austin',
    'age': 25,
    'location': 'Fayetteville, Ar',
    'gender': 'Male',
    'previousBackground': 'None',
    'className': 'CS13',
    'favSubjects': [
        'HTML', 'LESS', 'JS'
    ],
    'grade': 100

});

const gandalf = new Instructor({
    'name': 'Gandalf',
    'age': 2019,
    'location': 'Middle-Earth',
    'gender': 'Male',
    'previousBackground': 'Everything',
    'className': 'CS13',
    'favSubjects': [
        'magic', 'quests', 'knowledge'
    ],
    'specialty': 'magic',
    'favLanguage': 'Elvish',
    'catchPhrase': 'You shall not pass!'

});

const robot = new ProjectManager({
    'name': 'C3-P0',
    'age': 45,
    'location': 'Tattooine',
    'gender': 'N/A',
    'previousBackground': 'Human-Cyborg Relations',
    'className': 'Human-Cyborg Relations',
    'favSubjects': [
        'statistics', 'quests', 'doubt'
    ],
    'specialty': 'Relations',
    'favLanguage': 'Cyborg',
    'catchPhrase': 'I am C3P0, Human-Cyborg Relations',
    'gradClassName': 'HCR1',
    'favInstructor': 'Master Anakin',

});

console.log(gandalf.examin(austin));
console.log(robot.debugsCode(austin, 'HCR1'));
console.log(austin.listsSubjects());
console.log(austin.age);
console.log(gandalf.grade(austin, 'HTML'));
console.log(austin.grade);
console.log(austin.graduate());