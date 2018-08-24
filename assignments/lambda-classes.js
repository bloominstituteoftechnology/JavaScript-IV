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
        return `${Student} recieves a perfect score on ${subject}`;
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
        //logs out all students fav subjects one by one
    }
    PRAssignment(subject){
        
    }
}