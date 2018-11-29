// Base Class
class Person{
    constructor (attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }

}  
// Instructor - Extension of Person
class Instructor extends Person{
    constructor (attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
    grade(student, min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(student);
        console.log(randomNum);
        console.log(student.grade)
        student.grade = student.grade - randomNum
        if(student.grade <= 0){
            return `${student.name} has 0 points. :(`
        }else if(student.grade >= 100){
            return `${student.name} has 100 points!`
        }
        return `${student.name}'s grade is, ${student.grade}`;
    }
}  
// Student - Extension of Person
class Students extends Person{
    constructor (attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on  ${subject}`)
    }
    graduate(){
        if(this.grade <= 0){
            return `${this.name} has 0 points. :(`
        }else if(this.grade >= 70){
            return `${this.name} is graduating!`
        }else if(this.grade < 70 && this.grade >= 1){
            return `${this.name} needs to go study.`
        }
        return `${this.name}'s grade is, ${student.grade}`;

    }
}  
// Project Manager - Extension of Instructors
class ProjectManagers extends Instructor{
    constructor (attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}  


// New Objects

// Person
const frank = new Person({
    name: 'Frank',
    location: 'New York',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

// Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Florida',
    age: 56,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `20min rule!`
  });

  // Student
  const mark = new Students({
    name: 'Mark',
    location: 'Sacramento',
    age: 33,
    gender: 'male',
    favLanguage: 'CSS/LESS',
    specialty: 'Front-end',
    catchPhrase: `#Slack4Life`,
    favSubjects: ['Math', 'English', 'Science'],
    previousBackground: `Uber driver`,
    className: `CS16`,
    grade: 50
  });

  // Projet Manager
  const lisa = new ProjectManagers({
    name: 'Lisa',
    location: 'Portland',
    age: 45,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `Don't drink and code`,
    favInstructor: 'Sean',
    gradClassName: 'CS20'
  });

// Console Logs

// Person
console.log(`=========== Person ===========`)

    console.log(frank);
    console.log(frank.speak());

// Instructor
console.log(`=========== Instructor ===========`)

    console.log(fred);
    console.log(fred.speak());
    console.log(fred.demo('music'));


// Student
console.log(`=========== Student ===========`)

    console.log(mark);
    console.log(mark.speak());
    mark.listsSubjects();
    mark.PRAssignment('English');
    mark.sprintChallenge('Science');
    console.log(mark.grade); //Instructor random addition or subtraction to grade

// Project Manager  
console.log(`=========== Project Manager ===========`)
    console.log(lisa);
    console.log(lisa.speak());
    lisa.standup('fsw16');
    lisa.debugsCode(mark, 'Math');


console.log(`=========== Stretch ===========`)
// Instructor
console.log(`=========== Instructor ===========`)
console.log(fred.grade(mark, 200, -100));
console.log(mark.graduate());
