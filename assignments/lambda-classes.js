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
}




class ProjectManager extends Instructor {
    constructor(ProjectManagerAttrs){
        super(ProjectManagerAttrs);
    }

}


const Instructor = new Instructor ({
    favLanguage: 'python',
    specialty: 'AI',
    catchPhrase: 'Do not forget the homies'


})

instructor.speak();


const Student = new Student ({
    previousBackground: 'none',
    className: 'web21',
    favSubjects: ['HTML, CSS, Python']
})





