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
        return `Today we are learning about ${subject}`;
    }
    
    grade(student, subject){
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}


    class ProjectManager extends Instructor {
        constructor(PMFeatures){
            super(PMFeatures);
            this.gradClassName = PMFeatures.gradClassName;
            this.favInstructor = PMFeatures.favInstructor;
        }
        standUp(channel){
            return `${this.name} announces to ${channel.name}, @channel standy times!​`
        }
        debugsCode(student){
            return `${this.name} debugs ${student.name}'s code on ${subject}` 
        }
    }


class Student extends Person {
    constructor(studentFeatures){
        super(studentFeatures);
        this.previousBackground = studentFeatures.previousBackground;
        this.className = studentFeatures.className;
        this.favSubjects = studentFeatures.favSubjects;
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
} 


// Instructor Objects 
// 1)
const josh = new Instructor({
    name: 'Josh Knell',
    location: 'somewhere in Utah',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Web-Design and Front-End',
    catchPhrase: `Don't forget the homies`
  });


// 2)
  const ryan = new Instructor({
    name: 'Ryan Hamblin',
    location: 'somewhere in California',
    age: 32,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

// 3)
const lebron = new Instructor({
    name: 'Lebron James',
    location: 'somewhere in Ohio',
    age: 33,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Everything?',
    catchPhrase: `Just a kid from Akron.`
  });
// end Instructor Objects 



// Project Manager Objects 
// 1)
const haywood = new ProjectManager({
    name: 'Haywood Johnson',
    location: 'somewhere in Texas',
    age: 26,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Regex Gawd',
    catchPhrase: `Probably involves parrots somehow.`
        // debugsCode: alex, 
  });

// 2)
const ben = new ProjectManager({
    name: 'Ben',
    location: 'somewhere in Virginia',
    age: 28,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'functions',
    catchPhrase: `Have you tried it on the Python Tutor?`
        // debugsCode: alex, 
  });


// 3)
const Calum = new ProjectManager({
    name: 'Haywood Johnson',
    location: 'somewhere in Texas',
    age: 26,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Debugging',
    catchPhrase: `You already know what it is.`
    // debugsCode: alex, 
  });


// end Project Manager Objects 


/// Student Objects 
// 1)
const alex = new Student({
    name: 'Alex Ager',
    location: 'somewhere in Colorado',
    age: 24,
    gender: 'male',
    previousBackground: 'Journalism',
    favSubjects: ['JS', 'CSS', 'HTML']
  });

// 2)
const kam = new Student({
    name: 'Kamry Bowman',
    location: 'somewhere in Denver',
    age: 27,
    gender: 'male',
    previousBackground: 'Economics',
    favSubjects: ['Programming', 'Philosophy', 'Computer Science'],
  });

// 3)
const mark = new Student({
    name: 'Mark Hong',
    location: 'somewhere in Iowa',
    age: 24,
    gender: 'male',
    previousBackground: 'Art',
    favSubjects: ['CSS', 'HTML', 'design'],
  });
// end Student Objects

