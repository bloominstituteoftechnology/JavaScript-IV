// CODE here for your Lambda Classes



// ```js
// function Person(personAttributes)  {
//   this.name = personAttributes.name;
//   this.age = personAttributes.age;
//   this.location = personAttributes.location;
// }

// const fred = new Person({
//   name: 'Fred',
//   age: 37,
//   location: 'Bedrock'
// });
// ```



// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```



// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, 
// I am from Bedrock` where `name` and `location` are the object's own props


class Person{
    constructor(attributes){
        this.name=attributes.name;
        this.age=attributes.age;
        this.location=attributes.location;
        this.gender=attributes.gender;
    }
    speak(){
        return 'Hola, mi nombre es ${this.name},soy de'
    }
} 



// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out
//  the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out
//  '{student.name} receives a perfect score on {subject}'

//Instructors #1

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty=instructorAttr.specialty;
        this.favoriteLanguage=instructorAttr.favoriteLanguage;
        this.catchPhrase=instructorAttr.catchPhrase;
    }
    Demo(subject){
        return 'Today we are going to learn about' `${subject}`;

    }
    SVGLinearGradientElement(student,subject){
        return `${student.name} recieves a perfect score on ${subject}`;

    }
    gradeFun(student){
        if (this.grade >= 15){
            let plusOrMinus= Math.floor(Math.random()*30);
            let newGrade = this.grade- plusOrMinus;
            return newGrade;

        }else{
            
            return this.grade + plusOrMinus;
        }
    }
}

//Instructor 

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty=instructorAttr.specialty;
        this.favoriteLanguage=instructorAttr.favoriteLanguage;
        this.catchPhrase=instructorAttr.catchPhrase;
    }
    Demo(subject){
        return 'Today we are going to learn about' `${subject}`;
    }
    SVGLinearGradientElement(student,subject){
        return `${student.name} recieves a perfect score on ${subject}`;
    }
    gradeFun(student){
        if (this.grade >= 15){
            let plusOrMinus= Math.floor(Math.random()*30);
            let newGrade = this.grade- plusOrMinus;
            return newGrade;
        }else{
            return this.grade + plusOrMinus;
        }
    }
}






 
// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', '
// JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects
//  one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out 
// that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun
//  sprint challenge on {subject}`

//Student 

class Student extends person {
    constructor (option){
        super(option);
        this.previousBackground=option.previousBackground;
        this.className=option.className;
        this.favSubjects=options.favSubjects
    }
    listSubjects(){
        this.favSubjects.forEach(subject =>console.log(subjects));
        PRAssignment(subject)
            return  '${this.name} has submitted a PR for ${subject}';
        
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
            
        };

    



// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to 
// {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out
//  `{name} debugs {student.name}'s code on {subject}`

//PM 

class ProjectManager extends Instructor{
    constructor(pMOptions){
        super(pMOptions);
        this.gradClassName=pMOptions.gradClassName;
        this.favInstructor=pMOptions.favInstructor;
    }
    standUp(channel){
        return `${this.name}debugs ${student.name}'s code on ${subject}`;
    }
}


//Instructors

const Eleanor= new Instructor({
    name: 'Eleanor Rutabaga',
    age: 47,
    location: 'Jersey',
    gender:'F',
    specialty: 'Full Stack',
    favoriteLanguage: 'Javascript',
    catchPhrase: 'Im from Jersey.',
});


const Vader= new Instructor({
    name: 'Darth Vader aka (Anakin Skywalker)',
    age: 46,
    location: 'Tatooine',
    gender:'M',
    specialty: 'Dark Force. Oh, and Font End',
    favoriteLanguage: 'Dutch and German',
    catchPhrase: 'I am alteringt the deal, pray I do not alter it any further...',
});

const Jedi = new Instructor({
    name: 'Yoda',
    age: 900,
    location: 'Dagobah',
    gender:'M',
    specialty: 'The Force',
    favoriteLanguage: 'OSV It is',
    catchPhrase: 'Do or do not, there is no try.',
});


//PM
const Griffin = new ProjectManager({
    name: 'Peter Lowenbrau Griffin Sr. aka (Justin Peter Griffin)',
    age: 44,
    location: 'Quahog',
    gender:'M',
    className: 'fsw40',
    favInstructor: 'Eleanor Rutabaga',
});

const Griffin = new ProjectManager({
    name: 'Stewart Gilligan Griffin',
    age: 1,
    location: 'Quahog',
    gender:'M',
    className: 'CS14',
    favInstructor: 'Darth Vader',
});

//Students

const GumBall = new Student({
    name: 'GumBall Watterson',
    age: 12,
    location: 'Elmore',
    gender:'M',
    previousBackground: 'Background?',
    className: 'Fsw 12',
    favSubjects: ['HTML'],
});


const Darwin = new Student({
    name: 'Darwin Watterson',
    age: 10,
    location: 'Elmore',
    gender:'M',
    previousBackground: 'Self taught',
    favoriteLanguage: 'JavaScript',
   favSubjects: ['JavaScript'],
});



const Anais= new Student({
    name: 'Anais Watterson',
    age: 12,
    location: 'Elmore',
    gender:'F',
    previousBackground:'YouTube',
    className: 'cs 12',
    favSubjects: ['Python']
});