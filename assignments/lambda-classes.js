//Classes:

class Person{
    constructor(attributes){
    this.name = attributes.name,
    this.age = attributes.age,
    this.location = attributes.location
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}



class Instructor extends Person{
    constructor(InstructorAttributes){
    super(InstructorAttributes);
    this.specialty = InstructorAttributes.specialty,
    this.favLanguage = InstructorAttributes.favLanguage,
    this.catchPhrase = InstructorAttributes.catchPhrase
    }
    demo(_subject){
        return `Today we are learning about ${this.subject}`
    }
    grade(_student, _object){
        return `${this.student.name} receives a perfect score on ${this.subject}!`;
    }

}



class Student extends Instructor{
    constructor(StudentAttributes){
    super(StudentAttributes);   
    this.previousBackground = StudentAttributes.previousBackground,
    this.className = StudentAttributes.className,
    this.favSubjects = StudentAttributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignment(_name, _subject){
        return `${this.student.name} has submitted a PR for ${this.subject}`;
    }
}



class ProjectManager extends Student{
    constructor(ProjectManagerAttributes){
    super(ProjectManagerAttributes);
    this.gradClassName = ProjectManagerAttributes.gradClassName,
    this.favInstructor = ProjectManagerAttributes.favInstructor
    }   
    standUp(_slackChannel){
       return `${this.name} announces to ${this.channel}, @channel stand times!​​​​​`;
    }
    debugsCode(_object, _subject ){
        return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`;
    }

}

//______________________________________________________________________
//instructors:

const Jerry = new Instructor({
name: 'Jerry',
location: 'Utah',
age: 42,
favLanguage: 'Java',
specialty: 'Computer Science Theory',
catchPhrase: `Love the whales`
});

const Aya = new Instructor({
    name: 'Aya',
    location: 'Wisconsin',
    age: 48,
    favLanguage: 'C++',
    specialty: 'devops',
    catchPhrase: `I like cats`
    });

//______________________________________________________________________
//students:


const Jon = new Student({
        name: 'Jon',
        location: 'Idaho',
        age: 36,
        previousBackground: `cook`,
        className: `CS122`,
        favSubjects: `front-end`
        });

const Jeremy = new Student({
    name: 'Jeremy',
    location: 'UK',
    age: 22,
    previousBackground: `college student`,
    className: `CS125`,
    favSubjects: `back-end`
    });
    
//______________________________________________________________________
//projectManagers:

const Kate = new ProjectManager({
    name: 'Kate',
    location: 'New Zealand',
    age: 53,
    gradClassName: 'Web1',
    favInstructor: 'Aya'
    });
    
const Kerin = new ProjectManager({
    name: 'Kerin',
    location: 'Japan',
    age: 37,
    gradClassName: 'IOS12',
    favInstructor: 'Jerry'
    });

//______________________________________________________________________
//console.logs for students:

console.log(Jerry.speak());
console.log(Aya.speak());

//______________________________________________________________________
//console.logs for instructors:





//______________________________________________________________________
//console.logs for projectManagers: