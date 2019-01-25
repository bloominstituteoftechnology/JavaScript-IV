// CODE here for your Lambda Classes

class Person{
    constructor (props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

      speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

  
  class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject){
    console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`); 
    }

    gradeAdjust(student){
        .
    }
    
    helpStudent(student){
        if(student.grade < 100){
            student.grade += (student.grade - 100) * - 1
        } 
        console.log(`After seeking and receiving help from ${this.name}, ${student.name} Got his grades up to ${student.grade}.`)
    }
  }
  
  class Student extends Person{
    constructor (props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.age;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    listSubjects (){
    this.favSubjects.forEach(subject => {console.log(subject)}) ;
    }

    PRAssignment (subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`); 
    }

}

const austenAllred = new Person({
    name: 'Austen',
    location: 'Utah'
});

const ashtonKutcher = new Person({
    name: 'Ashton',
    location: 'Hollywood'
});

const omarSalah = new Student({
    name: 'Omar',
    age: 29,
    location: 'Los Angeles',
    gender: 'Male',
    grade: 90,
    previousBackground: 'Security',
    className: 'Web17',
    favSubjects: ['Python', 'HTML', 'CSS', 'LESS', 'Javascript']
});

const javontayMcElroy = new Student({
    name: 'Javontay',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']

});

const justinDavis = new Student({
    name: 'Justin',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']
});

const joshKnell = new Instructor({
    name: 'Josh',
    gender: 'Male',
    specialty: 'Front-end web development',
    favLanguage: 'Javascript',
    catchPhrase: 'Banjo'
});

const ryanHamblin = new Instructor({
    name: 'Ryan',
    location: 'Utah',
    gender: 'Male',
    specialty: 'Full-Stack web development',
    favLanguage: 'Javascript'
});

const joeBugajski = new ProjectManager({
    name: 'Joe',
    gender: 'Male',
});

const ryanBoris = new ProjectManager({
    name: 'Ryan',
    gender: 'Male',
});

// Console.log Tests
console.log('Person Tests');
austenAllred.speak();
ashtonKutcher.speak();


console.log('Student Tests - Omar Salah');
omarSalah.listSubjects();
omarSalah.PRAssignment('Javascript IV');
omarSalah.sprintChallenge('Javascript IV');


console.log('Student Tests - Javontay McElroy ');
javontayMcElroy.listSubjects();
javontayMcElroy.PRAssignment('Javascript III');
javontayMcElroy.sprintChallenge('Javascript III');



console.log('Student Tests - Justin Davis ');
justinDavis.listSubjects();
justinDavis.PRAssignment('Javascript II');
justinDavis.sprintChallenge('Javascript II');


console.log('Instructor Tests - Josh Knell');
joshKnell.demo('Javascript');
joshKnell.grade(omarSalah, "Javscript IV");
joshKnell.helpStudent(omarSalah);


console.log('Instructor Tests - Ryan Hamblin');
ryanHamblin.demo('Javascript');
ryanHamblin.grade(omarSalah, "Javscript IV");


console.log('Project Manager Tests - Ryan Borgis');
ryanBoris.standUp('#web17_ryan');
ryanBoris.debugsCode(omarSalah, 'Javascript IV');


  