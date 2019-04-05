// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.gender= attr.gender ;
        this.location = attr.location;
    }
    speak(){
        console.log (`Hello, my name is ${this.name}`);
    }
 }

 class Student extends Person {
     constructor(sattr){
         super(sattr);
        this. previousBackground = sattr.previousBackground;
        this.className = sattr.className;
        this.grade = sattr.grade;

     }
     PRAassignmet(subject){
        console.log (`${this.name} has submitted a PR for ${subject}`)

     }
     sprintChallenge(subject){
         console.log(`${this.name} has started the sprint challenge for ${subject}`)
     }
      
      
     }
    
  

 class Instructor extends Person {
     constructor(Iattr){
         super(Iattr);
         this. specialty= Iattr.specialty;
         this.favLanguage = Iattr.favLanguage;
         this.catchPhrase = Iattr.catchPhrase;
     }
     demo(subject){
         console.log(`Today we are learning about ${subject}  `)
     }
     grade(student, subject){
         console.log(`${student.name} received a perfect score on ${subject}`)
     }
     gradeProject(student){
         let newGrade = student.grade +( Math.random()*10);
         console.log(`${Math.floor(newGrade)}`)
     }
    takeOffPoints(student){
        let newGrade = student.grade -( Math.random()*10);
        console.log(`${Math.floor(newGrade)}`)
    }
    graduate(student){
        if(student.grade>= 70){
           console.log(`${student.name} graduated!`)
        }else {
            console.log(`${student.name} has failed`)
    }
}
 }

 const Jack = new Instructor ({
     name:"Jack",
     location: "London",
     age: 32,
     favLanguage: "Python",
     catchPhrase: "Well, Blokes were done for the day and Bob's your uncle",


 })

 const Kevin = new Student ({
     name:"Kevin",
     location:"Philadelphia",
     age:22,
     grade:80
     
 })

 const Chad = new Student({
     name:"Chad",
     location:"Wyoming",
     grade:60
 })



  

 class PM extends Instructor {
     constructor(pattr){
         super(pattr);
         this.gradClassName = pattr.gradClassName;
         this.favInstuctor = pattr.favInstuctor;

     }
    standUp(channel){
        console.log(`${this.name} announces to ${channel} @ channel study times!`)
G
    }
    debugsCode(student, subject){
        console.log(`${this.name} is debugging ${student} 's work on ${subject}`)

    }
 }
 
 const Gupta = new PM( {
     name: "Gupta",
     gradClassName:"University of Mumbai",
     location: "Mumbai",
     favInstuctor: "George McPollack",

 })
Gupta.takeOffPoints(Kevin)
Gupta.takeOffPoints(Chad)
Jack.gradeProject(Chad)
//  Gupta.debugsCode("Frank", 'CSS')
//  Gupta.standUp(9)
Jack.demo('python')
 console.log(Jack.catchPhrase)
 Jack.grade(Kevin, 'Javascript')
 Kevin.PRAassignmet("Java")
 Kevin.sprintChallenge('Python')
 Jack.gradeProject(Kevin)
 Jack.graduate(Kevin)
 Jack.graduate(Chad)
 Gupta.graduate(Kevin)
 Gupta.graduate(Chad)
 console.log(Gupta.location)
 Gupta.demo("python")
 