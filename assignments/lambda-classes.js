// CODE here for your Lambda Classes
class Person{
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student,subject){
        return `${student.name} recieves a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listSubjects(){
        //methods logs out all a method that logs out all of the student's favoriteSubjects one by one.
        //     this.favSubjects.forEach(function(subj) {
        //     console.log(subj)
        // })
        let subj = this.favSubjects;
        for(let i = 0; i < subj.length;)
        }

    PRAssignment(subject){
        // a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        //similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManagers extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
      //a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​  
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    debugsCode(student, subject){
        //a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const humberto = new Student ({
    name: 'Humberto',
    age: '26',
    location:'Illinois',
    gender: 'M',
    previousBackground:'None',
    className:'CSPT2',
    favSubjects:['HTML', 'CSS', 'Javascript', 'Java'],
})

const dan = new Instructor({
    name: 'Dan',
    age:'N/A',
    location:'Minnisota',
    gender:'M',
    specialty:'Everything',
    favLanguage:'Javascript',
    catchPhrase:'Don\'t forget to study!',
})

const clara = new ProjectManagers({
    name:'Clara',
    age:'N/A',
    location:'N/A',
    gender:'F',
    specialty:'Mentoring',
    favLanguage: 'N/A',
    catchPhrase:'You can do it guys!',
    gradClassName: 'CS(?)',
    favInstructor:'Dan',
})

console.log(humberto);
console.log(dan);
console.log(clara);
console.log(dan.demo('Prototypes and Class constructors'));
console.log(dan.grade(humberto,'Javascript Fundamentals'));
console.log(humberto.listSubjects())