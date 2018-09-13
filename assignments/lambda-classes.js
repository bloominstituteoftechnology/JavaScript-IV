// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name=attributes.name;
        this.age=attributes.age;
        this.location = attributes.location;
        this.gender=attributes.gender;
    }

    speak(){
      console.log(`Hello my name is ${this.name}, and i am from ${this.location}`);
    }


}
class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage= attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        student.grade = (student.grade + (Math.floor(Math.random() * 100) + -50));
        console.log(`${this.name} is grading ${student.name}\'s work and the grade is now.. ${student.grade}`)
        ///console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}
class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(callback){
        if(this.grade > 70){
          console.log('GRADUATION DAY!', frank.grade)
        } else 
        {
          callback(this);
        }
    }
}
class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standup time!`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}\'s code on ${subject}`);
    }
}





let bill = new ProjectManager({
        gradClassName:'FSW-10',
        favInstructor:'Josh Knell',
        name: 'William DiFulvio',
        age:30,
        location: 'Florida',
        gender:'male',  
        specialty:'JavaScript',
        favLanguage: 'HTML',
        catchPhrase: 'Get Your retrospectives in!'      
    }
)
let frank = new Student({
        previousBackground: 'developing for days..',
        className: 'FSW-14',
        favSubjects: ['JavaScript','HTML','CSS'],
        name: 'Frank Benevento',
        age:41,
        location: 'California',
        gender:'male',
        grade: 70
})
let josh = new Instructor({
  specialty: 'Teaching Programming',
  favLanguage: 'JavaScript',
  catchPhrase : 'What up!',
  name:'Josh Knell',
  age:'35',
  location: 'Utah',
  gender:'male',        
})



bill.standUp('FSW-14_Bill');
bill.debugsCode(frank,'JavaScript');


// frank.listsSubjects();
// frank.PRAssignment('JavaScript IV')
// frank.sprintChallenge('JavaScript')
// frank.speak();

//bill.grade(frank,'Javascript')


// josh.demo('JavaScript IV');
 josh.grade(frank,'JavaScript');
 frank.graduate(gradePapers)
 


function gradePapers(obj){
 while(obj.grade < 70)
 {
   bill.grade(obj,'JavaScript');
 }
 console.log('GRADUATION DAY!', frank.grade)
}