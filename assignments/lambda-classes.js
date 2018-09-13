//Corey Gumbs 
//Sept 13, 2018

// CODE here for your Lambda Classes

//Class Person - Base Class
class Person{
    //constructor
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.gender = personAttributes.gender;
        this.location = personAttributes.location;
    }
    //method
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}
//End - Class Person

//Class Instructor
class Instructor extends Person{
    //constructor
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty =  instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        //come back and make sure correct
        console.log(`${student.name} receives a perfect score on ${subject}`);
        return `${student.name} receives a perfect score on ${subject}`;
    }

    //stretch
    gradeStudent(student){
        let points = Math.floor(Math.random() * (10-5)) + 5;
        let addPoints = (points + student.grade);
        console.log(points) ;

        if(Math.random() < 0.5){
            console.log(addPoints);
            return (addPoints);
        }else{
            console.log((student.grade - points));
            return (student.grade - points);
        }
    }
}
// End - Class Instructor

//Class Student
class Student extends Person{
    //constructor
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    //methods
    listsSubjects(){
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
            return this.favSubjects[i];
        }
    }

    PRAassignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    //stretch
    graduate(grade){
        if(grade < 70){
            console.log(`Sorry, ${this.name}. You did not graduate. Your grade was ${grade}%`);
            return `Sorry, ${this.name}. You did not graduate. Your grade was ${grade}%`
        }else{
            console.log(`Congrats!!! ${this.name}, you graduated from Lambda with a grade of ${grade}%`);
            return `Congrats!!! ${this.name}, you graduated from Lambda with a grade of ${grade}%`
        }
    }
}// End - Class Student


//Class PM
class ProjectManager extends Instructor{
    //constructor
    constructor(projectMgrAttributes){
        super(projectMgrAttributes);
        this.gradClassName = projectMgrAttributes.gradClassName;
        this.favInstructor = projectMgrAttributes.favInstructor;
    }

    //methods
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



///TEST CASES

//Class Person
const basePerson = new Person({
    "name" : "John",
    "age" : 23,
    "gender" : "male",
    "location" : "New York City"
}); 

console.log(basePerson.name);
console.log(basePerson.age);
console.log(basePerson.gender);
console.log(basePerson.location);
console.log(basePerson.speak());


//Class Student
const studentPerson =  new Student({
    "name" : "Janice",
    "age" : 21,
    "gender" : "female",
    "location" : "Seattle",
    "previousBackground" : "",
    "className" : "FSW14",
    "favSubjects" : ["History", "Science", "Math"],
    //stretch
    "grade" : (Math.floor(Math.random() * (100 - 50 + 1)) + 50)
});

console.log(studentPerson.name);
console.log(studentPerson.age);
console.log(studentPerson.gender);
console.log(studentPerson.location);
console.log(studentPerson.grade);
console.log(studentPerson.listsSubjects());
console.log(studentPerson.PRAassignment("classes"));
console.log(studentPerson.sprintChallenge("classes"));

//Class Instructor
const instructPerson = new Instructor({
    "name" : "Margaret",
    "age" : 35,
    "gender" : "female",
    "location" : "Orlando",
    "specialty" : "Web Development",
    "favLanguage" : "JavaScript,Python, CSS, HTML",
    "catchPhrase" : "Wait'll they get a load of me."
}); 

console.log(instructPerson.name);
console.log(instructPerson.age);
console.log(instructPerson.gender);
console.log(instructPerson.location);
console.log(instructPerson.specialty);
console.log(instructPerson.favLanguage);
console.log(instructPerson.catchPhrase);
console.log(instructPerson.speak());
console.log(instructPerson.demo(studentPerson.favSubjects[0]));
console.log(instructPerson.grade(studentPerson, studentPerson.favSubjects[0]));
console.log(instructPerson.gradeStudent(studentPerson));

//Class ProjectManager
const pmPerson = new ProjectManager({
    "name" : "Mike",
    "age" : 45,
    "gender" : "male",
    "location" : "Mexico City",
    "gradClassName" : "FSW14",
    "favInstructor" : instructPerson.name
});

console.log(pmPerson.name);
console.log(pmPerson.age);
console.log(pmPerson.gender);
console.log(pmPerson.location);
console.log(pmPerson.gradClassName);
console.log(pmPerson.favInstructor);
console.log(pmPerson.standUp('fsw14'));
console.log(pmPerson.debugsCode(studentPerson, studentPerson.favSubjects[2]))
console.log(pmPerson.gradeStudent(studentPerson));

//graduation or no?!
//using Project Manager Grading
console.log(studentPerson.graduate(pmPerson.gradeStudent(studentPerson)));

//using instructor grading
console.log(studentPerson.graduate(instructPerson.gradeStudent(studentPerson)));