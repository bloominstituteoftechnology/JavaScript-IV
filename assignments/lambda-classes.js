// CODE here for your Lambda Classes


class Person{
 constructor(data){
     this.name = data.name
     this.age = data.age
     this.location = data.location
     this.gender = data.gender
 }
 speak(){
     return ` Hello my name is, ${this.name}, I am from ${this.location}.` 
 }
}

class Instructor extends Person{
 constructor(data){
     super(data)
     this.specialty = data.specialty
     this.favLanguage = data.favLanguage
     this.catchPhrase = data.catchPhrase
     
 }
 demo(subject){
     return `Today we are learning about ${subject}.`
     
 }
 grade(student, subject){
     return`${student} receives a perfect score on ${subject}!`
 }

 graded(student){
     return student.grade = student.grade + Math.ceil(Math.random()* 100)
 }

       
      
    
 }


class Student extends Person{
    constructor(data){
        super(data)
        this.previousBackground = data.previousBackground
        this.className = data.className
        this.favSubjects = data.favSubjects
        this.grade = data.grade

} 
listSubjects(){
    let favlist = []
    favlist = this.favSubjects.map( list => list)
    return favlist
    
}
PAAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`
}

sprintchallenge(student,subject){
    return `${student} has begun sprint challenge ${subject}`
}
graduate(){
   
    if( `${this.grade}` > 70){
        return "Congrats Grad!"
    }else{
        return "Let's Regrade that Assignment."
    }

    
    
}
}
 class ProjectManager extends Instructor{
     constructor(data){
         super(data)
         this.gradClassName = data.gradClassName
         this.favInstructor = data.favInstructor

     }
     standup(name , channel){
         return `${name} announces ${channel} @channel standy times.`
     }
    //  debugscode(student,subject){
    //      return `${this.name} debugs ${student} code on ${subject}.`
    //  };
    debugsCode(student,subject){
        return  `${this.name} debugs ${student} code on ${subject}`
      }
  
    }




const Hank = new Instructor({
        name: 'Hank',
        location: 'South Carolina',
        age: 37,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
      });


      
const Red = new Instructor({
    name: 'Red',
    location: 'Georgia',
    age: 31,
    gender: 'male',
    favLanguage: 'python',
    specialty: 'back-end',
    catchPhrase: `if you can't beat em join em`
  });
 
     

      

const Bob = new ProjectManager({
    name: 'Bob',
    location: 'South Carolina',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });



const Junior = new Student({
    name: "Junior",
    location: 'California',
    age: 25,
    gender: 'male',
    previousBackground: 'Uber Driver',
    className:'web 18',
    favSubjects: ['Html', 'CSS', 'Javascript', "React"],
    grade: 0


    
})




const Carolina = new Student({
    name: "Junior",
    location: 'Texas',
    age: 30,
    gender: 'female',
    previousBackground: 'Truck Driver',
    className:'web 18',
    favSubjects: ['Html', 'CSS', 'Javascript'],


    
})
    console.log(Junior.listSubjects()) ;
    console.log(Hank.demo('The Dom'))
    console.log(Junior.speak())
    console.log(Junior.PAAssignment('clean'));
    console.log(Bob.debugsCode(Junior.name,"JavaScript"));
    console.log(Bob.standup( 'Carl', 'Web18'));
    console.log(Hank.grade('Carl', 'css'));
    console.log(Hank.graded(Junior))
    console.log(Junior.graduate())
    console.log(Junior.grade)