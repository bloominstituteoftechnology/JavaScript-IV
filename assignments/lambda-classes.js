console.log('<---------------------Assignment 2: Start--------------------->');
// CODE here for your Lambda Classes

// Define Person Constructor
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// Define Instructor Constructor
class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    changeGrade(student){
        let addOrSub = Math.floor(Math.random()*2); // 1 or 2
        let val = Math.floor(Math.random()*100);
        if(addOrSub === 1 && (student.grade - val) >= 0){
            return student.grade -= val;
        }else if(addOrSub === 0 && (student.grade + val) <= 100){
            return student.grade += val;
        }else {
            this.changeGrade(student);
        }    
    }
    graduate(student){
        if(student.grade >= 70){
            console.log(`Congrates Your A Graduate!`);
        }else {
            this.changeGrade(student);
            console.log(student.grade);
            this.graduate(student);
        }
    }
}

// Define Student Constructor
class Student extends Person{
    constructor(studentAttribute){
        super(studentAttribute);
        this.previousBackground = studentAttribute.previousBackground;
        this.className = studentAttribute.className;
        this.favSubjects = studentAttribute.favSubjects;
        this.grade = studentAttribute.grade;
    }
    listSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// Define Project Managers Constructor
class ProjectManagers extends Instructor{
    constructor(projectManagersAttributes){
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
    changeGrade(student){
        let addOrSub = Math.floor(Math.random()*2); // 1 or 2
        let val = Math.floor(Math.random()*100);
        if(addOrSub === 1 && (student.grade - val) >= 0){
            return student.grade -= val;
        }else if(addOrSub === 0 && (student.grade + val) <= 100){
            return student.grade += val;
        }else {
            this.changeGrade(student);
        }    
    }
    graduate(student){
        if(student.grade >= 70){
            console.log(`Congrates Your A Graduate!`);
        }else {
            this.changeGrade(student);
            console.log(student.grade);
            this.graduate(student);
        }
    }
}

// Define Person Object Extensions

const Student1 = new Student({
    name: "Thomas Claydon",
    age: 26,
    location: "NY",
    gender: "M",
    previousBackground: 'Mechanical Engineer',
    className: 'FSW15',
    favSubjects: ['Html','CSS','Javascript'],
    grade: 69
});

const Instructor1 = new Instructor({
    name: "Josh Knell",
    age: 33,
    location: "Utah",
    gender: "M",
    specialty: "UX",
    favLanguage: 'Javascript',
    catchPhrase: 'What Up'
});

const ProjectManager1 = new ProjectManagers({
    name: `John O' Rourke`,
    age: 23,
    location: "Unkown",
    gender: "M",
    specialty: "HTML",
    favLanguage: 'Javascript',
    catchPhrase: 'How wants to share first?',
    gradClassName: "FSW15",
    favInstructor: "Josh Knell"
});

console.log('<---------------------Student Test--------------------->');

console.log(Student1);
Student1.listSubjects();
Student1.PRAssignment(Instructor1.specialty);
Student1.sprintChallenge(Student1.favSubjects[2]);

console.log('<---------------------Instructor Test--------------------->');

console.log(Instructor1);
Instructor1.demo(Student1.favSubjects[1]);
Instructor1.grade(Student1, Student1.favSubjects[1]);

console.log('<---------------------Project Manager Test--------------------->');

console.log(ProjectManager1);
ProjectManager1.standUp('fsw15_john');
ProjectManager1.debugsCode(Student1, ProjectManager1.favLanguage);

console.log('<---------------------Stretch Create Grade Prop--------------------->');

console.log(Student1.grade);

console.log('<---------------------Stretch Create Method for Changing Students Grade Project Manager--------------------->');
ProjectManager1.changeGrade(Student1);
console.log(Student1.grade);
console.log('<---------------------Stretch Create Method for Changing Students Instructor--------------------->');
Instructor1.changeGrade(Student1);
console.log(Student1.grade);

console.log('<---------------------Stretch Create Method for Graduation Via PM--------------------->');
ProjectManager1.graduate(Student1);

console.log('<---------------------Stretch Create Method for Graduation Via Instructor--------------------->');
Instructor1.graduate(Student1);


console.log('<---------------------Assignment 2: End--------------------->');
