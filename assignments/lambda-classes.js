class Person {
    constructor(personFeatures){
    this.name = personFeatures.name;
    this.age = personFeatures.age;
    this.location = personFeatures.location;
    this.gender = personFeatures.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends Person {
    constructor(instructorFeatures){
        super(instructorFeatures);
        this.specialty = instructorFeatures.specialty;
        this.favLanguage = instructorFeatures.favLanguage;
        this.catchPhrase = instructorFeatures.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${this.subject}`;
    }
    
    grade(student, subject){
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}


//STUDENTS
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`


class Student extends Person {
    constructor(studentFeatures){
        super(studentFeatures);
        this.previousBackground = studentFeatures.previousBackground;
        this.className = studentFeatures.className;
        this.favSubjects = studentFeatures.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
} 




