class Person{
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name} I am from ${this.location}.`);
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
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects(subjects){
        for(var i =0; i<subjects.length; i++){
            console.log(subjects[i]);
        }
    }
        listSubjects.apply(${student.favSubjects});

    prAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standup(channel){
        console.log(`${name} announces to ${channel} @channel standy times.`);
    }

    debugsCode(studentObj, subject){
        console.log(`${name} debugs ${student.name}'s code on subject.`);
    }
}

const greg = new Instructor({
name: 'Greg',
age: 42,
location: 'San Diego, CA',
gender: 'M',
favLanguage: 'Python',
specialty: 'System Architecture',
catchPhrase: '.....to be continued'
}); 

const angie = new Student({
    name: 'Angie',
    age: 25,
    location: 'Baltimore, MD',
    gender: 'F',
    previousBackground: 'Waitress',
    className: 'cs13',
    favSubjects: ['CSS', 'JavaScript', 'React']
});

const sara = new ProjectManager({
    name: 'Sara',
    age: 32,
    location: 'New Orleans, LA',
    gender: 'F',
    gradClassName: 'cs9',
    favInstructor: 'Josh'
});