// CODE here for your Lambda Classes
class People{
    constructor(basicInfo){
        this.name = basicInfo.name;
        this.age = basicInfo.age;
        this.location = basicInfo.location;
    }
    
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends People{
    constructor(instructorInfo){
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    
}

class Student extends People{
    constructor(studentInfo){
      super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            return subject;
        });
    }
    
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    
    sprintChallenge(subject){
        return`${name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmInfo){
      super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
        
    }
    
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    
    debugsCode(student, subject) {
        return`${this.name} debugs ${student.name}'s code on ${subject}`;
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


const jake = new Student({
  name: 'Jake',
  location: 'Dallas',
  age: 26,
  previousBackground: 'a lot',
  className: 'Web',
  favSubjects: ['Math', 'Science', 'History']
})

console.log(fred.speak());
console.log(fred.grade(jake, 'Science'));