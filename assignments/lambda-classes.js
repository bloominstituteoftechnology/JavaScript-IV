// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {

        function randGradeAdjust(){
            let randNum = Math.random();
            if(randNum >= 0.5){
                student.Grade *= (1+randNum);
                student.Grade = Math.round(student.Grade);
                if(student.Grade >= 100){
                    return student.Grade = 100;
                } else {
                    return student.Grade;
                }
            } else {
                student.Grade *= randNum;
                student.Grade = Math.round(student.Grade);
                return student.Grade;
            }
        }
        
        return `${student.name} receives a ${randGradeAdjust()} on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.Grade = studentAttr.Grade;
    }
    listsSubjects() {
        for(let i=0;i<this.favSubjects.length;i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(Instructor_PM,assignment) {

        while(true){
            if(this.Grade >=70){
                console.log('Ya, I can graduate!!!!');
                break;
            } else {
                console.log(`${Instructor_PM.name} is re-grading your assignmet`)
                return Instructor_PM.grade(this,assignment);
            }
        }
    }
}
//new Student({name:this.name,Grade:this.Grade})

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
/////////////////////////
const dan = new Student({
    name: 'Dan',
    location: 'Florida',
    age: 26,
    gender: 'Male',
    previousBackground:'Python',
    className: 'FSW_15',
    favSubjects: ["Inheritance","Flexbox","Generator functions"],
    Grade:70
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const trevor = new ProjectManager({
    name: 'Trevor',
    location: 'California',
    age: 30,
    gender: 'Male',
    gradClassName: 'CS_13',
    favInstructor: 'Josh',
    catchPhrase: `Don't forget the homies`
});

console.log(dan.Grade);
/////////////////////////
console.log("----------------------")
console.log(fred.speak());
console.log(fred.demo("JS-III"));
console.log(fred.grade(dan,"JS-IV"));

/////////////////////////
console.log("----------------------")
console.log(dan.speak("JS"));
dan.listsSubjects();
console.log(dan.PRAssignment("JS-I"));
console.log(dan.sprintChallenge("HTML"));
console.log(dan.Grade);
dan.graduate(trevor,"C++");
//console.log(fred.graduate(trevor));

/////////////////////////
console.log("----------------------")
console.log(trevor.speak());
console.log(trevor.standUp("FSW_15_Trevor"));
console.log(trevor.debugsCode(dan,"React"));
console.log(trevor.grade(dan,"JS-IV"));

/* * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score. */