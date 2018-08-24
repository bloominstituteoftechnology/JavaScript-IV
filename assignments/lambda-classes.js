// CODE here for your Lambda Classes

class Person{
    constructor(personObj){
        this.name = personObj.name,
        this.location = personObj.location,
        this.age = personObj.age,
        this.gender = personObj.gender
};

speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
}
}

class Instructors extends Person{
    constructor(instructorObj){
        super(instructorObj),
        this.favLanguage = instructorObj.favLanguage,
        this.specialty = instructorObj.specialty,
        this.catchPhrase = instructorObj.catchPhrase
    }

    demo(subject){
    return `Today we are learning about ${subject}`;
}

grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}.`;
}
}

class Students extends Person{
    constructor(studentObj){
        super(studentObj),
        this.previousBackground = studentObj.previousBackground,
        this.className = studentObj.className,
        this.favSubjects = studentObj.favSubjects
    }

    listSubjects(){
        return `${this.name}'s Favorite subjects are ${this.favSubjects.join(' & ')}`;
    }
    
    PRAssignemnt(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun a sprint challenge on ${subject}.`;
    }
}

class ProjectManagers extends Person {
    constructor(pmObj){
        super(pmObj),
        this.gradClassName = pmObj.gradClassName,
        this.favInstructor = pmObj.favInstructor
    }

standUp(channel){
    return `${this.name} announces to ${Students.name}, @channel Standup Time!.`;
}

debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
}
}


const Steve = new Instructors({name: 'Steve', location: 'Los Angeles', age: 32, gender: 'M', favLanguage: 'JavaScript', specialty: 'ReactJS', catchPhrase: 'I love JS'})
const Jesse = new Students({name: 'Jesse', location: 'Apple Valley', age: 34, gender: 'M', previousBackground: 'Hardware', className: 'CSPT2', favSubjects: ['CSS', 'HTML']})
const Jen = new ProjectManagers({name: 'Jen', location: 'St. Paul', age: '30', gender: 'F', gradClassName: 'CS6', favInstructor: 'Steve'})

console.log(Steve.speak());
console.log(Steve.demo(`React`));
console.log(Steve.grade(Jesse, 'JSIV'));
console.log(Jesse.listSubjects());
console.log(Jen.standUp('cspt2_Jen'));
console.log(Jen.debugsCode(Jesse, `JavaScript`));
