// CODE here for your Lambda Classes


class Person {

    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        
    }

    speak () {
        return `Hello my name is + $(this.name) + I am from + $(this.location)`
    }
}


class Instructor extends Person {

    constructor(InstructorAttrs){
        super(InstructorAttrs);
        this.specialty = InstructorAttrs.specialty;
        this.favLanguage = InstructorAttrs.favLanguage;
        this.catchPhrase = InstructorAttrs.Dontforgetthehomies;

    }
    demo (subject) {
        return `Today we are learning about + ${this.subject}`;
       
    }

    grade (subject, student) {
        return `${this.student} received a perfect score on ${this.subject}`;
    }
}


class Student extends Person {

    constructor(StudentAttrs){
        super(StudentAttrs);
        this.previousBackground = StudentAttrs.previousBackground;
        this.className = StudentAttrs.className;
        this.favSubjects = StudentAttrs.favSubjects;
    }

    listsSubjects(favSubjects) {
        this.favSubjects.forEach(element => {
            console.log(element)
            return element
        });

    }

    PRAssignment(subject) {

        return '${this.name} has submittes a PR for ${this.subject}';

    }

    sprintChallenge(subject) {

        return '${this.name} has begun sprint challenge on ${this.subject}';

    }
}




class ProjectManager extends Instructor {
    constructor(ProjectManagerAttrs){
        super(ProjectManagerAttrs);
        this.gradClassName = ProjectManagerAttrs.gradClassName;
        this.favInstructor = ProjectManagerAttrs.favInstructor;

    }

    standUp(channel){
        return `${this.name} announces to ${this.channel}, @ channel standy times!`

    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }

}


const Instructor = new Instructor ({
    name: 'dan',
    age: 32,
    location: 'New York'
    favLanguage: 'python',
    specialty: 'AI',
    catchPhrase: 'Do not forget the homies',


})

instructor.demo();



const Student = new Student ({
    name: 'kelly',
    age: 25,
    location: 'orlando',
    previousBackground: 'none',
    className: 'web21',
    favSubjects: ['HTML, CSS, Python'],
})

Student.listsSubjects();
Student.PRAssignment();
Student.sprintChallenge();


const ProjectManager = new ProjectManager ({
    name: 'josh',
    age: 30,
    location: 'California',
    gradClassName: 'Web21',
    favInstructor: 'Dan',
    specialty: 'AI',
    favLanguage: 'HTML',
    catchPhrase: 'Do your homework',

})




// console.log(kelly)
console.log(kelly.speak())
console.log(kelly.listsSubjects())
console.log(josh.debugsCode('josh', 'HTML'))
console.log(josh.standup('channel'))
// console.log(dan)
console.log(dan.demo(dan.favLanguage))
console.log(dan.grade('kelly', 'HTML'))
console.log(kelly.sprintChallenge('CSS'))
console.log(kelly.PRAssignment('CSS'))