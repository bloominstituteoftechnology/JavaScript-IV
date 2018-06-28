// CODE here for your Lambda Classes
class Person {
    constructor(details){
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.gender;
    }

    speak () {
        return(`Hello my name is ${this.name} I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(Idetails) {
        super(Idetails);
        this.specialty = Idetails.specialty;
        this.favLanguage = Idetails.favLanguage;
        this.catchPharae = Idetails.catchPhrase;
    }

    demo (subject) {
        return(`Today we are learning about ${subject}`);
    }

    grade (student, subject) {
        return(`${student} receives a perfect score on ${subject}`);
    }
}

class Student extends Person { 
    constructor(Sdetails) {
        super(Sdetails);
        this.previousBackground = Sdetails.previousBackground;
        this.className = Sdetails.className;
        this.favSubjects = Sdetails.favSubjects;
    }
 
    listSubjects () {
        return(this.favSubjects.forEach())
    }

    PRAssignment (subject) {
        return(`${student.name} has sumbitted a PR for ${subject}.`);

    }
    
    sprintChallenge (subject) {
        return(`${student.name} has begun spring challenge on ${subject}.`);
    }

}


class ProjectManager extends Instructor {
    constructor(Pdetails) {
        super(Pdetails);
        this.gradClassName = Pdetails.gradClassName;
        this.favInstructor = Pdetails.favInstructor;
    
    }

    standUp (channel) {
        return(`${name} announces ${channel}, @channel standby times!`);
    }
    debugsCode (student) {
        return(`${name} debugs ${student.name}'s code on ${subject}.`);
    }
}


const joeBob = new Instructor({
    name: 'JoeBob',
    age: 55,
    location: 'Texas',
    gender: "M",
    specialty: 'Objective C',
    favLanguage: 'Rasberry Pi',
    catchPhrase: 'Right On',


});

const sylvia = new Instructor({
    name: 'Sylvia',
    age: 28,
    location: 'Ukraine',
    gender: "F",
    specialty: 'React Native',
    favLanguage: 'Java Android',
    catchPhrase: 'I am, therefore I am',


});



const dave = new Student({
    name: 'Dave',
    age: 24,
    location: 'Denver',
    gender: "M",
    previousBackground: 'Truck Driver',
    className: 'Android for Beginners',
    favSubjects: 'Python, Java, Ruby'
    
});

const jane = new Student({
    name: 'Jane',
    age: 32,
    location: 'Las Vegas',
    gender: "F",
    previousBackground: "Scuba Diving Instructor",
    className: 'CS11',
    favSubjects: 'HTML, CSS, JScript'
});



const mrrogers = new ProjectManager ({
    name: 'Mr Rogers',
    age: 45,
    location: 'Vermont',
    gender: "M",
    specialty: 'HTML5',
    favLanguage: 'Java',
    catchPhrase: 'Wont you be my neihbor',
    gradClassName: 'CS 13',
    favInstructor: 'Dani'
});

const franciska = new ProjectManager ({
    name: 'Franciska',
    age: 39,
    location: 'Zurich',
    gender: "F",
    specialty: 'C#',
    favLanguage: 'C++',
    catchPhrase: 'The Pow Pow is Awesome',
    gradClassName: 'IOS 1',
    favInstructor: 'Josh Knell'
});


console.log(sylvia.speak());


