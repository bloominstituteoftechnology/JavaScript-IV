// CODE here for your Lambda Classes

//Base-Class
class Person{
    constructor(properties){
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
        this.gender = properties.gender;
    };
    speak(){
        return`Hello my name is ${this.name}. I am from ${this.location}`;
    };
};

//class-code for Instructor
class Instructor extends Person{
    constructor(InstructorProps){
        super(InstructorProps);
        this.specialty = InstructorProps.specialty;
        this.favLanguage = InstructorProps.favLanguage;
        this.catchPhrase = InstructorProps.catchPhrase;
    }
    demo(subject){
        return `Today we are learning ${subject}`
    };
    grade(student, grade){
        return `${student.name} receives perfect score on ${grade}`;
    };
};

//class-code for Student
class Student extends Person{
    constructor(StudnetProps){
        super(StudnetProps);
        this.prevBackground = StudnetProps.prevBackground;
        this.className = StudnetProps.className;
        this.favSubjects = StudnetProps.favSubjects;
    };
    listSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++ )
        console.log(this.favSubjects[i]);
    };
    PRAssignment(){

    };
    sprintChalleng(){
        
    };
};

class PM extends Instructor{
    constructor(PMProperties){
        super(PMProperties);
        this.gradClassName = PMProperties.gradClassName;
        this.favInstructor = PMProperties.favInstructor;
    };
    standuUp(){
        return ``
    };
    debugsCode(){

    }  
};

//Object for Instructor
const Josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 21,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Go Jazz`
  });


//Object for new PM 
const Jeff = new PM({
    name: 'Jeff',
    location: 'Oregon',
    age: 21,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Hip Hip array!`,
    gradClassName: 'CS5',
    favInstructor: 'Josh'
  });

//Object for Student
  const Brandon = new Student({
    name:'Brandon', 
    location: 'Ohio',
    age: 27,
    gender: 'male',
    prevBackground: 'Sales',
    className: 'CS10',
    favSubjects: ['CSS', 'JavaScript', 'HTML']
  });

  const Alex = new Student({
    name:'Alex', 
    location: 'Somewhere',
    age: 21,
    gender: 'male',
    prevBackground: 'IDK',
    className: 'CS10',
    favSubjects: ['CSS', 'JavaScript', 'HTML']
  });

  const Andrew = new Student({
    name:'Andrew', 
    location: 'Somewhere',
    age: 21,
    gender: 'male',
    prevBackground: 'IDK',
    className: 'CS10',
    favSubjects: ['CSS', 'JavaScript', 'HTML']
  });

  Brandon.listSubjects();
  console.log(Brandon);
  console.log(Josh);
  console.log(Jeff);
  console.log(Josh.demo('JS'));
  console.log(Jeff.grade(Andrew, 'Everything'))
console.log(Brandon.speak())