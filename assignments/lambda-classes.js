// CODE here for your Lambda Classes
class person {
    contructor(prop) {
        this.name = prop.name;
        this.age = prop.age;
        this.location = prop.location;
    }
    phrase() {
        console.log(`Hello, my ${this.name} I am from ${this.location}`); 
    }
}

class student extends person {
    contructor(prop){
        super(prop);
        this.previousBackground = prop.previousBackground;
        this.className = prop.className;
       this.favoriteSubjects = prop.favoriteSubject;
    }
    listSubject(){
        this.favoriteSubjects.foreach(element => console.log(element));
    }
    PRAssigment(subject){
        console.log(`${this.name} has submited a pr for ${subject}`);
    }
   sprintChallenge(subject){
       console.log ( `${this.name} has begun sprint challenge on ${subject}`)
   }
}
class instructor extends person{
    constructor(prop){
        super(prop);
       this. specialty = prop.specialty;
       this. favLanguage = prop.favLanguage;
       this.catchPhrase = prop.catchPhrase;

    }

    demo(subject){
        console.log(`today we are learning about ${subject}`)
    }
    grade(student,subject){
       console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}
class ProjectManger extends instructor {
    contructor(prop){
        super(prop);
        this.gradeClassName = prop.gradeClassName;
        this.favoriteinstructor = prop.favoriteinstructor;
    }

    standUp(slack){
        console.log(`${this.name} annouces to ${student.name}'s code on ${subject}`)
    }
}

