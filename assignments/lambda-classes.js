class Person{
    constructor(baseStats){
        this.name = baseStats.name;
        this.age = baseStats.age;
        this.location = baseStats.location;
        this.gender = baseStats.gender;
    }

        speak(){
            return `Hello myname is ${this.name}, I am from ${this.location}!`
        }

}

class Instructor extends Person{
    constructor (insStats){
        super(insStats)
        this.specialty = insStats.specialty;
        this.favLanguage = insStats.favLanguage;
        this.catchPhrase = insStats.catchPhrase;
    }
        demo(subject){
            return `Today we are learning about ${subject}`;
        }
        grade(student, subject){
            return`${student.name} receives a perfect score on ${subject}`;
        }
        gradePapers(student){
            let gradeTo = 1
            if(Math.random = .51){
                gradeTo = -1
            }
                let adjusted = math.ceil(math.random()*15){
                student.grade += adjusted * gradeTo;
                }
        }
}

class Student extends Person{
    constructor (stuStats){
        super(stuStats)
        this.perviousBackground = stuStats.perviousBackground;
        this.className = stuStats.className;
        this.favSubjects = stuStats.favSubjects;
        this.grade = stuStats.grade;
    }

    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallange(subject){
       return `${this.name} has begun a Sprint Challenge on ${subject}.`
    }
    graduate(grader){
        for(let i = 1; i >= 0; i++){
            if(this.grade > 70){
                return `${this.name} is ready to graduate from Lambda!`
        }else if (this.grade > 20){
            return `${this.name} should maybe drop back a cohort.`
        }else (instructor)
                
        }
    
    }
}

class ProjectManagers extends Instructor{
    constructor(pmStats){
        super(pmStats)
        this.gradClass = pmStats.gradClass;
        this.favInstructor = pmStats.favInstructor;
    }

    standUp(cahnnel){
       return `${this.name} announces to ${channel}, @channel Stand-Up Times! `
    }
    debugsCode( student ,subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`
    }
}

const chris = new Student({
    name: 'Chris',
    age: 31,
    location: 'Plano, Tx',
    gender: 'M',
    perviousBackground: 'Executive Chef',
    favLanguage: 'JavaScript',
    catchPhrase: 'Don\'t talk about it, be about it',
    className: 'CSPT2',
    favSubjects: 'Object-Constructors',
    grade: 60;
})

const clara = new ProjectManagers({
    name: 'Clara',
    age: 'Young Enough',
    location: 'Detroit?',
    gender: 'F',
    gradClass: 'CS#',
    favInstructor: 'hasn\'t come up'
})
console.log(clara.debugsCode('chris', "JS-III"));
