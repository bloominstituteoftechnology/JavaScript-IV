// CODE here for your Lambda Classes
class Person {
    constructor({name, age, location}) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.speak = function(){
        console.log(`hello my name ${this.name} and im from ${this.location}.`);
    }
    }
    }  

  const Fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });

Fred.speak();

class instructor extends Person{
    constructor({name, age, location, specialty, catchphrase, favelanguage}){
   super({name, age, location})
   this.specialty;
   this.catchphrase;
   this.favelanguage;
   this.demo = function(subject){
       console.log(`Today we are learning about ${subject}.`)
   }
   this.grade = function(student, subject){
       console.log(`${student.name} recieved a perfect score on ${subject}`)
   }
}
}


const Barney = new instructor({
    name: 'Barney',
    age: 35,
    location:'Bedrock',
    specialty:'rocksmasher',
    catchphrase:'heyyyy',
    favelanguage:'caveman',
})   
Barney.demo('Rocks')
Barney.grade(Fred, 'Rocks Test' );


class ProjectManagers extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel, meetTime){
        return `Attention members of ${channel}! Stand up at ${meetTime}.`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}
const frank = new ProjectManagers({
        name: "Frank",
        location: "Texas",
        age: 36,
        gradClassName: "CS2",
        favInstructor: "Linda",
        channel: "@frank",
        meetTime: "2:00PM"
    });
    
    const flynn = new ProjectManagers({
        name: "Flynn",
        location: "New York",
        age: 31,
        gradClassName: "CS2",
        favInstructor: "Mary" ,
        channel: "@flynn",
        meetTime: "3:00PM"   
    });
    
    console.log(frank.standUp("@frankschannel","2:00PM"));

    console.log(flynn.debugsCode("Ramon","C++"));
