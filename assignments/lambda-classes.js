 // CODE here for your Lambda Classes

 class Person{
     constructor(props){
         this.name = props.name;
         this.age = props.age;
         this.location = props.location
     }
     speak(){
         return `Hello my name is ${this.name}, I am from ${this.location}.`
     }
 }

 class Instructor extends Person{
     constructor(iAttrs){
         super(iAttrs);
         this.specialty = iAttrs.specialty;
         this.favLanguage = iAttrs.favLanguage;
         this.catchPhrase = iAttrs.favLanguage;
     }
     demo(subject){
         return `Today we are learning about {subject}.`
     }
     grade (Student,subject){
         return `${Student.name} receives a perfect score on ${subject}.`
     }
 }

 class Student extends Person{
     constructor(sAttrs){
         super(sAttrs);
         this.perviousBackGround = sAttrs.perviousBackGround; 
         this.className = sAttrs.className;
         this.favSubjects = sAttrs.favSubjects;
         this.grade = (Math.random() * (100-40) + 40).toFixed(2);
     }

     listsSubjects(){
         return `${this.favSubjects}`;
     }
     PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
     }
     sprintChallenge(subject){
         return `${this.name} has begun sprint challenge on ${subject}`;
     }
     graduate () {
        if (this.grade > 70) {
            return `${this.name} has graduated Lambda School!`;
        } else {
            return `${this.name} did not graduate Lambda School. You can do it. We will help you achieve your goal, and graduate Lambda`;
        }
    }
 }

class PM extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassname =  pmAttrs.gradClassname;
        this.favInstructor = pmAttrs.favInstructor;
        this.channel = pmAttrs.channel;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @Channel standy time.`
    }
    debugsCode(Student,subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}



// Objects and console logs from here down. 


const harry = new Person ({
    name: "Harry",
    age: 29,
    location: "Hogwarts",
    gender: "Male"
});

const ron = new Person({
    name: "Ron",
    age: 29,
    location: "Hogwarts",
    gender: "Male"
});

const josh = new Instructor({
    name: "Josh",
    age: 29,
    location: "Provo",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Big Boss"
});

const josh2 = new Instructor({
    name: "Josh 2.0",
    age: 29,
    location: "Provo",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Isn't that so cool?"
});

const christian = new Student({
    name: "Christian",
    age: 24,
    location: "Mapleton",
    gender: "Male",
    previousBackground: "Schooling in China",
    className: "FSW 16",
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const austin = new Student({
    name: "Austin",
    age: 27,
    location: "Tokyo",
    gender: "Male",
    previousBackground: "Actuary",
    className: "FSW 20",
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const jordan = new PM({
    name: "Jordan",
    age: 24,
    location: "USA",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Y'all are doing great",
    gradClassName: "FSW 13",
    favInstructor: "Josh Knell",
});

const michael = new PM({
    name: "Michael",
    age: 27,
    location: "USA",
    gender: "Male",
    specialty: "Being a boss",
    favLanguage: "English",
    catchPhrase: "Good work",
    gradClassName: "FSW 11",
    favInstructor: "Josh Knell",
});


// PERSON CLASS EXAMPLES
console.log(harry.speak());
console.log(ron.speak());

// INSTRUCTOR CLASS EXAMPLES
console.log(josh.demo('Javascript'));
console.log(josh.grade(christian, 'Redux'));
console.log(josh.catchPhrase);

// STUDENT CLASS EXAMPLES
console.log(christian);
console.log(austin);
console.log(christian.listsSubjects());
console.log(austin.PRAssignment('React'));
console.log(christian.sprintChallenge('Python'));


// PR CLASS EXAMPLES
console.log(jordan.standUp('FSW 16 Jordan'));
console.log(michael.debugsCode(austin, 'Javascript'));
console.log(christian.graduate());
console.log(austin.graduate());