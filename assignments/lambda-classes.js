// CODE here for your Lambda Classes
//parent
class Person{
    constructor(pAttr){
        this.name = pAttr.name;
        this.age = pAttr.age;
        this.location = pAttr.location;
        this.gender = pAttr.gender;
    }

    speak(){
        return `Hello my name is ${this.name},I am from ${this.location}`;
    }
}

//child
class Instructors extends Person{
    constructor(iAttr){
        super(iAttr);
        this.speciality = iAttr.speciality;
        this.favLanguage = iAttr.favLanguage;
        this.catchPhrase = iAttr.catchPhrase;
    }

    demo(subject){
        return `Today we are learning ${subject}`;
    }

    grade(stuobj,stugrade,subject){
        return `${stuobj}s grade is ${stugrade} on ${subject}`;
    }

    currGrade(stuobj,stugrade,subject){
      let operators = ['+','-']
      let sign = operators[Math.floor(Math.random()*2)];
      let no = Math.floor(Math.random() * (100-stugrade)) + 1
      let result = eval(stugrade + sign+ no);
      return `${stuobj}'s grade is ${result} on ${subject}`
    }
}

//child
class Student extends Person{
    constructor(sAttr){
        super(sAttr);
        this.previousBackground = sAttr.previousBackground;
        this.className = sAttr.className;
        this.favSubjects = sAttr.favSubjects;
    
    }

    listsSubjects(){
        return `${this.favSubjects}`
    
    }

    prAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }

    graduate(){
        if(this.grades > 70){
          return `you are ready to graduate`
        }
        else{
          return `grading your assignment`
        }
      }
}

//grandchild
class ProjectManager extends Instructors{
    constructor(prAttr){
        super(prAttr);
        this.gradClassName = prAttr.gradClassName;
        this.favInstructor = prAttr.favInstructor;
   
    }

    standUp(channel){
        return `${this.name} announces to ${channel} , @${channel} standy times!`
    
    }

    debugsCode(studentObj,subject){
        return `${this.name} debugs ${studentObj}'s code on ${subject}`
    }

    
}

const person1 = new Person({
    name:'Paul',
    age:30,
    location:'San Francisco',
    gender:'Male'
});

const person2 = new Person({
    name:'Fred',
    age:22,
    location:'Salt Lake',
    gender:'Male'
});

const person3 = new Person({
    name:'Jen',
    age:24,
    location:'New York',
    gender:'Female'
});

const instructor1 = new Instructors({
    name:'Josh',
    age:35,
    location:'Middleton',
    gender:'Male',
    speciality:'Javascript',
    favLanguage:'Python',
    catchPhrase:'Guess What'
});

const instructor2 = new Instructors({
    name:'Dan',
    age:40,
    location:'Lake Powell',
    gender:'Male',
    speciality:'React',
    favLanguage:'HTML',
    catchPhrase:'shoot'
});

const instructor3 = new Instructors({
    name:'Ryan',
    age:32,
    location:'Los Gatos',
    gender:'Male',
    speciality:'Redux',
    favLanguage:'CSS',
    catchPhrase:'dang it'
});

const student1 = new Student({
    name:'Amanda',
    age:23,
    location:'Alabama',
    gender:'Female',
    previousBackground:'History',
    className:'Java',
    favSubjects:['Html', 'CSS', 'JavaScript'],
    grades:69
});

const student2 = new Student({
    name:'Triston',
    age:25,
    location:'Alaska',
    gender:'Male',
    previousBackground:'Literature',
    className:'C++',
    favSubjects:['c#', 'Algorithms', 'Data Structures'],
    grades:80
});

const student3 = new Student({
    name:'Courtney',
    age:27,
    location:'Cali',
    gender:'Female',
    previousBackground:'Accouting',
    className:'Perl',
    favSubjects:['Android', 'Kit Kat', 'IOS'],
    grades:90
});

const projectManager1 = new ProjectManager({
    name:'Steven',
    age:31,
    location:'Arizona',
    gender:'Male',
    gradClassName:'Web19',
    favInstructor:'Brady'
});

const projectManager2 = new ProjectManager({
    name:'Giovanni',
    age:29,
    location:'Mountain View',
    gender:'Female',
    gradClassName:'CS1',
    favInstructor:'Luis'
});

const projectManager3 = new ProjectManager({
    name:'Steph',
    age:33,
    location:'Fremont',
    gender:'Female',
    gradClassName:'Dev2',
    favInstructor:'Levy'
});

console.log(person3.speak());
console.log(instructor3.demo('galantine'))
console.log(instructor3.grade(student3.name,'turing'))

console.log(student3.listsSubjects());
console.log(student3.prAssignment('Lisp'));
console.log(student1.sprintChallenge('Lisp'));
console.log(projectManager1.standUp('sprint03'));
console.log(projectManager3.debugsCode(student3.name,'closures'));
console.log(instructor3.currGrade(student3.name,student3.grades,'bash'))
console.log(student3.graduate())