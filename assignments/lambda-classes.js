class Person{
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.gender = personAttr.gender;
        this.location = personAttr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`;
    }
    editGrade(student){
        let randomNumber = Math.random() * (10-1) + 1;
        let addOrSubtract = Math.random() * (2-1) + 1;
        if(addOrSubtract > 1.5){
             student.grade -= randomNumber
            return student.grade;
        } else if(addOrSubtract < 1.5){
            student.grade += randomNumber;
            return student.grade;
        }
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects(){
        for(let i in this.favSubjects){
            if(i == this.favSubjects.length -1){
              return this.favSubjects[i];
            }
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(student){
        while(this.grade < 70){
            fred.editGrade(student);
            if(this.grade > 70){
                return `${this.name} graduated from Lambda school with ${this.grade}%! Good job`
            }
        }
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.grandClassName = pmAttrs.grandClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const kieran = new Student({
    name: 'Kieran',
    location: 'Niagara Falls',
    age: 19,
    gender: 'male',
    previousBackground: 'Graphic Design',
    className: "FSW16",
    favSubjects: ['HTML', 'CSS', 'PreProcesors', 'Javascript'],
    grade: 40,
});

const PM = new ProjectManager({
    name: 'Bob',
    location: 'West Hollywood',
    age: 25,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'JavaScript',
    catchPhrase: '.this is amazing!',
    grandClassName: 'FSW16',
    favInstructor: 'Fred'
});

console.log(PM.name); // 'Bob'
console.log(fred.specialty); // 'Front-end'
console.log(fred.grade(kieran, 'JavaScript')); //`Kieran recieves a perfect score on Java-Script`
console.log(PM.speak()); //`Hello my name is Bob and I live in West Hollywood`
console.log(kieran.listsSubjects()); //'HTML' 'CSS' 'PreProcesors' 'Javascript'
console.log(kieran.previousBackground); //'Graphic Design'
console.log(PM.favInstructor)// 'Fred'
console.log(PM.debugsCode(kieran, 'Python'))// `Bob debugs Kieran's code on Python`
console.log(fred.editGrade(kieran)); // Will log 40 + or - a random number between 1-10 //this will be starting grade
console.log(kieran.graduate(kieran)) //will go through a while loop until grade is > 70