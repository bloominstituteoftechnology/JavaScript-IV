// CODE here for your Lambda Classes


///////////////////////// BASE-CLASS ////////////////////

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props


class Person {
    constructor(baseClass){
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


///////////////////////// INTRUCTOR-CLASS ////////////////////

// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person {
    constructor(instructorChild){
        super(instructorChild);
            this.specialty = instructorChild.specialty;
            this.favLanguage = instructorChild.favLanguage;
            this.catchPhrase = instructorChild.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subjects}`; 
    }
    grade() {
        return `${this.name} recieves a perfect score on ${cynthia.subjects}`;
    }
}


///////////////////////// STUDENT-CLASS ////////////////////

// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}



class Student extends Person {
    constructor(lambdaStudent){
        super(lambdaStudent);
            this.previousBackground= lambdaStudent.previousBackground;
            this.className = lambdaStudent.className;
            this.favSubjects = lambdaStudent.favSubjects;
    }
    listSubjects(){
        return `${this.favoriteSubjects}`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subjects}`
    }

    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subjects}`
    }

}

///////////////////////// PROJECT MANAGER-CLASS ////////////////////

// Project Mananger
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following uniqe props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManangers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}




class ProjectManagers extends Instructor {
    constructor(projectManager){
        super(projectManager);
            this.gradClassName= projectManager.gradClassName;
            this.favInstructor = projectManager.favInstructor;
    }
    standUp(){
        return `${this.name} announces to ${this.channel}, @channel stand Up times!`;
    }
    debudsCode() {
        console.log`${this.name} debugs ${student.name} code on ${this.subject}`;
    }


}


///////////////////////// OBJECTS ////////////////////


const lambda = new Person({
    name: 'LambdaSchool',
    age: 2,
    location: 'California'
  });
  
  const mike = new Instructor({
    specialty: 'Front-end',
    name: 'Mike',
    favLanguage: 'Javascript',
    catchPhrase: 'There are two ways to write error-free programs; only the third one works'
  });
  
  const cynthia = new Student({
    previousBackground: 'newbie',
    className: 'FSW16',
    favSubjects: 'HTML , CSS , JS'
  });


  const ron = new ProjectManagers ({
    gradClassName: 'FSW12',
   favInstructor: 'Mike',
  });



///////////////////////// CONSOLE.LOGS ////////////////////

