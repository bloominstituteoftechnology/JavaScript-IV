// CODE here for your Lambda Classes
class person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.gender = attributes.gender;
        this.location = attributes.location;
    }
    speak() {
        return 'Hello my name is ${this.name}, I am from ${this.location}';
    }
}

class instructor extends person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return 'Today we are learning about ${subject}';
    }
    grade(student, subject){
        return '${student.name} receives a perfect score on ${subject}'
    }
}
const Danny = new instructor ({
    name: "Danny",
    age: 34,
    gender:'Male',
    location: 'Chicago',
    favLanguage: "Python",
    specialty: "Back-end",
    catchPhrase: "Everybody wants to rule the world."
})

const Carol = new instructor ({
    name: "Carol",
    age: 27,
    gender:'Female',
    location: 'San Diego',
    favLanguage: "ruby",
    specialty: "Back-end",
    catchPhrase: "Dang it Karen not again."
})


class Student extends person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
       let logSubjects =this.favSubjects.forEach(element => console.log((element)));
       return logSubjects;
        }

     PRAssignment(subject){
        if (this.favSubjects.includes(subject)){
            console.log(`${this.name} has submitted a PR for ${subject}`);
        }
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

 }

 const Jarvise = new Student ({
  name: 'Jarvise',
  age: 22,
  gender: 'Male',
  location: 'Aliceville',
  previousBackground: 'Worked at walmart.',
  className: "Web21",
  favSubjects: ['JavaScript']
});


class ProjectManagers extends instructor{
    constructor(projectManagersAttributes){
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standup(slack){
        return `${this.name} announces to ${slack}, @channel standy times!`
    }
    debugsCode(obj, subject){
        return `${this.name} debugs ${obj.name}\'s code on ${subject}`
    }
}

const Petro = new ProjectManagers({
    name: 'Petro',
    age: 37,
    gender: 'male',
    location: 'Minneapolis',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: 'It has begun',
    gradClassName: 'web6',
    favInstructor: 'Danny' 
});
console.log(Danny);
console.log(Carol);
console.log(Jarvise);
console.log(Petro);
console.log(Danny.speak())