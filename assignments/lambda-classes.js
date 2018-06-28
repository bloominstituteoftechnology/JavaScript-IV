// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender= attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(teacher){
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    gradePlusMinus(student){
      if(student.grade <70){
        return student.grade += (Math.floor(Math.random()*10));
      }
      else{
        return student.grade -= (Math.floor(Math.random()*10));
      }
    }
}

class Student extends Person{
    constructor(learn){
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
        this.grade = learn.grade;
    }
    listSubjects(...favSubject){
        return `${this.name}'s favorite subjects are ${this.favSubjects}.`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
    graduate(){
        if(this.grade >= 70){
            return `Congratulations!`
        }
        else{
            return `Need to study more!`
        }
    }
}

class ProjectManager extends Instructor{
    constructor(lead){
        super(lead);
        this.gradClassName = lead.gradClassName;
        this.favInstructor = lead.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announce to ${slackChannel}, @channel standy times!`
    }
    debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const Josh = new Instructor({
    name: 'Josh',
    age: 35,
    location: 'Bedrock',
    gender: 'M',
    specialty: 'EVERYTHING',
    favLanguage: 'JS',
    catchPhrase: 'ESPN'
})


const Patrick = new Instructor({
    name: 'Patrick',
    age: 40,
    location: 'New Hampshire',
    gender: 'M',
    specialty: 'Not Everything',
    favLanguage: 'Python',
    catchPhrase: 'hehllloooo'
})

const Dixie = new ProjectManager({
    name: 'Dixie',
    age: 24,
    location: 'East Coast',
    gender: 'F',
    specialty: 'Front-end',
    favLanguage: 'HTML CSS',
    catchPhrase: 'hi everyone',
    gradClassName: 'CS5',
    favInstructor: 'Sean'
})

const Terrie = new ProjectManager({
    name: 'Terrie',
    age: 26,
    location: 'West Coast',
    gender: 'F',
    specialty: 'Back-end',
    favLanguage: 'C++',
    catchPhrase: 'AngryPanda',
    gradClassName: 'CS4',
    favInstructor: 'Knell'
})

const Holly = new Student({
    name: 'Holly',
    age: 22,
    location: 'Alabama',
    gender: 'F',
    previousBackground: 'Secretary',
    className: 'CS12',
    favSubjects: ['ReactJS', 'JS', 'CSS'],
    grade: 94
})

const Nico = new Student({
    name: 'Nico',
    age: 28,
    location: 'Washington',
    gender: 'M',
    previousBackground: 'Surgery Tech',
    className: 'CS12',
    favSubjects: ['Python', 'C++', 'Django'],
    grade: 69
})

console.log(Josh.demo('JavaScript'));
console.log(Josh.gradePlusMinus(Nico));
console.log(Nico.graduate());
console.log(Patrick.grade(Nico,'HTML'));
console.log(Dixie.standUp('CS12_Dixie'));
console.log(Terrie.debugsCode(Holly, 'ReactJS'));
console.log(Nico.listSubjects());
console.log(Holly.PRAssignment('CSS'));