// CODE here for your Lambda Classes
//Construct the base class for the roster
class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak(){
        return `Hello, my names is ${this.name}, I am from ${this.location}`;
    }
};

class Instructor extends Person{
    constructor(instructorOptions){
    super(instructorOptions);
    this.specialty = instructorOptions.speciality;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    } 
    grade(student,subject){
        return `${student} receives a perfect score on ${subject}`;
    }   
};


class Student extends Person{
    constructor(studentOptions){
        super(studentOptions);
            this.previousBackground = studentOptions.previousBackground;
            this.className = studentOptions.className;
            this.favSubjects = studentOptions.favSubjects;
        }
        listSubjects(){
            for  (let i=0; i<this.favSubjects.length;i++){
                console.log(this.favSubjects[i])
            }
        }; 
        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`;
        }
        sprintChallenge(subject){
            return `${this.name} has begun the sprint challenge on ${subject}`;
        }
    }


class ProjectManager extends Instructor{
    constructor(pmOptions){
        super(pmOptions);
        this.gradClassName=pmOptions.gradClassName;
        this.favInstructor=pmOptions.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to @${channel} standup times`;
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

console.log(fred.name);
console.log(fred.demo('Physics'));
console.log(fred.grade('Fred','Physics'));

const simon = new Student({
    name: 'Simon',
    age: 87,
    location: 'Northampton',
    gender: 'M',
    previousBackground: 'R',
    className: 'CS12',
    favSubjects: ['Philosophy', 'Anthropology', 'Sports']    
})

console.log(simon.age)
console.log(simon.listSubjects)

const friend = new ProjectManager({
    name: 'Friend',
    location: 'Bedrock',
    age: 33,
    gender: 'M',
    favLanguage: 'JavaScript',
    speciality: 'Back-end',
    catchPhrase: `You're mom goes to college`,
    gradClassName: 'CS3',
    favInstructor: 'Socrates',
})
