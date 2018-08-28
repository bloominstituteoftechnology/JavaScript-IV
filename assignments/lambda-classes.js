// CODE here for your Lambda Classes
class Person{
    constructor(name, age, location, gender){
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(specialty, favLanguage, catchPhrase){
        super(specialty, favLanguage, catchPhrase);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject){
        return `${Student.name} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(previousBackground, className, favSubjects){
        super(previousBackground, className, favSubjects);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(function(item){
            console.log(item);
        });
    }
    PRAssignment(subject){
        return `${Student.name} has submitted a PR for ${subject}`;
        
    }
}

class ProjectManager extends Instructor{
    constructor(gradClassName, favInstructor){
        super(gradClassName, favInstructor);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student){
        `${this.name} debugs ${student.name}'s code on ${student.favSubjects[0]}`;
    }
}
//test objects bellow

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const janie = new Instructor({
    name: 'Janie',
    location: 'Chicago',
    age: 22,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Wasssssuuuuup`
  });

  const diego = new Student({
    name: 'Diego',
    location: 'Chicago',
    age: 19,
    gender: 'male',
    previousBackground:'student',
    className:'CSPT1',
    favSubjects: ['C++', 'Python', 'Node'],
  });
  const denise = new Student({
    name: 'Denise',
    location: 'Here',
    age: 24,
    gender: 'female',
    previousBackground:'SECA',
    className:'CSPT2',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });
  const lisa = new ProjectManager({
    name: 'Lisa',
    location: 'San Diego',
    age: 29,
    gender: 'female',
    favLanguage: 'C',
    specialty: 'Front-end',
    catchPhrase: `Yasssss`,
    gradClassName:'CS1',
    favInstructor:'Fred',

  });
  const marcus = new ProjectManager({
    name: 'Marcus',
    location: 'Berlin',
    age: 155,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Pancakes',
    catchPhrase: `Pancakes are best`,
    gradClassName:'CS6',
    favInstructor: 'Janie',
  });

  console.log(fred.grade(denise.name, "JSIII"));
  console.log(janie.demo('css'));
  //console.log(diego.listsSubjects())
  console.log(denise.PRAssignment("JS1"));