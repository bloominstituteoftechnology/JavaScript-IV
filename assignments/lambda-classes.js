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
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}
class Student extends Person {
    constructor(attributes,cb){
        super(attributes,cb);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
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
        gender:'male'  
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

frank.listsSubjects();
frank.PRAssignment('JavaScript IV')
frank.sprintChallenge('JavaScript')
frank.speak();

josh.demo('JavaScript IV');
josh.grade(frank,'JavaScript');
