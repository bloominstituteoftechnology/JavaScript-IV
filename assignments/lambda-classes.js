


class Person {
    constructor(baseclass) {
        this.age = baseclass.age;
        this.name = baseclass.name;
        this.location = baseclass.location;
        this.gender = baseclass.gender;
    }
    speak(){
        return `Hello my name is Fred, I am from Bedrock`
    }
}
    
class Instructor extends Person {
    constructor(Aclass) {
        super(Aclass);
        this.speciality = Aclass.speciality;
        this.favLanguage = Aclass.favLanguage;
        this.catchPhrase = Aclass.catchPhrase;
    }
    demo(){
        return `Today we are learning about ${this.subject}`
    }
    grade (){
        return `${this.name} receives a perfect score on ${this.variables}`
    }

}

class Student extends Person {
    constructor(students){
    super(students);
    this.previousBackground = students.previousBackground;
    this.ClassName = students.ClassName;
    this.favSubjects = students.FavSubjects;
        this.grade = students.grade; 
    }

    graduate() {
        if (`${ this.grade } > 70`) return `${this.name} Graduated!!`
    };

    listsSubjects (){
        return `${this.favSubjects[0]},${this.favSubjects[1]},${this.favSubjects[2]}`
    };
    PRAssignment (){
        `${this.name} has submitted a PR for ${subject}`
    };
    sprintchallenge (){
        `${this.name} has begun spring challenge on ${subject}`}
};



class ProjectManager extends Instructor {
    constructor(PM) {
        super(PM);
        this.gradclassname = PM.gradclassname
        this.favIntructor = PM.favIntructor
    }
    standup() {
        return `${this.name} announces to ${this.channel}`
    }
    debugscode() {
        return `${this.name} debugs ${this.name} code on ${this.subject}`
    }
}

const Molly = new Student({    //Student
    previousBackground: 'Janitor',
    className: 'CS10',
    favSubjects: ['Javascript', 'CSS', 'GoLang'],
    grade: '90',
    name: 'Molly',
    location: 'bedrock',
});
const Sandy = new Student({    //Student
    previousBackground: 'Marketer',
    className: 'CS8',
    favSubjects: ['Javascript', 'python', 'C++'],
    grade: '80',
    name: 'Sandy',
    location: 'bedrock',
});
const Billy = new Student({    //Student
    previousBackground: 'Janitor',
    className: 'CS10',
    favSubjects: ['C++', 'Ruby', 'Pearl'],
    grade: '71',
    name: 'Billy',
    location: 'bedrock',
});


const Mojojojo = new Instructor ({
    speciality: 'JavaScript',
    favLanguage: 'German',
    catchPhrase: 'Moooooooo JOJOJO',
})
const Goku = new Instructor({
    speciality: 'Python',
    favLanguage: 'German',
    catchPhrase: 'KameameHA',
})
const Joey = new Instructor({
    speciality: 'CSS',
    favLanguage: 'German',
    catchPhrase: 'How you Doing?',
})

const BigMoe = new ProjectManager({
    gradclassname: 'CS1',
    favIntructor: 'Janny',
})    
const Susan = new ProjectManager({
    gradclassname: 'CS2',
    favIntructor: 'Randy',
})   
const Jacob= new ProjectManager({
    gradclassname: 'CS3',
    favIntructor: 'Sandy',
})   


// const archer = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 4
//   },
//   hp: 10,
//   name: 'Lilith',
//   faction: 'Forest Kingdom',
//   weapons: ['Bow', 'Dagger'],
//   language: 'Elvish'
// });



